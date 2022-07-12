<svelte:head>
    <title>Overview of program - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import LinkCard from '../../components/LinkCard.svelte'
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center px-6">
        <div class="mt-40" style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/about/overview-of-program', 'Overview of program']
            ]} />

            <h1 class="cosi-title-1">Overview of program</h1>

            <p class="cosi-headline">
                We are bridging a talent gap in the colour industry where colour imaging experts are in high demand.
            </p>
            <p class="cosi-headline">
                To achieve this four European Universities are combining their skills and knowledge to offer a two year (120 ECTS) Erasmus Mundus + Joint Master Degree on “Computational Colour and Spectral Imaging (COSI)”.
                The COSI program is organized by a team of experts in:
            </p>

            <div>
                <div class="flex mb-10 mt-10">
                    <div class="flex w-1/2 pr-2">
                        <div class="mr-4" style="width: 36px;">
                            <img src="../ntnu-logo-color.png" alt="">
                        </div>
                        <div>
                            <h3 class="cosi-title-4 mb-3">Colour and Visual Computing</h3>
                            <p>Norwegian University of<br>Science and Technology</p>
                            <p class="italic" style="color: #649E97;">Gjøvik, Norway</p>
                        </div>
                    </div>
                    <div class="flex w-1/2 pl-2">
                        <div class="mr-4" style="width: 40px;">
                            <img src="../ugr-logo-color.svg" alt="">
                        </div>
                        <div>
                            <h3 class="cosi-title-4 mb-3">Photonics, Image and Vision</h3>
                            <p>University of Granada</p>
                            <p class="italic" style="color: #649E97;">Granada, Spain</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex w-1/2 pr-2">
                        <div class="mr-4" style="width: 40px;">
                            <img src="../uef-logo-color.svg" alt="">
                        </div>
                        <div>
                            <h3 class="cosi-title-4 mb-3">Computational Spectral Imaging</h3>
                            <p>University of Eastern Finland</p>
                            <p class="italic" style="color: #649E97;">Joensuu, Finland</p>
                        </div>
                    </div>
                    <div class="flex w-1/2 pl-2">
                        <div class="mr-4 pl-1" style="width: 40px;">
                            <img src="../ujm-logo-color.png" alt="">
                        </div>
                        <div>
                            <h3 class="cosi-title-4 mb-3">Color image modelling<br>and understanding</h3>
                            <p>Jean Monnet University</p>
                            <p class="italic" style="color: #649E97;">Saint-Étienne, France</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="cosi-title-2 mt-16 mb-4">Complementary expertise & integrated approach</h2>
            <p class="cosi-p">
                COSI is the answer to the lessons drawn from pioneer courses implementation, its intimacy to industry challenges and the continuing efforts of the founding partners to further unite and increase the attractiveness of the consortium.
            </p>
            <p class="cosi-p">
                A programme as interdisciplinary and innovative as COSI would need to mobilize such a broad field of knowledge that it could not be provided at any single institution. This is why COSI is a highly integrated Master, encapsulating a collaborative model based on horizontal cooperation, applied at each stage of design, implementation and institutional learning.
            </p>
            <p class="cosi-p">
                A <a href="/corporate-relations" class="external">strong culture of dialogue and cooperation with industry</a> has also been instrumental to achieve the right balance of academia/industry partnerships in COSI. In practice, these knowledge exchanges take shape into cross-licensing and jointly developed industrial projects.
            </p>

            <h2 class="cosi-title-2 mt-16 mb-4">Interdisciplinarity</h2>
            <p class="cosi-p">
                The program is broadly interdisciplinary with color imaging being the string that holds everything in place. Over the year the graduates of the COSI program have been able to join different universities and industries leading the field in Color Imaging, Spectral Imaging, Computer Graphics, Multimedia Technologies, Photonics, Optics, and Vision.
            </p>
            <p class="cosi-p">
                The courses in the COSI program are structured so that the skills learnt can address the needs of a diverse range of sectors (multimedia, health care, cosmetic, automotive, and food-processing) bridging a talent gap in the industry where colour imaging experts are in high demand. The two areas of focus are spectral technologies and applied colour imaging.
            </p>
            <p class="cosi-p">
                COSI is brought to you by a world leading university-business cooperation of four European universities, and partnership with over 15 academic and over 10 industrial leaders across the globe.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">Built-in Mobility</h2>
            <p class="cosi-p">
                A programme as interdisciplinary and innovative as COSI which covers a broad width of knowledge could not be provided at any single institution. This is why COSI is a highly mobilized yet integrated master program, encapsulating a collaborative model based on a horizontal cooperation applied at each stage of design, implementation and institutional learning.
            </p>
            <p class="cosi-p">
                At COSI students have the chance to experience studying in at least two and at most four different European universities with an international faculty of local and international guest lecturers.
            </p>
            <p class="cosi-p">
                This starts by the first semester of studies being held in Norway, the second semester in France or Spain (depending on your preferred specialty) and the third semester in Norway or Finland (again depending on your preferred specialty). The fourth semester which is fully dedicated to the Master Thesis could then be performed at any university or industry across the globe! Add the six weeks industrial internships the students take between the second and third semester and you see how we at COSI have tried to get the most out of your two year master studies.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">Integrated curriculum and mobility</h2>
            <p class="cosi-p">
                COSI is not a heterogeneous patchwork of courses from different universities but a common, stand-alone study programme, topped-up by joint events (eg. orientation week, Master thesis defences, graduation ceremony, …). The curriculum has been shaped with respect to partner's respective track-record in applied research and teaching technologies. Partners work hand in hand, from the approval of a single recruitment strategy to the shaping of an agreed learning outcomes.
            </p>
            <p class="cosi-p">
                This results is a knowledge base encompassing most of today's research fields in colour sciences.
            </p>

            <ul class="cosi-ul">
                <li>
                    <span class="font-bold">Application or Colour Technology</span>
                    <span>Chulalongkorn University</span>
                </li>
                <li>
                    <span class="font-bold">Visual Perception and Cognition</span>
                    <span>Toyohashi University of Technology</span>
                </li>
                <li>
                    <span class="font-bold">Applied advanced colorimetry</span>
                    <span>University of Granada</span>
                </li>
                <li>
                    <span class="font-bold">Informatics & Telemedicine</span>
                    <span>Institut Teknologi Bandung in Indonesia Biomedical</span>
                </li>
                <li>
                    <span class="font-bold">Applied Colour Imaging</span>
                    <span>Norwegian University of Science and Technology</span>
                </li>
                <li>
                    <span class="font-bold">Applied colour sciences</span>
                    <span>University Jean Monnet</span>
                </li>
                <li>
                    <span class="font-bold">Spectral technologies</span>
                    <span>University of Eastern Finland</span>
                </li>
                <li>
                    <span class="font-bold">Intelligent Lighting</span>
                    <span>Monash University, Sunway Campus</span>
                </li>
            </ul>

            <p class="cosi-p mt-6">
                Learning technologies such as online-teaching allow us to offer a <a href="/courses" class="external">high-quality course catalogue</a> which is flexible, evolving over time and consistent in content and sequence. This is made possible thanks to the use of innovative teaching delivery methods, universities cross-fertilization and mutual learning through academic and staff mobility and backed-up by strong quality assurance.
            </p>
            <p class="cosi-p">
                Students spent an equal period of stay at each university. To allow <a href="/courses" class="external">mobility to bring a true added-value to the programme</a>, we've limited the range of mobility choices on the basis of the partners' research and teaching main focus area. The two concentration tracks (spectral technologies and applied colour imaging) are designed around the core competences of the Norwegian University of Science and Technology and the University of Eastern Finland.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">Integrated academic services</h2>
            <p class="cosi-p">
                COSI administrative staff works jointly to ensure the best possible <a href="/academic-services" class="external">academic services</a> to COSI students, notably by simplification of administrative procedures for mobile students and better integration in the local environment, the main two challenges that Erasmus students typically face.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">Applied research base</h2>
            <p class="cosi-p">
                Inter-institutional knowledge transfer provides for a <a href="/research" class="external">common research framework</a>, unique at the international level. COSI is the brainpower of 8 public research labs and 14 industry partners' talents pools and massive R&D investments.
            </p>

            <h2 class="cosi-title-2 mt-10 mb-4">Integrated governance</h2>
            <p class="cosi-p">
                COSI partners share values and vision. Resources, talents and expertise are pooled and managed jointly by a set of governing bodies that allow us to ensure a smooth and collective implementation.
            </p>
            <ul class="cosi-ul">
                <li>
                    The Academic and Management Board (AMB) sets COSI strategy and its long-term academic and business plan, oversees the management and administration, consider and decide upon all academic matters and questions affecting the educational policy and the conduct of its affairs.
                </li>
                <li>
                    The Quality Assurance Board (QAB) leads quality management and enhancement policy design and implementation, which reflects our recognition that an active and strategic engagement towards quality assurance is instrumental to the fulfilment of our mission.
                </li>
            </ul>

            <div class="mt-6 mb-4">
                <LinkCard
                    title={'Academic Management Board'}
                    subtitle={'How we ensure quality'}
                    path={'/amb'}
                />
            </div>

            <LinkCard
                title={'Quality Assurence Board'}
                subtitle={'How we plan vision and strategy long-term'}
                path={'/qab'}
            />

            <h2 class="cosi-title-2 mt-12 mb-4">Harmonized validation of learning outcomes</h2>
            <p class="cosi-p">
                To ensure all stakeholders an even greater accountability and transparency, the partners in COSI take the following steps:
            </p>
            <ul class="cosi-ul">
                <li>
                    Single admission policy and procedure.
                </li>
                <li>
                    Systematic use of the European Credit Transfer and Accumulation System (ECTS) to define the programme components, to recognize learning outcomes, and ultimately to allow COSI to be an easily readable and comparable degree to increase student competitiveness and employability.
                </li>
                <li>
                    Shared examination methodologies and performance assessment criteria. In addition, efforts are made through continuous dialogue to tackle cultural differences between COSI professors with respect to expectations linked to a given mark. An example is the evaluation process of the master thesis, which is conducted by an international jury of at least 2 different universities and one practitioner of the given field of research.
                </li>
                <li>
                    Recognized awarded degrees and common Diploma Supplement.
                </li>
            </ul>

            <h2 class="cosi-title-2 mt-12 mb-4">The COSI Family</h2>
            <p class="cosi-p">
                This is what makes COSI such a unique programme with a distinct character. Joining COSI is more than joining a Master programme, it's a <a href="/social-media" class="external">community</a>; a community of alumni with networking activities between cohorts, a community of practice with research, practitioners and policy makers.
                But you won't only be in contact with the COSI community, during open courses COSI students have many opportunities to mingle with local and international students and you can decide to enroll in virtually any scientific course offered by our partners.
            </p>

        </div>
    </div>
</main>
