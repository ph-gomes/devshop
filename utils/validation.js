const extractErrors = error => {
  const erros = error.details.reduce((prev, curr) => {
    if (prev[curr.path[0]]) {
      prev[curr.path[0]].push(curr.type);
    } else {
      prev[curr.path[0]] = [curr.type];
    }
    return prev;
  }, {});

  return {
    erros,
    fields: Object.keys(erros)
  };
};

const ValidationError = (message, erros) => ({
  message,
  erros
});

const validate = (obj, Schema) => {
  const { error, value } = Schema.validate(obj, {
    abortEarly: false,
    stripUnknown: true
  });
  if (error) {
    throw ValidationError("validation", extractErrors(error));
  } else {
    return value;
  }
};

module.exports = {
  validate
};
