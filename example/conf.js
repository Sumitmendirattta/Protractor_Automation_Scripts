var HtmlReporter = require('protractor-angular-screenshot-reporter');

exports.config = {
    directConnect: true,
    chromeOnly: false,
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        'browserName': 'chrome',
        'name': 'Protractor smoke tests',
        'version': '34',
        'selenium-version': '2.42.2',
        'platform': 'OS X 10.9'
    }, {
        'browserName': 'chrome',
        'name': 'Protractor smoke tests',
        'version': '35',
        'selenium-version': '2.42.2',
        'platform': 'OS X 10.9'
    }
    /*, {
        'browserName': 'firefox',
        'name': 'Protractor smoke tests',
        'version': '29',
        'selenium-version': '2.42.2'
    }, {
        'browserName': 'firefox',
        'name': 'Protractor smoke tests',
        'version': '30',
        'selenium-version': '2.42.2'
    }, {
        'browserName': 'internet explorer',
        'name': 'Protractor smoke tests',
        'version': '11',
        'selenium-version': '2.42.2',
        'platform': 'Windows 7'
    }, {
        'browserName': 'internet explorer',
        'name': 'Protractor smoke tests',
        'version': '10',
        'selenium-version': '2.42.2',
        'platform': 'Windows 7'
    }*/
    ],

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',


    suites: {
        user1Login: 'loginSpec.js',
        performOperation: 'perform.js',
        User2Login: 'user2Login.js',
        performUser2Operation: 'performUser2.js',

    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000
    },

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '../tmp/screenshots'
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'screenshots'
        }).getJasmine2Reporter());
    }

};
