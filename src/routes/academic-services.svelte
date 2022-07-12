<svelte:head>
    <title>Academic services - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[ ['/', 'Home'], ['/alumni', 'Academic Services'] ]} />

            <h1 class="cosi-title-1">Academic services</h1>
            
            <h2 class="cosi-title-2 mt-10 mb-4">
                Academic Coordinator of the Programmes
            </h2>
            <ul class="cosi-p">
                <li>S. A. Amirshahi, Norwegian University of Science and Technology, Norway.</li>
            </ul>

            <h2 class="cosi-title-2 mt-10 mb-4">
                Local Academic Coordinators
            </h2>
            <p class="cosi-p italic">
                (One for each university)
            </p>
            <ul class="cosi-p">
                <li>S. A. Amirshahi, Norwegian University of Science and Technology, Norway</li>
                <li>A. Trémeau, University Jean Monnet, France</li>
                <li>J. Nieves, University of Granada, Spain</li>
                <li>M. Hauta-Kasari, University of Eastern Finland, Finland</li>
            </ul>

            <h2 class="cosi-title-3 mt-10 mb-4">
                Local academic coordinators are responsible for
            </h2>
            <ul class="cosi-ul">
                <li>Implementation of <a href="/amb" class="external">AMB</a> and <a href="/qab" class="external">QAB</a> decisions
                </li>
                <li>Ensuring overall consistency of curriculum in their institutions and recruitment of lecturers and guest lecturers
                </li>
                <li>Ensuring overall teaching delivery and learning outcome validation process
                </li>
                <li>Managing financial contribution to finance teaching delivery and administrative costs
                </li>
                <li>Suggesting Master Thesis topics from their institution research labs
                </li>
                <li>Providing necessary feedback and data to coordinators, and notably for technical and financial reporting activities</li>
            </ul>
        </div>
    </div>
</main>
