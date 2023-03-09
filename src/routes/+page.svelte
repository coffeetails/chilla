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
        // @ts-ignore
        numberOfBlobs.set(blobElems);
    });

    function disableVisibleSettings() {
        settingsIsVisible.set(false);
    }

    onDestroy(disableVisibleSettings);

</script>


<ScrollButtonUp />

<Blob blobBgr={blue} id="blueBlob"/>
<Blob blobBgr={red} id="redBlob"/>
<Blob blobBgr={green} id="greenBlob"/>
<Blob blobBgr={yellow} id="yellowBlob"/>

<ScrollButtonDown />

<SectionSticks />


<!-- <style lang="scss">

</style> -->