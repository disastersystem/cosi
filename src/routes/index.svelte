<svelte:head>
    <title>COSI - Master degree in Applied Colour Science.</title>
    <meta name="description" content="Become a leading expert in colour science! The COSI master programme is a Erasmus Mundus + Joint Master Degree. A 2-year Master degree in Applied Colour Science, brought to you by 4 European leading universities. The master is designed and operated by a unique world leading university-business cooperation of 4 European universities, many academic partners and industrial leaders across the globe.">
</svelte:head>

<script>
    // import {fly} from 'svelte/transition'

    // function actionWhenInViewport(e) {
    //     const observer = new IntersectionObserver(entries => {
    //         if (entries[0].isIntersecting) {
    //             // element in viewport
    //             console.log(entries)
    //         }
    //     }, options)

    //     observer.observe(e)
    // }

    import { onMount } from 'svelte'

	onMount(() => {
        let options = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0
        }

        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view')
                    observer.unobserve(entry.target)
                }
            })
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
        }

        const sections = Array.from(document.getElementsByClassName('section'))
        let observer = new IntersectionObserver(callback, options)

        for (let section of sections) {
            const fadeups = section.getElementsByClassName('fade-delay')
            for (let count = 0; count < fadeups.length; count++) {
                fadeups[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's')
            }

            observer.observe(section)
        }
	})
</script>

