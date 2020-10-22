-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2020 at 05:25 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `balance`
--

CREATE TABLE `balance` (
  `id_user` int(11) NOT NULL,
  `balance` int(100) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `balance`
--

INSERT INTO `balance` (`id_user`, `balance`, `phone`) VALUES
(102, 200000, ''),
(109, 120000, '');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `phone`, `picture`) VALUES
(1, 'Kurzawa', '+62 829 8475 9343', 'https://randomuser.me/api/portraits/men/18.jpg'),
(2, 'Minato', '+62 829 8475 2345', 'https://randomuser.me/api/portraits/men/83.jpg'),
(3, 'Kisisaki', '+62 829 8435 2345', 'https://randomuser.me/api/portraits/men/77.jpg'),
(4, 'Abraham Lincon', '+62 823 8455 9343', 'https://randomuser.me/api/portraits/men/44.jpg'),
(5, 'Supardi ', '+62-822-8432-9343', 'https://randomuser.me/api/portraits/women/26.jpg'),
(6, 'Tatang', '+62-829-8475-9334', 'https://randomuser.me/api/portraits/women/10.jpg'),
(7, 'Riyan', '+62-829-6475-9343', 'https://randomuser.me/api/portraits/women/50.jpg'),
(8, 'Hinata', '+62-829-3275-9343', 'https://randomuser.me/api/portraits/women/60.jpg'),
(9, 'Kaguya', '+62-829-8475-233', 'https://randomuser.me/api/portraits/women/6.jpg'),
(10, 'Darso', '+62 829 0475 2305', 'https://randomuser.me/api/portraits/men/81.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `level` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `level`) VALUES
(1, 'Admin'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `transaction_type` varchar(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `sender_id`, `receiver_id`, `amount`, `transaction_type`, `date`) VALUES
(2, 123, 126, 12000, 'out', '2020-10-06 01:55:47'),
(3, 123, 132, 5555, 'out', '2020-10-06 02:19:35'),
(4, 123, 126, 222, 'out', '2020-10-06 02:23:18'),
(5, 123, 126, 12000, 'out', '2020-10-06 02:54:17'),
(6, 123, 130, 12300, 'out', '2020-10-06 03:34:17'),
(7, 123, 126, 485, 'out', '2020-10-06 05:13:17'),
(8, 123, 126, 755, 'out', '2020-10-06 05:15:03'),
(9, 123, 128, 485, 'out', '2020-10-06 05:15:44'),
(10, 123, 127, 12000, 'out', '2020-10-06 05:16:45'),
(11, 123, 131, 2222, 'out', '2020-10-06 05:18:32'),
(12, 123, 128, 12500, 'out', '2020-10-06 05:24:56'),
(13, 123, 127, 2000, 'out', '2020-10-06 05:28:50'),
(14, 126, 123, 12000, 'out', '2020-10-06 12:38:26'),
(15, 123, 126, 5800, 'out', '2020-10-06 17:27:45'),
(16, 123, 131, 4500, 'out', '2020-10-06 17:45:35'),
(17, 123, 132, 10500, 'out', '2020-10-06 17:47:49'),
(18, 123, 128, 88000, 'out', '2020-10-06 17:49:44'),
(19, 126, 128, 2000, 'out', '2020-10-06 17:58:47'),
(20, 126, 130, 2500, 'out', '2020-10-06 18:00:16'),
(21, 126, 132, 25000, 'out', '2020-10-07 16:52:03'),
(22, 126, 132, 20000, 'out', '2020-10-08 06:51:37'),
(23, 126, 130, 20000, 'out', '2020-10-08 07:08:32'),
(24, 133, 130, 150000, 'out', '2020-10-22 02:10:28'),
(25, 133, 123, 2000, 'out', '2020-10-22 03:25:22');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `trans_name` varchar(100) NOT NULL,
  `trans_type` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL,
  `notes` varchar(250) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `sender_id`, `receiver_id`, `trans_name`, `trans_type`, `amount`, `notes`, `date`) VALUES
(51, 126, 123, 'transfer', 'out', 2000, 'buat beli batagor', '2020-10-01 21:08:05'),
(52, 123, 126, 'transfer', 'out', 2500, 'buat bayar utang', '2020-10-01 21:09:05'),
(53, 128, 123, 'transfer', 'out', 12000, 'buat beli soto', '2020-10-01 21:20:24'),
(54, 128, 123, 'transfer', 'out', 5000, 'buat beli mi ayam', '2020-10-01 23:46:53'),
(55, 128, 127, 'transfer', 'out', 5000, 'beli sepatu', '2020-10-01 23:47:27'),
(56, 123, 127, 'transfer', 'out', 10700, 'yaaa apa yaa', '2020-10-02 00:00:51'),
(82, 123, 126, 'transfer', 'out', 5800, 'buat bikin meja', '2020-10-07 00:27:43'),
(83, 123, 131, 'transfer', 'out', 4500, 'beli seblak', '2020-10-07 00:45:33'),
(84, 123, 132, 'transfer', 'out', 10500, 'beli jasuke', '2020-10-07 00:47:47'),
(85, 123, 128, 'transfer', 'out', 88000, 'beli pasir', '2020-10-07 00:49:41'),
(89, 126, 132, 'transfer', 'out', 20000, 'bbbb', '2020-10-08 13:51:35'),
(90, 126, 130, 'transfer', 'out', 20000, 'coba doang', '2020-10-08 14:08:29'),
(91, 133, 130, 'transfer', 'out', 150000, 'buat beli odading', '2020-10-22 09:10:26'),
(92, 133, 123, 'transfer', 'out', 2000, 'buat makan', '2020-10-22 10:25:20');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(125) NOT NULL,
  `email` varchar(125) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `pin` int(6) DEFAULT NULL,
  `id_level` int(11) NOT NULL,
  `picture` varchar(125) DEFAULT NULL,
  `balance` int(250) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `pin`, `id_level`, `picture`, `balance`, `phone`) VALUES
