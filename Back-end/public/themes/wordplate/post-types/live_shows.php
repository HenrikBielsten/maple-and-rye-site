<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('live_shows', [
        'labels' => [
            'name' => 'Live Shows',
            'singular_name' => 'Live Show',
            'add_new' => 'Add Live Show',
            'add_new_item' => 'Add New Live Show',
            'search_items' => 'Search Live Shows'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-megaphone',
        'public' => true,
        'menu_position' => 1,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Live Show',
        'fields' => [
            acf_url([
                'name' => 'ticket_link',
                'label' => 'Tickets',
                'instructions' => 'Add a link to ticket sales.',
            ]),
            acf_date_picker([
                'name' => 'date',
                'label' => 'Date',
                'instructions' => 'Add the release date',
                'required' => true,
                'display_format' => 'd/m/Y',
                'return_format' => 'Y-m-d',
            ]),
            acf_group([
                'name' => 'where',
                'label' => 'Where',
                'layout' => 'table',
                'sub_fields' => [
                    acf_text([
                        'name' => 'venue',
                        'label' => 'Venue',
                    ]),
                    acf_text([
                        'name' => 'city',
                        'label' => 'City',
                    ]),
                    acf_text([
                        'name' => 'country',
                        'label' => 'Country',
                    ]),
                ],
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'live_shows')
            ],
        ],
    ]);
}
