const selectors = {
    header: '.js--header',
    mobileButton: '.js-mobile-menu-button',
};

class Header {
    constructor() {
        this.headerElement = document.querySelector(selectors.header);

        if(!this.headerElement) {
            return;
        }

        this.handleMobileMenuButton();
    }

    handleMobileMenuButton() {
        console.log('Dodaję obsługę mobilnego przycisku');
    }
}

// udostępnienie klasy w innych plikach / modułach
export default Header;