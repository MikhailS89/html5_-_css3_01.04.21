Vue.component('cart', {
    template: `
    <div class="active-basket header__cart text_montserrat_300" v-show="$root.$data.show">
        <cart-item v-for="item in $root.$data.basket" :key="item.id_product" :product="item"></cart-item>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['product'],
    template: `
    <div class="header__cart-lot">
        <img class="header__cart-lot-img" :src="product.img_product" alt="#" height="50">
        <p class="header__cart-lot-product">{{ product.product_name }}</p>
        <p class="header__cart-lot-cost">{{ product.price * product.quantity }}</p>
        <p class="header__cart-lot-quantity">{{ product.quantity }}</p>
        <span class="header__cart-lot-plus" @click="$parent.$emit('remove', product)">+</span>
    </div>
    `
})

