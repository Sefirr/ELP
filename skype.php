<?php 
	
	include_once 'config.php';
	
	global $BD;
	$query = $BD->query("SELECT * FROM data_icon WHERE name LIKE 'skype'");
	$data_icon = $query->fetch_array();
	
	$data = explode(" ", $data_icon["text"]);
	
	$h = 0;
	for($i=0;$i < count($data); $i++) {
		if($h < 10) {
				echo " ".$data[$i];
		} else {
			echo "<br>".$data[$i];
			$h = 0;
		}
		$h++;
	}
	
	echo "<div style='text-align:center'>Para saber más, pulse en el botón de arriba.</div>"; 
?>
