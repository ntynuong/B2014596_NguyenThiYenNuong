import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {

    state() {
        return {
            totalQuantity: 0, // so luong san pham trong gio hang
        };
    },
    actions: {
        setTotalQuantity(value) {
            this.totalQuantity = value;
        },



    },

    getters: {
        getTotalQuantity: (state) => state.totalQuantity,

    },

});

