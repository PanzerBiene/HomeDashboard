<script setup>
import ItemList from '../components/Item_List.vue';
const items = [{name: "Carrots", amount: 2}, {name: "Ice cream", amount: 1}];
</script>

<template>

    <main>
        Items
        <ItemList :items=items></ItemList>
    </main>

</template>