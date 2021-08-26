Vue.component('Prods', {
    props: ['list'],
    template: `
    <div class="main-our_project-card-wrp">
        
        <Product v-for="(item, index) in list" :key="index" :product="item"></Product>
        
    </div>
    `
});
Vue.component('Product', {
    props: ['product'],
    template: `
        <div class="main-our_project-card">
            
            <img class="main-our_project-card-img" :src="product.img_product" alt="Claritas Etiam Processus" width="370">
            <h3 class="main-our_project-card-title text_raleway_500">{{ product.product_name }}</h3>
            <span class="main-our_project-card-text text_montserrat_300">{{ product.price }}</span>
            <button class="main-our_project-card-link" @click="$parent.$emit('add', product)">
                <svg class="main-our_project-card-icon-link" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26">
                <path d="M23.499,11.242 L21.573,13.170 L18.386,16.359 C18.233,16.529 18.045,16.683 17.875,16.819 C16.102,18.217 13.750,18.524 11.722,17.724 C10.972,17.433 10.256,16.973 9.643,16.359 L12.284,13.715 C13.239,14.670 14.790,14.670 15.744,13.715 L17.772,11.686 L20.857,8.599 C21.812,7.644 21.812,6.091 20.857,5.137 C19.903,4.182 18.352,4.182 17.397,5.137 L14.943,7.593 C13.409,6.877 11.654,6.757 10.035,7.217 L14.756,2.494 C17.159,0.089 21.096,0.089 23.499,2.494 C25.919,4.915 25.919,8.837 23.499,11.242 ZM14.262,8.293 C15.011,8.582 15.727,9.042 16.341,9.656 L13.699,12.301 C12.745,11.345 11.194,11.345 10.239,12.301 L5.126,17.416 C4.171,18.372 4.171,19.922 5.126,20.878 C6.080,21.834 7.631,21.834 8.586,20.878 L10.938,18.524 C12.949,19.327 13.495,19.394 15.846,18.849 L11.228,23.521 C8.825,25.927 4.887,25.927 2.484,23.521 C0.081,21.117 0.081,17.178 2.484,14.774 L7.597,9.656 C7.665,9.589 7.751,9.503 7.836,9.435 C9.625,7.831 12.131,7.439 14.262,8.293 Z"/>
                </svg>
            </button>
            <button class="main-our_project-card-search">
                <svg  class="main-our_project-card-icon-search" 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="26" height="25">
                <path d="M25.456,24.172 C25.135,24.489 24.714,24.646 24.293,24.646 C23.873,24.646 23.451,24.489 23.130,24.172 L18.795,19.901 C16.902,21.348 14.535,22.218 11.959,22.218 C5.793,22.218 0.777,17.276 0.777,11.202 C0.777,5.128 5.793,0.186 11.959,0.186 C18.125,0.186 23.141,5.128 23.141,11.202 C23.141,13.572 22.370,15.764 21.073,17.563 L25.456,21.881 C26.098,22.514 26.098,23.540 25.456,24.172 ZM11.960,2.778 C7.245,2.778 3.409,6.557 3.409,11.202 C3.409,15.847 7.245,19.626 11.960,19.627 C14.064,19.627 15.990,18.871 17.481,17.624 C17.941,17.240 18.355,16.805 18.724,16.336 C19.840,14.913 20.510,13.135 20.510,11.202 C20.510,6.557 16.674,2.778 11.960,2.778 ZM16.810,9.581 C16.625,9.668 16.429,9.711 16.234,9.711 C15.747,9.711 15.280,9.444 15.052,8.983 C14.347,7.559 12.911,6.674 11.304,6.674 C10.578,6.674 9.989,6.094 9.989,5.377 C9.989,4.663 10.578,4.082 11.304,4.082 C13.925,4.082 16.268,5.525 17.417,7.847 C17.735,8.491 17.464,9.267 16.810,9.581 Z"/>
                </svg>
            </button>
            
        </div>
    `
})

{/* <Prods :list="filterProducts" @add="addProduct"></Prods> */}