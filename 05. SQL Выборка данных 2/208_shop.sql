-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 23 2023 г., 14:56
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
-- База данных: `208_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `customers`
--

CREATE TABLE `customers` (
  `CUST_NUM` int(11) NOT NULL,
  `COMPANY` varchar(20) NOT NULL,
  `CUST_REP` int(11) DEFAULT NULL,
  `CREDIT_LIMIT` decimal(9,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `customers`
--

INSERT INTO `customers` (`CUST_NUM`, `COMPANY`, `CUST_REP`, `CREDIT_LIMIT`) VALUES
(2101, 'Jones Mfg.', 106, 65000.00),
(2102, 'First Corp.', 101, 65000.00),
(2103, 'Acme Mfg.', 105, 50000.00),
(2105, 'AAA Investments', 101, 45000.00),
(2106, 'Fred Lewis Corp.', 102, 65000.00),
(2107, 'Ace International', 110, 35000.00),
(2108, 'Holm & Landis', 109, 55000.00),
(2109, 'Chen Associates', 103, 25000.00),
(2111, 'JCP Inc.', 103, 50000.00),
(2112, 'Zetacorp', 108, 50000.00),
(2113, 'Ian & Schmidt', 104, 20000.00),
(2114, 'Orion Corp.', 102, 20000.00),
(2115, 'Smithson Corp.', 101, 20000.00),
(2117, 'J.P. Sinclair', 106, 35000.00),
(2118, 'Midwest Systems', 108, 60000.00),
(2119, 'Solomon Inc.', 109, 25000.00),
(2120, 'Rico Enterprises', 102, 50000.00),
(2121, 'QMA Assoc.', 103, 45000.00),
(2122, 'Three Way Lines', 105, 30000.00),
(2123, 'Carter & Sons', 102, 40000.00),
(2124, 'Peter Brothers', 107, 40000.00);

-- --------------------------------------------------------

--
-- Структура таблицы `offices`
--

CREATE TABLE `offices` (
  `OFFICE` int(11) NOT NULL,
  `CITY` varchar(15) NOT NULL,
  `REGION` varchar(10) NOT NULL,
  `MGR` int(11) DEFAULT NULL,
  `TARGET` decimal(9,2) DEFAULT NULL,
  `SALES` decimal(9,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `offices`
--

INSERT INTO `offices` (`OFFICE`, `CITY`, `REGION`, `MGR`, `TARGET`, `SALES`) VALUES
(10, 'Moscow', 'Eastern', 105, 50000.00, 60000.00),
(11, 'New York', 'Eastern', 106, 575000.00, 692637.00),
(12, 'Chicago', 'Eastern', 104, 800000.00, 735042.00),
(13, 'Atlanta', 'Eastern', 105, 350000.00, 367911.00),
(21, 'Los Angeles', 'Western', 108, 725000.00, 835915.00),
(22, 'Denver', 'Western', 108, 300000.00, 186042.00);

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `ORDER_NUM` int(11) NOT NULL,
  `ORDER_DATE` date NOT NULL,
  `CUST` int(11) NOT NULL,
  `REP` int(11) DEFAULT NULL,
  `MFR` char(3) NOT NULL,
  `PRODUCT` char(5) NOT NULL,
  `QTY` int(11) NOT NULL,
  `AMOUNT` decimal(9,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`ORDER_NUM`, `ORDER_DATE`, `CUST`, `REP`, `MFR`, `PRODUCT`, `QTY`, `AMOUNT`) VALUES
(112961, '2007-12-17', 2117, 106, 'REI', '2A44L', 7, 31500.00),
(112963, '2007-12-17', 2103, 105, 'ACI', '41004', 28, 3276.00),
(112968, '2007-10-12', 2102, 101, 'ACI', '41004', 34, 3978.00),
(112975, '2007-10-12', 2111, 103, 'REI', '2A44G', 6, 2100.00),
(112979, '2007-10-12', 2114, 102, 'ACI', '4100Z', 6, 15000.00),
(112983, '2007-12-27', 2103, 105, 'ACI', '41004', 6, 702.00),
(112987, '2007-12-31', 2103, 105, 'ACI', '4100Y', 11, 27500.00),
(112989, '2008-01-03', 2101, 106, 'FEA', '114', 6, 1458.00),
(112992, '2007-11-04', 2118, 108, 'ACI', '41002', 10, 760.00),
(112993, '2007-01-04', 2106, 102, 'REI', '2A45C', 24, 1896.00),
(112997, '2008-01-08', 2124, 107, 'BIC', '41003', 1, 652.00),
(113003, '2008-01-25', 2108, 109, 'IMM', '779C', 3, 5625.00),
(113007, '2008-01-08', 2112, 108, 'IMM', '773C', 3, 2925.00),
(113012, '2008-01-11', 2111, 105, 'ACI', '41003', 35, 3745.00),
(113013, '2008-01-14', 2118, 108, 'BIC', '41003', 1, 652.00),
(113024, '2008-01-20', 2114, 108, 'QSA', 'XK47', 20, 7100.00),
(113027, '2008-01-22', 2103, 105, 'ACI', '41002', 54, 4104.00),
(113034, '2008-01-29', 2107, 110, 'REI', '2A45C', 8, 632.00),
(113036, '2008-01-30', 2107, 110, 'ACI', '4100Z', 9, 22500.00),
(113042, '2008-02-20', 2113, 101, 'REI', '2A44R', 5, 22500.00),
(113045, '2008-02-02', 2112, 108, 'REI', '2A44R', 10, 45000.00),
(113048, '2008-02-10', 2120, 102, 'IMM', '779C', 2, 3750.00),
(113049, '2008-02-10', 2118, 108, 'QSA', 'XK47', 2, 776.00),
(113051, '2008-02-10', 2118, 108, 'QSA', 'XK47', 4, 1420.00),
(113055, '2008-02-15', 2108, 101, 'ACI', '4100X', 6, 150.00),
(113057, '2008-02-18', 2111, 103, 'ACI', '4100X', 24, 600.00),
(113058, '2008-02-23', 2108, 109, 'FEA', '112', 10, 1480.00),
(113062, '2008-02-24', 2124, 107, 'FEA', '114', 10, 2430.00),
(113065, '2008-02-27', 2106, 102, 'QSA', 'XK47', 6, 2130.00),
(113069, '2008-03-02', 2109, 107, 'IMM', '775C', 22, 31350.00);

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `MFR_ID` char(3) NOT NULL,
  `PRODUCT_ID` char(5) NOT NULL,
  `DESCRIPTION` varchar(20) NOT NULL,
  `PRICE` decimal(9,2) NOT NULL,
  `QTY_ON_HAND` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`MFR_ID`, `PRODUCT_ID`, `DESCRIPTION`, `PRICE`, `QTY_ON_HAND`) VALUES
('ACI', '41001', 'Size 1 Wiget', 55.00, 277),
('ACI', '41002', 'Size 2 Widget', 76.00, 167),
('ACI', '41003', 'Size 3 Widget', 107.00, 207),
('ACI', '41004', 'Size 4 Widget', 117.00, 139),
('ACI', '4100X', 'Widget Adjuster', 25.00, 37),
('ACI', '4100Y', 'Widget Remover', 2750.00, 25),
('ACI', '4100Z', 'Widget Installer', 2500.00, 28),
('BIC', '41003', 'Handle', 652.00, 3),
('BIC', '41089', 'Retainer', 225.00, 78),
('BIC', '41627', 'Plate', 180.00, 0),
('FEA', '112', 'Housing', 148.00, 115),
('FEA', '114', 'Motor Mount', 243.00, 15),
('IMM', '773C', '300-lb Brace', 975.00, 28),
('IMM', '775C', '500-lb Brace', 1425.00, 5),
('IMM', '779C', '900-LB Brace', 1875.00, 9),
('IMM', '887H', 'Brace Holder', 54.00, 223),
('IMM', '887P', 'Brace Pin', 250.00, 24),
('IMM', '887X', 'Brace Retainer', 475.00, 32),
('QSA', 'XK47', 'Reducer', 355.00, 38),
('QSA', 'XK48', 'Reducer', 134.00, 203),
('QSA', 'XK48A', 'Reducer', 177.00, 37),
('REI', '2A44G', 'Hinge Pin', 350.00, 14),
('REI', '2A44L', 'Left Hinge', 4500.00, 12),
('REI', '2A44R', 'Right Hinge', 4500.00, 12),
('REI', '2A45C', 'Ratchet Link', 79.00, 210);

-- --------------------------------------------------------

--
-- Структура таблицы `salesreps`
--

CREATE TABLE `salesreps` (
  `EMPL_NUM` int(11) NOT NULL,
  `NAME` varchar(15) NOT NULL,
  `AGE` int(11) DEFAULT NULL,
  `REP_OFFICE` int(11) DEFAULT NULL,
  `TITLE` varchar(10) DEFAULT NULL,
  `HIRE_DATE` date NOT NULL,
  `MANAGER` int(11) DEFAULT NULL,
  `QUOTA` decimal(9,2) DEFAULT NULL,
  `SALES` decimal(9,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `salesreps`
--

INSERT INTO `salesreps` (`EMPL_NUM`, `NAME`, `AGE`, `REP_OFFICE`, `TITLE`, `HIRE_DATE`, `MANAGER`, `QUOTA`, `SALES`) VALUES
(101, 'Dan Roberts', 45, 12, 'Sales Rep', '2004-10-20', 104, 300000.00, 305673.00),
(102, 'Sue Smith', 48, 21, 'Sales Rep', '2004-12-10', 108, 350000.00, 474050.00),
(103, 'Paul Cruz', 29, 12, 'Sales Rep', '2005-03-01', 104, 275000.00, 286775.00),
(104, 'Bob Smith', 33, 12, 'Sales Mgr', '2005-05-19', 106, 200000.00, 142594.00),
(105, 'Bill Adams', 37, 13, 'Sales Rep', '2006-02-12', 104, 350000.00, 367911.00),
(106, 'Sam Clark', 52, 11, 'VP Sales', '2006-06-14', NULL, 275000.00, 299912.00),
(107, 'Nancy Angelli', 49, 22, 'Sales Rep', '2006-11-14', 108, 300000.00, 186042.00),
(108, 'Larry Fitch', 62, 21, 'Sales Mgr', '2007-10-12', 106, 350000.00, 361865.00),
(109, 'Mary Jones', 31, 11, 'Sales Rep', '2007-10-12', 106, 300000.00, 392725.00),
(110, 'Tom Snyder', 41, NULL, 'Sales Rep', '2008-01-13', 101, NULL, 75985.00);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`CUST_NUM`),
  ADD KEY `HASREP` (`CUST_REP`);

--
-- Индексы таблицы `offices`
--
ALTER TABLE `offices`
  ADD PRIMARY KEY (`OFFICE`),
  ADD KEY `HASMGR` (`MGR`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ORDER_NUM`),
  ADD KEY `PLACEDBY` (`CUST`),
  ADD KEY `TAKENBY` (`REP`),
  ADD KEY `ISFOR` (`MFR`,`PRODUCT`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`MFR_ID`,`PRODUCT_ID`);

