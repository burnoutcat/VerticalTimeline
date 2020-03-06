<?php  

function get_json($s) {
	return json_decode(file_get_contents($s)); 
}
