<script>
    import { settingsIsVisible } from '../stores';
    import { onDestroy, onMount } from 'svelte';
    import SectionSticks from '../components/molecules/SectionSticks.svelte';
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/icons/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/icons/ScrollButtonUp.svelte";


    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';

    onMount(() => {
        settingsIsVisible.set(true);
    });

    function disableVisibleSettings() {
        settingsIsVisible.set(false);
    }

    onDestroy(disableVisibleSettings);

</script>


<ScrollButtonUp />

<Blob blobBgr={blue}/>
<Blob blobBgr={red}/>
<Blob blobBgr={green}/>
<Blob blobBgr={yellow}/>

<ScrollButtonDown />

<SectionSticks />


<style lang="scss">

</style>