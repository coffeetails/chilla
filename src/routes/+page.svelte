<script>
<<<<<<< HEAD
    import { settingsIsVisible, numberOfBlobs } from '../stores';
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/ScrollButtonUp.svelte";
    import { onMount } from 'svelte';
    import SectionSticks from '../components/molecules/SectionSticks.svelte';
=======
    import { theme, settingsIsVisible } from '../stores';
    import { onDestroy, onMount } from 'svelte';
    
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/icons/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/icons/ScrollButtonUp.svelte";
>>>>>>> b449c89f442f9d5e749683c55658721c049beda7

    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';

    onMount(() => {
        settingsIsVisible.set(true);
        const blobElems = document.querySelectorAll('.blob');
        numberOfBlobs.set(blobElems.length);
    });

<<<<<<< HEAD
    // console.log($numberOfBlobs);
=======
    function disableVisibleSettings() {
        settingsIsVisible.set(false);
    }

    onDestroy(disableVisibleSettings);
>>>>>>> b449c89f442f9d5e749683c55658721c049beda7

</script>


<ScrollButtonUp />

<!-- <div class="colorTest">
    <h1>Snel Hest Snel Hest </h1>
    <h2>Snel Hest Snel Hest </h2>
    <h3>Snel Hest Snel Hest </h3>
    <p id="alpha">alpha</p>
    <p id="beta">beta</p>
    <p id="gamma">gamma</p>
    <p id="psi">psi</p>
    <p id="omega">omega</p>
</div> -->

<Blob blobBgr={blue}/>
<Blob blobBgr={red}/>
<Blob blobBgr={green}/>
<Blob blobBgr={yellow}/>

<ScrollButtonDown />
<SectionSticks />

<style lang="scss">

    // Will be removed later on
    // .colorTest { 
    //     margin-top: 15rem;
    //     margin-bottom: -20rem;
    //     padding: 1rem;
    //     color: var(--font-color);
    //     background-color: var(--bg-color); 
    //     #alpha {  background-color: var(--color-alpha); }
    //     #beta { background-color: var(--color-beta); }
    //     #gamma { background-color: var(--color-gamma); }
    //     // #gamma { background-color: $color-gamma; }
    //     #psi { background-color: var(--color-psi); }
    //     #omega { background-color: var(--color-omega); }
    // }
</style>