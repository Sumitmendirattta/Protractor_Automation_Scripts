
var Application = require('./common.js');
describe('The application', function() {

    beforeEach(function() {

        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);

    });


    it('should let you click on menu icon', function() {
        var application = new Application();

        browser.sleep(4000);
        var userInput =  element(By.xpath("//*[@id='navbar']/ul[1]/li/a")).click();

        browser.sleep(8000);
        expect(browser.getCurrentUrl()).toContain('sjsu.edu');

        element(By.xpath("//*[@id='navbar']/ul[1]/li/ul/li[7]/a")).click();

        browser.sleep(8000);
        expect(browser.getCurrentUrl()).toContain('SJAccess.asp');

        element(by.name('rdoDatabase')).click();

        browser.sleep(8000);

        element(by.name('chkPSAdmin')).click();

        browser.sleep(8000);

        var msgInput = element(by.id('txtPurpose'));
        msgInput.sendKeys("Regarding Updating of the issued bug");

        browser.sleep(8000);

        var buttonSave = element(by.cssContainingText('.btn-primary', 'Save'));
        buttonSave.click();
        browser.sleep(8000);

        expect(browser.getCurrentUrl()).toContain('SJAccessPending.asp');


    });

    it('should logout of the application', function() {
        browser.sleep(8000);

        element(By.xpath("//*[@id='navbar']/ul[2]/li/a")).click();

        element(By.xpath("//*[@id='navbar']/ul[2]/li/ul/li[2]/a")).click();

        browser.sleep(8000);

        expect(browser.getCurrentUrl()).toContain('http://apus.sjsu.edu:85/');

    });


});