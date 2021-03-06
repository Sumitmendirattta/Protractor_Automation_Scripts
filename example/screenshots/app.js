angular.module('reportingApp', [])
    .controller('ScreenshotReportController', function() {
        this.getParent = function(str) {
            var arr = str.split('|');
            str = "";
            for(var i=arr.length-1; i>0; i--) {
                str += arr[i] + " > ";
            }
            return str.slice(0, -3);
        };
        this.getShortDescription = function(str) {
            return str.split('|')[0];
        };
        this.nToBr = function(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        };
        this.getFilename = function(str) {
            return str.replace(/^.*[\\\/]/, '');
        };
        this.passCount = function() {
            var passCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.passed) passCount++;
            }
            return passCount;
        };
        this.pendingCount = function() {
            var pendingCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.pending) pendingCount++;
            }
            return pendingCount;
        };
        this.failCount = function() {
            var failCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(!result.passed && !result.pending) failCount++;
            }
            return failCount;
        };
        this.results =
[{"description":"should not let you log into the application with wrong userid and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00620007-002f-0070-0062-003400550001.png"},{"description":"should not let you log into the application with wrong userid and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"0099005c-00ae-008a-00d1-00c8009900e7.png"},{"description":"should not let you log into the application when user enters only  userid|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00f6000c-006b-0077-0097-006f004e0063.png"},{"description":"should not let you log into the application when user enters only  userid|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00d8009c-00f3-0082-0062-00e500cb00f3.png"},{"description":"should not let you log into the application when user enters only  password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00e500ad-006d-008b-00ef-006f00570042.png"},{"description":"should not let you log into the application when user enters only  password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00e600e0-0006-00ec-0039-0034008a00d0.png"},{"description":"should let you log into the application with right username and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00d5005c-0021-00da-002a-00f00026001a.png"},{"description":"should let you log into the application with right username and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"001500e6-0088-0052-0099-005200c40091.png"},{"description":"should let you click on menu icon|The application","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.","trace":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\Sumit.SUMIT\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:3907:23)\n    at ontimeout (timers.js:386:14)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)","screenShotFile":"0049003d-006c-00d1-00be-00230091004e.png"},{"description":"should let you click on menu icon|The application","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.","trace":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\Sumit.SUMIT\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:3907:23)\n    at ontimeout (timers.js:386:14)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)","screenShotFile":"006f00e4-0012-008e-0080-004400680062.png"},{"description":"should logout of the application|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00f300cd-006f-002e-002a-004d00d300fb.png"},{"description":"should logout of the application|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00ea00a6-0068-00f5-00a5-008500c10055.png"},{"description":"should let you log into the application with right username and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"009d0050-0060-009b-005a-00b00099007c.png"},{"description":"should let you log into the application with right username and password|The application","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"001b000d-00c2-005a-00ae-007600d3008d.png"},{"description":"should let you click on menu icon|The application User 2","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00350037-0017-00e3-0027-00c500a9005c.png"},{"description":"should let you click on menu icon|The application User 2","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"004c0094-00ba-003a-00be-00f600d00061.png"},{"description":"should logout of the application|The application User 2","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"000e00f0-0084-0033-00f5-004d00d2006c.png"},{"description":"should logout of the application|The application User 2","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"58.0.3029.110"},"message":"Passed.","trace":"","screenShotFile":"00380078-0091-00f6-0055-009c00690061.png"}];
    });