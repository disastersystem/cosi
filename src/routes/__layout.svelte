<script>
    import "../app.css";
    import MainNavigation from '../components/MainNavigation.svelte'
    import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
    <title>COSI - Computational Colour and Spectral Imaging</title>
</svelte:head>

<!-- <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
</style> -->

<MainNavigation/>

<slot />

<Footer/>
