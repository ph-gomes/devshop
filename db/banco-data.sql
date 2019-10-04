-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.6-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando dados para a tabela devshop.banners: ~0 rows (aproximadamente)
DELETE FROM `banners`;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.banner_types: ~0 rows (aproximadamente)
DELETE FROM `banner_types`;
/*!40000 ALTER TABLE `banner_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `banner_types` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.categories: ~12 rows (aproximadamente)
DELETE FROM `categories`;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `category`, `description`) VALUES
	(1, 'Eletrônicos', 'Eletrônicos'),
	(2, 'Eletrodomésticos', NULL),
	(3, 'Celulares e Smarthphones', NULL),
	(4, 'Casa e Construção', NULL),
	(5, 'Informática', NULL),
	(6, 'Papelaria', NULL),
	(7, 'Livros', NULL),
	(8, 'Automotivo', NULL),
	(9, 'Eletroportáteis', NULL),
	(10, 'Esporte e Lazer', NULL),
	(11, 'Games', NULL),
	(12, 'Outros', 'Outras categorias');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.categories_products: ~3 rows (aproximadamente)
DELETE FROM `categories_products`;
/*!40000 ALTER TABLE `categories_products` DISABLE KEYS */;
INSERT INTO `categories_products` (`product_id`, `category_id`) VALUES
	(3, 2),
	(1, 3),
	(2, 3);
/*!40000 ALTER TABLE `categories_products` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.email_token: ~0 rows (aproximadamente)
DELETE FROM `email_token`;
/*!40000 ALTER TABLE `email_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_token` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.products: ~2 rows (aproximadamente)
DELETE FROM `products`;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`) VALUES
	(1, 'IPhone X', NULL),
	(2, 'Samsung Glaxy Note 10', NULL),
	(3, 'Geladeira', NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.product_images: ~0 rows (aproximadamente)
DELETE FROM `product_images`;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.product_variations: ~0 rows (aproximadamente)
DELETE FROM `product_variations`;
/*!40000 ALTER TABLE `product_variations` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_variations` ENABLE KEYS */;

-- Copiando dados para a tabela devshop.users: ~0 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `email_checked`, `created`, `updated`, `roles`) VALUES
	(3, 'Admin', 'admin@admin.com.br', '$2a$10$b4/0a7ycus3OB6LbjIISAO7FedBKWoSN10YEQ6bLZzoL1jytzWkc2', 1, '2019-10-04 17:36:20', '2019-10-04 17:36:20', 'admin,financial,customer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
