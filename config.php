<?php
// Varios defines para los parámetros de configuración de acceso a la BD y la URL desde la que se sirve la aplicación
define('BD_HOST', 'localhost');
define('BD_NAME', 'elp_bd');
define('BD_USER', 'root');
define('BD_PASS', '');

$BD = new mysqli(BD_HOST, BD_USER, BD_PASS, BD_NAME);
if ( $BD->connect_errno ) {
  echo "Error de conexión a la BD: (" . $BD->connect_errno . ") " . utf8_encode($BD->connect_error);
  exit();
}

if ( ! $BD->set_charset("utf8")) {
  echo "Error al configurar la codificación de la BD: (" . $BD->errno . ") " . utf8_encode($BD->error);
  exit();
}

session_start();

if(isset($_SESSION['login_user'])) {
	$user_check=$_SESSION['login_user'];
	$resultado=$BD->query("SELECT id, username FROM users WHERE username='$user_check'");
	$row = $resultado->fetch_assoc();
	$login_session = $row['username'];
	$login_id = $row['id'];
}

?>
