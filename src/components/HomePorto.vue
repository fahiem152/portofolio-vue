<script>
import { reactive } from 'vue';

import { stack } from '../assets/stack';

export default {
    name: "HomePorto",
    methods: {
    downloadCV() {

      const downloadLink = 'https://drive.google.com/file/d/1kboqI2W0Dumv0NNp-43DOr2xVFg07pHJ/view?usp=sharing';
      window.open(downloadLink, '_blank');
    }
  }
    // setup() {
    //     const state = reactive(stack["stack"])
    //     return {
    //         state,
    //     }
    // }
}
</script>
<template>
    <section id="home">

        <div class="deskripsi">
            <h1>Hello, I'am Ahmad Muhammad Fahiem</h1>
            <p>
                I was born in Demak on May 1, 2002. I am currently 21 years old. I am studying at AKI University Semarang,
                majoring in informatics Engineering. I am delighted to learn new things to enhance my skills. I am
                meticulous and able to work collaboratively in a team. I have a keen interest in the field of software
                engineering, particularly in Mobile Apps development using Flutter.</p>
            <div class="containerContact">
                <div class="serviceContact">
                    <a href="mailto:amfahiem010502@gmail.com">
                        <img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"
                            alt="" srcset="">
                    </a>
                </div>
                <div class="serviceContact">
                    <a href="https://www.linkedin.com/in/ahmad-muhammad-fahiem-466741220/">
                        <img src="https://i.postimg.cc/Y9jPJr8B/pngegg.png" alt="" srcset="">
                    </a>
                </div>
                <div class="serviceContact">
                    <a href="https://api.whatsapp.com/send?phone=62895423467720">
                        <img src="https://i.postimg.cc/y6mqK5jt/pngwing-com.png" alt="" srcset="">
                    </a>
                </div>
                <div class="serviceContact">
                    <a href="https://www.instagram.com/fahiem152/">
                        <img src="https://i.postimg.cc/tgjPKs4L/pngwing-com-1.png" alt="" srcset="">
                    </a>
                </div>
                <div class="serviceContact">
                    <a href="https://github.com/fahiem152">
                        <img src="https://i.postimg.cc/CxxLB063/GitHub.png" alt="" srcset="">
                    </a>
                </div>
            </div>
            <br>
            <div class="button" @click="downloadCV">
                <p>Download CV</p>
            </div>
        </div>
        <img src="../assets/images/fotoo.jpg">

    </section>



    
</template>
<style>
@import "@/assets/main.css";
</style>