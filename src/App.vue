<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Home_Stats from './components/Home_Stats.vue';

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

  <main>    
    <Home_Stats :shopping_list_num=1 :items_in_list=2 :items_in_todo=3> </Home_Stats>
  </main>

</template>