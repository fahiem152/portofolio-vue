<script>
import { reactive } from 'vue';
import { project } from '../assets/project';

import { mapState } from 'pinia';
// import projectStore from '../stores/project.js';

export default {
    name: "ListProject",
    // computed: {
    //     ...mapState(projectStore, ["g$listproject"])
    // },
    
    setup()  {
        const state = reactive(project["project"]);
        return {
            state,
        };
    },
    
    // components: { BaseCard }
};
    

</script>
<template>
    <section id="Project">
    <h1 class="judul-list">Project</h1>
    <div class="list-project" >


        
    <div class="container" v-for="(project, index) in state" :key="index">
        <h4>{{ project.title }}</h4>
        <img :src= "project.image">
        <router-link :to="{name: 'productdetail', params: {id : project.id} }">
            <button class="detail" >Detail Project</button>
        </router-link>
        
    </div>
    </div>
</section>
</template>
<style>

@import "@/assets/main.css";


</style>