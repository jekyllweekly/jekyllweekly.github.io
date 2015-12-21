jQuery( function ( $ ) {

	$( '.responsive-menu-icon' ).click( function () {
		$( this ).next( '.navigation' ).slideToggle();
	});

	setupMenus();

	$( window ).resize( function () {
		setupMenus();
	});

	function setupMenus() {
		if ( window.innerWidth <= 549 ) {
			$( '.navigation > a' ).addClass( 'moved-item' ); // tag moved items so we can move them back
			$( '.navigation > a' ).appendTo( '.navigation' );
		}

		if ( window.innerWidth > 549 ) {
			$( '.navigation' ).removeAttr( 'style' );
			$( '.responsive-menu > .menu-item' ).removeClass( 'menu-open' );
		}
	}

});