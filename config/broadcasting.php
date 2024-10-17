<?php
return [
    'default' => env('BROADCAST_DRIVER', 'pusher'),

    'connections' => [
        'pusher' => [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'secret' => env('PUSHER_APP_SECRET'),
            'app_id' => env('PUSHER_APP_ID'),
            'options' => [
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'useTLS' => true,
            ],
            'host' => env('PUSHER_APP_HOST'),
            'port' => env('PUSHER_APP_PORT'),
            'scheme' => env('PUSHER_APP_SCHEME', 'http'),
        ],

        'redis' => [
            'driver' => 'redis',
            'connection' => 'default',
        ],

        'log' => [
            'driver' => 'log',
        ],
    ],

    'failed' => [
        'database' => 'mysql',
        'channel' => 'failed_jobs',
    ],
];
