import { defineStore } from 'pinia'

export const useAIMessagesStore = defineStore('ai_messages', {
   state: () => ({
        ai_messages: []
   }),
   getters: {
        get_ai_messages: (state) => state.ai_messages
   },
   actions: {
        add_ai_message(ai_message) {
            this.ai_messages.push(ai_message);
        }
   },
})