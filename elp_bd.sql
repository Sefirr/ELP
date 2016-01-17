-- phpMyAdmin SQL Dump
-- version 4.2.12deb2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 17-01-2016 a las 14:20:11
-- Versión del servidor: 5.6.24-0ubuntu2
-- Versión de PHP: 5.6.4-4ubuntu6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

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
('amazon', '¿Sabías que la aplicación de Amazon te controla la linterna, lee la configuración de tu pantalla de inicio?'),
('candy-crash', '¿Sabías que Candy Crash actualmente se rige por las leyes de protección de datos de Malta y no legislan de ninguna manera los anuncios que te muestran en la aplicación?'),
('clash-of-clans', '¿Sabías que al jugar a Clash of Clans aceptas que no tienes ningún derecho \nsobre el contenido que publicas pero si eres responsable? Te quitan hasta los derechos morales si la ley lo permite.'),
('dropbox', '¿Sabías que Dropbox no te especifica en su política de privacidad lo que hacen con tu información? SImplemente te dicen que no la comparten con terceros ni anunciantes.'),
('facebook', '¿Sabias que al instalar Facebook en tu móvil le das permiso para leer tus SMS, llamar a números de teléfono e incluso cambiar tu fondo de pantalla del móvil?'),
('instagram', '¿Sabías que Instagram veta fotos de personas desnudas para menores de edad a pesar de que vivamos en una sociedad abierta?'),
('linterna', '¿Sabías que la Linterna LED-Super Brillante puede modificar datos de tu sistema,tiene acceso a internet y puede realizar fotos y vídeos sin que tu lo sepas?'),
('shazam', '¿Sabías que Shazam rechaza garantias y recursos legales de todo tipo si su aplicación te da problemas y además no te deja usar la aplicación si eres de un país vetado por EEUU?'),
('skype', '¿Sabías que Skype en su política de privacidad dice que no utiliza los datos de tu correo electrónico, chat , videollamadas y voz para ofrecerte anuncios interesantes? Entonces, ¿Cómo te los ofrecen entonces? Además, afiliados de marketing de skype o sitios calificados de terceros pueden recibir pagos por recomendar Skype si realizan determinadas tareas como la compra de créditos de Skype.'),
('spotify', '¿Sabías que Spotify coge las fotos de tu dispositivo y te hace responsable legal de la información de tus contactos?'),
('telegram', '¿Sabías que Telegram no específica edad mínima para utilizar la aplicación y tratan nuestros datos sin nisiquiera haberlos aceptado?'),
('twitter', '¿Sabías que Twitter explica de manera muy reducida y con falta de datos los permisos que te piden?'),
('vine', '¿Sabías que Vine puede leer datos de registros personales y puede saber en todo momento donde estás ya que puede saber tu ubicación precisa tanto por red como por GPS?'),
('whatsapp', '¿Sabías que Whatsapp hace transferencias internacionales de información hacia EEUU? Eso viola el SAFE HARBOUR.');

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
