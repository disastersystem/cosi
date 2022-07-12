<svelte:head>
    <title>Courses - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script context="module">
    // export async function load() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     const data = await res.json()

    //     if (res.ok) {
    //         return {
    //             props: {
    //                 scholarships: data
    //             }
    //         }
    //     }
    // }
</script>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'

    // let courses = {
    //     ntnu: {
    //         mandatory: [],
    //         optional: [],
    //         elective: []
    //     }
    // }
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/courses', 'Courses']
            ]} />

            <h1 class="cosi-title-1">Courses</h1>
            <p class="cosi-headline">
                The courses in the COSI program are structured so that the skills learnt address the needs of a diverse range of sectors (multimedia, health care, cosmetic, automotive, and food-processing) bridging a talent gap in the industry where colour imaging experts are in high demand. The two areas of focus are spectral technologies and applied colour imaging.
            </p>
            <p class="cosi-headline">
                Take a look at the courses and the mobility<span style="font-size: 0.9em; padding: 0 2px;">/</span>specialisation choices below.
            </p>
        </div>
    </div>

    <div class="flex justify-center pb-20">
        <div>
            <div style="margin-top 300px;">
                <div class="flex flex-col justify-center items-center">
                    <p class="mt-0 pt-0 text-sm">August-December</p>
                    <h2 class="cosi-title-2 mb-6">Semester 1</h2>
                    <div class="p-6 md:p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                        <h4 class="uppercase text-xs">Norway</h4>
                        <div class="flex items-center">
                            <h2 class="cosi-title-4 mr-4">NTNU</h2>
                            <img src="ntnu-logo-color.png" alt="" style="width: 28px;">
                        </div>
                        <h3 class="cosi-title-3 mb-10 mt-1" style="font-style: normal; font-size: 1.3em;">Colour and Visual Computing</h3>

                        <h4 class="font-bold mb-2">Mandatory courses</h4>
                        <ul class="cosi-ul">
                            <li><a href="https://www.ntnu.edu/studies/courses/IDIG4002#tab=omEmnet" class="external">Computer Graphics Fundamentals and Applications</a></li>
                            <li><a href="https://www.ntnu.edu/studies/courses/IMT4304#tab=omEmnet" class="external">Cross-media Colour Reproduction</a></li>
                            <li><a href="https://www.ntnu.edu/studies/courses/IMT4305#tab=omEmnet" class="external">Introduction to Color Image Processing and Analysis</a></li>
                            <li><a href="https://www.ntnu.edu/studies/courses/IMT4135#tab=omEmnet" class="external">Introduction to Research on Colour and Visual Computing</a></li>
                        </ul>

                        <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                        <ul class="cosi-ul">
                            <li>Norwegian language and culture (5 ECTS)</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-20 flex flex-col justify-center items-center overflow-x-auto">
                    <p class="mt-0 pt-0 text-sm">January-June</p>
                    <h2 class="cosi-title-2 mb-0">Semester 2</h2>
                    <p class="mt-0 mb-6 pt-1 pb-0 italic">Choose one specialisation</p>

                    <div class="grid grid-cols-2 gap-4 md:gap-12">
                        <div class="p-6 md:p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">France</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-4 mr-4">UJM</h2>
                                <img src="ujm-logo-color.png" alt="" style="width: 24px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10 mt-1" style="font-style: normal; font-size: 1.3em;">
                                Color image modelling and <br>understanding
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://mastercolorscience.files.wordpress.com/2019/10/cosi-ujm-advanced-image-processing.pdf" class="external">Advanced image processing</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2019/10/cosi-ujm-3d-models-in-computer-vision.pdf" class="external">3D models in computer vision</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2019/10/cosi-ujm-light-matter-interaction-and-materials-appearance.pdf" class="external">Light matter interaction and materials <br>appearance: from physics to virtual reality</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/03/from-statistics-to-data-mining.pdf" class="external">From statistics to data mining</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/03/digital-innovation-and-entrepreneurship.pdf" class="external">Digital innovation and entrepreneurship</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/03/pattern-recognition.pdf" class="external">Pattern recognition</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2019/11/cosi-ujm-real-time-3d-visualization.pdf" class="external">Real-time 3D visualization</a></li>
                                <li>French Language and Culture</li>
                            </ul>
                        </div>

                        <div class="p-6 md:p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Spain</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-4 mr-4">UGR</h2>
                                <img src="ugr-logo-color.svg" alt="" style="width: 36px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10 mt-1" style="font-style: normal; font-size: 1.3em;">
                                Photonics, Image and Vision
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_advanced_optoelectronics.pdf" class="external">Advanced optoelectronics</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_computer_vision.pdf" class="external">Computer vision</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_spectral_science.pdf" class="external">Advanced colour and spectral imaging</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_course_guide_optical_sensors.pdf" class="external">Optical sensors</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_course_guide_remote_imaging_sensing.pdf" class="external">Remote imaging and sensing</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_data_science.pdf" class="external">Data science</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_advanced_color_image_processing.pdf" class="external">Advanced color and image processing</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/2020-2022_cosi_course_guide_human_perception_cognition.pdf" class="external">Human perception and cognition</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                            <ul class="cosi-ul">
                                <li>Spanish language and culture (5 ETCS)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="mt-20 flex flex-col justify-center items-center">
                    <p class="mt-0 pt-0 text-sm">July/August</p>
                    <h2 class="cosi-title-2 mb-4">Summer</h2>
                    <div class="pb-10 pt-8 px-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                        <h2 class="cosi-title-4 text-center mb-4">Internship</h2>
                        <p class="text-center italic">At one of the <a href="/corporate-relations" class="external">associate industrial partners.</a></p>
                    </div>
                </div>
                
                <div class="mt-20 flex flex-col justify-center items-center overflow-x-auto">
                    <p class="mt-0 pt-0 text-sm">August-December</p>
                    <h2 class="cosi-title-2">Semester 3</h2>
                    <p class="mt-0 mb-6 pt-1 pb-0 italic">Choose one specialisation</p>

                    <div class="grid grid-cols-2 gap-4 md:gap-12">
                        <div class="p-6 md:p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Finland</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-4 mr-4">UEF</h2>
                                <img src="uef-logo-color.svg" alt="" style="width: 28px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10 mt-1" style="font-style: normal; font-size: 1.3em;">
                                Computational Spectral Imaging
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://weboodi.uef.fi/weboodi/opintjakstied.jsp?OpinKohd=57223355&Kieli=6" class="external">Applications on photonics</a></li>
                                <li><a href="https://www3.uef.fi/documents/2412730/2515197/IMLEX_UEF_course_descriptions.pdf/66615164-7995-4048-a6a0-cd53dfeb7431" class="external">Advanced spectral imaging devices</a></li>
                                <li><a href="https://weboodi.uef.fi/weboodi/opintjakstied.jsp?OpinKohd=37060979&haettuOpas=-1" class="external">Color science laboratory</a></li>
                                <li><a href="https://weboodi.uef.fi/weboodi/opasopintjakstied.jsp?MD5avain=1a45f51b-a226-4ba3-ba1c-5777c1582ef0&Kieli=6&OpinKohd=49421901&KaytOpasPvm=1&sortJarj=6&palaaOpinKohtHak=0" class="external">Industrial group project</a></li>
                                <li><a href="https://mastercolorscience.files.wordpress.com/2020/05/advanced-deep-learning-course-descriptions-1.docx" class="external">Advanced deep learning</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li>Eye tracking</li>
                                <li>Robotics and XR</li>
                                <li><a href="https://weboodi.uef.fi/weboodi/opintjakstied.jsp?OpinKohd=37060979&haettuOpas=-1" class="external">Graph mining</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                            <ul class="cosi-ul">
                                <li>Finnish language (2 ETCS)</li>
                            </ul>
                        </div>

                        <div class="p-6 md:p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Norway</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-4 mr-4">NTNU</h2>
                                <img src="ntnu-logo-color.png" alt="" style="width: 28px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10 mt-1" style="font-style: normal; font-size: 1.3em;">
                                Colour and Visual Computing 
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://www.ntnu.edu/studies/courses/IMT4895#tab=omEmnet" class="external">Specialisation in colour imaging</a></li>
                                <li><a href="https://www.ntnu.edu/studies/courses/IDIG4003#tab=omEmnet" class="external">Appearance, perception and measurement</a></li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li><a href="https://www.ntnu.edu/studies/courses/IMT4884#tab=omEmnet" class="external">Advanced colour management</a></li>
                                <li>Specialisation in video processing</li>
                                <li><a href="https://www.ntnu.edu/studies/courses/IMT4894#tab=omEmnet" class="external">Advanced project work</a></li>
                                <li><a href="https://www.ntnu.edu/studies/courses/IMT4392#tab=omEmnet" class="external">Deep learning for visual computing</a></li>
                                <li>Other elective course upon eligibility</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                            <ul class="cosi-ul">
                                <li>Norwegian language and culture (5 ETCS)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col justify-center items-center">
                    <h2 class="cosi-title-2 mb-6 mt-20">Semester 4</h2>
                    <div class="pb-10 pt-8 px-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                        <h2 class="cosi-title-4 text-center mb-4">Master thesis</h2>
                        <p class="text-center italic">At any university around the globe!</p>
                    </div>
                </div>
            </div>


            <div class="flex justify-center mt-16">
                <a href="/awarded-degrees" class="mt-10" style="display: inline-block; font-size: 13px; text-decoration: none; background: #253A90; color: white; padding: 10px 30px; border-radius: 1000px;">
                    <div class="flex items-center">
                        <div class="uppercase pr-4">Awarded degrees</div>
                        <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                        </svg>
                    </div>
                </a>
            </div>
    
            <!-- <a href="/about" class="mt-10" style="display: inline-block; font-size: 13px; text-decoration: none; background: #253A90; color: white; padding: 10px 30px; border-radius: 1000px;">
                <div class="flex items-center">
                    <div class="uppercase pr-4">Course catalogue (.xsl)</div>
                    <svg width="12" height="11" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                    </svg>
                </div>
            </a> -->
        </div>
    </div>
</main>
