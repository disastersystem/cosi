<script>
    // import {
    //     Menu,
    //     MenuButton,
    //     MenuItems,
    //     MenuItem,
    // } from "@rgossiaux/svelte-headlessui";
    import { Disclosure, DisclosureButton, DisclosurePanel } from "@rgossiaux/svelte-headlessui";
    import { Transition } from "@rgossiaux/svelte-headlessui";

    let menu = { about: false, contact: false, application: false }
    let drawer = false
    
    function closeDropdowns() { menu.about = false; menu.contact = false; menu.application = false; }
    function toggleAbout() { menu.contact = false; menu.application = false; menu.about = !menu.about; }
    function toggleApplication() { menu.about = false; menu.contact = false; menu.application = !menu.application }
    function toggleContact() { menu.about = false; menu.application = false; menu.contact = !menu.contact }

    function openDrawer() { drawer = true }
    function closeDrawer() { drawer = false }
</script>

<nav class="z-10 p-0">
    <div>
        <a href="/" style="padding: 0; padding-top: 4px; padding-bottom: 2px;">
            <div class="flex items-center">
                <div><img src="/logo.svg" alt="" style="width: 40px;"></div>
                <div class="font-bold text-2xl ml-1 text-gray-800">COSI</div>
            </div>
        </a>
    </div>

    <div class="hidden lg:flex items-center">
        <!-- sveltekit:prefetch  -->
        <a on:click={closeDropdowns} href="/" class="text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Home
        </a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div class="ml-2 mr-2">
                <button on:click={toggleAbout} type="button" class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    About COSI program
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <Transition
                show={menu.about}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    class="
                    origin-top-right absolute
                    lg:left-1/3
                    transform
                    -translate-x-0 md:-translate-x-1/5 lg:-translate-x-1/4 xl:-translate-x-1/4
                    mt-2
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                    style="background: #5853A0;"
                >
                <!-- style="background: #5853A0;" -->
                    <div class="flex">
                        <div class="cosi-border-right pt-4 pb-4 pl-4">
                            <div class="py-1" role="none" style="width: 216px;">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <h3 class="cosi-title-4 px-4 py-2" style="color: #fff;">About</h3>
                                <a on:click={closeDropdowns} href="/about/overview-of-program" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-0">Overview of program</a>
                                <a on:click={closeDropdowns} href="/corporate-relations" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-1">Corporate relations</a>
                                <a on:click={closeDropdowns} href="/social-media" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-3">Social media</a>
                                <a on:click={closeDropdowns} href="/alumni" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-4">Alumni</a>
                                <a on:click={closeDropdowns} href="/legal-notice" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-5">Legal notice</a>
                            </div>
                        </div>
                        <div class="cosi-border-right pt-4 pb-4">
                            <div class="py-1 pl-4" role="none" style="width: 254px;">
                                <h3 class="cosi-title-4 px-4 py-2" style="color: #fff;">Program structure</h3>
                                <a on:click={closeDropdowns} href="/courses" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-6">Courses</a>
                                <a on:click={closeDropdowns} href="/learning-outcomes" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-7">Learning outcomes</a>
                                <a on:click={closeDropdowns} href="/awarded-degrees" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-8">Awarded degrees</a>
                                <a on:click={closeDropdowns} href="/summer-internship" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-9">Summer internship</a>
                                <a on:click={closeDropdowns} href="/masters-thesis" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-10">Master's thesis</a>
                                <a on:click={closeDropdowns} href="/student-agreement" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-11">Student agreement</a>
                            </div>
                        </div>
                        <div class="cosi-border-right pt-4 pb-4">
                            <div class="py-1 pl-4" role="none" style="width: 250px;">
                                <h3 class="cosi-title-4 px-4 py-2" style="color: #fff;">Costs and funding</h3>
                                <a on:click={closeDropdowns} href="/participation-costs" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-12">Participation costs</a>
                                <a on:click={closeDropdowns} href="/scholarships" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-13">Scholarships and finance</a>
                                <a on:click={closeDropdowns} href="/scholarships-disbursment" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-14">Scholarship disbursment</a>
                            </div>
                        </div>
                        <div class="pt-4 pb-4 pr-4">
                            <div class="py-1 pl-4" role="none" style="width: 250px;">
                                <h3 class="cosi-title-4 px-4 py-2" style="color: #fff;">Prepare your stay</h3>
                                <a on:click={closeDropdowns} href="/norway" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-15">Norway</a>
                                <a on:click={closeDropdowns} href="/france" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-16">France</a>
                                <a on:click={closeDropdowns} href="/spain" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-17">Spain</a>
                                <a on:click={closeDropdowns} href="/finland" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-18">Finland</a>
                                <a on:click={closeDropdowns} href="/preparatory-reading" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-19">Preparatory reading</a>
                                <a on:click={closeDropdowns} href="/learn-local-languages" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-20">Learn local languages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

        <a on:click={closeDropdowns} href="/career" class="text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Career prospects
        </a>

        <a sveltekit:prefetch on:click={closeDropdowns} href="/research" class="ml-2 mr-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Research
        </a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div>
                <button on:click={toggleApplication} type="button" class="inline-flex justify-center rounded-md ml-2 mr-2 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Application
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <Transition
                show={menu.application}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    class="origin-top-right absolute right-0 mt-2 p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                    style="background: #5853A0;"
                >
                    <div class="flex">
                        <div>
                            <div class="py-1" role="none" style="width: 240px;">
                                <!-- <h3 class="cosi-title-4 px-4 py-2">Application</h3> -->
                                <a on:click={closeDropdowns} href="/application/eligibility-criteria" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-0">Application eligibility criteria</a>
                                <a on:click={closeDropdowns} href="/application/apply" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-1">Apply to COSI</a>
                                <a on:click={closeDropdowns} href="/application/appeal" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-2">Appeal procedure</a>
                                <a on:click={closeDropdowns} href="/application/faq" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-2">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div>
                <button on:click={toggleContact} type="button" class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Contact
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <Transition
                show={menu.contact}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    class="origin-top-right absolute right-0 mt-2 p-4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                    style="background: #5853A0;"
                >
                    <div class="flex">
                        <div>
                            <div class="py-1" role="none" style="width: 240px;">
                                <!-- <h3 class="cosi-title-4 px-4 py-2">Application</h3> -->
                                <a on:click={closeDropdowns} href="/contact" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-0">Contact</a>
                                <a on:click={closeDropdowns} href="/academic-services" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-1">Academic services</a>
                                <a on:click={closeDropdowns} href="/guest-lecturer" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-2">Be our guest lecturer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

        <a on:click={closeDropdowns} href="/news" class="ml-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            News
        </a>
    </div>

    <div on:click={openDrawer} class="lg:hidden flex items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </div>
