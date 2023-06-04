<script>
import HeaderPorto from '../components/HeaderPorto.vue';
import ContactForm from '../components/ContactForm.vue';
import ListProject from '../components/ListProject.vue';
import Navbar from '../components/Navbar.vue';
import HomePorto from '../components/HomePorto.vue';
import CoursePorto from '../components/CoursePorto.vue';

export default {
    name: "PortofolioView",
    components: { HeaderPorto, ContactForm, ListProject, Navbar, HomePorto, CoursePorto },
}
</script>
<template>
    <main>
        <Navbar/>
        <HomePorto />
        <!-- <CoursePorto/> -->
         <!-- <SkillPorto/> -->
        <!-- <ContactForm /> -->
        <ListProject/>
    </main>
</template>

