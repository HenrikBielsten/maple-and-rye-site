<?php

declare(strict_types=1);

// Register post type
if (function_exists('register_post_type')) {
    register_post_type('galleries', [
        'labels' => [
            'name' => 'Galleries',
            'singular_name' => 'Gallery',
            'add_new' => 'Add Gallery',
            'add_new_item' => 'Add New Gallery',
            'search_items' => 'Search Gallery'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-images-alt',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Galleries',
        'fields' => [
            acf_gallery([
                'name' => 'images',
                'label' => 'Images',
                'instructions' => 'Add images to the gallery.',
                'required' => true,
                'mime_types' => 'jpeg, jpg, png',
                'min' => 1,
                'max' => 40,
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'galleries')
            ],
        ],
    ]);
}