<!-- in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }} -->
<main>
    <!-- EAE0D5 -->
    <div class="section fade-up flex items-center" style="margin-top: 62px; background: #FDF8F5;">
        <div class="flex justify-center">
            <!-- mt-60 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40 -->
            <div class="flex justify-center">
                <div class="
                    pl-6 md:pl-6 lg:pl-20 xl:pl-20 1xl:pl-20 2xl:pl-60
                    pt-12 pb-12 md:pr-20 2xl:pr-40"
                >
                    <div class="fade-up fade-delay ">
                        <h3 class="uppercase text-sm md:text-md cosi-erasmus">
                            Erasmus Mundus + Joint Master Degree
                        </h3>

                        <h1 class="cosi-maintitle text-4xl xl:text-5xl font-bold xl:font-semibold">
                            Become&nbsp;a&nbsp;leading<br>expert&nbsp;in&nbsp;colour<br>science
                        </h1>
                    </div>

                    <p class="fade-up fade-delay cosi-main-subtitle">
                        2-year Master degree in Applied Colour Science,<br> brought to you by 4 European leading universities
                    </p>

                    <a
                        href="/about/overview-of-program"
                        class="
                            fade-up fade-delay mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 cosi-mainaction"
                    >
                        <div class="flex items-center">
                            <div class="uppercase pr-4">Learn about COSI</div>
                            <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- background-color: #E2AA3A; -->
        <div class="w-full hidden md:flex flex justify-end" style="height: 100%; overflow: hidden;">
            <!-- <img src="camera.png" alt="" class="hidden md:hidden lg:block" style="width: 500px;"> -->
            <!-- border-bottom-left-radius: 1000px; border-top-left-radius: 1000px; -->

            <!-- <div style="width: 970px; height: 572px;"> -->
                <img
                    src="people-smaller3.png" alt=""
                    class="hidden md:block"
                    style="height: 100%; object-fit: cover; object-position: top left;"
                >
            <!-- </div> -->
        </div>
    </div>

    <div class="section fade-up flex justify-center px-6 mt-20 md:mt-20 mb-8">
        <div style="width: 1000px;">
            <h2 class="cosi-title-2 mb-2" style="color: #253A90; margin-top: 10px;">
                <!-- Why join -->
                <!-- What makes us unique -->
                <!-- Why you should join -->
                A master program you won't<br>find anywhere else
            </h2>
        </div>
    </div>

    <div class="section fade-up flex justify-center px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 mb-20" style="max-width: 1000px;">
            <div class="w-full pr-10">
                <div style="height: 40px;">
                    <!-- <img src="icons/dollar.svg" alt="" style="display: inline-block; height: 100%;">
                    <img src="icons/grad-hat.svg" alt="" style="display: inline-block; height: 100%;"> -->
                    <img src="icons/dollar-green.svg" alt="" style="display: inline-block; height: 100%;">
                </div>
                <h2 class="cosi-title-4 mb-2" style="margin-top: 10px;">
                    Generous Scholarships
                </h2>
                <p style="color: #54567C;">
                    ERASMUS+ financial support and close links with industrial partners allow us to offer an ambitious
                    scholarship strategy to attract the best international students.
                </p>
                <div class="flex mt-6">
                    <a href="/scholarships" class=" px-4 py-2 flex items-center uppercase focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-offset-gray-100 focus:ring-indigo-500"
                    style="font-size: 13px; font-weight: bold; text-decoration: none; background: #fff;
                    border: 1px solid #253A90; color: #253A90; border-radius: 1000px;">
                        <span>Scholarship overview</span>
                        <div class="pl-2">
                            <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#253A90"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="w-full pl-0 md:pl-10 mt-16 md:mt-0">
                <div style="height: 40px;">
                    <img src="icons/medal-yellow.svg" alt="" style="display: inline-block; height: 100%;">
                </div>
                <h2 class="cosi-title-4 mb-2" style="margin-top: 10px;">
                    Global academic excellence meeting worldwide markets
                </h2>
                <p style="color: #54567C;">
                    Over the years COSI graduates have been employed in world leading industries and universities.
                </p>
            </div>
        </div>
    </div>

    <div class="section fade-up mobility-container relative flex justify-center">
        <div>
            <div class="flex justify-center">
                <div style="max-width: 1000px;">
                    <div class="grid grid-cols-2 px-6 lg:px-0 pt-20 pb-12">
                        <div>
                            <h2 class="cosi-title-4 mb-3 text-white" style="color: white;">Built-in European Mobility</h2>
                            <h5 class="cosi-title-5" style="font-weight: normal; color: white; font-size: 16px;">
                                Live & learn in 4 different campuses
                            </h5>
                        </div>
                        <div>
                            <h4 class="pt-1" style="color: white; font-weight: 400;">
                                A programme as interdisciplinary and innovative as COSI could not be provided at
                                any single institution
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div style="max-width: 1000px;" class="mb-20">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-4 px-4 lg:px-0">
                    <div class="mb-4">
                        <!-- <a href="https://ntnu.no" target="_self"> -->
                            <div class="relative">
                                <img src="/ntnu.png" alt="">
                                <img src="/ntnu-logo.svg" alt="" class="absolute right-4 bottom-4 w-12">
                            </div>
                            <h5 class="cosi-title-5 mt-4 text-center" style="color: #fff;">Norwegian University of Science and Technology</h5>
                            <h6 class="cosi-title-6 text-center" style="color: #fff; margin-top: 4px; font-weight: normal;">Gjøvik, Norway</h6>
                        <!-- </a> -->
                    </div>
                    <div class="mb-4">
                        <div class="relative">
                            <img src="/uef.png" alt="">
                            <img src="/uef-logo.svg" alt="" class="absolute right-4 bottom-4 w-10">
                        </div>
                        <h5 class="cosi-title-5 mt-4 text-center" style="color: #fff;">
                            University of Eastern Finland
                        </h5>
                        <h6 class="cosi-title-6 text-center" style="color: #fff; margin-top: 4px; font-weight: normal;">
                            Joensuu, Finland
                        </h6>
                    </div>
                    <div class="mb-4">
                        <div class="relative">
                            <img src="/ujm.png" alt="">
                            <img src="/ujm-logo.svg" alt="" class="absolute right-4 bottom-4 w-8">
                        </div>
                        <h5 class="cosi-title-5 mt-4 text-center" style="color: #fff;">Jean Monnet University</h5>
                        <h6 class="cosi-title-6 text-center" style="color: #fff; margin-top: 4px; font-weight: normal;">Saint-Étienne, France</h6>
                    </div>
                    <div class="mb-4">
                        <div class="relative">
                            <img src="/ugr.png" alt="">
                            <img src="/ugr-logo.svg" alt="" class="absolute right-4 bottom-4 w-14">
                        </div>
                        <h5 class="cosi-title-5 mt-4 text-center" style="color: #fff;">University of Granada</h5>
                        <h6 class="cosi-title-6 text-center" style="color: #fff; margin-top: 4px; font-weight: normal;">Granada, Spain</h6>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div>
            <div class="grid grid-cols-4 gap-4 pb-20 pt-20">
                <div>
                    <h4 class="pt-1" style="color: white; font-weight: 400;">
                        A programme as interdisciplinary and innovative as COSI could not be provided at
                        any single institution
                    </h4>
                </div>

                <div style="max-width: 280px;">
                    <div class="flex">
                        <div class="mr-4"><img src="/uef.png" alt="" /></div>
                        <div><img src="/ntnu.png" alt="" /></div>
                    </div>
                    <div class="flex mt-4">
                        <div class="mr-4"><img src="/ujm.png" alt="" /></div>
                        <div><img src="/ugr.png" alt="" /></div>
                    </div>
                </div>
                

                    <div>
                        <div class="flex mb-12">
                            <div class="pr-4" style="width: 40px;">
                                <img src="uef-logo.svg" alt="">
                            </div>
                            <div>
                                <p class="cosi-title-5 text-white text-lg" style="color: #fff; font-size: 1.3em;">University of Eastern Finland</p>
                                <p class="italic" style="color: #FFDB6D;">Joensuu, Finland</p>
                            </div>
                        </div>
                        <div class="flex mb-12">
                            <div class="pr-4" style="width: 40px;">
                                <img src="ntnu-logo.svg" alt="">
                            </div>
                            <div>
                                <p class="cosi-title-5 text-white text-lg font-bold" style="color: #fff; font-size: 1.3em;">Norwegian University of<br>Science and Technology</p>
                                <p class="italic" style="color: #FFDB6D;">Gjøvik, Norway</p>
                            </div>
                        </div>
                        <div class="flex mb-12">
                            <div class="pr-4" style="width: 40px;">
                                <img src="ujm-logo.svg" alt="" style="display: block; width: 90%;">
                            </div>
                            <div>
                                <p class="cosi-title-5 text-white text-lg font-bold" style="color: #fff; font-size: 1.3em;">Jean Monnet University</p>
                                <p class="italic" style="color: #FFDB6D;">Saint-Étienne, France</p>
                            </div>
                        </div>
                        <div class="flex mb-12">
                            <div class="pr-4" style="width: 40px;">
                                <img src="ugr-logo.svg" alt="">
                            </div>
                            <div>
                                <p class="cosi-title-5 text-white text-lg font-bold" style="color: #fff; font-size: 1.3em;">University of Granada</p>
                                <p class="italic" style="color: #FFDB6D;">Granada, Spain</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="map.svg" alt="" class="hidden sm:block -mt-16">
                    </div>

            </div>
        </div> -->

    </div>

    <div class="section fade-up flex justify-center px-6">
        <div style="max-width: 1000px;">
            <div class="grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-16">
                <div class="flex-1 mt-16 md:mt-0">
                    <div style="height: 42px;" class="-mt-2">
                        <img src="icons/user-blue.svg" alt="" style="display: inline-block; height: 100%;">
                    </div>
                    <h2 class="cosi-title-4 mt-1 mb-2">
                        Customized academic and administrative services
                    </h2>
                    <p style="color: #54567C;">
                        From online application until graduation, you will have one and only one administrative focal
                        point and contact person.
                    </p>
                </div>
                <div class="flex-1 pl-0 md:pl-10 mt-16 md:mt-0">
                    <div style="height: 40px;">
                        <img src="icons/grad-yellow.svg" alt="" style="display: inline-block; height: 100%;">
                    </div>
                    <h2 class="cosi-title-4 mt-2 mb-2">
                        An education you won't find anywhere else
                    </h2>
                    <p style="color: #54567C;">
                        Unique curriculum at the international level, with experts from a wide range of different yet relevant fields of studies both from academia and industry.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-16">
                <div class="md:pr-10 mt-16 md:mt-0">
                    <div style="height: 40px;">
                        <img src="icons/globe-green.svg" alt="" style="display: inline-block; height: 100%;">
                    </div>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> -->
                    <h2 class="cosi-title-4 mt-2 mb-2">
                        International recognition
                    </h2>
                    <p style="color: #54567C;">
                        100% taught in English.<br>
                        Academic partners in Asia and Europe.
                    </p>
                </div>
                <div class="pl-0 md:pl-10 mt-16 md:mt-0">
                    <div style="height: 40px;">
                        <img src="icons/suitcase-red.svg" alt="" style="display: inline-block; height: 100%;">
                    </div>
                    <h2 class="cosi-title-4 mt-2 mb-2">
                        Worldwide employability
                    </h2>
                    <p style="color: #54567C;">
                        Be where the future of colour science will happen. We work with many industrial partners.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="section fade-up flex justify-center mt-40 px-6">
        <div style="max-width: 1000px; flex-grow: 1;">
            <h2 class="cosi-title-2 mb-2" style="color: #253A90;">Partners</h2>

            <p class="cosi-p">
                COSI is brought to you by a world leading university-business cooperation.
            </p>

            <!-- <div class="flex">
                <div class="mr-6">
                    <h6 class="cosi-title-2">15</h6>
                    industry partners
                </div>
                <div>
                    <h6 class="cosi-title-2">12</h6>
                    academic partners
                </div>
            </div> -->

            <h6 class="cosi-title-2 mt-10">15</h6>
            <h3 class="cosi-title-3 mb-2">Associated industrial partners</h3>
            <div style="margin-left: -15px; display: flex; flex-wrap: wrap; align-items: center;">
                <div class="px-4 py-4" style="width: 180px;"><img src="partners/industry/meta.png" alt="" style="width: 100%; display:block;"></div>
                <div class="px-4 py-4" style="width: 90px;"><img src="partners/industry/hp.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 90px;"><img src="partners/industry/Huawei.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 220px;"><img src="partners/industry/sedoptica.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/COGNEX.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/vilmori-mikado.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 100px;"><img src="partners/industry/barco.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 220px;"><img src="partners/industry/BARBIERI.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/huddly.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/mihaly.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 100px;"><img src="partners/industry/3DUniversum.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/Spektralion.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 140px;"><img src="partners/industry/DXO.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 180px;"><img src="partners/industry/Chromasens.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 170px;"><img src="partners/industry/picterus.png" alt="" style="width: 100%;"></div>
            </div>
            <h6 class="cosi-title-2 mt-10">12</h6>
            <h3 class="cosi-title-3 mb-2">Academic partners</h3>
            <div style="margin-left: -15px; display: flex; flex-wrap: wrap; align-items: center;">
                <div class="px-4 py-4" style="width: 120px;"><img src="partners/academic/Amirkabir University of Technology.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 180px;"><img src="partners/academic/Chulalongkorn University logo.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 200px;"><img src="partners/academic/Group 27.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 100px;"><img src="partners/academic/img-layout-inspo 1.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 80px;"><img src="partners/academic/Khulna University logo.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 150px;"><img src="partners/academic/kuleuven_cmyk_logo-2.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 90px;"><img src="partners/academic/Technological University of Tajikistan 1.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 100px;"><img src="partners/academic/Tribhuvan University.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 130px;"><img src="partners/academic/ufmg logo 1.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 120px;"><img src="partners/academic/Universidade do Minho logo.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 90px;"><img src="partners/academic/University of Milan Bicocca 1.png" alt="" style="width: 100%;"></div>
                <div class="px-4 py-4" style="width: 90px;"><img src="partners/academic/university of Zagreb.png" alt="" style="width: 100%;"></div>
            </div>
        </div>
    </div>

    <div class="section fade-up flex justify-center mt-40 mb-20 px-6">
        <div style="max-width: 1000px; flex-grow: 1;">
            <h2 class="cosi-title-2 font-bold text-center mb-3">Call for applications study years 2022 - 2024</h2>
            <h3 class="text-center" style="font-weight: 500; font-style: italic;">Apply from 8. oct 2021 to January 10th 2022</h3>
            <div class="flex justify-center mt-6">
                <a href="/application/apply" class="flex items-center uppercase focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-offset-gray-100 focus:ring-indigo-500"
                style="margin-top: 20px; font-size: 13px; font-weight: bold; text-decoration: none; background: #fff; border: 1px solid #253A90; color: #253A90; padding: 10px 30px; border-radius: 1000px;">
                    <span>Apply</span>
                    <div class="pl-2">
                        <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#253A90"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <!-- xyz="fade-25% left-75%" -->
    <div class="section fade-up read-more flex justify-center mt-40 px-6">
        <div style="max-width: 1000px; flex-grow: 1;">
            <h2 class="cosi-title-2 mb-8 text-center" style="color: #253A90;">Learn more about</h2>
            <div class="grid grid-cols-1 md:grid-cols-3">

                <a href="/courses" class="relative p-10 md:mx-6" style="border: 1px solid #ddd; border-radius: 15px;">
                    <div class="flex justify-center">
                        <img src="icons/book.svg" alt="" style="height: 30px;">
                    </div>
                    <h3 class="cosi-title-4 mt-4 text-center">Courses</h3>
                    <p style="color: #2A2E4F;" class="text-center">
                        Read more about the curriculum and semester mobility
                    </p>
                    <img src="icons/arrow-right-black.svg" alt="" class="absolute right-4 bottom-4">
                </a>

                <a href="/career" class="relative p-10 md:mr-2 mt-4 md:mt-0" style="border: 1px solid #ddd; border-radius: 20px;">
                    <div class="flex justify-center">
                        <img src="icons/suitcase2.svg" alt="" style="height: 30px;">
                    </div>
                    <h3 class="cosi-title-4 mt-4 text-center">Career prospects</h3>
                    <p style="color: #2A2E4F;" class="text-center">
                        Read more about your work opportunities after graduation
                    </p>
                    <img src="icons/arrow-right-black.svg" alt="" class="absolute right-4 bottom-4">
                </a>

                <a href="/research" class="relative p-10 md:ml-4 mt-4 md:mt-0" style="border: 1px solid #ddd; border-radius: 20px;">
                    <div class="flex justify-center">
                        <img src="icons/science.svg" alt="" style="height: 30px;">
                    </div>
                    <h3 class="cosi-title-4 mt-4 text-center">Research</h3>
                    <p style="color: #2A2E4F;" class="text-center">
                        Read more about COSI research and theses subjects
                    </p>
                    <img src="icons/arrow-right-black.svg" alt="" class="absolute right-4 bottom-4">
                </a>

            </div>
        </div>
    </div>
</main>

<style>
    .mobility-container {
        background: #5853A0;
        background-image: url("/grid2.svg");
        background-repeat: repeat-y repeat-x;
    }
</style>
