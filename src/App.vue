<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/items">About</RouterLink>
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