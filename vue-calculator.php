<?php
/*
 *Plugin Name: Vue Cargo Calculator
 * Description: Calculate the approximate estimate of the value of shipping by sea or air
 * Version: 1.0
 * Author: Jose Hernandez
 * Author URI: https://h2jose.dev
 * License: GPL2
 */

function handle_shortcode()
{
	return '<div id="mount"></div>';
}
add_shortcode('vueCargoCalculator', 'handle_shortcode');

wp_enqueue_script('vue', 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js', [], '2.6.12');

wp_enqueue_script('vuetify_js', 'https://unpkg.com/vuetify@2.x/dist/vuetify.js', [], '2.4.12');

wp_enqueue_style('vuetify_css', 'https://unpkg.com/vuetify@2.x/dist/vuetify.min.css', [], '2.4.2');

wp_enqueue_style('materialdesignicons', 'https://unpkg.com/@mdi/font@5.x/css/materialdesignicons.min.css', [], '4.x');

wp_enqueue_style('roboto_font', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900', [], '');


wp_enqueue_script('calculator', plugin_dir_url(__FILE__) . 'calculator.js', [], '1.0', true);
