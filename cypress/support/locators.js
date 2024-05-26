export const locators = {
    LOGIN: {
        USER: '[data-test="username"]',
        PASSWORD: '[data-test="password"]',
        BUTTON_LOGIN: '[data-test="login-button"]',
        MESSAGE_ERROR: '[data-test="error"]'
    },

    HEADER: {
        CAR: {
            CAR_ICON: '.shopping_cart_link',
            CAR_NOTIFICATION: '.shopping_cart_badge',
            CONTINUE_SHOPPING: '[data-test="continue-shopping"]',
            CHECKOUT: {
                BUTTON_CHECKOUT: '[data-test="checkout"]',
                INPUT_FIRST_NAME: '[data-test="firstName"]',
                INPUT_LAST_NAME: '[data-test="lastName"]',
                INPUT_POSTAL_CODE: '[data-test="postalCode"]',
                BUTTON_CONTINUE: '[data-test="continue"]',
                BUTTON_FINISH: '[data-test="finish"]'
            }
        },
        PRODUCT_SORT: '[data-test="product_sort_container"]',
        MENU: {
            BUTTON_MENU: '#react-burger-menu-btn',
            ALL_ITEMS: '#inventory_sidebar_link',
            ABOUT: '#about_sidebar_link',
            LOGOUT: '#logout_sidebar_link',
            RESET_APP_STATE: '#reset_sidebar_link',
            CLOSE_MENU: '#react-burger-cross-btn'
        },
    },

    PRODUCTS: {

        ITEM_NAME: '.inventory_item_name',

        ADD_BACKPACK: '[data-test="add-to-cart-sauce-labs-backpack"]',
        ADD_BIKE_LIGHT: '[data-test="add-to-cart-sauce-labs-bike-light"]',
        ADD_T_SHIRT: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        ADD_JACKET: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        ADD_ONESIE: '[data-test="add-to-cart-sauce-labs-onesie"]',
        ADD_T_SHIRT_RED: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',

        REMOVE_BACKPACK: '[data-test="remove-sauce-labs-backpack"]',
        REMOVE_BIKE_LIGHT: '[data-test="remove-sauce-labs-bike-light"]',
        REMOVE_T_SHIRT: '[data-test="remove-sauce-labs-bolt-t-shirt"]',
        REMOVE_JACKET: '[data-test="remove-sauce-labs-fleece-jacket"]',
        REMOVE_ONESIE: '[data-test="remove-sauce-labs-onesie"]',
        ADD_T_SHIRT_RED: '[data-test="remove-test.allthethings()-t-shirt-(red)"]'
    }
}
