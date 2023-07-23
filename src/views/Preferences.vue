<script setup>
import { usePreferencesStore } from '../stores/preferences.js';

const preferences_store = usePreferencesStore();
const preferences = preferences_store.get_preferences;
const allergies = preferences_store.get_allergies;

function save_new_preferences(){
    const new_preferences = document.getElementById("preferences").value;
    const new_allergies = document.getElementById("allergies").value;
    preferences_store.set_preferences(new_preferences);
    preferences_store.set_allergies(new_allergies);
}

</script>
<template>

<main>    
    <label for="preferences">Preferences </label>
    <textarea type="text" id="preferences">{{ preferences }}</textarea>

    <br><br>
    
    <label for="allergies">Allergies </label>
    <textarea type="text" id="allergies">{{ allergies }}</textarea>

    <br><br>
    <button id="save_preferences" @click="save_new_preferences()">Save</button>
</main>

</template>