<?php
/**
 * Autoloader
 *
 * @package    Plugin_Package
 * @subpackage Plugin_Package/Includes
 * @author     Plugin_Author <Plugin_Author_Email>
 * @copyright  Copyright (c) 2018, Plugin_Author
 * @license    GNU General Public License v2 or later
 * @version    1.0.0
 */

namespace Plugin_Package\Includes;

if ( ! defined( 'WPINC' ) ) {
	wp_die( 'No Access Allowed!', 'Error!', array( 'back_link' => true ) );
}

/**
 * Autoloader
 *
 * @author Plugin_Author
 * @since  1.0.0
 *
 * @param string $class Name of the class being requested.
 *
 * @return void
 */
function _autoload_classes( $class ) {

	// Get the class name.
	$class = explode( '\\', $class );

	// Full path to the classes directory.
	$path  = trailingslashit( plugin_dir_path( __FILE__ ) ) . trailingslashit( 'classes' );
	$files = new \RecursiveDirectoryIterator( $path );

	// Loop through the files.
	foreach ( new \RecursiveIteratorIterator( $files ) as $file ) {

		$filename = $file->getFilename();
		$filepath = $file->getPath();

		// Exclude dot files.
		if ( '.' === substr( $filename, 0, 1 ) ) {
			continue;
		}

		// Constructed file with full path to autoload.
		$file_fullpath = trailingslashit( $filepath ) . 'class-' . strtolower( str_replace( '_', '-', end( $class ) ) ) . '.php';

		// Add classes to be excluded from autoloading. example: array( $path . 'class-name.php' );.
		$excludes = array();

		// Require file if the file exists and is not in the excludes list.
		if ( file_exists( $file_fullpath ) && ! in_array( $file_fullpath, $excludes, true ) ) {

			require_once( $file_fullpath );
		}
	}
}
spl_autoload_register( __NAMESPACE__ . '\\_autoload_classes' );
