export default {

    /**
     * Enable bable.
     */
    babel: true,

    /**
     * Enable JavaScript Concat.
     */
    concat: true,

    /**
     * Enable file minimization.
     */
    minimize: true,

    /**
     * Enable postcss.
     */
    postcss: true,

    /**
     * Enable sourcemaps.
     */
    sourcemaps: true,

    /**
     * Enable webpack.
     */
    webpack: false,

    /**
     * Directory paths.
     */
    paths: {
        'baseDir': './',
        'dist': './dist',
        'images': './assets/images',
        'sass': './assets/styles/sass',
        'scripts': './assets/scripts',
        'styles': './assets/styles',
    },

    /**
     * Files.
     */
    files: {
        'css': 'style.css',
        'cssmin': 'style.min.css',
        'concatScripts': '/concat/*.js',
        'html': [ './*.html', './**/*.html' ],
        'images': '/**/*',
        'js': 'script.js',
        'jsmin': 'script.min.js',
        'php': [ './*.php', './**/*.php' ],
        'sass': '/**/*.scss',
    },

    /**
     * Excluded distribution files.
     */
    excludes: [
        './**/*',
        '!assets/styles/sass',
        '!assets/styles/sass/**',
        '!assets/scripts',
        '!assets/scripts/**',
        '!bin',
        '!bin/**',
        '!dist',
        '!dist/**',
        '!git',
        '!git/**',
        '!node_modules',
        '!node_modules/**',
        '!tasks',
        '!tasks/**',
        '!tests',
        '!tests/**',
        '!.bablerc',
        '!.editorconfig',
        '!.eslintrc.js',
        '!.gitignore',
        '!.sas-lint.yml',
        '!.travis.yml',
        '!gulpfile.babel.js',
        '!package-lock.json',
        '!package.json',
        '!phpcs.xml',
        '!phpmd.xml',
        '!phpunit.xml',
        '!webpack.config.js',
        '!yarn.lock',
    ],
};
