<template >
    <Nav></Nav>
    <router-view></router-view>
</template>
<script setup>
import {ref,inject} from 'vue'
import Nav from './nav.vue'
</script>