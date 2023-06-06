<script>
import { reactive } from 'vue';
import { experience } from '../assets/experience';
export default {
    name: "ExperiencePorto",
    setup(){
        const state = reactive(experience["experience"])
        return {
            state,
        }
    },
//     methods: {
//     redirectToExternalWebsite(url) {
//       window.location.href = url;
//     }
// }
}
</script>
<template>
    <Section id="Experience">
        <h1 class="judul-list">Experience</h1>
        <div class="containerExperience">
            <div class="serviceExperience" v-for="experience in state" :key="experience.id">
                <h1>{{experience.Perusahaan}}</h1>
                <h2>{{experience.jabatan}}</h2>
                <p>{{experience.durasi}}</p>
                <p>{{experience.Lokasi}}</p>

                <br>
                <p>{{experience.task}}</p>

            </div>
        </div>
    </Section>
</template>
<style>
@import "@/assets/main.css";
</style>