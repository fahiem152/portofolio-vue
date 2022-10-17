<!-- eslint-disable vue/multi-word-component-names -->

<script>

</script>
<template>
    <nav>
        <div class="logo">
            <a href="/">Website Portofolio Pribadi</a>
        </div>


        <ul>
            <li><a href="/">HomePage</a></li>
            <li><a href="/">ContactForm</a></li>
            <li><a href="/">Projects</a></li>
        </ul>
    </nav>
</template>

<style>
nav {
    margin-top: -65px;
    display: flex;
    justify-content: space-around;
    background-color: whitesmoke;
    height: 75px;
    align-items: center;
    padding: 5px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    top: 0;
}

nav ul {
    display: flex;
    list-style: none;
    width: 40%;
    justify-content: space-between
}

nav ul li a {
    text-decoration: none;
    font-size: 20px;
    color: #333;
    font-weight: 500;


}

nav li a:hover {
    color: aqua;
    background-color: transparent;
}
.logo a:hover{
    background-color: transparent;
    color: aqua;
}
.logo a{
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #333;
}
  
@media screen and (max-width: 801px) {

    nav  {
        width: 100%;
    }
    .logo a{
        font-size: 24px;
        letter-spacing: 1px;
    }
    nav ul li{
        margin-right: 25px;
    }
    nav ul li a{
        font-size: 16px;
        margin-left: -20px;
               
    }
}

@media screen and (max-width: 429px) {
    nav ul {
        display: none;
    }
    .logo{
        text-align: center;
        justify-content: center;
    }
    .logo a{
        letter-spacing: 2px;
        font-size: 16px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
}
</style>