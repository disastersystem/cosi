<svelte:head>
    <title>Preparatory reading - COSI</title>
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
                ['/preparatory-reading', 'Preparatory reading']
            ]} />

            <h1 class="cosi-title-1">Preparatory reading</h1>
            <p class="cosi-headline">
                This page gives some guidance on the sort of reading you can do over the summer before you arrive, to be perfectly prepared.
            </p>
            <p class="cosi-p">
                Please refer as well to introductory readings that can be found within the course guides for each modules.
            </p>
            
            <h2 class="cosi-title-2 mt-10 mb-4">
                Reference books
            </h2>
            <ul class="cosi-ul">
                <li>Ohta, Noboru, and Alan Robertson. Colorimetry: fundamentals and applications. John Wiley & Sons, 2006T.
                </li>
                <li><a href="https://books.google.fr/books/about/Billmeyer_and_Saltzman_s_principles_of_c.html?id=Ss_vAAAAMAAJ&redir_esc=y" class="external">Billmeyer and Saltzman's principles of color technology</a></li>
                <li>Cormen, C. Leiserson, and R. Rivest, “Introduction to Algorithms,” The MIT Press, 1990.
                </li>
                <li>J. Kleinberg and E. Tardos , “Algorithm Design“, Pearson International Edition, 2006.
                </li>
                <li>E. Horowitz, S. Sahni, S. Rajasekaran, “Computer Algorithms”, Computer Science Press, 2007.</li>
            </ul>

            <h2 class="cosi-title-2 mt-10 mb-4">
                Additional books
            </h2>
            <ul class="cosi-ul">
                <li>D.E. Knuth, “The Art of Computer Programming,”, Vols. I, II, III, Addison-Wesley, 1981.
                </li>
                <li>The C++ Programming Language (4th Edition), Addison-Wesley ISBN 978-0321563842. May 2013.</li>
            </ul>
            
            <h2 class="cosi-title-2 mt-10 mb-4">
                Literature and study materials
            </h2>
            <ul class="cosi-ul">
                <li>
                    <a href="http://lecturenotesforall.blogspot.fr/2011/05/introduction-to-algorithms-cormen-ppt.html" class="external">"Introduction to Algorithms"</a>
                </li>
                <li><a href="http://www.cs.princeton.edu/~wayne/kleinberg-tardos/" class="external">"Algorithm Design"</a></li>
                <li><a href="http://docs.opencv.org/opencv_tutorials.pdf" class="external">The OpenCV Tutorials</a></li>
            </ul>
        </div>
    </div>
</main>
