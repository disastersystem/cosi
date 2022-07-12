<svelte:head>
    <title>Legal notice - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center">
        <div class="mt-40" style="max-width: 750px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/legal-notice', 'Legal notice']
            ]} />

            <h1 class="cosi-title-1">Legal notice</h1>

            <h2 class="cosi-title-2 mt-10 mb-4">
                The European Commission support disclaimer
            </h2>

            <p class="cosi-p">
                The European Commission support for the production of this publication does not constitute endorsement of the contents which reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
                Information relating to individuals (personal data) is collected and used in accordance with the Regulation (EC) N° 45/2001 of the European Parliament and of the Council of 18.12.2000 on the protection of individuals with regard to the processing of personal data by the Community institutions and bodies and on the free movement of such data (OJ L8 of 12.1.2001, p. 1).The content of this website is published under the <a href="http://creativecommons.org/licenses/by-nc-nd/3.0/" class="external">Creative Commons BY-NC-ND 3.0 license</a>.
            </p>
        </div>
    </div>
</main>
