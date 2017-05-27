
var Application = require('./common.js');
describe('The application User 2', function() {

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
        expect(browser.getCurrentUrl()).toContain('SJAccessPending.asp');

        // var elm =  element(By.id('pendingTbl'));
        // elm.getText().then(function(table){
        //     browser.sleep(8000);
        //     var elm1 =   table.element(By.tagName('tbody'));
        //     elm1.getText().then(function(tbody){
        //
        //         browser.sleep(8000);
        //         var elm2 =    tbody.element(By.tagName('tr'));
        //         elm2.then(function(rows){
        //             // for(i=0; i<rows.length;i++)
        //             // {
        //                 rows[rows.length].element(By.tagName('td')).then(function(cols){
        //                     cols[0].click();
        //                     browser.sleep(8000);
        //                 });
        //            // }
        //         });
        //     });
        // });


        element(by.id('pendingTbl_info')).getText().then(function (value) {

            var res = value.split(" ");
            var count = res[3]-1;
            console.log('element clicked 1');
            $$("tbody tr").get(count).click();

            //get coulumn value for this element
            console.log('element clicked 2');
            browser.sleep(8000);

        });


    });

    it('should logout of the application', function() {
        browser.sleep(8000);

        element(By.xpath("//*[@id='navbar']/ul[2]/li/a")).click();

        element(By.xpath("//*[@id='navbar']/ul[2]/li/ul/li[2]/a")).click();

        browser.sleep(8000);

        expect(browser.getCurrentUrl()).toContain('http://apus.sjsu.edu:85/');

    });


});