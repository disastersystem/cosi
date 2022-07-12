<svelte:head>
    <title>Coporate relations / expert talks - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import BgLogo from '../components/BgLogo.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import {fly} from 'svelte/transition'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/corporate-relations', 'Corporate Relations']
            ]} />

            <h1 class="cosi-title-1">Corporate relations</h1>
            <!-- <h2 class="cosi-title-2">
                Partners
            </h2> -->
            <h2 class="cosi-title-2 mt-20 mb-4">
                Partners
            </h2>
            <p class="cosi-headline">
                To enhance its outreach, capacity and effectiveness, the consortium has partnered with a large number of partners from the academic and private sector.
            </p>

            <h3 class="cosi-title-4 mt-16 mb-8 text-center">
                Associated industrial partners
            </h3>

            <div class="flex justify-center flex-wrap">
            <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"> -->
                <BgLogo>
                    <img src="partners/industry/meta.png" alt="" style="width: 170px; display:block;">
                    <a href="https://about.facebook.com/" target="_blank" class="external mt-4">Meta Platforms, Inc.</a>
                    <p class="cosi-p italic p-0 m-0">USA</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/hp.png" alt="" style="width: 70px;">
                    <a href="https://www.hp.com/" target="_blank" class="external mt-4">Hewlett-Packard (HP)</a>
                    <p class="cosi-p italic p-0 m-0">Spain</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/Huawei.png" alt="" style="width: 70px;">
                    <a href="https://www.huawei.com/en/" target="_blank" class="external mt-4">Huawei</a>
                    <p class="cosi-p italic p-0 m-0">France</p>
                </BgLogo>
                    
                <BgLogo>
                    <img src="partners/industry/sedoptica.png" alt="" style="width: 220px;">
                    <a href="https://www.sedoptica.es/" target="_blank" class="external mt-4">Sedoptica</a>
                    <p class="cosi-p italic p-0 m-0">Spain</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/COGNEX.png" alt="" style="width: 160px;">
                    <a href="https://www.cognex.com/" target="_blank" class="external mt-4">COGNEX</a>
                    <p class="cosi-p italic p-0 m-0">Germany</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/vilmori-mikado.png" alt="" style="width: 150px;">
                    <a href="https://www.vilmorinmikado.com/" target="_blank" class="external mt-4">Vilmorin-Mikado</a>
                    <p class="cosi-p italic p-0 m-0">France</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/barco.png" alt="" style="width: 80px;">
                    <a href="https://www.barco.com/en/" target="_blank" class="external mt-4">Barco</a>
                    <p class="cosi-p italic p-0 m-0">France</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/huddly.png" alt="" style="width: 140px;">
                    <a href="https://www.huddly.com/" target="_blank" class="external mt-4">Huddly</a>
                    <p class="cosi-p italic p-0 m-0">Norway</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/BARBIERI.png" alt="" style="width: 220px;">
                    <a href="https://www.barbierielectronic.com/" target="_blank" class="external mt-4 text-center">BARBIERI electronic snc</a>
                    <p class="cosi-p italic p-0 m-0">Italy</p>
                </BgLogo>
                
                <BgLogo>
                    <img src="partners/industry/mihaly.png" alt="" style="width: 150px;">
                    <a href="https://www.mihalygroup.fr/index-eng.html" target="_blank" class="external mt-4">MIHALY SAS</a>
                    <p class="cosi-p italic p-0 m-0">France</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/3DUniversum.png" alt="" style="width: 90px;">
                    <a href="https://3duniversum.com/" target="_blank" class="external mt-4">3DUniversum</a>
                    <p class="cosi-p italic p-0 m-0">Netherlands</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/Spektralion.png" alt="" style="width: 170px;">
                    <a href="/" target="_blank" class="external mt-4">Spektralion AS</a>
                    <p class="cosi-p italic p-0 m-0">Norway</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/DXO.png" alt="" style="width: 120px;">
                    <a href="https://www.dxo.com/" target="_blank" class="external mt-4">DXO</a>
                    <p class="cosi-p italic p-0 m-0">France</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/Chromasens.png" alt="" style="width: 180px;">
                    <a href="https://www.chromasens.de/en" target="_blank" class="external mt-4">Chromasens</a>
                    <p class="cosi-p italic p-0 m-0">Germany</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/industry/picterus.png" alt="" style="width: 170px;">
                    <a href="https://www.picterus.com/" target="_blank" class="external mt-4">Picterus</a>
                    <p class="cosi-p italic p-0 m-0">Norway</p>
                </BgLogo>
            </div>


            <h3 class="cosi-title-4 mt-16 mb-8 text-center">
                Academic partners
            </h3>

            <div class="flex justify-center flex-wrap">
                <BgLogo>
                    <img src="partners/academic/kuleuven_cmyk_logo-2.png" alt="" style="width: 120px; display:block;">
                    <a href="https://www.kuleuven.be/english/" target="_blank" class="external mt-4 text-center">KU Leuven</a>
                    <p class="cosi-p italic p-0 m-0">Belgium</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/university of Zagreb.png" alt="" style="width: 80px; display:block;">
                    <a href="https://www.unizg.hr/homepage/" target="_blank" class="external mt-4 text-center">University of Zagreb</a>
                    <p class="cosi-p italic p-0 m-0">Croatia</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/University of Milan Bicocca 1.png" alt="" style="width: 80px; display:block;">
                    <a href="https://en.unimib.it/" target="_blank" class="external mt-4 text-center">University of Milan Bicocca</a>
                    <p class="cosi-p italic p-0 m-0">Italy</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/img-layout-inspo 1.png" alt="" style="width: 80px; display:block;">
                    <a href="https://web.ncku.edu.tw/" target="_blank" class="external mt-4 text-center">National Cheng Kung University</a>
                    <p class="cosi-p italic p-0 m-0">Taiwan</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Group 27.png" alt="" style="width: 130px; display:block;">
                    <a href="https://www.tut.ac.jp/english/" target="_blank" class="external mt-4 text-center">Toyohashi University of Technology</a>
                    <p class="cosi-p italic p-0 m-0">Japan</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/ufmg logo 1.png" alt="" style="width: 120px; display:block;">
                    <a href="https://ufmg.br/" target="_blank" class="external mt-4 text-center">Federal University of Minas Gerais</a>
                    <p class="cosi-p italic p-0 m-0">Brazil</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Tribhuvan University.png" alt="" style="width: 80px; display:block;">
                    <a href="https://tribhuvan-university.edu.np/" target="_blank" class="external mt-4 text-center">Tribhuvan University</a>
                    <p class="cosi-p italic p-0 m-0">Nepal</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Universidade do Minho logo.png" alt="" style="width: 110px; display:block;">
                    <a href="https://www.uminho.pt/EN/Pages/default.aspx" target="_blank" class="external mt-4 text-center">University of Minho</a>
                    <p class="cosi-p italic p-0 m-0">Portugal</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Chulalongkorn University logo.png" alt="" style="width: 120px; display:block;">
                    <a href="https://www.chula.ac.th/en/" target="_blank" class="external mt-4 text-center">Chulalongkorn University</a>
                    <p class="cosi-p italic p-0 m-0">Thailand</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Technological University of Tajikistan 1.png" alt="" style="width: 80px; display:block;">
                    <a href="https://tut.tj/?page_id=1751&lang=en" target="_blank" class="external mt-4 text-center">Technological University of Tajikistan</a>
                    <p class="cosi-p italic p-0 m-0">Tajikistan</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Khulna University logo.png" alt="" style="width: 60px; display:block;">
                    <a href="https://www.ku.ac.bd/" target="_blank" class="external mt-4 text-center">Khulna University</a>
                    <p class="cosi-p italic p-0 m-0">Bangladesh</p>
                </BgLogo>

                <BgLogo>
                    <img src="partners/academic/Amirkabir University of Technology.png" alt="" style="width: 110px; display:block;">
                    <a href="https://aut.ac.ir/en" target="_blank" class="external mt-4 text-center">Amirkabir University of Technology</a>
                    <p class="cosi-p italic p-0 m-0">Iran</p>
                </BgLogo>
            </div>

            <h2 class="cosi-title-2 mt-20 mb-6">
                Expert talks
            </h2>
            <p class="cosi-headline">
                To ensure to students the highest possible degree of academic excellence, innovation and relevance with industries' trends and challenges, COSI programme welcome industrial experts and researchers working in a variety of color - science related industries
            </p>
            <h3 class="cosi-title-3 mt-12">
                2015-2017
            </h3>

            <h4 class="cosi-title-4 mt-6 mb-4">
                Semester 1
            </h4>
            <ul class="cosi-ul">
                <li><span class="font-bold">Colorimetry applied to paint industry</span><br>Virgine Vurpillot from Becker industry (industrial coatings), France</li>
                <li><span class="font-bold">From Paper to Laminate</span><br>Pierre Caulet from Munksjö Arches SAS (pulp and paper technologies), France</li>
                <li><span class="font-bold">Media and entertainment</span><br>Jurgen Stauder from Technicolor (media and entertainment), France</li>
                <li><span class="font-bold">Intelligent lighting systems, a swift overview</span><br>Dr. Vineetha Kalavally from Monash University, Malaysia</li>
            </ul>

            <h4 class="cosi-title-4 mt-6 mb-4">
                Semester 2
            </h4>
            <ul class="cosi-ul">
                <li><span class="font-bold">Holoscope: An affordable approach to digital holography microscopy</span><br>Diego Andrade, researcher from Malaga University, Spain</li>
                <li><span class="font-bold">Research lines in his group</span><br>Shigeki Nakauchi from Toyohashi University of Technology, Department of Computer Science and Engineering, Japan</li>
                <li><span class="font-bold">High Dynamic Range (HDR) Imaging</span><br>Miguel Ángel Martínez, PhD student from UGR, Spain</li>
                <li><span class="font-bold">Acquisition of Yperspectral Images in Outdoor Enviroments... A Challanging Task</span><br>Jia Eckhard, researcher from the Color Imaging Lab at UGR, Spain</li>
            </ul>
        </div>
    </div>
</main>
