<script>
export default {
    name: "HeaderPorto"
}
</script>
<template>
    <header>
        
        <div class="deskripsi">
            <h1>Ahmad Muhammad Fahiem</h1>
            <h3>Universitas AKI</h3><br> 
            <p>Seorang mahasiswa semester 5 dengan jurusan Teknik Informatika, domisili di Kabupaten Demak. Saya merupakan individu yang memiliki antusias dan motivasi tinggi. Sedang mencari kesempatan untuk mengembangkan kemampuan saya di bidang pengembang aplikasi. Saya sangat senang belajar hal baru untuk meningkatkan kemampuan saya. Hobi saya Berneang, Bermain Basket, Mendengarkan Music</p>
        </div>
        <img
            src="https://img1.pngdownload.id/20180605/ylu/kisspng-businessperson-clip-art-cartoon-man-5b173e4b598a71.4316264915282499313668.jpg">

    </header>

</template>
<style>
header {
    display: flex;
    width: 90%;
    color: whitesmoke;
    justify-content: space-between;
    margin: 24px;

}

img {
    width: 200px;
    border-radius: 25px;
    object-fit: cover;
}

.deskripsi {
    width: 70%;
}
.deskripsi p{
    text-align: justify;
    font-weight: 300;
    letter-spacing: 3px;
}
.deskripsi h1{
    color: aqua;
    font-weight: bold;
    font-size: 32px;
 
    letter-spacing: 5px;

}
@media screen and (max-width: 801px) {
    .deskripsi{
        margin-right: 10px;
    }
    .deskripsi h1{
        font-size: 20px;
    }
}
@media screen and (max-width: 429px) {
    header{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
    }
    .deskripsi{
        width: 100%;
        margin-bottom: 50px;
    }
    .deskripsi h1{
        font-size: 16px;
        letter-spacing: 1px;
    }
    .deskripsi p{
        letter-spacing: 1px;
    }
  
}
</style>