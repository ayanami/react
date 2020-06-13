<?php

namespace App\Http\Controllers\Api\Portal;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class TopController extends Controller
{
    public function index()
    {
        $client = new Client();
        // $response = $client->get("https://wp_web/wp-json/wp/v2/pages/2");
        $response = $client->get("https://api_web/api/v1/test");
        return $response->getBody()->getContents();
    }
}
