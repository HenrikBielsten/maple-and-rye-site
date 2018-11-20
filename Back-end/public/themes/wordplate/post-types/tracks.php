<?php

declare(strict_types=1);

// Register post type
if (function_exists('register_post_type')) {
    register_post_type('tracks', [
        'labels' => [
            'name' => 'Tracks',
            'singular_name' => 'Track',
            'add_new' => 'Add Track',
            'add_new_item' => 'Add New Track',
            'search_items' => 'Search Track'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-format-audio',
        'public' => true,
        'menu_position' => 2,
    ]);
}

// Add ACF fields to the post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Tracks',
        'fields' => [
            acf_wysiwyg([
                'name' => 'lyric',
                'label' => 'Lyric',
                'instructions' => 'Add the full lyric',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),

            acf_url([
                'name' => 'spotify_link',
                'label' => 'Spotify Link',
                'instructions' => 'Add a link to the song on Spotify. In spotify: go to the song and right click on the song\'s name -> Share -> Copy Song Link',
                'required' => true,
            ]),

            acf_url([
                'name' => 'apple_link',
                'label' => 'Apple Link',
                'instructions' => 'Add a link to the song on Apple Music. Go to the song, press share button and click the link icon.',
                'required' => true,
            ]),

            acf_group([
                'name' => 'length',
                'label' => 'Length',
                'layout' => 'table',
                'instructions' => 'Add the tracks play length',
                'sub_fields' => [
                    acf_number([
                        'name' => 'minutes',
                        'label' => 'Minutes',
                        'required' => true,
                        'instructions' => 'OBS! No zero before single digit numbers',
                        'min' => 0,
                        'max' => 59,
                    ]),
                    acf_number([
                        'name' => 'seconds',
                        'label' => 'Seconds',
                        'required' => true,
                        'instructions' => 'OBS! Add a zero before single digit numbers (i.e 04 or 09)',
                        'min' => 0,
                        'max' => 59,
                    ]),
                ],
            ]),
        ],
        'location' => [
            [
                acf_location('post_type', '==', 'tracks')
            ],
        ],
    ]);
}
