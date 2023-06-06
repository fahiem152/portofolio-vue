<script>
import { reactive } from 'vue';
import { course } from '../assets/course';


export default {
    name: "CoursePorto",
    setup(){
        const state = reactive(course["course"])
        return {
            state,
        }
    },
    methods: {
    redirectToExternalWebsite(url) {
      window.location.href = url;
    }
}
}
</script>
<template>
    <Section id="Course">
        <h1 class="judul-list">Course</h1>
        <div class="containerCourse">
            <div class="serviceCourse" v-for="course in state" :key="course.id">
                <h1>{{course.nama}}</h1>
                <p>{{course.penerbit}}</p>
                <p>{{course.tanggal}}</p>
          
                <div class="buttonDetail" @click="redirectToExternalWebsite(course.url)">Detail</div>
            </div>
        </div>
    </Section>
</template>
<style>
    @import "@/assets/main.css";

</style>