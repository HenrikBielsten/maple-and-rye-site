<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('videos', [
        'labels' => [
            'name' => 'Videos',
            'singular_name' => 'Video',
            'add_new' => 'Add Video',
            'add_new_item' => 'Add New Video',
            'search_items' => 'Search Video'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-editor-video',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Videos',
        'fields' => [
            acf_url([
                'name' => 'video_link',
                'label' => 'Video Link',
                'instructions' => 'Add a link to the video',
                'required' => true,
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'videos')
            ],
        ],
    ]);
}