(123, 'jono', 'jono@mail.com', '$2b$10$w5NjbVVvH8ns56gwrF3usO6eIMfqXZGn/3MIcbivPYvBeRpdbkwI2', 123456, 2, 'http://192.168.43.52:2000/images/image-1601887441317.jpeg', 65036, '0821224584'),
(126, 'nawi', 'rudinnawi@gmail.com', '$2b$10$zFQ37DrGaa28ZJLmJJBPju73cKXDW6r5F2ncxc4oEeGBoaxwIJpZW', 123456, 2, 'http://192.168.43.52:2000/images/image-1601562350903.jpg', 173262, '082324050691'),
(127, 'david', 'david@mail.com', '$2b$10$X7NNvw0V4M6xaJ18bxo.d.n0qBhU5KCJfqMko7.qTzN7e17GG/x9q', 123456, 2, 'http://192.168.43.52:2000/images/image-1601562236631.jpg', 245182, '+62-822-8432-9343'),
(128, 'markus', 'markus@mail.com', '$2b$10$lF7A36oORELEz85jjQWPAuT6pW4Bn5jJRoRHAgw4.KyvR8p2ozo2q', 123456, 2, 'http://192.168.43.52:2000/images/image-1601562282933.jpg', 262985, '+62-822-8432-9343'),
(129, 'somad', 'somad@mail.com', '$2b$10$93y4spru0mqukiFTct.uqOcq71nHaA64T4Z62Dx9ZMkleThZ07wA.', 123456, 2, 'http://192.168.43.52:2000/images/image-1601571153935.jpeg', 200000, '+62-829-8475-9343'),
(130, 'santi', 'sant@mail.com', '$2b$10$Rssxiv73RLfyUaoqGflWvOf6jSHb78/HxuyqVFQh5TZOuYx/brDHq', 123456, 2, 'http://192.168.43.52:2000/images/image-1602007356782.png', 412658, '082325689852'),
(131, 'danang', 'danang@mail.com', '$2b$10$T84vkfW.uRE1YaU7c27Tq.m6RTiTsgCuB3WtlP/49LGM4fsazrw86', 123456, 2, 'http://192.168.43.52:2000/images/image-1601714236632.jpg', 206722, NULL),
(132, 'nawi rudin', 'nawirudin@mail.com', '$2b$10$TODK.6105Mt1eDqb.1BPtedj.fYeyZXmyS32mHpMJgxanh0LEwR52', 123456, 2, 'http://192.168.43.52:2000/images/image-1601861225281.jpg', 180355, '08232639548'),
(133, 'nawi', 'nhawirudin@gmail.com', '$2b$10$laSpRqutYyHsjhWowmZIWOOP2MmlKuZ9nIOsWRcSxYw1OSXS0hUBm', 123456, 2, 'http://192.168.43.52:2000/images/image-1603332570989.jpg', 48000, '082324560854');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balance`
--
ALTER TABLE `balance`
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
