-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 10.0.0.96
-- Время создания: Ноя 24 2023 г., 16:32
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
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `authors`
--

INSERT INTO `authors` (`id`, `first_name`, `last_name`) VALUES
(1, 'Иван', 'Бунин'),
(2, 'Лев', 'Толстой'),
(3, 'Александр', 'Пушкин'),
(4, 'Федор', 'Достоевский'),
(5, 'Максим', 'Горькой'),
(6, 'Александр', 'Грибоедов'),
(7, 'Александр', 'Блок'),
(8, 'Петр', 'Чайковский');

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `author_id`) VALUES
(2, 'Господин из Сан-Франциско', 'Рассказ Ивана Алексеевича Бунина. Представляет собой притчу, повествующую о ничтожности богатства и власти перед лицом смерти.', 1),
(3, 'Война и мир', 'Роман-эпопея Льва Николаевича Толстого, описывающий русское общество в эпоху войн против Наполеона в 1805 — 1812 годах.', 2),
(4, 'Анна Каренина', 'Роман Льва Толстого о трагической любви замужней дамы Анны Карениной и блестящего офицера Вронского на фоне счастливой семейной жизни дворян Константина Лёвина и Кити Щербацкой.', 2),
(5, 'Капитанская дочка', 'Исторический роман Александра Пушкина, действие которого происходит во время восстания Емельяна Пугачёва. Впервые опубликован без указания имени автора в 4-й книжке журнала «Современник», поступившей в продажу в последней декаде 1836 года.', 3),
(6, 'Руслан и Людмила', 'Первая законченная поэма Александра Сергеевича Пушкина; волшебная сказка, вдохновлённая древнерусскими былинами.', 3),
(7, 'Идиот', 'Роман Фёдора Михайловича Достоевского, впервые опубликованный в номерах журнала «Русский вестник» за 1868 год. Являлся одним из самых любимых произведений писателя, наиболее полно выразившим и нравственно-философскую позицию Достоевского, и его художественные принципы в 1860-х годах.', 4),
(8, 'Старуха Изергиль', 'Рассказ Максима Горького, написанный в 1894 году, состоящий из трёх частей. В рассказ вошли две «легенды»: легенда о Ларре и легенда о Данко, а также рассказ старухи о мужчинах, которых она любила на протяжении жизни.', 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
