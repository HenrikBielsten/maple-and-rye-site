<?php

declare(strict_types=1);

add_action( 'rest_api_init', function () {

    register_rest_route( 'mapleandrye/v1', '/news/', [
        'methods' => 'GET',
        'callback' => 'getAllNews'
    ]);

    register_rest_route( 'mapleandrye/v1', '/header_images/', [
        'methods' => 'GET',
        'callback' => 'getAllHeaderImages'
    ]);

    register_rest_route( 'mapleandrye/v1', '/live/', [
        'methods' => 'GET',
        'callback' => 'getAllLive'
    ]);

    register_rest_route( 'mapleandrye/v1', '/music/', [
        'methods' => 'GET',
        'callback' => 'getAllMusic'
    ]);

    register_rest_route( 'mapleandrye/v1', '/tracks/', [
        'methods' => 'GET',
        'callback' => 'getAllTracks'
    ]);

    register_rest_route( 'mapleandrye/v1', '/video/', [
        'methods' => 'GET',
        'callback' => 'getAllVideo'
    ]);

    register_rest_route( 'mapleandrye/v1', '/gallery/', [
        'methods' => 'GET',
        'callback' => 'getAllGalleries'
    ]);

    register_rest_route( 'mapleandrye/v1', '/about/', [
        'methods' => 'GET',
        'callback' => 'getAbout'
    ]);

    register_rest_route('mapleandrye/v1', '/about/(?P<slug>\w+)', [
        'methods' => 'GET',
        'callback' => 'getAboutBySlug'
    ]);

    register_rest_route( 'mapleandrye/v1', '/contact/', [
        'methods' => 'GET',
        'callback' => 'getContact'
    ]);

    register_rest_route('mapleandrye/v1', '/ideologies/', [
        'methods' => 'GET',
        'callback' => 'getIdeologies'
    ]);

    register_rest_route('mapleandrye/v1', '/mainMenu/', [
        'methods' => 'GET',
        'callback' => 'getMainMenu'
    ]);
});

function getAllNews() {
    $news_items = get_posts([
        'post_type' => 'news_items',
        'numberposts' => -1,
    ]);

    foreach ($news_items as &$news_item) {
        $customFields = get_fields($news_item);

        foreach ($customFields as $field => $value) {
            $news_item->$field = $value;
        }
    }

    return $news_items;
}

function getAllHeaderImages() {
    $header_images = get_posts([
        'post_type' => 'header_images',
        'numberposts' => -1,
    ]);

    foreach ($header_images as &$header_image) {
        $customFields = get_fields($header_image);

        foreach ($customFields as $field => $value) {
            $header_image->$field = $value;
        }
    }

    return $header_images;
}

function getAllLive() {
    $live_shows = get_posts([
        'post_type' => 'live_shows',
        'numberposts' => -1,
    ]);

    foreach ($live_shows as &$live_show) {
        $customFields = get_fields($live_show);

        foreach ($customFields as $field => $value) {
            $live_show->$field = $value;
        }
    }

    return $live_shows;
}

function getAllMusic() {
    $releases = get_posts([
        'post_type' => 'releases',
        'numberposts' => -1,
    ]);

    foreach ($releases as &$release) {
        $customFields = get_fields($release);

        foreach ($customFields as $field => $value) {

            if ($field === 'tracks') {
                foreach ($value as &$track) {
                    $customFields = get_fields($track);

                    foreach ($customFields as $k => $v) {
                        $track->$k = $v;
                    }
                }
            }
            $release->$field = $value;
        }
    }

    return $releases;
}

function getAllTracks() {
    $tracks = get_posts([
        'post_type' => 'tracks',
        'numberposts' => -1,
    ]);

    foreach ($tracks as &$track) {
        $customFields = get_fields($track);
        // $tracks = get_the_terms($release, 'track')

        foreach ($customFields as $field => $value) {
            $track->$field = $value;
        }

        // $release->track = $tracks;
    }

    return $tracks;
}

function getAllVideo() {
    $videos = get_posts([
        'post_type' => 'videos',
        'numberposts' => -1,
    ]);

    foreach ($videos as &$video) {
        $customFields = get_fields($video);

        foreach ($customFields as $field => $value) {
            $video->$field = $value;
        }
    }

    return $videos;
}

function getAllGalleries() {
    $galleries = get_posts([
        'post_type' => 'galleries',
        'numberposts' => -1,
    ]);

    foreach ($galleries as &$gallery) {
        $customFields = get_fields($gallery);

        foreach ($customFields as $field => $value) {
            $gallery->$field = $value;
        }
    }

    return $galleries;
}

function getAbout() {
    $abouts = get_posts([
        'post_type' => 'about',
        'numberposts' => -1,
    ]);

    foreach ($abouts as &$about) {
        $customFields = get_fields($about);

        foreach ($customFields as $field => $value) {
            $about->$field = $value;
        }
    }

    return $abouts;
}

function getAboutBySlug($data) {
    $abouts = getAbout();

    foreach ($abouts as $about) {
        if (strtolower($about->post_name) === strtolower($data['slug'])) {
            return $about;
        }
    }

    return [];
}

function getContact() {
    $contacts = get_posts([
        'post_type' => 'contact',
        'numberposts' => -1,
    ]);

    foreach ($contacts as &$contact) {
        $customFields = get_fields($contact);

        foreach ($customFields as $field => $value) {
            $contact->$field = $value;
        }
    }

    return $contacts;
}

function getIdeologies($data) {
    $ideologies = get_terms('ideology');

    return $ideologies;
}

function getMainMenu($data) {
    $mainMenu = wp_get_nav_menu_items('Main Menu');

    return $mainMenu;
}
