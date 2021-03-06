/**
 * Compile Styles.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

'use strict';

import { api, autoprefixer, cssnano, del, enviroment, gulp, gulpif, postcss, rename, sass, sourcemaps } from '../config/imports';

const stylesDir = enviroment.paths.styles;
const css = stylesDir + '/' + enviroment.files.css;
const cssmin = stylesDir + '/' + enviroment.files.cssmin;
const sassfiles = enviroment.paths.sass + '/' + enviroment.files.sass;

/**
 * Delete style.css and style.min.css before we minify and optimize
 *
 * @since 1.0.0
 */
gulp.task( 'cleanStyles', () =>
	del([ css, cssmin ])
);

/**
 * Compile Sass and run stylesheet through PostCSS.
 *
 * @since 1.0.0
 */
gulp.task( 'compileStyles', [ 'cleanStyles' ], () =>
	gulp.src( sassfiles, [ css, ! cssmin ])
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.init() ) )
		.pipe( sass({'errLogToConsole': true, 'outputStyle': 'expanded'}) )
		.pipe( gulpif( enviroment.postcss, postcss([ autoprefixer({'browsers': [ 'last 2 version' ]}) ]) ) )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.write() ) )
		.pipe( gulp.dest( stylesDir ) )
	);

/**
 * Minify and optimize style.css.
 *
 * @since 1.0.0
 */
gulp.task( 'minifyStyles', [ 'compileStyles' ], () =>
gulp.src( css )
	.pipe( gulpif( enviroment.minimize, cssnano({'safe': true, discardComments: {removeAll: true}}) ) )
	.pipe( gulpif( enviroment.minimize, rename( enviroment.files.cssmin ) ) )
	.pipe( gulpif( enviroment.minimize, gulp.dest( stylesDir ) ) )
);

/**
  * Compile Styles.
  *
  * @since 1.0.0
  */
gulp.task( 'styles', [ 'minifyStyles' ]);
