<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link http://ttcd.com
 *
 * @package TienCongNguyen
 * @subpackage Ttcd
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

	<?php
	while ( have_posts() ) : the_post();

		get_template_part( 'template-parts/page/content', 'page' );

	endwhile; // End of the loop.

get_footer();	?>
