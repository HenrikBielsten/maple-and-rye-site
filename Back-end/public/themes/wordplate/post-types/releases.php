<?php

declare(strict_types=1);

// Register post type
if (function_exists('register_post_type')) {
    register_post_type('releases', [
        'labels' => [
            'name' => 'Releases',
            'singular_name' => 'Release',
            'add_new' => 'Add Release',
            'add_new_item' => 'Add New Release',
            'search_items' => 'Search Release'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-album',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Releases',
        'fields' => [
            acf_image([
                'name' => 'cover_image',
                'label' => 'Cover Image',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'object',
                'wrapper' => [
                    'width' => '40',
                ],
                'required' => true,
            ]),
            acf_relationship([
                'name' => 'tracks',
                'label' => 'Tracks',
                'instructions' => 'Add the tracks of the release',
                'post_type' => ['tracks'],
                'required' => true,
            ]),
            acf_date_picker([
                'name' => 'date',
                'label' => 'Date',
                'instructions' => 'Add the release date',
                'required' => true,
                'display_format' => 'd/m/Y',
                'return_format' => 'Y-m-d',
            ]),
            acf_url([
                'name' => 'spotify_link',
                'label' => 'Spotify Link',
                'instructions' => 'Add a link to the album. In spotify: go to the release and right click on the release\'s name -> Share -> Copy Album Link',
                'required' => true,
            ]),
            acf_url([
                'name' => 'apple_link',
                'label' => 'Apple Link',
                'instructions' => 'Add a link to the album. In iTunes: go to the release and click the share button, then click the link icon.',
                'required' => true,
            ]),

        ],
        'location' => [
            [
                acf_location('post_type', '==', 'releases')
            ],
        ],
    ]);
}
