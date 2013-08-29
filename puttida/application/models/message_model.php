<?php

class Message_Model extends CI_Model
{
private $message;

public function getMessage(){
return $this->message;
}

public function setMessage($newmessage){
$this->message = $newmessage;
}
}
?>