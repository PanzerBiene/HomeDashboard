<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/items">Items</RouterLink>
        <RouterLink to="/shopping_list">Shopping List</RouterLink>
        <RouterLink to="/chat">AI Chat</RouterLink>
        <RouterLink to="/preferences">Preferences</RouterLink>
      </nav>
      <div class="container">
        <h1> 
          Home Dashboard
        </h1>
      </div>
    </div>
  </header>
  <RouterView/>
</template>