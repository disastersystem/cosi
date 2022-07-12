<svelte:head>
    <title>Research - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'

    const theses = [
        { title: 'Fall detection using multiple camera tracking', author: 'Victoria RUDAKOVA' },
        { title: 'Video enrichment and objects tracking', author: 'Priyanto HIDAYATULLAH' },
        { title: 'Logvinenko\'s object color space theory in practice', author: 'Christoph GODAU' },
        { title: 'Detection of defects in grape tomatoes with novel technologies', author: 'Yu HU' },
        { title: 'Spectral imaging in medical applications', author: 'Kusse Sukuta BERSHA' },
        { title: 'Development and Optimization of demosaicing algorithm to interpolate color values obtained from a CMOS camera in a RoboCup scenario', author: 'Mohzdeh SEIFI' }
    ]

    const labs = [
        { name: 'Spectral Color Research group', adress: 'Joensuu', url: 'https://sites.uef.fi/spectral/' },
        { name: 'Institute of Photonics', adress: 'Joensuu', url: 'https://sites.uef.fi/photonics/' },
        // { name: 'InFotonics Center', adress: 'Joensuu', url: '' },
        { name: 'Color imaging lab', adress: 'Granada', url: 'http://colorimaginglab.ugr.es/' },
        { name: 'Optics department', adress: 'Granada', url: 'http://optica.ugr.es/' },
        { name: 'The Norwegian Color and Visual Computing Laboratory', adress: 'Gjøvik', url: 'http://www.colorlab.no/' },
        { name: 'Laboratoire Hubert Curien', adress: 'University Jean Monnet<br>Saint-Etienne, UMR CNRS 551', url: 'https://laboratoirehubertcurien.univ-st-etienne.fr/en/index.html' },
        { name: 'LABEX MANUTECH-SISE', adress: ' Saint-Etienne, Lyon', url: 'https://manutech-sise.universite-lyon.fr/' },
        { name: 'Tribology and System Dynamics Laboratory\'s (LTDS)', adress: 'University Jean Monnet<br>Saint-Etienne, UMR CNRS 551', url: 'http://ltds.ec-lyon.fr/spip/?lang=en' },
        { name: 'Laboratoire d\'Analyse des Signaux & des Processus Industriels', adress: 'University Jean Monnet<br>Saint-Etienne, EA 3059', url: 'https://laspi.univ-st-etienne.fr/fr/index.html' },
        { name: 'Laboratoire Charles Fabry', adress: 'Institut d\'Optique Graduate School<br>Palaiseau, UMR CNRS 8501', url: '' },
        { name: 'Centre de Recherche et de Restauration des Musées de France (C2RMF)', adress: ' Musée du Louvre<br>Paris, UMR CNRS 171', url: 'https://c2rmf.fr/' },
        { name: 'Georges Friedel Laboratory', adress: 'Ecole Nationale Supérieure des<br>Mines de Saint-Etienne, UMR 5307', url: '' },
        { name: 'Institut Fédératif de Recherche en Sciences Ingénierie et Santé', adress: 'IFRESIS - IFR INSERM 143', url: '' },
        { name: 'Centre des Matériaux Centre de Morphologie Mathématique', adress: 'Mines ParisTech<br>UMR CNRS 7633', url: 'https://www.minesparis.psl.eu/Recherche/Centres-de-recherche/Centre-de-morphologie-mathematique-CMM/' }
    ]
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div class="content-max-width">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/research', 'Research']
            ]} />

            <h1 class="cosi-title-1">
                Research
            </h1>

            <p class="cosi-headline">
                Nexus between research and teaching delivery is at the core of our programme.
                Take a look at some student theses and partner labratories to see some of the research we do.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-6">
                Former Theses 
            </h2>

            <ul class="cosi-ul">
                {#each theses as thesis}
                    <li>
                        { thesis.title }<br><span class="italic text-sm">{ thesis.author }</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="flex justify-center mt-20 mb-20">
        <div>
            <h2 class="cosi-title-2 mt-8 mb-8 text-center">
                Partner Laboratories
            </h2>

            <!-- <div class="flex flex-wrap" style="max-width: 1200px;"> -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" style="max-width: 1200px;">
                {#each labs as lab}
                    <a href="{lab.url}" target="_blank" class="mb-6 block w-full">
                        <div class="flex justify-between items-center p-6 mx-3" style="border: 1px solid #ddd; border-radius: 16px;">
                            <div class="w-full">
                                <div class="flex justify-between">
                                    <h3 class="cosi-title-5 mb-6">{ lab.name }</h3>
                                    <div style="width: 40px; color: #666;">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px; color: #666;" class="ml-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <p class="cosi-p text-sm" style="margin-bottom: 0px;">{@html lab.adress }</p>
                                </div>
                            </div>
                            <div>
                                <!-- <img src="/icons/arrow-right-black.svg" alt=""> -->
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</main>
