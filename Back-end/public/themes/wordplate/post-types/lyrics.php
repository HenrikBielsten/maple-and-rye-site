<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('lyrics', [
        'labels' => [
            'name' => 'Lyrics',
            'singular_name' => 'Lyric',
            'add_new' => 'Add Lyric',
            'add_new_item' => 'Add New Lyric',
            'search_items' => 'Search Lyric'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-playlist-audio',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Lyrics',
        'fields' => [
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Content',
                'instructions' => 'Add the full lyric',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'lyrics')
            ],
        ],
    ]);
}
