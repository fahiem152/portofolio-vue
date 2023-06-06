<script>
import { reactive } from 'vue';

import { stack } from '../assets/stack';

export default {
    name: "SkillPorto",
    setup() {
        const state = reactive(stack["stack"])
        return {
            state,
        }
    }
}
</script>
<template>
    <section id="skill">
        <h1 class="judul-list">Skills</h1>
        <div class="containerSkill">
            <div class="service" v-for="stack in state" :key="stack.id">
                <img :src="stack.image">
                <h4>{{ stack.name }}</h4>
                <!-- <router-link  :to="{name: 'productdetail', params: {id : project.id} }">
                    <button class="detail" >Detail Project</button>
                </router-link> -->

            </div>

        </div>

    </section>
</template>
<style>
@import "@/assets/main.css";</style>