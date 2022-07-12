<svelte:head>
    <title>Master's thesis - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import CirclePoint from '../components/Point.svelte'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
    import {fly} from 'svelte/transition'
</script>

<main in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center px-6 mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/masters-thesis', 'Master\'s thesis']
            ]} />

            <h1 class="cosi-title-1">Master's thesis</h1>

            <h3 class="cosi-headline">
                To complete your Master's Thesis in the best possible manner, the consortium supports you both in terms of Master thesis opportunities, academic follow-up and administrative backstopping.
            </h3>
            <h3 class="cosi-headline">
                Below you'll find all important events related to the Master thesis writing.
            </h3>
        </div>
    </div>

    <div style="background: #5853A0;" class="px-6">
        <div class="flex justify-center pt-16 pb-16">
            <div class="mr-8 mt-40" style="border-right: 1px solid rgba(161, 152, 209, 0.425);"></div>
            <div style="max-width: 750px;">
                <div class="-ml-10">
                    <h2 class="flex cosi-title-2 text-white">
                        Calendar and administrative process
                        <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff" width="30"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
                    </h2>
                    <p class="mt-4 cosi-headline cosi-text-light-purple">
                        Plan your Master's Thesis at least 2 months in advance.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">1. nov. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Master Thesis opportunities are published</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        A choice of MT topics/hosting institutions are available on <a href="https://ead-sciences.univ-st-etienne.fr/index.php?language=english" class="external-dark">Claroline platform</a>.
                    </p>
                    <p class="cosi-p cosi-text-light-purple">
                        Check also <a href="http://erasmusintern.org/" class="external-dark">ERASMUSINTERN</a>
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">15. nov. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Students engage with hosting institution / apply to open placement offers</h3>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">15. nov. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Master Thesis topics are moderated</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        Students inform the consortium on their 3 most preferred choices OR alternative option from their own initiative.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">15. nov. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Students planning to go to another country start visa application</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        Please note that early visa application might be needed for some countries (up to 2 months before placement starts).
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">20. nov. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Choices are moderated / validated by the consortium</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        Academic excellence, as per semester 1 & 2 grades prevails in moderation of MT placements.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span style="font-weight: 200;">5. des. 2022</span>
                        <span style="font-weight: 400;">12.00 pm (UTC time)</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Placement Agreements are edited and signed</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        Students fill in and send back to administrative coordinator the <a href="http://goo.gl/forms/Oe9HABDtBg" class="external-dark">MT form</a> to allow us to edit a placement agreement. Ask to host institution and tell us if:
                    </p>
                    <ul class="cosi-ul">
                        <li style="color: #D9D7FF;">The placement agreement should be in French or English.</li>
                        <li style="color: #D9D7FF;">The host institution agree to proceed with a scan signed agreement instead of an original copy to speed up the process.</li>
                        <li style="color: #D9D7FF;">The host institution needs you and your academic supervisor to sign a Non-disclosure agreement / confidentiality agreement. If this is the case, please send it along your MT form.
                        </li>
                    </ul>
                    <p class="cosi-p cosi-text-light-purple">
                        If you and your host institution agree during the placement to extend the duration, this is possible (through the amendment to the agreement) but providing that this extension is agreed before end of June 2016 (before the planned date of master's thesis defense). Note that the maximum duration of the internship is 6 months.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span>Early December</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Placement Agreements are edited and signed</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        Students fill in and send back to administrative coordinator the MT form to allow us to edit a placement agreement. Ask to host institution and tell us if:
                    </p>
                    <ul class="cosi-ul cosi-text-light-purple">
                        <li style="color: #D9D7FF;">The placement agreement should be in French or English.</li>
                        <li style="color: #D9D7FF;">The host institution agree to proceed with a scan signed agreement instead of an original copy to speed up the process.</li>
                        <li style="color: #D9D7FF;">The host institution needs you and your academic supervisor to sign a Non-disclosure agreement / confidentiality agreement. If this is the case, please send it along your MT form.
                        </li>
                    </ul>
                    <p class="cosi-p cosi-text-light-purple">
                        If you and your host institution agree during the placement to extend the duration, this is possible (through the amendment to the agreement) but providing that this extension is agreed before end of June 2016 (before the planned date of master's thesis defense). Note that the maximum duration of the internship is 6 months.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span>Early December</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">The student signs 3 hard copies</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        The student signs 3 hard copies and sends them, to have them signed / stamped by the hosting institution, including the Non-disclosure agreement if applicable and if host institution agrees to have a scanned signed agreement, send a scanned copy to the administrative coordinator.
                    </p>
                    <p class="cosi-p cosi-text-light-purple">
                        In any case, send three (3) original copies of the placement agreement to:<br>
                        International Masters - Bureau 121<br>
                        Université Jean Monnet<br>
                        Faculté des Sciences et Techniques<br>
                        SITE CARNOT - Bâtiment B<br>
                        18, rue du Professeur Benoît Lauras<br>
                        42000 SAINT-ETIENNE<br>
                        France
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1" style="color: #EEEEEE;">
                        <span>Before 20. December</span>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">PA is signed by the Programme</h3>
                    <p class="cosi-p cosi-text-light-purple">
                        PA is signed by the Programme Academic Coordinator and Coordinating Institution's (UJM) Faculty Dean. 2 original copies are sent back to the student / host institution at the address mentionned in the MT form.
                    </p>
                </div>

                <div class="mt-16">
                    <CirclePoint/>
                    <h6 class="text-white text-xs italic mb-1 flex">
                        <div class="pr-2">
                            <div class="cosi-text-light-purple mb-1">From</div>
                            <div class="cosi-text-light-purple">To</div>
                        </div>
                        <div>
                            <div class="mb-1">4. jan. 2022</div>
                            <div>18. jan. 2022</div>
                        </div>
                    </h6>
                    <h3 class="text-white cosi-title-4 mb-2" style="color: #fff;">Master Thesis starts</h3>
                </div>

            </div>
        </div>
    </div>

    <div class="flex justify-center px-6 mt-20 mb-20">
        <div style="max-width: 766px;">
            <h2 class="cosi-title-2 mb-4">Finance your Master Thesis</h2>

            <p class="cosi-p">
                Placement during semester 4 is generally paid. It is for instance legally compulsory to pay trainees at least 554.40 € per month in France. We'll strive to ensure that our industrial and academic partners provide at least this amount to trainees. Most of our industrial partners offer internships that provide a substantial allowance, that is above this minimum.
            </p>

            <p class="cosi-p">
                In addition, you can apply to the <a href="/scholarship/explora" class="external">Explo'ra scholarship</a> (please refer to the specific calendar for Master Thesis).
            </p>
        </div>
    </div>
</main>
