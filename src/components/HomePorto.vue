<script>
import { reactive } from 'vue';

import { stack } from '../assets/stack';

export default {
    name: "HomePorto",
    setup(){
        const state = reactive(stack["stack"])
        return {
            state,
        }
    }
}
</script>
<template>
    <section id="home">
        
        <div class="deskripsi">
            <h1>Hello, I'am Ahmad Muhammad Fahiem</h1>
            <p>
                I was born in Demak on May 1, 2002. I am currently 21 years old. I am studying at AKI University Semarang, majoring in informatics Engineering. I am delighted to learn new things to enhance my skills. I am meticulous and able to work collaboratively in a team. I have a keen interest in the field of software engineering, particularly in Mobile Apps development using Flutter.</p>
            <div class="button">
                <p>Download CV</p>
            </div>
        </div>
        <img
            src="../assets/images/fotoo.jpg">

    </section>

    <section id="Contact">
        <h1 class="judul-list">Contact</h1>
        <div class="containerContact">
            <div class="serviceContact">
                <img src="https://i.postimg.cc/MGpVDvKx/pngwing-com-2.png" alt="" srcset="">

            </div>
            <div class="serviceContact">
                <img src="https://i.postimg.cc/Y9jPJr8B/pngegg.png" alt="" srcset="">

            </div>
            <div class="serviceContact">
                <img src="https://i.postimg.cc/y6mqK5jt/pngwing-com.png" alt="" srcset="">

            </div>
            <div class="serviceContact">
                <img src="https://i.postimg.cc/tgjPKs4L/pngwing-com-1.png" alt="" srcset="">

            </div>
            <div class="serviceContact">
                <img src="https://i.postimg.cc/CxxLB063/GitHub.png" alt="" srcset="">

            </div>
          
           
        </div>

    </section>

    <section id="skill">
        <h1 class="judul-list">Skills</h1>
        <div class="containerSkill">
            <div class="service" v-for="stack in state" :key="stack.id">
                <img :src= "stack.image">
                <h4>{{ stack.name }}</h4>
                <!-- <router-link  :to="{name: 'productdetail', params: {id : project.id} }">
                    <button class="detail" >Detail Project</button>
                </router-link> -->
                
            </div>
           
        </div>

    </section>

</template>
<style>
@import "@/assets/main.css";

</style>