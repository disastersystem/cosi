<svelte:head>
    <title>Courses - COSI</title>
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
            <!-- <p class="cosi-headline">
                Take a look at the courses and the mobility choices below.
            </p> -->
        </div>
    </div>

    <div class="flex justify-center pb-20">
        <div>
            <div style="margin-top 300px;">
                <div class="flex flex-col justify-center items-center">
                    <h2 class="cosi-title-2 mb-6">Semester 1</h2>
                    <div class="p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                        <h4 class="uppercase text-xs">Norway</h4>
                        <div class="flex items-center">
                            <h2 class="cosi-title-2 mr-4">NTNU</h2>
                            <img src="ntnu-logo-color.png" alt="" style="width: 28px;">
                        </div>
                        <h3 class="cosi-title-3 mb-10" style="font-style: normal;">Colour and Visual Computing</h3>

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
                
                <div class="flex flex-col justify-center items-center">
                    <h2 class="cosi-title-2 mb-0 mt-20">Semester 2</h2>
                    <p class="mt-0 mb-6 pt-1 pb-0 italic">Choose one specialisation</p>
                    <div class="flex">
                        <div class="p-10 mr-6" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">France</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-2 mr-4">UJM</h2>
                                <img src="ujm-logo-color.png" alt="" style="width: 24px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10" style="font-style: normal;">
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

                        <div class="p-10 ml-6" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Spain</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-2 mr-4">UGR</h2>
                                <img src="ugr-logo-color.svg" alt="" style="width: 36px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10" style="font-style: normal;">
                                Photonics, Image and Vision
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li>Advanced optoelectronics</li>
                                <li>Computer vision</li>
                                <li>Advanced colour and spectral imaging</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li>Optical sensors</li>
                                <li>Remote imaging and sensing</li>
                                <li>Data science</li>
                                <li>Advanced color and image processing</li>
                                <li>Human perception and cognition</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                            <ul class="cosi-ul">
                                <li>Spanish language and culture (5 ETCS)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col justify-center items-center">
                    <h2 class="cosi-title-2 mt-20">Semester 3</h2>
                    <p class="mt-0 mb-6 pt-1 pb-0 italic">Choose one specialisation</p>
                    <div class="flex">
                        <div class="p-10 mr-6" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Finland</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-2 mr-4">UEF</h2>
                                <img src="uef-logo-color.svg" alt="" style="width: 28px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10" style="font-style: normal;">
                                Computational Spectral Imaging
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li>Applications on photonics</li>
                                <li>Advanced spectral imaging devices</li>
                                <li>Color science laboratory</li>
                                <li>Industrial group project</li>
                                <li>Advanced deep learning</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li>Eye tracking</li>
                                <li>Robotics and XR</li>
                                <li>Graph mining</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Optional courses (extra ECTS granted)</h4>
                            <ul class="cosi-ul">
                                <li>Finnish language (2 ETCS)</li>
                            </ul>
                        </div>

                        <div class="p-10 ml-6" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                            <h4 class="uppercase text-xs">Norway</h4>
                            <div class="flex items-center">
                                <h2 class="cosi-title-2 mr-4">NTNU</h2>
                                <img src="ntnu-logo-color.png" alt="" style="width: 28px;">
                            </div>
                            <h3 class="cosi-title-3 mb-10" style="font-style: normal;">
                                Colour and Visual Computing 
                            </h3>

                            <h4 class="font-bold mb-2">Mandatory courses</h4>
                            <ul class="cosi-ul">
                                <li>Specialisation in colour imaging</li>
                                <li>Appearance, perception and measurement</li>
                            </ul>

                            <h4 class="font-bold mt-6 mb-2">Elective courses</h4>
                            <ul class="cosi-ul">
                                <li>Advanced colour management</li>
                                <li>Specialisation in video processing</li>
                                <li>Advanced project work</li>
                                <li>Deep learning for visual computing</li>
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
                    <div class="p-10" style="border: 1px solid #ddd; max-width: 600px; border-radius: 10px;">
                        <h2 class="cosi-title-2 text-center mb-4">Master thesis</h2>
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
