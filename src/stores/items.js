import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
   state: () => ({
        items: [],
        new_items: []
   }),
   getters: {
        get_items: (state) => state.items,
        get_new_items: (state) => state.new_items,
   },
   actions: {
        addItem(item) {
            this.new_items.push(item);
        }
   },
})