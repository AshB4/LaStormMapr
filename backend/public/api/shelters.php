<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$dataFile = __DIR__ . "/../../data/shelters.json";

if (!file_exists($dataFile)) {
    http_response_code(404);
    echo json_encode(["error" => "Shelter data not found"]);
    exit;
}

$json = file_get_contents($dataFile);
$data = json_decode($json, true);

$typeFilter = $_GET["type"] ?? null;

if ($typeFilter) {
    $filtered = array_filter($data, function ($shelter) use ($typeFilter) {
        return isset($shelter["type"]) && strtolower($shelter["type"]) === strtolower($typeFilter);
    });
    echo json_encode(array_values($filtered));
} else {
    echo json_encode($data);
}
