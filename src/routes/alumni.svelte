<svelte:head>
    <title>Alumni - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[ ['/', 'Home'], ['/alumni', 'Alumni'] ]} />

            <h1 class="cosi-title-1">Alumni</h1>

            <h2 class="cosi-title-2 mt-10 mb-4">
                What are they up to?
            </h2>

            <p class="cosi-p">
                Bosnian CIMET student Samra Tanovic, who've undertook her master thesis at the Color Imaging Lab, was interviewed for the TV show 'Tesis', in channel 'Canal Sur 2'. The interview was broadcasted on May the 6th, 2011. She is designing an algorithm to detect electrical wires automatically using an infrared camera, to avoid helicopter accidents.
            </p>

            <iframe
                width="766" height="378" src="https://www.youtube.com/embed/wAfGPieu8uc"
                title="Una estudiante bosnia en la Universidad de Granada: Erasmus e investigadora"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

            <h2 class="cosi-title-2 mt-10 mb-4">
                Alumni embrace careers as researchers
            </h2>
            <p class="cosi-p">
                In 2014, we are congratulating our CIMET alumni for their achievements.
            </p>
            <p class="cosi-p">
                It was a very rich academic year for CIMET cohort 2 (2009-2011) alumni, continuing doctoral studies after their CIMET Master Degree and who've completed and defended their PhD thesis
            </p>
            <ul class="cosi-ul">
                <li>
                    Abul HASNAT defended his PhD on <span class="font-bold">"Unsupervised 3D image clustering and extension to joint color and depth segmentation"</span> the 1st of October 2014, and he published his findings on 4 papers in high ranked conferences that year
                </li>
                <li>
                    Peng WANG defended her PhD on <span class="font-bold">"Historical handwriting representation model dedicated to word spotting application"</span> the 18th of November 2014, the same year she published 3 papers in high ranked conferences and a paper in a journal.
                </li>
            </ul>

            <p class="cosi-p mt-6">
                It was also a very fruitful academic year for CIMET cohort 1 (2008-2010) alumni, with 2 PhD defenses:
            </p>
            <ul class="cosi-ul">
                <li>Hasan SHEIKH FARIDUL defended his PhD on <span class="font-bold">"Analysis of 3D Color Matches for the Creation and Consumption of Video Content"</span>. He did his PhD at Technicolor. During his PhD he published several patents and papers. One of his papers on “Survey of Color Mapping and its Applications” was published in <a href="https://sites.google.com/site/infofaridulhasan/" class="external">Stars in Eurographics 2014</a>. Hasan works now as a postdoctoral researcher at the Security & Content Protection Labs of Technicolor Research and Innovation.
                </li>
                <li>Raju SHRESTHA defended his PhD on <a href="http://english.hig.no/imt/research/colourlab/news/raju_shrestha_defended_phd_thesis" class="external"><span class="font-bold">"Multispectral imaging: Fast acquisition, capability extension, and quality evaluation"</span></a> the 9th of December 2014. He published during his PhD 16 peer-reviewed scientific publications, including 3 journal papers.</li>
            </ul>
        </div>
    </div>
</main>
