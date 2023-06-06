<script>
import HeaderPorto from '../components/HeaderPorto.vue';
import ContactForm from '../components/ContactForm.vue';
import ListProject from '../components/ListProject.vue';
import Navbar from '../components/Navbar.vue';
import HomePorto from '../components/HomePorto.vue';
import CoursePorto from '../components/CoursePorto.vue';
import ExperiencePorto from '../components/ExperiencePorto.vue';
import SkillPorto from '../components/SkillPorto.vue';


export default {
    name: "PortofolioView",
    components: { HeaderPorto, ContactForm, ListProject, Navbar, HomePorto, CoursePorto, ExperiencePorto, SkillPorto },
}
</script>
<template>
    <main>
        <Navbar/>
        <HomePorto />
        <SkillPorto/>
        <ExperiencePorto/>
        <CoursePorto/>
         <!-- <SkillPorto/> -->
        <!-- <ContactForm /> -->
        <ListProject/>
    </main>
</template>

