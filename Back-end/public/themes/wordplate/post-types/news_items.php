<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('news_items', [
        'labels' => [
            'name' => 'News Items',
            'singular_name' => 'News Item',
            'add_new' => 'Add News Item',
            'add_new_item' => 'Add New News Item',
            'search_items' => 'Search News Item'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-pressthis',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'News Item',
        'fields' => [
            acf_text([
                'name' => 'headline',
                'label' => 'Headline',
                'required' => true,
            ]),
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Content',
                'instructions' => 'Add the full text of the news. Try to keep it as short as possible',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_image([
                'name' => 'image',
                'label' => 'Image',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'object',
            ]),
            acf_url([
                'name' => 'link',
                'label' => 'Link',
                'instructions' => 'Add a link if there is further reading somewhere else.',
            ]),
            acf_select([
                'name' => 'button_text',
                'label' => 'Button Text',
                'instructions' => 'Choose the appropriate text to be displayed on the button',
                'required' => true,
                'choices' => [
                    'READ MORE' => 'READ MORE',
                    'LISTEN' => 'LISTEN',
                    'CHET IT OUT' => 'CHECK IT OUT',
                    'GET TICKETS' => 'GET TICKETS',
                ],
                'default_value' => [
                    'read_more',
                ],
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'news_items')
            ],
        ],
    ]);
}
