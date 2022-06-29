<script context="module">
    export async function load({ fetch, params }) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()

        if (res.ok) {
            return {
                props: {
                    groups: [
                        {
                            title: '<h2 class="cosi-title-2 mt-20 mb-4">Available scolarships at programme start</h2>',
                            scholarships: [
                                { slug: 'emjmd', title: 'Erasmus + EMJMD scholarships' },
                                { slug: 'fee-waivers', title: 'COSI 50 % fee-waivers (halving of participation costs)' },
                                { slug: 'cosi', title: 'COSI scholarships' }
                            ]
                        },
                        {
                            title: '<h3 class="cosi-title-3 mt-10 mb-4">Additional financial support & scholarships</h3>',
                            scholarships: [
                                { slug: 'international-attractiveness', title: 'University Jean Monnet Foundation scholarships - "International attractiveness"' },
                                { slug: 'idexlyon', title: '2 IDEXLYON scholarships' },
                                { slug: 'eiffel', title: 'Eiffel scholarships' },
                                { slug: 'manutech-sleight', title: 'MANUTECH SLEIGHT Graduate School scholarships' }
                            ]
                        },
                        {
                            title: '<h2 class="cosi-title-2 mt-20 mb-4">Available scolarships during the programme</h2>',
                            scholarships: [
                                { slug: 'explora', title: 'Explo\'ra scholarships' },
                                { slug: 'master-thesis-allowances', title: 'Master Thesis allowances' },
                                { slug: 'private', title: 'Private scholarships' }
                            ]
                        },
                        {
                            title: '<h3 class="cosi-title-3 mt-10 mb-4">Additional financial support & scholarships</h3>',
                            scholarships: [
                                { slug: 'international-mobility', title: 'University Jean Monnet Foundation scholarships - "International mobility"' },
                                { slug: 'eur', title: '2 EUR scholarships' }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<script>
    import LinkCard from '../components/LinkCard.svelte'
    export let groups
</script>

<main class="px-6">
    <div class="flex justify-center">
        <div class="mt-40" style="max-width: 766px;">
            <h1 class="cosi-title-1">Scholarships and finance</h1>

            <p class="cosi-headline">
                We implement an ambitious scholarship policy to allow all students with outstanding academic background to join our programmes.
            </p>
            <p class="cosi-p">
                Scholarships attribution is merit-based: same selection criteria, methods and decision-making for selection to the programme itself are applied to attribute scholarships, attribution is based on absolute selection outcome ranking of applicants.  Learning performance during first year of the programme is used to grant scholarships during the second year of the programme. All scholarships are cumulative, expect E+EMJMD and Eiffel scholarship (holders of these scholarships cannot apply to additional scholarships).
            </p>
            <p class="cosi-p italic font-bold">
                If you apply to COSI on time, your application will be automatically considered for all scholarships mentioned in this page!
            </p>

            <h2 class="cosi-title-2 mt-20">
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

                {#each scholarships as { slug, title }, i}
                    <div class="mt-4 mb-4">
                        <LinkCard
                            title={title}
                            subtitle={''}
                            path={'scholarship/' + slug}
                        />
                    </div>
                {/each}
            {/each}


            <h2 class="cosi-title-2 mt-20">
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
                <LinkCard
                    title={'CampusBourse'}
                    subtitle={'Grant search engine powered by CampusFrance'}
                    path={'https://test.com'}
                />
            </div>

            <p class="cosi-p mt-6">
                To find more scholarships opportunities, visit our partners (supported by the European Commission):
            </p>
            <div class="mt-4 mb-4">
                <LinkCard
                    title={'The Global Study Awards'}
                    subtitle={''}
                    path={'https://test.com'}
                />
            </div>
            <div class="mt-4 mb-4">
                <LinkCard
                    title={'Scholarship Portal EU'}
                    subtitle={''}
                    path={'https://test.com'}
                />
            </div>

            <h3 class="cosi-title-3 mb-4 mt-10">Syrian students living in exile in France</h3>
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
                Applicants to COSI from Programme countries are eligible to Erasmus+ Master Degree Loans opportunities (up to 18,000 € for two years) to finance their studies. Loans will be offered by participating banks and student loan agencies on favorable conditions to mobile students, including, better than market interest rates and up to two years to allow graduates to get into a job before beginning repayment. This programme will start rolling out earl 2015, visit EACEA website for more info.
            </p>
            <p class="cosi-p mt-4">
                Two French banks begin offering EU-guaranteed loans to Master's students going to or coming from France.
            </p>
            <p class="cosi-p mt-4">
                The two banks, Banque Populaire and Caisse d'Epargne, are now offering loans both to French students who want to take a Master's degree in one of the 32 Erasmus+ Programme countries, as well as students from Programme countries who want to study in France.
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
