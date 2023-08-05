<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <div class="wrapper container-fluid bg-nav-grey">
      <nav class="navbar">
        <h1 class="navbar-brand mx-2 text-black"> 
          Home Dashboard
        </h1>
        <RouterLink class="navbar-text mx-2 text-black" to="/">Home</RouterLink>
        <RouterLink class="navbar-text mx-2 text-black" to="/items">Items</RouterLink>
        <RouterLink class="navbar-text mx-2 text-black" to="/shopping_list">Shopping List</RouterLink>
        <RouterLink class="navbar-text mx-2 text-black" to="/chat">AI Chat</RouterLink>
        <RouterLink class="navbar-text mx-2 text-black" to="/preferences">Preferences</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>