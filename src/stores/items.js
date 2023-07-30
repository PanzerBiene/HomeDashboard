import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
   state: () => ({
        items: [],
        shopping_list_items: []
   }),
   getters: {
        get_items: (state) => state.items,
        get_shopping_list_items: (state) => state.shopping_list_items
   },
   actions: {
        addItem(item) {
            this.items.push(item);
        },
        add_shopping_list_item(item) {
          this.shopping_list_items.push(item);
        },
        /**
         * loop over the length of shopping_list_items and pop each item
         */
        reset_shopping_list() {
          const shopping_list_length = this.shopping_list_items.length;
          for (let i = 0; i < shopping_list_length; i++) {
               this.shopping_list_items.pop();
          }
        },
        /**
         * loop over items and compare the name to that of the inputted item
         * if they match add the amounts together otherwise add a new item
         * @param {object} item 
         */
        buy_item(item) {
          const items_length = this.items.length;
          for (let i = 0; i < items_length; i++) {
               if (item.name == this.items[i].name) {
                    this.items[i].amount = (parseInt(this.items[i].amount) + parseInt(item.amount)).toString();
               }
               else {
                    this.addItem(item);
               }
          }
        }
   },
})