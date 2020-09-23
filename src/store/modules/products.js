import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
    selected: {},
    products: [
        {
            id: 1,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 12,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 131,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 11,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 16,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 17,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 19,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 13,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 178,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 1867,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
        {
            id: 1093,
            rating: 4,
            img_url: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/a1.jpg",
            img_url2: "http://themes.pixelstrap.com/bigdeal/assets/images/layout-2/product/1.jpg",
            old_price: 56.21,
            price: 24.15,
            name: 'reader will be distracted.',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
        },
    ]
})

const getters = {
    product: state => {
        return state.selected
    },
    products: state => {
        return state.products
    }
}

const actions = {
    // async getProducts({
    //     commit
    // }) {
    //     let {
    //         data
    //     } = await //some method;
    //     commit('setProducts', data)
    // }
}

const mutations = {
    setProducts(state, data) {
        state.products = data
    },
    setProduct(state, product) {
        state.product = product
    },
    deleteProduct(state, id) {
        const products = [...state.products]
        const index = products.findIndex(p => p.id === id)
        if (index > -1) {
            products.splice(index, 1)
        }
        state.products = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}