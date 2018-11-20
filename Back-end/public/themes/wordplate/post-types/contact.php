<?php

declare(strict_types=1);

if (function_exists('register_post_type')) {
    register_post_type('contact', [
        'labels' => [
            'name' => 'Contact',
            'singular_name' => 'Contact',
            'add_new' => 'Add Contact',
            'add_new_item' => 'Add New Contact',
            'search_items' => 'Search Contact'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-phone',
        'public' => true,
        'menu_position' => 5,
    ]);
}

if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Contact',
        'fields' => [
            acf_text([
                'name' => 'full_name',
                'label' => 'Full Name',
                'instructions' => 'Add the full name of contact person',
            ]),
            acf_email([
                'name' => 'email',
                'label' => 'Email',
                'instructions' => 'Add an email address',
            ]),
            acf_number([
                'name' => 'phone_number',
                'label' => 'Phone Number',
                'instructions' => 'Add a phone number (with country code)',
                'prepend' => ' + ',
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'contact')
            ],
        ],
    ]);
}
