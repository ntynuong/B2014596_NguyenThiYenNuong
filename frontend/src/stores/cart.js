import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {

    state() {
        return {
            // cartItems: [],
            totalQuantity: 0, // so luong san pham trong gio hang
            selectedItems: [],
        };
    },
    actions: {

        // addProduct(product) {
        //     const existingProduct = this.cartItems.find((p) => p._id === product._id);
        //     if (existingProduct) {
        //         console.log("tang quantity", product.quantity);
        //         existingProduct.quantity += product.quantity;
        //     } else {
        //         console.log("tang quantity", product.quantity);
        //         this.cartItems.push({ ...product, quantity: product.quantity });
        //     }
        // },

        // deleteProduct(productId) {
        //     const index = this.cartItems.findIndex(item => item._id === productId);
        //     if (index !== -1) {
        //         this.cartItems.splice(index, 1);
        //         this.updateIconCartQuantity(); // Cập nhật số lượng sản phẩm trong biểu tượng giỏ hàng
        //     }
        // },

        // updatetotalQuantity(total) {
        //     this.totalQuantity = total;
        // },

        // increaseIconCartQuantity(item) {
        //     console.log("tang quantity", item.quantity);
        //     item.quantity++;
        //     this.updateIconCartQuantity();
        // },
        // decreaseIconCartQuantity(item) {
        //     if (item.quantity > 1) {
        //         item.quantity--;
        //         this.updateIconCartQuantity();
        //     }
        // },

        // setSelectedItems(items) {
        //     console.log("luu", items)
        //     this.selectedItems = items;
        // },


        setTotalQuantity(value) {
            this.totalQuantity = value;
        },

        addSelectedItem(item) {
            this.selectedItems.push(item);
        },
        removeSelectedItem(item) {
            const index = this.selectedItems.indexOf(item);
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
            }
        },
        clearSelectedItems() {
            this.selectedItems = [];
        },

    },

    getters: {
        // //dang sai
        // getCartItems(state) {
        //     return state.cartItems;
        // },

        // count(state) {
        //     // return state.cartItems.length;
        //     return state.cartItems.length;
        // },

        getTotalQuantity(state) {
            return state.totalQuantity;
        }

    },

})
