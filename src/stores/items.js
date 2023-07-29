import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
   state: () => ({
        items: [],
        new_items: [],
        shopping_list_items: []
   }),
   getters: {
        get_items: (state) => state.items,
        get_new_items: (state) => state.new_items,
        get_shopping_list_items: (state) => state.shopping_list_items
   },
   actions: {
        addItem(item) {
            this.new_items.push(item);
        },
        add_shopping_list_item(item) {
          this.shopping_list_items.push(item);
        }
   },
})