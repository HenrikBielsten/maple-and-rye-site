<?php

declare(strict_types=1);

// Register post type
if (function_exists('register_post_type')) {
    register_post_type('header_images', [
        'labels' => [
            'name' => 'Header Images',
            'singular_name' => 'Header Image',
            'add_new' => 'Add Header Image',
            'add_new_item' => 'Add New Header Image',
            'search_items' => 'Search Header Image'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-format-image',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Header Images',
        'fields' => [
            acf_gallery([
                'name' => 'images',
                'label' => 'Images',
                'instructions' => 'Add images to be shown in the header on the home page.',
                'required' => true,
                'mime_types' => 'jpeg, jpg, png',
                'min' => 1,
                'max' => 8,
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'header_images')
            ],
        ],
    ]);
}
