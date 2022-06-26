<script>
    // import {
    //     Menu,
    //     MenuButton,
    //     MenuItems,
    //     MenuItem,
    // } from "@rgossiaux/svelte-headlessui";
    import { Transition } from "@rgossiaux/svelte-headlessui";

    let menu = { about: false, contact: false, application: false }

    function toggleAbout() { menu.about = !menu.about }
    function toggleApplication() { menu.application = !menu.application }
    function toggleContact() { menu.contact = !menu.contact }
</script>

<nav style="z-index: 10;">
    <div class="logo">
        <img src="logo.svg" alt="" style="width: 40px;">
        COSI
    </div>
    <div class="flex items-center">
        <a href="/" class="text-sm font-medium text-gray-700">Home</a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div>
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
                    class="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 p-6 pb-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <div class="flex">
                        <div>
                            <div class="py-1" role="none" style="width: 240px;">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <h3 class="cosi-title-4 px-4 py-2">About</h3>
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Overview of program</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Corporate relations</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Social media</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Alumni</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Legal notice</a>
                            </div>
                        </div>
                        <div>
                            <div class="py-1" role="none" style="width: 260px;">
                                <h3 class="cosi-title-4 px-4 py-2">Program structure</h3>
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Courses</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Learning outcomes</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Awarded degrees</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Summer internship</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Master's thesis</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Student agreement</a>
                            </div>
                        </div>
                        <div>
                            <div class="py-1" role="none" style="width: 270px;">
                                <h3 class="cosi-title-4 px-4 py-2">Costs and funding</h3>
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Participation costs</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Scholarships and finance</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Scholarship disbursment</a>
                            </div>
                        </div>
                        <div>
                            <div class="py-1" role="none" style="width: 260px;">
                                <h3 class="cosi-title-4 px-4 py-2">Prepare your stay</h3>
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Norway</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">France</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Spain</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Finland</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Preparatory reading</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Learn local languages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>

        <a href="career" class="text-sm font-medium text-gray-700">Career prospects</a>

        <a href="research" class="text-sm font-medium text-gray-700">Research</a>

        <div class="relative inline-block text-left">
            <!-- border border-gray-300 shadow-sm -->
            <div>
                <button on:click={toggleApplication} type="button" class="inline-flex justify-center w-full rounded-md 
                 px-4 py-2 bg-white text-sm font-medium text-gray-700
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
                    class="origin-top-right absolute right-0 mt-2 p-6 pb-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <div class="flex">
                        <div>
                            <div class="py-1" role="none" style="width: 240px;">
                                <!-- <h3 class="cosi-title-4 px-4 py-2">Application</h3> -->
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Application eligibility criteria</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Apply to COSI</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Appeal procedure</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">FAQ</a>
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
                    class="origin-top-right absolute right-0 mt-2 p-6 pb-8 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                >
                    <div class="flex">
                        <div>
                            <div class="py-1" role="none" style="width: 240px;">
                                <!-- <h3 class="cosi-title-4 px-4 py-2">Application</h3> -->
                                <a href="adf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Contact</a>
                                <a href="ddd" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Academic services</a>
                                <a href="dsf" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Be our guest lecturer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
        <!-- <Menu>
            <MenuButton class="inline-flex justify-center w-full px-3 py-4">
                Contact
            </MenuButton>
            <MenuItems
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style="background: #716CB7;"
            >
                <MenuItem let:active class="text-white">
                    <a href="/overview" class:active>Overview of program</a>
                </MenuItem>
                <MenuItem let:active>
                    <a href="/corporate" class:active>Corporate relations</a>
                </MenuItem>
                <MenuItem let:active>
                    <a href="/social" class:active>Social media</a>
                </MenuItem>
                <MenuItem let:active>
                    <a href="/alumni" class:active>Alumni</a>
                </MenuItem>
                <MenuItem let:active>
                    <a href="/legal" class:active>Legal notice</a>
                </MenuItem>
            </MenuItems>
        </Menu> -->


        

        <!-- {#if menu.open}
        <div class="fixed top-20 right-0 flex p-6 mr-10" style="background: #5853A0;">
            <div class="mr-6">
                <h3 class="cosi-title-4" style="color: #fff;">About</h3>
                <div>
                    <a href="overview-of-program" style="color: #fff;">Overview of program</a>
                </div>
                <div>
                    <a href="corporate-relations" style="color: #fff;">Corporate relations</a>
                </div>
                <div>
                    <a href="social-media" style="color: #fff;">Social media</a>
                </div>
                <div>
                    <a href="alumni" style="color: #fff;">Alumni</a>
                </div>
                <div>
                    <a href="legal" style="color: #fff;">Legal notice</a>
                </div>
            </div>
            <div class="mr-6">
                <h3 class="cosi-title-4 text-white" style="color: #fff;">Programme structure</h3>
                <div>
                    <a href="courses" style="color: #fff;">Courses</a>
                </div>
                <div>
                    <a href="learning-outcomes" style="color: #fff;">Learning outcomes</a>
                </div>
                <div>
                    <a href="awarded-degrees" style="color: #fff;">Awarded degrees</a>
                </div>
                <div>
                    <a href="summer-internship" style="color: #fff;">Summer internship</a>
                </div>
                <div>
                    <a href="masters-thesis" style="color: #fff;">Master's thesis</a>
                </div>
                <div>
                    <a href="student-agreement" style="color: #fff;">Student agreement</a>
                </div>
            </div>
            <div class="mr-6">
                <h3 class="cosi-title-4 text-white" style="color: #fff;">Costs and funding</h3>
                <div>
                    <a href="participation-costs" style="color: #fff;">Participation costs</a>
                </div>
                <div>
                    <a href="scholarships" style="color: #fff;">Scholarships and finance</a>
                </div>
                <div>
                    <a href="scholarships-disbursment" style="color: #fff;">Scholarship disbursment</a>
                </div>
            </div>
            <div>
                <h3 class="cosi-title-4" style="color: #fff;">Prepare your stay</h3>
                <div>
                    <a href="norway" style="color: #fff;">Norway</a>
                </div>
                <div>
                    <a href="france" style="color: #fff;">France</a>
                </div>
                <div>
                    <a href="spain" style="color: #fff;">Spain</a>
                </div>
                <div>
                    <a href="finland" style="color: #fff;">Finland</a>
                </div>
                <div>
                    <a href="preparatory-reading" style="color: #fff;">Preparatory reading</a>
                </div>
                <div>
                    <a href="learn-local-languages" style="color: #fff;">Learn local languages</a>
                </div>
            </div>
        </div>
        {/if} -->

        <a href="news" class="text-sm font-medium text-gray-700">News</a>
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
    /* nav div p {
        display: block;
        padding: 15px 15px;
        color: #000;
        text-decoration: none;
    } */
</style>
