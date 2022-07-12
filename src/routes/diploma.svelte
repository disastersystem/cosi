<svelte:head>
    <title>Diploma edition - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/diploma', 'Diploma edition']
            ]} />

            <h1 class="cosi-title-1">Diploma edition</h1>

            <p class="cosi-title-2 mb-4 mt-12">
                Legal framework for French diploma award
            </p>
            <p class="cosi-p">University Jean Monnet Master's Degrees are edited by the Directorate of Training and Professional Integration, upon a list endorsed by the Faculty of Science and Technology, they are then signed by the President of the University the Rectorate. Circular No. 2006-202 of 8 December 2006 defining the guidelines for developing and issuing diplomas in the framework of the “LMD”.
            </p>
            <p class="cosi-p">A degree is individual and unique. It is your responsibility to keep the original and to make copies. Forgery is punishable under Article 441-2 of the Criminal Code. A duplicate certificate can be provided upon presentation of proof. In case of destruction, loss or theft of a diploma degree, and subject to the submission of formal proof (claim form, receipt of a complaint, affidavit …), University Jean Monnet can issue a duplicate of the diploma. To request a duplicate of your diploma, fill in this <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_request_duplicate.pdf" class="external">Request of diploma duplicate</a> (in French) and send it to the Administrative Coordinator. Translation in English of this form is available <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_request_duplicate_translation1.pdf" class="external">here</a>.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                If you need to register in PhD school following your MT defense
            </h2>

            <p class="cosi-p">Considering bellow timeline, graduates wishing to enroll in PhD students right after the completion of their master might need a temporary certificate of completion (“attestation temporaire de réussite” in French) to demonstrate they will be soon awarded a master degree. Students can require this certificate to their administrative coordinator as soon as they have defended their Master Thesis defense in July or September at the latest.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                Timeline for diploma edition and delivery
            </h2>
            <p class="cosi-p">Issuance of the diplomas follows the transmission of minutes of jury and / or defense by the secretariats of faculties. In each component, a temporary certificate of completion (“Attestation de réussite“) is issued to successful students. The final original diploma is produced in a period of less than six months.
            </p>
            <p class="cosi-p">By December of the graduating year (e.g. December 2017 if you've defended your MT in September 2017 for instance), you’ll received a mail as soon as the national diplomas from University Jean Monnet and, if applicable, Gjøvik University College are ready to be sent. Both Universiy of Granada and University of Eastern Finland have their own process in place to send the diploma to graduates.
            </p>

            <h2 class="cosi-title-2 mt-12 mb-4">
                Collecting the diploma(s) in Saint Etienne
            </h2>
            <p class="cosi-p">Your diploma/s can be collected at the University Jean Monnet, campus Carnot, Building B, 2nd Floor, office 121, from 9:00 am to 12:00 am. You must bring your provisional certificate and a valid ID / passport.
            </p>
            <p class="cosi-p">In case you cannot come to Saint Etienne yourself but know someone who can collect your diploma/s on your behalf, you can fill in and send back to the Administrative Coordinator this <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_proxy_form_.pdf" class="external">Proxy form</a> (in French). Translation in English of this form is available <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_proxy_form_translation1.pdf" class="external">here</a>.</p>
            
            <h2 class="cosi-title-2 mt-12 mb-4">
                Mailing delivery of your diploma(s)
            </h2>
            <p class="cosi-p">You can alternatively have your diploma(s) send to a city hall in France of a French embassy / consulate in your country of residence.
            </p>
            <p class="cosi-p">If you wish so, please fill in and send back this <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_diploma_delivrery_request.pdf" class="external">Delivery request</a> (in French) to the Administrative Coordinator. Translation in English of this form is available <a href="https://mastercolorscience.files.wordpress.com/2015/02/fst_diploma_delivrery_request_translation1.pdf" class="external">here</a>.
            </p>
            <p class="cosi-p">To open .pdf documents, you need <a href="http://get.adobe.com/reader/" class="external">Adobe Reader</a>.</p>

        </div>
    </div>
</main>
