<svelte:head>
    <title>FAQ - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import { fly } from 'svelte/transition'
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@rgossiaux/svelte-headlessui"
    import { Transition } from "@rgossiaux/svelte-headlessui"
    import BreadCrumbs from '../../components/Breadcrumbs.svelte'

    const questions = [
        {
            question: 'Do I need to submit a separate application to be considered for scholarships?',
            answer: `
                <p class="cosi-p">
                    No. Your online application to COSI degrees will be used to award scholarships managed by the Consortium as well
                    (Erasmus+ EMJMD scholarships, Consortium scholarships, Foundation Jean Monnet scholarships), and,
                    if you're selected, to national scholarships programmes during the period of study. Scholarships
                    attribution will be communicated at the same time as the outcome of the selection. Time will be given
                    to applicants to confirm / choose between degrees in the light of the scholarship award.
                </p>
                <p class="cosi-p">
                    However, there is a number of scholarships programmes (bilateral, multilateral) you may be eligible for. We encourage you to look for such opportunities, that can complement the financial support you'll may received from us. We'll provide any needed supporting documentation but application to such programmes are your own responsibility. Application process and supporting documentation differs between programmes.
                </p>
            `
        },
        {
            question: 'I don\'t have the financial ability to finance this period of study. What are my options?',
            answer: `
                <p class="cosi-p">
                    Applying to COSI means applying to scholarships managed by the Consortium as well.
                    Erasmus+ EMJMD, is a very generous scholarship that can virtually finance any expenses (including
                    costs of living and travel expenses) during your 2-years Master's Degree enrollment. Consortium scholarships
                    reduce considerably the Participation Costs. Other programmes are available to scientific students with
                    outstanding academic background. Please do apply; you'll be informed of scholarship award at the same
                    time as the selection outcome and given time to decide if you wish to enroll given the level of financial
                    support we offer.
                </p>
            `
        },
        {
            question: 'I cannot produce, at the time of the online application, results of an internationally recognized English test <span class="text-sm">(</span>TOEFL, TOEIC, ...<span class="text-sm">)</span>. Does that make me ineligible?',
            answer: `
                <p class="cosi-p">
                    You need to justify your English level at the application deadline. We cannot guarantee that without a
                    justification of English proficiency you can pass the administrative check.
                <p>
                <p class="cosi-p">
                    Please, see <a class="external" href="https://internacional.ugr.es/pages/politica-linguistica/tablasdecertificadosaceptadosporlaugr">this page</a>
                    for alternative tests.
                </p>
            `
        },
        {
            question: 'Am I eligible with a BS in textile industry <span class="text-sm">/</span> Electronics Engineering <span class="text-sm">/</span> Chemistry...?',
            answer: `
                <p class="cosi-p">
                    Please check carefully <a class="external" href="/application/eligibility-criteria">this section</a> for academic background requirements.
                <p>
                <p class="cosi-p">
                    We don't specifically target a given major at bachelor level, but rather applicants with a solid academic
                    background in the general fields of physics and/or mathematics and/or computer science. It really
                    depends on bachelor's curriculum.
                </p>
            `
        },
        {
            question: 'Is a background in colour science necessary to be eligible?',
            answer: `
                <p class="cosi-p">
                    No, we don't required a background in Colour science, as this is the aim of the Programme to educate student to this interdisciplinary field.
                <p>
            `
        },
        {
            question: 'When I login to my account, my application appears as "pending". What should I do?',
            answer: `
                <p class="cosi-p">
                    Once you've succesfully submitted your application, a pop-up message indicate that your application has
                    been saved successfully (in green on the upper-right of the screen) and your application appears as
                    "pending" in the left menu. As long as you've received a automatic conformation email, this means your
                    application will be considered by the selection committee.
                <p>
            `
        },
        {
            question: 'French visa: Do I need to apply to Campus France CEF in addition to the online application?',
            answer: `
                <p class="cosi-p">
                    You should first apply online to the Master's Degree. If you're selected, we'll guide you through the
                    Campus France application, if applicable. We're in direct contact with Campus France offices and
                    work toward simplifying as much as possible the CEF procedure for selected students.
                    For more info on the CEF process and countries concerned, please visit these pages <a class="external" href="/france">france</a>, <a class="external" href="/spain">spain</a>, <a class="external" href="/norway">norway</a>, <a class="external" href="/finland">finland</a>.
                <p>
            `
        }
    ]
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center">
        <div class="mt-40 mb-40" style="max-width: 750px;">
            <div class="ml-4">
                <BreadCrumbs pages={[
                    ['/', 'Home'],
                    ['/application/faq', 'FAQ']
                ]} />
            </div>

            <h1 class="cosi-title-1 pl-4">FAQ</h1>
            <div class="mt-20">
                {#each questions as { question, answer }}
                    <Disclosure let:open>
                        <DisclosureButton class="w-full">
                            <div class="flex justify-between p-4 border-t border-grey-700">
                                <div class="font-bold text-gray-900 text-left">{@html question }</div>
                                <div>
                                    <span class="ml-6 flex items-center">
                                        {#if open}
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        {:else}
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                            </svg>
                                        {/if}
                                    </span>
                                </div>
                            </div>
                        </DisclosureButton>

                        <Transition
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <DisclosurePanel>
                                <div class="px-4 pt-2 pb-10">
                                    {@html answer }
                                </div>
                            </DisclosurePanel>
                        </Transition>
                    </Disclosure>
                {/each}
            </div>
        </div>
    </div>
</main>

<style>
    main {
        overflow-x: hidden;
    }
</style>

<!--
    {#each questions as { question, answer }}
        <div class="px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
                <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                    <span class="font-medium text-gray-900">{ question }</span>
                    <span class="ml-6 flex items-center">

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>

                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </h3>

            <div class="pt-6" id="filter-section-mobile-0">
                <div class="space-y-6">
                    <div class="flex items-center">
                        <p class="cosi-p">
                            { answer }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    {/each}
-->
