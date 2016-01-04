-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-01-2016 a las 13:22:53
-- Versión del servidor: 5.6.25
-- Versión de PHP: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `elp_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `data_icon`
--

CREATE TABLE IF NOT EXISTS `data_icon` (
  `name` varchar(100) NOT NULL,
  `text` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `data_icon`
--

INSERT INTO `data_icon` (`name`, `text`) VALUES
('candy-crash', '¿Sabías que Candy Crash actualmente se rige por las leyes de protección de datos de Malta y no legislan de ninguna manera los anuncios que te muestran en la aplicación?'),
('clash-of-clans', '¿Sabías que al jugar a Clash of Clans aceptas que no tienes ningún derecho \nsobre el contenido que publicas pero si eres responsable? Te quitan hasta los derechos morales si la ley lo permite.'),
('facebook', '¿Sabias que al instalar Facebook en tu móvil le das permiso para leer tus SMS, llamar a números de teléfono e incluso cambiar tu fondo de pantalla del móvil?');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `data_icon`
--
ALTER TABLE `data_icon`
  ADD PRIMARY KEY (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
