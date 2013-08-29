<?php
class Main extends CI_Controller
{
public function index()
{
$this->load->model('message_model');
$this->message_model->setMessage("Software Engineering <br> 54/94");

$data['displayMessage'] = $this->message_model->getMessage();

$this->load->view('viewpage',$data);
}
}

?>