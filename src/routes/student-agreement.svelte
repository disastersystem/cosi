<svelte:head>
    <title>Student agreement - COSI</title>
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
                ['/student-agreement', 'Student agreement']
            ]} />

            <h1 class="cosi-title-1">Student agreement</h1>
            <p class="cosi-p">
                The Student Agreement is the “contract” between the Consortium (partnering universities) and the student.
                Those are the “rules of the game” for any students joining COSI, providing extensive information on rights
                and obligations of both the Consortium and the Students. It is signed between the student and the Coordinating
                Institution Norwegian University of Science and Technology during the inception week.
            </p>
            <a
                href="https://mastercolorscience.files.wordpress.com/2021/03/cosi_student_agreement_template.pdf"
                class="mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                style="display: inline-block; font-size: 13px; font-weight: bold; text-decoration: none; background: #253A90; color: white; padding: 10px 30px; border-radius: 1000px;"
            >
                <div class="flex items-center">
                    <div class="uppercase pr-4">Student agreement (.PDF)</div>
                    <!-- <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                    </svg> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </div>
            </a>
        </div>
    </div>
</main>
