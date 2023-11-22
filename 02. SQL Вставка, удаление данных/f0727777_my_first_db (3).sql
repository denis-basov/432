-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 10.0.0.96
-- Время создания: Ноя 22 2023 г., 16:46
-- Версия сервера: 5.7.37-40
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `f0727777_my_first_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `authors`
--

INSERT INTO `authors` (`id`, `first_name`, `last_name`, `age`) VALUES
(1, 'Иван', 'Бунин', 22),
(2, 'Александр', 'Пушкин', 33),
(3, 'Лев', 'Толстой', 44),
(4, 'Сергей', 'Есенин', 26),
(5, 'Анна', 'Ахматова', 18),
(6, 'Александр', 'Грибоедов', 22);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `maker` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `weight` float DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `arriv_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `group_number` int(11) NOT NULL,
  `course` int(11) DEFAULT '1',
  `age` int(11) NOT NULL,
  `scholarship_amount` double DEFAULT '0',
  `faculty` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `group_number`, `course`, `age`, `scholarship_amount`, `faculty`, `add_date`) VALUES
(1, 'Иван', 'Иванов', 456, 1, 15, 0, 'Экономический', '2023-11-22 13:22:28'),
(2, 'Сергей', 'Петров', 324, 3, 21, 4521.45, 'Машиностроение', '2023-11-21 07:00:00'),
(3, 'Анна', 'Иванова', 456, 1, 16, 0, 'Экономический', '2023-11-22 13:36:34'),
(4, 'Светлана', 'Петрова', 126, 1, 18, 0, 'Социология', '2023-11-22 13:36:34'),
(5, 'Василий', 'Сидоров', 126, 1, 19, 0, 'Психология', '2023-11-22 13:36:34');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
