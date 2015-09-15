module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var server = './server.js';
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var args = require('yargs').argv;
    var buildClient = args.client;

    if (!buildClient) {
        buildClient = 'no_client';
    }
    console.log('buildClient :', buildClient);

    var config = {


        /*
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*js'
        ],
        build: './build/',
        buildClient: buildClient,
        client: client,
        css: temp + '*.css',
        fonts: [
            './bower_components/font-awesome/fonts/**/*.*',
            './bower_components/webfont-opensans/fonts/**/*.*'
        ],
        html: '**/*.html',
        htmltemplates: [
            client + 'app/**/*.html',
            client + 'theming/' + buildClient + '/**/*.html'
        ],
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            client + 'app/**/*.module.js',
            client + 'app/**/*.js',
            client + 'theming/' + buildClient + '/**/*.js',
            '!' + client + 'app/**/*.spec.js'
        ],
        less: [
             client + 'styles/app.less'
        ],
        report: report,
        root: root,
        server: server,
        temp: temp,

        /*
         * Optimized Files
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },

        /*
         * Template Cache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        /*
         * Browser Sync
         */
        browserReloadDelay: 1000,

        /*
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],

        /*
         * Karma and testing Settings
         */


        /*
         * Node Settings
         */
        defaultPort: 7203,
        nodeServer: server

    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    config.karma = getKarmaOptions();

    return config;

    //////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'text-summary'}
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }

};
