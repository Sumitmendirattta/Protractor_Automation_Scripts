
var Application = require('./common.js');
describe('The application', function() {

    beforeEach(function() {

        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        browser.get('http://apus.sjsu.edu:85/');

    });

    it('should let you log into the application with right username and password', function() {
        var application = new Application();

        var welcomePage = application.login().withCredentials('mscardina', 'test1234');

        browser.sleep(4000)

        expect(browser.getCurrentUrl()).toContain('http://apus.sjsu.edu:85/MainMenu.asp');

        expect(element(by.cssContainingText('.btn-primary', 'Instance Status')).isPresent());

        expect(element(by.cssContainingText('.btn-primary', 'Instance Status')).isPresent());

    });
});