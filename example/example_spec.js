describe('Application must', function() {

    beforeEach(function() {

        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        browser.get('http://apus.sjsu.edu:85/');

    });

  it('should load  the application on specified url', function() {

      expect(browser.getCurrentUrl()).toContain('sjsu.edu');

  });


  describe('Negative test cases ', function() {
      beforeEach(function() {

          browser.ignoreSynchronization = true
          browser.waitForAngularEnabled(false);
          browser.get('http://apus.sjsu.edu:85/');

      });

      it('when wrong user name is entered and password is not entered', function() {

          browser.wait(function() {
              return element(by.id('inputEmail')).isPresent();
          }, 5000);

          var userInput = element(by.id('inputEmail'));
          var userPassword = element(by.id('inputPassword'));
          var buttonSignInClick = element(by.cssContainingText('.btn-primary', 'Sign in'));

          browser.sleep(4000);
          userInput.click();
          browser.sleep(4000);

          userInput.sendKeys("Julie");
          browser.sleep(4000);
          buttonSignInClick.click();

          expect(browser.getCurrentUrl()).toContain('sjsu.edu');


      });

      it('when wrong no user name is entered but password is entered', function() {

          browser.wait(function() {
              return element(by.id('inputEmail')).isPresent();
          }, 5000);

          var userInput = element(by.id('inputEmail'));
          var userPassword = element(by.id('inputPassword'));
          var buttonSignInClick = element(by.cssContainingText('.btn-primary', 'Sign in'));

          browser.sleep(4000);
          userInput.click();
          browser.sleep(4000);

          userInput.sendKeys("Julie");
          browser.sleep(4000);
          buttonSignInClick.click();

          userInput.clear().sendKeys('myemail@myemail.com');
          userPassword.clear().sendKeys('mypassword');
          buttonSignInClick.click();

          expect(browser.getCurrentUrl()).toContain('sjsu.edu');


      });


      it('User Entres credientials to login with right user name and password', function() {

          browser.wait(function() {
              return element(by.id('inputEmail')).isPresent();
          }, 5000);

          var userInput = element(by.id('inputEmail'));
          var userPassword = element(by.id('inputPassword'));
          var buttonSignInClick = element(by.cssContainingText('.btn-primary', 'Sign in'));

          browser.sleep(4000);
          userInput.click();
          browser.sleep(4000);

          userInput.sendKeys("janderson");
          browser.sleep(4000);

          userPassword.clear().sendKeys('test1234');
          buttonSignInClick.click();

          browser.sleep(4000)

          expect(browser.getCurrentUrl()).toContain('http://apus.sjsu.edu:85/MainMenu.asp');

          expect(element(by.cssContainingText('.btn-primary', 'Instance Status')).isPresent());

          expect(element(by.cssContainingText('.btn-primary', 'Instance Status')).isPresent());
      });
  });
});
