class Login_po{
    EnterURL(){
        cy.visit('https://tutorialsninja.com/demo/')
    }
    Register(){
        cy.get('a[title="My Account"]').click();
        // select register option
        cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
        //Enter the name
        cy.get('input[name="firstname"]').type('Anjali');
        //Enter the last name
        cy.get('input[name="lastname"]').type('Shaw');
        //Enter the email
        cy.get('input[name="email"]').type('shawanjali18061@gmail.com');
        //Enter the number
        cy.get('input[name="telephone"]').type('9830814266');
        //Enter the password
        cy.get('input[name="password"]').type('Magic#');
        //confirm the password
        cy.get('input[placeholder="Password Confirm"]').type('Magic#');
        // click the radio button
        cy.xpath('(//label[@class="radio-inline"])[2]').click();
        // check the checkbox
        cy.xpath('//input[@type="checkbox"]').click();
        // select the submit button
        cy.xpath('//input[@type="submit"]').click();
        // select the MY account password from menu
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"])[1]').click();
        // select the change password option
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/password"])[1]').click();
        // enter the new password
        cy.xpath('//input[@id="input-password"]').type('Hello#');
        //confirm the password
        cy.xpath('//input[@placeholder="Password Confirm"]').type('Hello#');
        //click on submit button
        cy.xpath('//input[@type="submit"]').click();
       // select logout option
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/logout"])[2]').click();
        // Click the submit option
        cy.get('a[class="btn btn-primary"]').click();
        
        
    }
    Search(){
        cy.get('a[title="My Account"]').click();
        //click on the login option of My account
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"])[1]').click();
        //enter the registered email
        cy.get('input[name="email"]').type('shawanjali0708@gmail.com');
        //enter the registered password
        cy.get('input[name="password"]').type('Hello#');
        //click continue button
        cy.get('input[type="submit"]').click();
        //select the desktops button
        cy.wait(2000);
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20"])[1]').click();
        //select the show allDesktop option
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27"])[1]').click();
        //
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18"])[1]').click();
        //select a product
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/category&path=18"])[2]').click();
        // select product link
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&path=18&product_id=47"])[1]').click();
        //select product to add to cart option
        cy.xpath('//button[@class="btn btn-primary btn-lg btn-block"]').click();
        // Select the shopping cart option
        cy.xpath('(//i[@class="fa fa-shopping-cart"])[1]').click();

        cy.xpath('(//i[@class="fa fa-share"])[1]').click();
        cy.get('input[id="button-payment-address"]').click();
        //select the continue option
        cy.get('input[id="button-shipping-address"]').click();
        //select the continue button 
        cy.get('input[id="button-shipping-method"]').click();
        //select the check box
        cy.get('input[type="checkbox"]').click();
        cy.get('input[id="button-payment-method"]').click();
        // select the cnfirm option
        cy.xpath('//input[@value="Confirm Order"]').click();
        cy.xpath('//a[@class="btn btn-primary"]').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"])[3]').click();
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/edit"])[1]').click();
        cy.xpath('//input[@type="submit"]').click();
        //select change password option
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/password"])[1]').click();
        // Enter password
        cy.get('input[id="input-password"]').type('Hello4#');
        //Enter the confirm password
        cy.xpath('//input[@name="confirm"][1]').type('Hello4#');
        // select continue option
        cy.get('input[type="submit"]').click();
       
    }
    SearchBox(){
        cy.get('a[title="My Account"]').click();
        //click on the login option of My account
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"])[1]').click();
        //enter the registered email
        cy.get('input[name="email"]').type('shawanjali0708@gmail.com');
        //enter the registered password
        cy.get('input[name="password"]').type('Hello4#');
        //click continue button
        cy.get('input[type="submit"]').click();
         //select the desktops button
            
        cy.get('input[name="search"]').type('iMac'); // search for the existing product
        cy.get('i[class="fa fa-search"]').click();  // seclect the search button
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=product/product&product_id=41&search=iMac"])[2]').click(); // select the product 
        cy.xpath('//button[@class="btn btn-primary btn-lg btn-block"]').click(); //add the product to cart
        cy.xpath('(//span[@class="hidden-xs hidden-sm hidden-md"])[5]').click({force:true}); // click on my account option
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/password"])[1]').click();


    }

}
export default Login_po;