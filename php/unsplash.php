<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $jsonData = file_get_contents("php://input");
    $data = json_decode($jsonData);
    $query=$data->query;
    $accessKey = 'divFNZ0or3iLklRqhPqqYzdI5rE_71w68m7eGITmio4';
    $perPage = 5;

    $response = file_get_contents("https://api.unsplash.com/search/photos?query=$query&per_page=$perPage&client_id=$accessKey");
    $data = json_decode($response);

    if ($data && is_array($data->results)) {
        echo json_encode($data);
    }
    else{
        echo json_encode(['error' => 'No hay imags']);
    }
}
?>