-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2025 at 02:39 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipebook-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `instructions` text DEFAULT NULL,
  `prep_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `instructions`, `prep_time`) VALUES
(1, 'Spaghetti Bolognese', 'Classic Italian pasta dish.', '1. Boil pasta\n2. Cook meat\n3. Add sauce\n4. Combine and serve.', 30),
(2, 'Pancakes', 'Fluffy breakfast pancakes.', '1. Mix ingredients\n2. Heat skillet\n3. Pour batter\n4. Flip and serve.', 15),
(3, 'Chicken Stir Fry', 'Quick Asian stir fry with veggies.', '1. Slice chicken\n2. Stir fry in pan\n3. Add veggies and sauce\n4. Cook until done.', 20),
(4, 'Grilled Cheese Sandwich', 'Simple and tasty sandwich.', '1. Butter bread\n2. Add cheese\n3. Grill until golden brown.', 10),
(5, 'Caesar Salad', 'Crisp romaine with Caesar dressing.', '1. Chop lettuce\n2. Add croutons and cheese\n3. Toss with dressing.', 10),
(6, 'Omelette', 'Classic egg dish.', '1. Whisk eggs\n2. Pour into pan\n3. Add fillings\n4. Fold and cook.', 8),
(7, 'Tomato Soup', 'Warm and hearty.', '1. Saute onions\n2. Add tomatoes and broth\n3. Blend and simmer.', 30),
(8, 'Guacamole', 'Fresh avocado dip.', '1. Mash avocados\n2. Add lime, onion, tomato\n3. Mix and serve.', 5),
(9, 'Tacos', 'Beef or chicken tacos with toppings.', '1. Cook meat\n2. Fill shells\n3. Add toppings.', 20),
(10, 'Chocolate Mug Cake', 'Quick microwave dessert.', '1. Mix ingredients in mug\n2. Microwave for 90 seconds\n3. Let cool and enjoy.', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
