<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

Route::post('/send-message', [ChatController::class, 'sendMessage']);
