import { defineStore } from 'pinia'

export const usePreferencesStore = defineStore('preferences', {
   state: () => ({
        preferences: "",
        allergies: ""
   }),
   getters: {
        get_preferences: (state) => state.preferences,
        get_allergies: (state) => state.allergies
   },
   actions: {
        set_preferences(preferences) {
            this.preferences = preferences;
        },

        set_allergies(allergies) {
            this.allergies = allergies;
        }
   },
})