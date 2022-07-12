<svelte:head>
    <title>Contact - COSI</title>
    <meta name="description" content="">
</svelte:head>

<script>
    import {fly} from 'svelte/transition'
    import BreadCrumbs from '../components/Breadcrumbs.svelte'

    let email = ''
    let message = ''

    function sendMessage(e) {
        e.preventDefault()
        console.log(email, message, 'send')
    }
</script>

<main class="px-6" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
    <div class="flex justify-center mt-40 mb-20">
        <div style="max-width: 766px;">
            <BreadCrumbs pages={[
                ['/', 'Home'],
                ['/contact', 'Contact']
            ]} />

            <h1 class="cosi-title-1">Contact</h1>
            <!-- <p class="cosi-headline">
            </p> -->

            <div class="w-full mt-12" style="width: 500px;">
                <form action="#" method="POST">
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Your e-mail
                    </label>
                    <input
                        bind:value={email}
                        type="text" name="email" id="email"
                        autocomplete="email"
                        class="w-full p-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1
                        block w-full sm:text-sm border border-gray-400 rounded-md"
                    />

                    <label for="message" class="mt-6 block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <div class="mt-1">
                        <textarea
                            bind:value={message}
                            id="message"
                            name="message"
                            rows="8"
                            class="w-full p-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1
                            block w-full sm:text-sm border border-gray-400 rounded-md"
                        ></textarea>
                    </div>

                    <div class="mt-6 text-right">
                        <button on:click={sendMessage} type="submit" style="background: #253A90; border-radius: 1000px;" class="uppercase inline-flex justify-center items-center py-2 px-4 border border-transparent
                            shadow-sm text-sm font-medium rounded-md text-white hover:bg-indigo-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span>Send</span>
                            <svg class="ml-2" width="10" height="9" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.52728 0.803755L6.17141 0.193726C6.44415 -0.0645752 6.88517 -0.0645752 7.155 0.193726L12.7954 5.53286C13.0682 5.79116 13.0682 6.20884 12.7954 6.46439L7.155 11.8063C6.88227 12.0646 6.44125 12.0646 6.17141 11.8063L5.52728 11.1962C5.25165 10.9352 5.25745 10.5093 5.53889 10.2537L9.03515 7.09915H0.696351C0.310456 7.09915 0 6.80513 0 6.43966V5.56034C0 5.19487 0.310456 4.90085 0.696351 4.90085H9.03515L5.53889 1.74628C5.25455 1.49073 5.24874 1.0648 5.52728 0.803755Z" fill="#fff"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>