</nav>

<!--
    Mobile side-menu
-->
<div class="relative z-40 hidden" class:active={ drawer } role="dialog" aria-modal="true"> <!-- lg:hidden -->
    <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div on:click={ closeDrawer } class="fixed inset-0 bg-black bg-opacity-25"></div>

    <!-- <Transition
        show
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
    > -->
        <div class="fixed inset-0 flex z-40">
            <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
                From: "translate-x-full"
                To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "translate-x-full"
            -->
            <div style="background: #5853A0;" class="ml-auto relative max-w-xs w-full h-full shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div class="px-4 flex items-center justify-between">
                    <h2 class="text-lg font-medium cosi-light-purple">Menu</h2>
                    <button on:click={ closeDrawer } type="button" class="-mr-2 w-10 h-10 p-2 rounded-md flex items-center justify-center cosi-light-purple">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="mt-4" style="border-top: 1px solid rgba(161, 152, 209, 0.425);">
                    <h3 class="sr-only">Main menu</h3>

                    <ul class="font-medium px-2 pt-4">
                        <li>
                            <a on:click={ closeDrawer } href="/" class="block px-2 py-3 cosi-light-purple">Home</a>
                        </li>
                        <!-- <li>
                            <a href="/research" class="block px-2 py-3">Research</a>
                        </li>
                        <li>
                            <a href="/career-prospects" class="block px-2 py-3">Career prospects</a>
                        </li> -->
                    </ul>

                    <!-- Only have overflow-x-hidden while animation!!!!!!!!!!!!!! -->
                    <!-- border-t border-gray-200 -->
                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">About COSI program</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4">
                                        <a on:click={ closeDrawer } href="/about/overview-of-program" class="block mb-6 cosi-light-purple">Overview of program</a>
                                        <a on:click={ closeDrawer } href="/corporate-relations" class="block mb-6 cosi-light-purple">Corporate relations</a>
                                        <a on:click={ closeDrawer } href="/social-media" class="block mb-6 cosi-light-purple">Social media</a>
                                        <a on:click={ closeDrawer } href="/alumni" class="block mb-6 cosi-light-purple">Alumni</a>
                                        <a on:click={ closeDrawer } href="/legal-notice" class="block mb-6 cosi-light-purple">Legal notice</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">Program structure</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4 cosi-light-purple">
                                        <a on:click={ closeDrawer } href="/courses" class="block mb-6 cosi-light-purple">Courses</a>
                                        <a on:click={ closeDrawer } href="/learning-outcomes" class="block mb-6 cosi-light-purple">Learning outcomes</a>
                                        <a on:click={ closeDrawer } href="/awarded-degrees" class="block mb-6 cosi-light-purple">Awarded degrees</a>
                                        <a on:click={ closeDrawer } href="/summer-internship" class="block mb-6 cosi-light-purple">Summer internship</a>
                                        <a on:click={ closeDrawer } href="/masters-thesis" class="block mb-6 cosi-light-purple">Master's thesis</a>
                                        <a on:click={ closeDrawer } href="/student-agreement" class="block mb-6 cosi-light-purple">Student agreement</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">Costs and funding</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4">
                                        <a on:click={ closeDrawer } href="/participation-costs" class="block mb-6 cosi-light-purple">Participation costs</a>
                                        <a on:click={ closeDrawer } href="/scholarships" class="block mb-6 cosi-light-purple">Scholarships and finance</a>
                                        <a on:click={ closeDrawer } href="/scholarships-disbursment" class="block mb-6 cosi-light-purple">Scholarships disbursment</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <ul class="font-medium text-gray-900 px-2">
                        <li>
                            <a on:click={ closeDrawer } href="/career" class="block px-2 py-3 cosi-light-purple">Career prospects</a>
                        </li>
                        <li>
                            <a on:click={ closeDrawer } href="/research" class="block px-2 py-3 cosi-light-purple">Research</a>
                        </li>
                    </ul>

                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">Application</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4">
                                        <a on:click={ closeDrawer } href="/application/eligibility-criteria" class="block mb-6 cosi-light-purple">Application eligibility criteria</a>
                                        <a on:click={ closeDrawer } href="/application/apply" class="block mb-6 cosi-light-purple">Apply to COSI</a>
                                        <a on:click={ closeDrawer } href="/application/appeal" class="block mb-6 cosi-light-purple">Appeal procedure</a>
                                        <a on:click={ closeDrawer } href="/application/faq" class="block mb-6 cosi-light-purple">FAQ</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">Prepare your stay</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4">
                                        <a on:click={ closeDrawer } href="/norway" class="block mb-6 cosi-light-purple">Norway</a>
                                        <a on:click={ closeDrawer } href="/france" class="block mb-6 cosi-light-purple">France</a>
                                        <a on:click={ closeDrawer } href="/spain" class="block mb-6 cosi-light-purple">Spain</a>
                                        <a on:click={ closeDrawer } href="/finland" class="block mb-6 cosi-light-purple">Finland</a>
                                        <a on:click={ closeDrawer } href="/preparatory-reading" class="block mb-6 cosi-light-purple">Preparatory readings</a>
                                        <a on:click={ closeDrawer } href="/learn-local-languages" class="block mb-6 cosi-light-purple">Learn local languages</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <div class="px-4 overflow-x-hidden">
                        <Disclosure let:open>
                            <DisclosureButton class="w-full">
                                <div class="flex justify-between pt-4 pb-4">
                                    <div class="cosi-light-purple text-left">Contact</div>
                                    <div>
                                        <span class="ml-6 flex items-center">
                                            {#if open}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            {:else}
                                                <svg class="h-5 w-5 cosi-light-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <div class="p-4">
                                        <a on:click={ closeDrawer } href="/contact" class="block mb-6 cosi-light-purple">Contact</a>
                                        <a on:click={ closeDrawer } href="/academic-services" class="block mb-6 cosi-light-purple">Academic services</a>
                                        <a on:click={ closeDrawer } href="/guest-lecturer" class="block mb-6 cosi-light-purple">Be our guest lecturer</a>
                                    </div>
                                </DisclosurePanel>
                            </Transition>
                        </Disclosure>
                    </div>

                    <ul class="font-medium text-gray-900 px-2">
                        <li>
                            <a on:click={ closeDrawer } href="/news" class="block px-2 py-3 cosi-light-purple">News</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    <!-- </Transition> -->


    <!-- <h3 class="-mx-2 -my-3 flow-root">
            <button type="button" class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                <span class="font-medium text-gray-900"> Color </span>
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
                    <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500"> White </label>
                </div>
            </div>
        </div> -->
</div>

<style>
    nav {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #ddd;
        padding: 10px 40px;
        display: flex;
        justify-content: space-between;
    }
    nav div a {
        display: block;
        padding: 15px 15px;
        color: #000;
        text-decoration: none;
    }

    .cosi-border-right {
        border-right: 1px solid rgba(161, 152, 209, 0.425);
    }

    .cosi-light-purple {
        color: #D9D7FF;
    }

    .active {
        display: block;
    }
</style>
