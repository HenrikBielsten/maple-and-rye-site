<?php

declare(strict_types=1);

if (function_exists('register_post_type')) {
    register_post_type('about', [
        'labels' => [
            'name' => 'About',
            'singular_name' => 'About',
            'add_new' => 'Add About',
            'add_new_item' => 'Add New About',
            'search_items' => 'Search About'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-editor-help',
        'public' => true,
        'menu_position' => 5,
    ]);
}

if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'About',
        'fields' => [
            acf_text([
                'name' => 'full_name',
                'label' => 'Full Name',
                'instructions' => 'This will be used as the headline',
            ]),
            acf_image([
                'name' => 'image',
                'label' => 'Image',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'object',
                'wrapper' => [
                    'width' => '40',
                ],
            ]),
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Content',
                'instructions' => 'Add the text content.',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'about')
            ],
        ],
    ]);
}
