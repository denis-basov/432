-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 23 2023 г., 14:41
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `301_mini-blog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `favourite` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`favourite`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `first_name`, `last_name`, `email`, `password`, `image`, `add_date`, `update_date`, `favourite`) VALUES
(1, 'Ivan', 'Иван', 'Иванов', 'Ivan@test.ru', '$2y$10$We2kU6ETemFutmLYdqZKiuDx2sj5rYf4H3hhBRCi.RtfkbJQSh4ti', '/template/images/users/user-2.jpg', '2022-11-30 10:35:23', '2023-09-12 10:17:47', NULL),
(2, 'irina', 'Ирина', 'Иванова', 'irina@test.ru', '$2y$10$wJusKRWF7yCWzM3BSB2U5uxNx1T4xLIrdTT82Uqd41OA8rEI4030y', '/template/images/users/user-1.jpg', '2022-12-01 09:39:48', '2023-09-12 10:17:47', NULL),
(4, 'dergeu111', 'Сергей', 'Сидоров', 'dergeu111@test.tt', '$2y$10$4rX/6LmuzJr5s/paeV6TI.Uv7sAXCkYw07vItzjxh8Ov6fqryoY9a', 'template/images/users/1695364051_ethan-hoover-0YHIlxeCuhg-unsplash (1).jpg', '2023-09-22 06:27:31', '2023-09-22 06:27:31', NULL),
(5, 'sergeevPavel555', 'Павел', 'Сергеев', 'sergeevPavel@test.rr', '$2y$10$fXYWzuX.yB8HnMes2db4kueM1b/EQo5kxIKAQZdmaRVGt9WHh4oyO', 'template/images/users/1695375111_cam-adams-imBSxksI7DA-unsplash (1).jpg', '2023-09-22 09:31:51', '2023-09-22 09:31:51', NULL),
(6, 'aleksPetrov', 'Алексей', 'Петров', 'aleksPetrov@test.ru', '$2y$10$U2m5tVnlJyOgTqaKxzeE7esgnSPippqj1pzO4tJxGotJVSLLS1LJS', 'template/images/users/1695706997_albert-dera-ILip77SbmOE-unsplash.jpg', '2023-09-26 05:43:17', '2023-09-26 05:43:17', NULL),
(7, 'tatyanaIvanova', 'Иван', 'Петров', 'IvanPetrov@test.rt', '$2y$10$eXVNuH7Q47ChMV0SkMfb5em5NUOWVXHzB6wzXJPaptS3Y5zVYsixe', 'template/images/users/1695793956_christopher-campbell-rDEOVtE7vOs-unsplash (2).jpg', '2023-09-27 05:52:36', '2023-09-27 05:52:36', '[3,6,16,24,12,56]');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
