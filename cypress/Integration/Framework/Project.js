import Link_po from "../../support/PageObject1/tutorialsNinja/link_po";
import Login_po from "../../support/PageObject1/tutorialsNinja/login1_po";
describe('Verify the changepassword functionality', () => {
    const login_po = new Login_po()
    const link_po =new Link_po();
    

    it.skip('Verify after login with valid name,email,telephone number,and password user are able to change password', () => {
        login_po.EnterURL()
        login_po.Register();
        link_po.linkclick('My Account');
       


        
    });
    it.skip('verify after searching for product Laptops&Notebooks option user are able to change password', () => {
        login_po.EnterURL();
        login_po.Search();
        link_po.linkclick('Shopping cart');
            
        
    });
    it('Verify after searching the products from search box user are able to change the password', () => {
        login_po.EnterURL();
        login_po.SearchBox();
        link_po.linkclick('Checkout');
        
    });

});


