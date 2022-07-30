<svelte:head>
    <title>Coporate relations / expert talks - COSI</title>
    <meta name="description" content="To enhance its outreach, capacity and effectiveness, the consortium has partnered with a large number of partners from the academic and private sector.">
</svelte:head>

<script>
    import BgLogo from '../components/BgLogo.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import ExternalLink from '../components/ExternalLink.svelte'
    import {fly} from 'svelte/transition'

    export let industry = [
        {
            name: 'Meta Platforms, Inc.',
            country: 'USA',
            logoUrl: '/partners/industry/meta.png',
            logoWidth: 170,
            url: 'https://about.facebook.com/'
        },
        {
            name: 'Hewlett-Packard (HP)',
            country: 'Spain',
            logoUrl: '/partners/industry/hp.png',
            logoWidth: 70,
            url: 'https://www.hp.com/'
        },
        {
            name: 'Huawei',
            country: 'France',
            logoUrl: '/partners/industry/Huawei.png',
            logoWidth: 70,
            url: 'https://www.huawei.com/en/'
        },
        {
            name: 'Sedoptica',
            country: 'Spain',
            logoUrl: '/partners/industry/sedoptica.png',
            logoWidth: 220,
            url: 'https://www.sedoptica.es/'
        },
        {
            name: 'COGNEX',
            country: 'Germany',
            logoUrl: '/partners/industry/COGNEX.png',
            logoWidth: 160,
            url: 'https://www.cognex.com/'
        },
        {
            name: 'Vilmorin-Mikado',
            country: 'France',
            logoUrl: '/partners/industry/vilmori-mikado.png',
            logoWidth: 150,
            url: 'https://www.vilmorinmikado.com/'
        },
        {
            name: 'Barco',
            country: 'France',
            logoUrl: '/partners/industry/barco.png',
            logoWidth: 80,
            url: 'https://www.barco.com/en/'
        },
        {
            name: 'Huddly',
            country: 'Norway',
            logoUrl: '/partners/industry/huddly.png',
            logoWidth: 140,
            url: 'https://www.huddly.com/'
        },
        {
            name: 'BARBIERI electronic snc',
            country: 'Italy',
            logoUrl: '/partners/industry/BARBIERI.png',
            logoWidth: 220,
            url: 'https://www.barbierielectronic.com/'
        },
        {
            name: 'MIHALY SAS',
            country: 'France',
            logoUrl: '/partners/industry/mihaly.png',
            logoWidth: 150,
            url: 'https://www.mihalygroup.fr/index-eng.html'
        },
        {
            name: '3DUniversum',
            country: 'Netherlands',
            logoUrl: '/partners/industry/3DUniversum.png',
            logoWidth: 90,
            url: 'https://3duniversum.com/'
        },
        {
            name: 'Spektralion AS',
            country: 'Norway',
            logoUrl: '/partners/industry/Spektralion.png',
            logoWidth: 170,
            url: '/'
        },
        {
            name: 'DXO',
            country: 'France',
            logoUrl: '/partners/industry/DXO.png',
            logoWidth: 120,
            url: 'https://www.dxo.com/'
        },
        {
            name: 'Chromasens',
            country: 'Germany',
            logoUrl: '/partners/industry/Chromasens.png',
            logoWidth: 180,
            url: 'https://www.chromasens.de/en'
        },
        {
            name: 'Picterus',
            country: 'Norway',
            logoUrl: '/partners/industry/picterus.png',
            logoWidth: 170,
            url: 'https://www.picterus.com/'
        }
    ]

    export let academic = [
        {
            name: 'KU Leuven',
            country: 'Belgium',
            logoUrl: '/partners/academic/kuleuven_cmyk_logo-2.png',
            logoWidth: 120,
            url: 'https://www.kuleuven.be/english/'
        },
        {
            name: 'University of Zagreb',
            country: 'Croatia',
            logoUrl: '/partners/academic/university of Zagreb.png',
            logoWidth: 80,
            url: 'https://www.unizg.hr/homepage/'
        },
        {
            name: 'University of Milan Bicocca',
            country: 'Italy',
            logoUrl: '/partners/academic/University of Milan Bicocca 1.png',
            logoWidth: 80,
            url: 'https://en.unimib.it/'
        },
        {
            name: 'National Cheng Kung University',
            country: 'Taiwan',
            logoUrl: '/partners/academic/img-layout-inspo 1.png',
            logoWidth: 80,
            url: 'https://web.ncku.edu.tw/'
        },
        {
            name: 'Toyohashi University of Technology',
            country: 'Japan',
            logoUrl: '/partners/academic/Group 27.png',
            logoWidth: 130,
            url: 'https://www.tut.ac.jp/english/'
        },
        {
            name: 'Federal University of Minas Gerais',
            country: 'Brazil',
            logoUrl: '/partners/academic/ufmg logo 1.png',
            logoWidth: 120,
            url: 'https://ufmg.br/'
        },
        {
            name: 'Tribhuvan University',
            country: 'Nepal',
            logoUrl: '/partners/academic/Tribhuvan University.png',
            logoWidth: 80,
            url: 'https://tribhuvan-university.edu.np/'
        },
        {
            name: 'University of Minho',
            country: 'Portugal',
            logoUrl: '/partners/academic/Universidade do Minho logo.png',
            logoWidth: 110,
            url: 'https://www.uminho.pt/EN/Pages/default.aspx'
        },
        {
            name: 'Chulalongkorn University',
            country: 'Thailand',
            logoUrl: '/partners/academic/Chulalongkorn University logo.png',
            logoWidth: 120,
            url: 'https://www.chula.ac.th/en/'
        },
        {
            name: 'Technological University of Tajikistan',
            country: 'Tajikistan',
            logoUrl: '/partners/academic/Technological University of Tajikistan 1.png',
            logoWidth: 80,
            url: 'https://www.chula.ac.th/en/'
        },
        {
            name: 'Khulna University',
            country: 'Bangladesh',
            logoUrl: '/partners/academic/Khulna University logo.png',
            logoWidth: 60,
            url: 'https://www.ku.ac.bd/'
        },
        {
            name: 'Amirkabir University of Technology',
            country: 'Iran',
            logoUrl: '/partners/academic/Amirkabir University of Technology.png',
            logoWidth: 110,
            url: 'https://aut.ac.ir/en'
        }
    ]
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/corporate-relations', 'Corporate Relations']
            ]} />

            <h1 class="cosi-title-1">
                Corporate relations
            </h1>

            <h2 class="cosi-title-2 mt-20 mb-4">
                Partners
            </h2>

            <p class="cosi-headline">
                To enhance its outreach, capacity and effectiveness, the consortium has partnered with a large number of partners from the academic and private sector.
            </p>

            <h3 class="cosi-title-4 mt-16 mb-8 text-center">
                Associated industrial partners
            </h3>

            <div class="flex justify-center flex-wrap">
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> -->
                {#each industry as partner}
                    <BgLogo>
                        <img src={ partner.logoUrl } alt="" class="block" style={"width: " + partner.logoWidth + "px;"}>
                        <div class="text-center mt-4">
                            <ExternalLink url={ partner.url }>
                                { partner.name }
                            </ExternalLink>
                        </div>
                        <p class="cosi-p italic p-0 m-0">
                            { partner.country }
                        </p>
                    </BgLogo>
                {/each}
            </div>

            <h3 class="cosi-title-4 mt-16 mb-8 text-center">
                Academic partners
            </h3>

            <div class="flex justify-center flex-wrap">
                {#each academic as partner}
                    <BgLogo>
                        <img src={ partner.logoUrl } alt="" class="block" style={"width: " + partner.logoWidth + "px;"}>
                        <div class="text-center mt-4">
                            <ExternalLink url={ partner.url }>
                                { partner.name }
                            </ExternalLink>
                        </div>
                        <p class="cosi-p italic p-0 m-0">
                            { partner.country }
                        </p>
                    </BgLogo>
                {/each}
            </div>

            <h2 class="cosi-title-2 mt-20 mb-6">
                Expert talks
            </h2>
            <p class="cosi-headline">
                To ensure to students the highest possible degree of academic excellence, innovation and relevance with industries' trends and challenges, COSI programme welcome industrial experts and researchers working in a variety of color - science related industries
            </p>
            <h3 class="cosi-title-3 mt-12">
                2015-2017
            </h3>

            <h4 class="cosi-title-4 mt-6 mb-4">
                Semester 1
            </h4>
            <ul class="cosi-ul">
                <li><span class="font-bold">Colorimetry applied to paint industry</span><br>Virgine Vurpillot from Becker industry (industrial coatings), France</li>
                <li><span class="font-bold">From Paper to Laminate</span><br>Pierre Caulet from Munksjö Arches SAS (pulp and paper technologies), France</li>
                <li><span class="font-bold">Media and entertainment</span><br>Jurgen Stauder from Technicolor (media and entertainment), France</li>
                <li><span class="font-bold">Intelligent lighting systems, a swift overview</span><br>Dr. Vineetha Kalavally from Monash University, Malaysia</li>
            </ul>

            <h4 class="cosi-title-4 mt-6 mb-4">
                Semester 2
            </h4>
            <ul class="cosi-ul">
                <li><span class="font-bold">Holoscope: An affordable approach to digital holography microscopy</span><br>Diego Andrade, researcher from Malaga University, Spain</li>
                <li><span class="font-bold">Research lines in his group</span><br>Shigeki Nakauchi from Toyohashi University of Technology, Department of Computer Science and Engineering, Japan</li>
                <li><span class="font-bold">High Dynamic Range (HDR) Imaging</span><br>Miguel Ángel Martínez, PhD student from UGR, Spain</li>
                <li><span class="font-bold">Acquisition of Yperspectral Images in Outdoor Enviroments... A Challanging Task</span><br>Jia Eckhard, researcher from the Color Imaging Lab at UGR, Spain</li>
            </ul>
        </div>
    </div>
</main>
