<?php
header('Access-Control-Allow-Origin:*');
$data = array('version'=>'1.0.1','wgt'=>'TEST0720_2');
exit(json_encode($data));
?>