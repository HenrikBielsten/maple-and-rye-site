<?php

declare(strict_types=1);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

require template_path('./post-types/header_images.php');

require template_path('./post-types/news_items.php');

require template_path('./post-types/live_shows.php');

require template_path('./post-types/releases.php');

require template_path('./post-types/tracks.php');

require template_path('./post-types/videos.php');

require template_path('./post-types/about.php');

require template_path('./post-types/contact.php');

require template_path('./endpoints/custom-endpoints.php');

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);

add_theme_support('plate-disable-menu', [
    'edit-comments.php', // comments
    'index.php', // dashboard
    'upload.php', // media
    'edit.php?post_type=acf-field-group', // Custom post type
    'tools.php?page=wp-migrate-db', // Plugin in Tools
    'options-general.php?page=menu_editor', // Plugin in Settings
    'admin.php?page=theseoframework-settings', // Plugin in menu root
    'edit.php', // Posts
    'edit.php?post_type=page', // Pages
    'themes.php', // Appearance
    'tools.php', // Tools
    'options-general.php', // Settings
    'users.php', // Users
]);

add_theme_support('plate-disable-dashboard', [
  'dashboard_activity',
  'dashboard_incoming_links',
  'dashboard_plugins',
  'dashboard_primary',
  'dashboard_quick_press',
  'dashboard_recent_comments',
  'dashboard_recent_drafts',
  'dashboard_secondary',
  'dashboard_right_now',
]);

add_theme_support('plate-disable-toolbar', [
   'archive',
   'comments',
   'wp-logo',
   'edit',
   'appearance',
   'view',
   'new-content',
   'updates',
   'search',
]);

add_theme_support('plate-footer-text', 'Good luck on all your endeavors Maple & Rye');
