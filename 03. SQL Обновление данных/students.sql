-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 10.0.0.96
-- Время создания: Ноя 23 2023 г., 14:50
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
(6, 'Иван', 'Иванов', 456, 1, 15, 0, 'Экономический', '2023-11-23 11:49:43'),
(7, 'Сергей', 'Петров', 324, 3, 21, 4521.45, 'Машиностроение', '2023-11-21 07:00:00'),
(8, 'Анна', 'Иванова', 456, 1, 16, 0, 'Экономический', '2023-11-23 11:49:43'),
(9, 'Светлана', 'Петрова', 126, 1, 18, 0, 'Социология', '2023-11-23 11:49:43'),
(10, 'Василий', 'Сидоров', 126, 1, 19, 0, 'Психология', '2023-11-23 11:49:43');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
