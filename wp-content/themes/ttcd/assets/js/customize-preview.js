/**
 * File customize-preview.js.
 *
 * Instantly live-update customizer settings in the preview for improved user experience.
 */

(function( $ ) {

	// Site title and description.
	wp.customize( 'ttcd_email', function( value ) {
		value.bind( function( to ) {
			$( '.top-header a' ).attr( 'href', 'mailto:' + to );
			$( '.top-header a span' ).text( to );
		});
	});
	wp.customize( 'ttcd_phonenumber', function( value ) {
		value.bind( function( to ) {
			$( '.hotline span' ).text( to );
		});
	});

} )( jQuery );
