<svelte:head>
    <title>Learning outcomes - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6">
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/learning-outcomes', 'Learning outcomes']
            ]} />

            <h1 class="cosi-title-1">Learning outcomes</h1>

            <h3 class="cosi-title-2 mt-16 mb-4">
                At the end of the COSI Programme, the student should be able to...
            </h3>
            <ul class="cosi-ul">
                <li>Describe and apply fundamental aspects of computational colour science and data science, optics and photonics, measurement systems and spectral technologies, digital imaging and computer vision, maths and computation</li>
                <li>Implement and apply current colour and spectral technologies and other High-Tech devices used in digital imaging, demonstrating the ability to design and implement colour data processing algorithms</li>
                <li>Calculate a range of colour quantities and image quality quantities, apply transforms, derive and implement colour and image metrics</li>
                <li>Analyse colour technology and machine vision problems into components, construct solutions and design processing workflows</li>
                <li>Model colour and digital image processes and predict a range of quantities including visual and psychometric response, colour appearance, perception of quality, spectral and colorimetric reproduction, 2D and 3D spatial models, display functions</li>
                <li>Evaluate own and previous work from both theoretical, practical and application perspective</li>
            </ul>

            <p class="cosi-p mt-20 pt-4 italic" style="color: #494949; border-top: 1px solid #ddd;">
                The definition of above learning qualities are variable as they are the result of the close involvement of our industrial partners in the learning design of COSI. Hence they are likely to change from one semester to another to best meet the requirements of employers.
            </p>
        </div>
    </div>
</main>
