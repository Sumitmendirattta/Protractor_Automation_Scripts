(function() {
    var Application = function() {
        var app = this;
       // browser.get('http://apus.sjsu.edu:85/');

        app.login = function() {
            return new LoginPage();
        };

        var LoginPage = function() {
            var loginPage = this;
            loginPage.withCredentials = function(login, password) {
                var userInput = element(by.id('inputEmail'));
                var userPassword = element(by.id('inputPassword'));
                var buttonSignInClick = element(by.cssContainingText('.btn-primary', 'Sign in'));

                userInput.clear().sendKeys(login);
                userPassword.clear().sendKeys(password);
                buttonSignInClick.click();

                return new WelcomePage();
            };
        };

        var WelcomePage = function() {
            var welcomePage = this;
            welcomePage.getGreetings = function() {
                return;
            };
        };
    };

    module.exports = function() {
        return new Application();
    };
}());