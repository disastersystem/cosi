<script>
    // import {
    //     Menu,
    //     MenuButton,
    //     MenuItems,
    //     MenuItem,
    // } from "@rgossiaux/svelte-headlessui";
    import { Transition } from "@rgossiaux/svelte-headlessui";

    let menu = { about: false, contact: false, application: false }
    
    function closeDropdowns() { menu.about = false; menu.contact = false; menu.application = false; }
    function toggleAbout() { menu.contact = false; menu.application = false; menu.about = !menu.about; }
    function toggleApplication() { menu.about = false; menu.contact = false; menu.application = !menu.application }
    function toggleContact() { menu.about = false; menu.application = false; menu.contact = !menu.contact }
</script>

<nav style="z-index: 10;">
    <div class="logo">
        <img src="logo.svg" alt="" style="width: 40px;">
        COSI
    </div>
    <div class="flex items-center">
        <a on:click={closeDropdowns} href="/" class="text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Home
        </a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div class="ml-2 mr-2">
                <button on:click={toggleAbout} type="button" class="inline-flex justify-center w-full rounded-md 
                 px-4 py-2 bg-white text-sm font-medium text-gray-700
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
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
                    class="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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

        <a on:click={closeDropdowns} href="/career" class="text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-gray-100 focus:ring-indigo-500">Career prospects</a>

        <a on:click={closeDropdowns} href="/research" class="ml-2 mr-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-gray-100 focus:ring-indigo-500">Research</a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div>
                <button on:click={toggleApplication} type="button" class="inline-flex justify-center rounded-md 
                ml-2 mr-2 px-4 py-2 bg-white text-sm font-medium text-gray-700
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
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
                                <a on:click={closeDropdowns} href="/application/eligibility-critera" class="cosi-light-purple block px-4 py-2 text-sm" role="menuitem" tabindex="0" id="menu-item-0">Application eligibility criteria</a>
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
                <button on:click={toggleContact} type="button" class="inline-flex justify-center w-full rounded-md 
                 px-4 py-2 bg-white text-sm font-medium text-gray-700
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
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

        <a on:click={closeDropdowns} href="/news" class="ml-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-gray-100 focus:ring-indigo-500">
            News
        </a>
    </div>
</nav>

<style>
    .logo {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 22px;
    }
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
    /* .cosi-purple-2 {
        color: #A198D1;
    } */
</style>