--
-- Индексы таблицы `salesreps`
--
ALTER TABLE `salesreps`
  ADD PRIMARY KEY (`EMPL_NUM`),
  ADD KEY `MANAGER` (`MANAGER`),
  ADD KEY `WORKSIN` (`REP_OFFICE`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `HASREP` FOREIGN KEY (`CUST_REP`) REFERENCES `salesreps` (`EMPL_NUM`) ON DELETE SET NULL;

--
-- Ограничения внешнего ключа таблицы `offices`
--
ALTER TABLE `offices`
  ADD CONSTRAINT `HASMGR` FOREIGN KEY (`MGR`) REFERENCES `salesreps` (`EMPL_NUM`) ON DELETE SET NULL;

--
-- Ограничения внешнего ключа таблицы `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `ISFOR` FOREIGN KEY (`MFR`,`PRODUCT`) REFERENCES `products` (`MFR_ID`, `PRODUCT_ID`),
  ADD CONSTRAINT `PLACEDBY` FOREIGN KEY (`CUST`) REFERENCES `customers` (`CUST_NUM`) ON DELETE CASCADE,
  ADD CONSTRAINT `TAKENBY` FOREIGN KEY (`REP`) REFERENCES `salesreps` (`EMPL_NUM`) ON DELETE SET NULL;

--
-- Ограничения внешнего ключа таблицы `salesreps`
--
ALTER TABLE `salesreps`
  ADD CONSTRAINT `WORKSIN` FOREIGN KEY (`REP_OFFICE`) REFERENCES `offices` (`OFFICE`) ON DELETE SET NULL,
  ADD CONSTRAINT `salesreps_ibfk_1` FOREIGN KEY (`MANAGER`) REFERENCES `salesreps` (`EMPL_NUM`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
