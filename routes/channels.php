<?php

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Broadcast::channel('chat', function ($user) {
    Log::info('Channel authorization for chat channel');
    return $user;
});
