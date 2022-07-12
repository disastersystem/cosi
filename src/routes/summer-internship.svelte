<svelte:head>
    <title>Summer internship - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/summer-internship', 'Summer internship']
            ]} />

            <h1 class="cosi-title-1">Summer internship</h1>
            <h2 class="cosi-title-2 mt-10 mb-4">
                2016-2018 Summer Internship opportunities
            </h2>
            <ul class="cosi-ul">
                <li>University of Eastern Finland: FluxData video characterization. A student could use standard video test charts to analyze the video properties of the camera. Please contact Prof. Markku Hauta-Kasari.</li>
                <li>University of Eastern Finland: Computational 3D Imaging in Automated Insect Digitization Line. Please contact Prof. Markku Hauta-Kasari.
                </li>
                <li>University of Eastern Finland: Automated Imaging System for Stacked Images and Depth Images. Please contact Prof. Markku Hauta-Kasari.
                </li>
                <li>University of Eastern Finland: Natural History Image Big Data Storage and Analysis with Hadoop and Spark. Please contact Prof. Markku Hauta-Kasari.
                </li>
                <li>Universidad de Granada: "Comparison of Texture Features", state of the art in texture characterization and comparison with previous results (contact Prof. Rafael Huertas at UGR).
                </li>
                <li>Universidad de Granada: "Color vision tests with Variantor and EnChroma® spectacles", study of the glasses through psychophysical experiments (contact Prof. Rafael Huertas at UGR).</li>
                <li>Chromasens / Universidad de Granada:”Empirically quantifying statistic of reflectance and camera response data for a multi-spectral line-scan camera system” (proposed by Chromasens (Germany), contact prof. Eva M. Valero at UGR and Timo Eckhard at Chromasens)
                </li>
                <li>Universidad de Granada: "Multispectral image acquisition of organic pigments in different substrata for quantitative assessment of their aging process" (contact Prof. Juan Luis Nieves and Eva Valero at UGR).
                </li>
                <li>Universidad de Granada: "A Matlab GUI to explore first and second order image statistical descriptors" (already attributed).</li>
            </ul>
            <p class="cosi-p mt-6">
                Please use <a href="http://goo.gl/forms/Oe9HABDtBg" class="external">this form</a> to allow University Jean Monnet admnistrative staff to edit your placement agreement - irrespective of the place of your internship. Detailed signature process is available on <a href="/masters-thesis" class="external">this webpage</a>.
            </p>
        </div>
    </div>
</main>
