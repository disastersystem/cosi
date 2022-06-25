<nav style="z-index: 10;">
    <div class="logo">
        <img src="logo.svg" alt="" style="width: 40px;">
        COSI
    </div>
    <div class="flex">
        <a href="/">Home</a>
        <!-- <a href="about">About COSI program</a> -->
        <p>About COSI program</p>
        <a href="career">Career prospects</a>
        <a href="research">Research</a>
        <!-- <a href="application">Application</a> -->
        <p>Application</p>
        <!-- <a href="contact">Contact</a> -->
        <p>Contact</p>
        <a href="news">News</a>
    </div>
    <!-- <button on:click={increment}>Icrement: { counter }</button> -->
</nav>

<style>
    .logo {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 22px;
    }
    nav {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #ddd;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
    }
    nav div a {
        display: block;
        padding: 15px 15px;
        color: #000;
        text-decoration: none;
    }
    nav div p {
        display: block;
        padding: 15px 15px;
        color: #000;
        text-decoration: none;
    }
</style>
