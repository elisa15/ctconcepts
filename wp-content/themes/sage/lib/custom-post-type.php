<?php

function project_post_types() {
	$labels = array(
		'name'               => 'Projects',
		'singular_name'      => 'Project',
		'menu_name'          => 'Projects',
		'name_admin_bar'     => 'Project',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Project',
		'new_item'           => 'New Project',
		'edit_item'          => 'Edit Project',
		'view_item'          => 'View Projects',
		'all_items'          => 'All Projects',
		'search_items'       => 'Search Project',
		'parent_item_colon'  => 'Parent Project:',
		'not_found'          => 'No Projects found.',
		'not_found_in_trash' => 'No Projects found in Trash.'
	);

	$args = array( 
		'public'      => true, 
		'labels'      => $labels,
		'description' => 'Projects will be published using this post type',
		'supports'      => array( 'title', 'thumbnail' )
	);
    	register_post_type( 'project', $args );
}
add_action( 'init', 'project_post_types' );

function biography_post_types() {
	$labels = array(
		'name'               => 'Biographies',
		'singular_name'      => 'Biography',
		'menu_name'          => 'Biography',
		'name_admin_bar'     => 'Biography',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Biography',
		'new_item'           => 'New Biography',
		'edit_item'          => 'Edit Biography',
		'view_item'          => 'View Biography',
		'all_items'          => 'All Biography',
		'search_items'       => 'Search Biography',
		'parent_item_colon'  => 'Parent Biography:',
		'not_found'          => 'No Biography found.',
		'not_found_in_trash' => 'No Biography found in Trash.'
	);

	$args = array( 
		'public'      => true, 
		'labels'      => $labels,
		'description' => 'Biography will be published using this post type',
		'supports'      => array( 'title', 'thumbnail')
	);
    	register_post_type( 'biography', $args );
}
add_action( 'init', 'biography_post_types' );

function media_post_types() {
	$labels = array(
		'name'               => 'Media',
		'singular_name'      => 'Media',
		'menu_name'          => 'Media',
		'name_admin_bar'     => 'Media',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Media',
		'new_item'           => 'New Media',
		'edit_item'          => 'Edit Media',
		'view_item'          => 'View Media',
		'all_items'          => 'All Media',
		'search_items'       => 'Search Media',
		'parent_item_colon'  => 'Parent Media:',
		'not_found'          => 'No Media found.',
		'not_found_in_trash' => 'No Media found in Trash.'
	);

	$args = array( 
		'public'      => true, 
		'labels'      => $labels,
		'description' => 'Media will be published using this post type',
		'supports'      => array( 'title', 'thumbnail')
	);
    	register_post_type( 'media', $args );
}
add_action( 'init', 'media_post_types' );

// function services_post_types() {
// 	$labels = array(
// 		'name'               => 'Services',
// 		'singular_name'      => 'Service',
// 		'menu_name'          => 'Services',
// 		'name_admin_bar'     => 'Services',
// 		'add_new'            => 'Add New',
// 		'add_new_item'       => 'Add New Service',
// 		'new_item'           => 'New Service',
// 		'edit_item'          => 'Edit Service',
// 		'view_item'          => 'View Service',
// 		'all_items'          => 'All Services',
// 		'search_items'       => 'Search Service',
// 		'parent_item_colon'  => 'Parent Service:',
// 		'not_found'          => 'No Service found.',
// 		'not_found_in_trash' => 'No Service found in Trash.'
// 	);

// 	$args = array( 
// 		'public'      => true, 
// 		'labels'      => $labels,
// 		'description' => 'Service will be published using this post type',
// 		'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' )
// 	);
//     	register_post_type( 'services', $args );
// }
// add_action( 'init', 'services_post_types' );

// function testimonial_post_types() {
// 	$labels = array(
// 		'name'               => 'Testimonials',
// 		'singular_name'      => 'Testimonial',
// 		'menu_name'          => 'Testimonials',
// 		'name_admin_bar'     => 'Testimonial',
// 		'add_new'            => 'Add Testimonial',
// 		'add_new_item'       => 'Add New Testimonial',
// 		'new_item'           => 'New Testimonial',
// 		'edit_item'          => 'Edit Testimonial',
// 		'view_item'          => 'View Testimonial',
// 		'all_items'          => 'All Testimonial',
// 		'search_items'       => 'Search Testimonial',
// 		'parent_item_colon'  => 'Parent Testimonial:',
// 		'not_found'          => 'No Testimonial found.',
// 		'not_found_in_trash' => 'No Testimonial found in Trash.'
// 	);

// 	$args = array( 
// 		'public'      => true, 
// 		'labels'      => $labels,
// 		'description' => 'Testimonial will be published using this post type',
// 		'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' )
// 	);
//     	register_post_type( 'testimonial', $args );
// }
// add_action( 'init', 'testimonial_post_types' );

// function industry_expertise_post_types() {
// 	$labels = array(
// 		'name'               => 'Industry Expertise',
// 		'singular_name'      => 'Industry Expertise',
// 		'menu_name'          => 'Industry Expertise',
// 		'name_admin_bar'     => 'Industry Expertise',
// 		'add_new'            => 'Add New',
// 		'add_new_item'       => 'Add New Industry Expertise',
// 		'new_item'           => 'New Industry Expertise',
// 		'edit_item'          => 'Edit Industry Expertise',
// 		'view_item'          => 'View Industry Expertise',
// 		'all_items'          => 'All Industry Expertise',
// 		'search_items'       => 'Search Industry Expertise',
// 		'parent_item_colon'  => 'Parent Industry Expertise:',
// 		'not_found'          => 'No Industry Expertise found.',
// 		'not_found_in_trash' => 'No Industry Expertise found in Trash.'
// 	);

// 	$args = array( 
// 		'public'      => true, 
// 		'labels'      => $labels,
// 		'description' => 'Industry Expertise will be published using this post type',
// 		'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' )
// 	);
//     	register_post_type( 'Industry Expertise', $args );
// }
// add_action( 'init', 'industry_expertise_post_types' );


?>