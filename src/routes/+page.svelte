<script>
    import { settingsIsVisible, numberOfBlobs } from '../stores';
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/icons/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/icons/ScrollButtonUp.svelte";
    import SectionSticks from '../components/molecules/SectionSticks.svelte';
    import { onDestroy, onMount } from 'svelte';

    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';

    onMount(() => {
        settingsIsVisible.set(true);
        const blobElems = document.querySelectorAll('.blob');
        numberOfBlobs.set(blobElems);
    });

    function disableVisibleSettings() {
        settingsIsVisible.set(false);
    }

    onDestroy(disableVisibleSettings);

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