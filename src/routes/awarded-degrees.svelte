<svelte:head>
    <title>Awarded degrees - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import LinkCard from '../components/LinkCard.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import {fly} from 'svelte/transition'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/awarded-degrees', 'Awarded Degrees']
            ]} />

            <h1 class="cosi-title-1">Awarded degrees</h1>

            <h3 class="cosi-headline">
                Successful completion of the COSI Erasmus Mundus Joint Master Degree will result in the award of multiple Master's degrees (i.e. 4 national diplomas issued by 4 higher education institutions from 4 European countries and fully recognized in these respective countries). In line with the Bologna Accords, those degrees benefit from a wide recognition in Europe and beyond.
            </h3>

            <h2 class="cosi-title-2 mb-4 mt-10">
                Degrees
            </h2>
            <h3 class="cosi-title-3 mb-4 mt-10">
                Norwegian University of Science and Technology
            </h3>
            <p class="cosi-p">
                <span class="font-bold">Official name:</span> Master in Computational Colour and Spectral Imaging
            </p>

            <h3 class="cosi-title-3 mb-4 mt-10">
                University Jean Monnet
            </h3>
            <p class="cosi-p">
                <span class="font-bold">Official name:</span>
                Master Optics, Image, Vision, Multimedia, as approved by the French Ministry of Higher Education and Research since 2004 and recently re-accredited A+; Arrêté du 10 octobre 2011, Reference CNESER 20070679;Diplôme d'Université “Computational Colour and Spectral Imaging” on behalf of COSI consortium.
            </p>
            <p class="cosi-p">
                <span class="font-bold">English translation:</span>
                Master Optics, Image, Vision, Multimedia, Master COSI / Computational Colour and Spectral Imaging
            </p>

            <h3 class="cosi-title-3 mb-4 mt-10">
                University of Granada
            </h3>
            <p class="cosi-p">
                <span class="font-bold">Official name:</span>
                Master Universitario en Ciencia y Tecnologia del Color
            </p>
            
            <h3 class="cosi-title-3 mb-4 mt-10">
                University of Eastern Finland
            </h3>
            <p class="cosi-p">
                <span class="font-bold">Official name:</span>
                Filosofian maisteri, tietojenkäsittelytiede
            </p>
            <p class="cosi-p">
                <span class="font-bold">English translation:</span>
                Master of Science in Computer Science, Computational Colour and Spectral Imaging
            </p>

            <h2 class="cosi-title-2 mb-4 mt-10">
                Diploma Supplement
            </h2>
            <p class="cosi-p">
                In addition to official diplomas and to ensure the best understanding and recognition of COSI graduates achievements, notably towards recruiters, COSI consortium will deliver to each student a personalized Diploma Supplement, signed by all awarding Higher Education Institutions and issued by Norwegian University of Science and Technology, the COSI coordinating institution, including:
            </p>
            <ul class="cosi-ul mb-12">
                <li>learning objectives and COSI consortium track-record and recognition
                </li>
                <li>overall organization of the COSI study programme (selection process, mobility, host institutions, learning outcomes methods of assessment, tuition language)                </li>
                <li>added value which it brings to the student with respect to learning outcomes (which have been developed along with recruiters from the industry)</li>
                <li>full transcript of all (120 ECTS credits minimum) obtained during the master course, concentration and grades obtained, Master Thesis subject</li>
                <li>awarded degrees in national languages and a legalized English translation</li>
            </ul>

            <div class="mt-8">
                <LinkCard title={'How to collect your diploma'} path="/diploma" />
            </div>

            <h2 class="cosi-title-2 mb-4 mt-20">
                What next?
            </h2>
            <p class="cosi-p">
                Thinking about working in the EU? Apply for the <a href="http://www.eu-bluecard.com/" class="external">EU blue card</a>.
            </p>
            <p class="cosi-p">
                Please keep in touch with us, we count on <a href="/alumni" class="external">alumni</a> to be ambassadors or our programmes,
                and why not <a href="/guest-lecturer" class="external">teach a course module</a>.
            </p>
        </div>
    </div>
</main>
