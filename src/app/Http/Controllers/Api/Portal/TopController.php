<?php

namespace App\Http\Controllers\Api\Portal;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class TopController extends Controller
{
    public function index()
    {
        $client = new Client();
        $response = $client->get("http://wp_web:20080/wp-json/wp/v2/pages/2");
        return $response->getBody()->getContents();
    }
}
