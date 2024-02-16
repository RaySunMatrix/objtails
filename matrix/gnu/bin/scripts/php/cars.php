if(isset($_REQUEST['type'], $_REQUEST['model'], $_REQUEST['color'])) {
// they are set, we can use them !
$response = 'The color of your car is ' . $_REQUEST['color'] . '. ';
$response .= 'It is a ' . $_REQUEST['type'] . ' model ' . $_REQUEST['model'] . '!';
echo $response;
}