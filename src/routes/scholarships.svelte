<svelte:head>
    <title>Scholarships and finance - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script context="module">
    export async function load({ fetch, params }) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()

        if (res.ok) {
            return {
                props: {
                    groups: [
                        {
                            title: '<h2 class="cosi-title-2 mt-12 mb-4">Available scolarships at programme start</h2>',
                            scholarships: [
                                { slug: '/scholarship/emjmd', title: 'Erasmus + EMJMD scholarships', summary: `
                                    <p class="cosi-p">Covers all the duration of the programme (24 months)</p>
                                    <ul class="cosi-ul">
                                        <li>Up to 35,000 € / year for European students</li>
                                        <li>Up to 49,000 € / year for non-European students</li>
                                    </ul>
                                ` },
                                { slug: '/scholarship/fee-waivers', title: 'COSI 50 % fee-waivers (halving of participation costs)', summary: `
                                    <p class="cosi-p">Covers all the duration of the programme (24 months)</p>
                                    <ul class="cosi-ul">
                                        <li>2,225 € / year for European students</li>
                                        <li>4,500 € / year for non-European students</li>
                                    </ul>
                                ` },
                                { slug: '/scholarship/cosi', title: 'COSI scholarships', summary: `
                                    <p class="cosi-p">Granted for the first year of the programme to extremely promising students did not get an EMJMD scholarship</p>
                                    <ul class="cosi-ul">
                                        <li>10,500 € for non-EU students</li>
                                        <li>6,500 € for EU students</li>
                                    </ul>
                                ` }
                            ]
                        },
                        {
                            title: '<h3 class="cosi-title-3 mt-8 mb-4">Additional financial support & scholarships</h3>',
                            scholarships: [
                                { slug: '/scholarship/international-attractiveness', title: 'University Jean Monnet Foundation scholarships - "International attractiveness"', summary: `
                                    <p class="cosi-p">Granted for the first year of the programme</p>
                                    <ul class="cosi-ul">
                                        <li>10,000 € granted to best applicants</li>
                                    </ul>
                                ` },
                                { type: 'disabled', slug: '/scholarship/idexlyon', title: '2 IDEXLYON scholarships', summary: `
                                    <ul class="cosi-ul">
                                        <li>800€/ month during 8 months : 8000€</li>
                                    </ul>
                                ` },
                                { slug: '/scholarship/eiffel', title: 'Eiffel scholarships', summary: `
                                    <p class="cosi-p">Covers all the duration of the programme (24 months)</p>
                                    <ul class="cosi-ul">
                                        <li>1,1181 €  per month (total of 28,344 €) + travel expenses</li>
                                        <li>Available scholarship/s depends of your country of origin</li>
                                    </ul>
                                ` },
                                { type: 'external', slug: 'https://eur-manutech-sleight.universite-lyon.fr/', title: 'MANUTECH SLEIGHT Graduate School scholarships', summary: `
                                    <ul class="cosi-ul">
                                        <li>8000€ (25% upon display of school certificate and a French Bank account, 25% paid in December, on condition of attendance at courses, 25% paid in March on condition of attendance at courses and 25% paid at the end of the academic year and will be conditioned to participation at all exams)</li>
                                    </ul>
                                ` }
                            ]
                        },
                        {
                            title: '<h2 class="cosi-title-2 mt-12 mb-4">Available scolarships during the programme</h2>',
                            scholarships: [
                                { slug: '/scholarship/explora', title: 'Explo\'ra scholarships', summary: `
                                    <ul class="cosi-ul">
                                        <li>1,615 €  for semester 3 and 1,615 € during the Master Thesis</li>
                                    </ul>
                                ` },
                                { type: 'disabled', slug: '/scholarship/master-thesis-allowances', title: 'Master Thesis allowances', summary: `
                                    <p class="cosi-p">Work placement during semester 4 is generally paid. We'll strive to ensure that our industrial and academic partners provide at least 550 € to trainees as a minimum. Most of our industrial partners offer internships that provide substantial allowances packages above this minimum, and up to 1,200 € per month</p>
                                ` },
                                { type: 'disabled', slug: '/scholarship/private', title: 'Private scholarships', summary: `
                                    <p class="cosi-p">COSI scholarships coming from our industrial partners. Those are negotiated case by case.</p>
                                ` }
                            ]
                        },
                        {
                            title: '<h3 class="cosi-title-3 mt-8 mb-4">Additional financial support & scholarships</h3>',
                            scholarships: [
                                { slug: '/scholarship/international-mobility', title: 'University Jean Monnet Foundation scholarships - "International mobility"', summary: `
                                    <ul class="cosi-ul">
                                        <li>maximum of 3,000 € (project-based)</li>
                                    </ul>
                                ` },
                                { type: 'disabled', slug: '/scholarship/eur', title: '2 EUR scholarships', summary: `
                                    <ul class="cosi-ul">
                                        <li>800€/ month during 8 months : 8000€</li>
                                    </ul>
                                ` }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<script>
    import {fly} from 'svelte/transition'
    import LinkCard from '../components/LinkCard.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    export let groups
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center">
        <!-- <div class="mt-40 pl-6 pr-10 mr-10 sticky top-0" style="width: 350px;">
            <p class="cosi-p">Jump to:</p>
            <ul class="cosi-ol">
                <li>
                    <a class="external text-sm" href="#attribution">Scholarships attribution</a>
                </li>
                <li>
                    <a class="external text-sm" href="#attribution">Available scolarships at programme start</a>
                    <ul class="cosi-ol mt-2">
                        <li>
                            <a class="external text-sm" href="#attribution">Additional financial support & scholarships</a>
                        </li>
                    </ul>
                </li>
                <li><a class="external text-sm" href="#attribution">Available scolarships during the programme</a>
                    <ul class="cosi-ol mt-2">
                        <li>
                            <a class="external text-sm" href="#attribution">Additional financial support & scholarships</a>
                        </li>
                    </ul>
                </li>
                <li><a class="external text-sm" href="#attribution">Additional financial support</a>
                    <ul class="cosi-ol mt-2">
                        <li>
                            <a class="external text-sm" href="#attribution">Syrian students living in exile in France</a>
                        </li>
                    </ul>
                </li>
                <li><a class="external text-sm" href="#attribution">Loans</a></li>
                <li><a class="external text-sm" href="#attribution">Part-time jobs</a></li>
            </ul>
        </div> -->

        <div class="mt-40" style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/scholarships', 'Scholarships and finance']
            ]} />

            <h1 class="cosi-title-1">Scholarships and finance</h1>

            <p class="cosi-headline">
                We implement an ambitious scholarship policy to allow all students with outstanding academic background to join our programmes.
                If you apply to COSI on time, your application will be automatically considered for all scholarships mentioned in this page!
            </p>
            <!-- <p class="cosi-p">
                Scholarships attribution is merit-based: same selection criteria, methods and decision-making for selection to the programme itself are applied to attribute scholarships, attribution is based on absolute selection outcome ranking of applicants.  Learning performance during first year of the programme is used to grant scholarships during the second year of the programme. All scholarships are cumulative, expect E+EMJMD and Eiffel scholarship (holders of these scholarships cannot apply to additional scholarships).
            </p> -->
            <!-- <p class="cosi-p italic font-bold">
                If you apply to COSI on time, your application will be automatically considered for all scholarships mentioned in this page!
            </p> -->

            <h2 class="cosi-title-2 mt-12" id="attribution">
                Scholarships attribution
            </h2>
            <p class="cosi-p mt-4">
                Scholarships attribution is merit-based:
            </p>
            <ul class="cosi-ul">
                <li>Same selection criteria, methods and decision-making for selection to the programme itself are applied to attribute scholarships.</li>
                <li>Attribution is based on absolute selection outcome ranking of applicants.</li>
                <li>Learning performance during first year of the programme is used to grant scholarships during the second year of the programme.</li>
                <li>All scholarships are cumulative, expect E+EMJMD and Eiffel scholarship (holders of these scholarships cannot apply to additional scholarships).</li>
            </ul>

            {#each groups as { title, scholarships }, i}
                <div>
                    {@html title}
                </div>

                {#each scholarships as { type, slug, title, summary }, i}
                    <div class="mt-4 mb-4">
                        <LinkCard
                            title={title}
                            subtitle={''}
                            path={slug}
                            type={type ? type : 'internal'}
                        >
                            {@html summary }
                        </LinkCard>
                    </div>
                {/each}
            {/each}


            <h2 class="cosi-title-2 mt-12">
                Additional financial support
            </h2>
            <p class="cosi-p mt-4">
                Applicants are encouraged to seek for scholarships prior to their applications. A large number of scholarship are available for students in Europe at graduate level and for scientific studies. Note that grants by companies and foundations, national fellowship programmes, bilateral scholarships, World Bank, etc. may have to observe early deadlines and separate application process. Early application and contacting COSI administrative coordinator with details on the scholarship you applied for is recommended. The administrative staff will provide needed information requested by applicants.
            </p>
            <p class="cosi-p mt-4">
                Good starting point are following search engines:
            </p>
            <p class="cosi-p mt-4">
                COSI students are registered in Jean Monnet University during the full period of the programme, irrespective of their location in European host campuses. They are considered as international students registered in a French higher education institution and as such, eligible to several French scholarships opportunities.
            </p>
            <!-- <p class="cosi-p mt-4">
                Browse CampusBourse, the grant search engine powered by CampusFrance to know more about these programmes:
            </p> -->
            <div class="mt-4 mb-4">
                <!-- <LinkCard
                    title={'CampusBourse'}
                    subtitle={'Grant search engine powered by CampusFrance'}
                    path={'https://test.com'}
                /> -->
                <!-- <div class="flex"> -->
                    <a href="http://www.campusfrance.org/fria/bourse/index.html#app=faac&193-si=0" target="_blank">
                        <div class="relative flex justify-between items-center p-6" style="background: #F8F7FC; border-radius: 16px;">
                            <div class="pr-16">
                                <div>
                                    <h3 class="cosi-title-5">CampusBourse</h3>
                                </div>
                                <div>
                                    <p class="cosi-p" style="margin-bottom: 0px;">Grant search engine powered by CampusFrance</p>
                                </div>
                                <div class="mt-2 p-2" style="background: #C41162;">
                                    <img src="/campusfrance.svg" alt="">
                                </div>
                            </div>
                            <div class="absolute top-6 right-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>
                    </a>
                <!-- </div> -->
            </div>

            <p class="cosi-p mt-6">
                To find more scholarships opportunities, visit our partners (supported by the European Commission):
            </p>
            <div class="mt-4 mb-4">
                <!-- <LinkCard
                    title={'The Global Study Awards'}
                    subtitle={''}
                    path={'https://test.com'}
                /> -->
                <!-- <div class="flex"> -->
                    <a href="https://www.mastersportal.com/pages/the-global-study-awards/#fflt:SP_GSA1" target="_blank">
                        <div class="relative flex justify-between items-center p-6" style="background: #F8F7FC; border-radius: 16px;">
                            <div class="pr-16">
                                <div>
                                    <h3 class="cosi-title-5">The Global Study Awards</h3>
                                </div>
                                <div>
                                    <p class="cosi-p" style="margin-bottom: 0px;"></p>
                                </div>
                                <div class="mt-4">
                                    <img src="/globalstudyawards.png" alt="" style="width: 160px;">
                                </div>
                            </div>
                            <div class="absolute top-6 right-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>
                    </a>
                <!-- </div> -->
            </div>
            <div class="mt-4 mb-4">
                <!-- <LinkCard
                    title={'Scholarship Portal EU'}
                    subtitle={''}
                    path={'https://test.com'}
                >
                    <div class="mt-2">
                        <img src="/logo_scholarshipportal_white_background.png" alt="" style="width: 300px;">
                    </div>
                </LinkCard> -->

                <!-- <div class="flex"> -->
                    <a href="https://www.scholarshipportal.com/" target="_blank">
                        <div class="relative flex justify-between items-center p-6" style="background: #F8F7FC; border-radius: 16px;">
                            <div class="pr-16">
                                <div>
                                    <h3 class="cosi-title-5">Scholarship Portal EU</h3>
                                </div>
                                <div>
                                    <p class="cosi-p" style="margin-bottom: 0px;"></p>
                                </div>
                                <div class="mt-2">
                                    <img src="/logo_scholarshipportal_white_background.png" alt="" style="width: 300px;">
                                </div>
                            </div>
                            <div class="absolute top-6 right-4 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>
                    </a>
                <!-- </div> -->
            </div>

            <h3 class="cosi-title-3 mb-4 mt-8">Syrian students living in exile in France</h3>
            <p class="cosi-p">
                In the framework of the French aid program to Syria and Syrian nationals currently in France, the government launched a new scholarship program:
                <a href="http://www.campusfrance.org/fr/programme_syrie" class="external">
                    http://www.campusfrance.org/fr/programme_syrie
                </a>
            </p>
            <p class="cosi-p">
                Application should be done directly by the University Jean Monnet. Please contact your administrative coordinator if applicable.
            </p>

            <h2 class="cosi-title-2 mt-12">
                Loans
            </h2>
            <p class="cosi-p mt-4">
                Applicants to COSI from <a href="http://ec.europa.eu/programmes/erasmus-plus/about/who-can-take-part_en" class="external">Programme countries</a> are eligible to Erasmus+ Master Degree Loans opportunities (up to 18,000 € for two years) to finance their studies. Loans will be offered by participating banks and student loan agencies on favorable conditions to mobile students, including, better than market interest rates and up to two years to allow graduates to get into a job before beginning repayment. This programme will start rolling out earl 2015, visit <a href="http://ec.europa.eu/education/opportunities/higher-education/masters-loans_en.htm" class="external">EACEA website for more info.</a>
            </p>
            <p class="cosi-p mt-4">
                Two French banks begin offering EU-guaranteed loans to Master's students going to or coming from France.
            </p>
            <p class="cosi-p mt-4">
                The two banks, <a href="http://www.banquepopulaire.fr/portailinternet/Catalogue/Produits/Pages/pret-erasmus.aspx" class="external">Banque Populaire</a> and <a href="https://www.caisse-epargne.fr/particuliers/emprunter/financer-ses-etudes" class="external">Caisse d'Epargne</a>, are now offering loans both to French students who want to take a Master's degree in one of the 32 Erasmus+ <a href="http://ec.europa.eu/programmes/erasmus-plus/about/who-can-take-part_en" class="external">Programme countries</a>, as well as students from Programme countries who want to study in France.
            </p>
            <p class="cosi-p mt-4">
                Administrative staff is available to provide applicants any information needed for them to apply for a loan.
            </p>

            <h2 class="cosi-title-2 mt-12">
                Part-time jobs
            </h2>
            <p class="cosi-p mt-4">
                It is not, in principle, forbidden to take a part-time job during the period of the Programme. However:
            </p>
            <ul class="cosi-ul">
                <li>Holder of a student visa in France face restrictions in terms of type of contract and legal maximum number of hours they can perform</li>
                <li>It is extremely difficult to find a job in Saint-Etienne for non-French speakers; we strongly advice students not to accept undeclared job as this can jeopardize their ability to stay in France</li>
                <li>COSI is a full-time programme that require a full investment from the student and give little room for a professional activity</li>
            </ul>

        </div>
    </div>
</main>
