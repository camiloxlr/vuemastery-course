var app = new Vue({

    el: '#app',

    data: {

        product: 'Money',

        image: './pics/money1.png',

        link: 'https://google.com',

        renderTheFirst: true,

        value: 100,

        showParagraph: true,

        details: ["100% paper", "Everyone wants it!"],

        variants: [

            {
                variantId: 1,
                variantColor: "green",
                variantImage: './pics/money1.png',
            },
            {
                variantId: 2,
                variantColor: "red",
                variantImage: './pics/moneyRed.png',
            }
        ],
        
        cart: 0,
    },

    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }

});