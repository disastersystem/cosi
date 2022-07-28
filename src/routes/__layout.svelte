<script>
    import "../app.css"
    // import '@animxyz/core'

    import MainNavigation from '../components/MainNavigation.svelte'
    import Footer from '../components/Footer.svelte'
</script>

<svelte:head>
    <title>COSI - Master degree in Applied Colour Science.</title>
    <meta name="description" content="Become a leading expert in colour science! The COSI master programme is a Erasmus Mundus + Joint Master Degree. A 2-year Master degree in Applied Colour Science, brought to you by 4 European leading universities. The master is designed and operated by a unique world leading university-business cooperation of 4 European universities, many academic partners and industrial leaders across the globe.">
</svelte:head>

<!-- <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
</style> -->

<MainNavigation/>

<slot />

<Footer/>
