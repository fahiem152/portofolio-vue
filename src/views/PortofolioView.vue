<script>
import HeaderPorto from '../components/HeaderPorto.vue';
import ContactForm from '../components/ContactForm.vue';
import ListProject from '../components/ListProject.vue';
import Navbar from '../components/Navbar.vue';
export default {
    name: "PortofolioView",
    components: { HeaderPorto, ContactForm, ListProject, Navbar },
}
</script>
<template>
    <main>
        <Navbar/>
        <HeaderPorto />
        <ContactForm />
        <ListProject/>
    </main>
</template>

