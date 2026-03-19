<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

$response = [
    "key" => [
        "ok"       => true,
        "valid"    => true,
        "expiry_ms" => 4102444800000, 
        "message"  => "Activado por Vextu Android 😈 - Sin expiración"
    ]
];

echo json_encode($response);
exit;
