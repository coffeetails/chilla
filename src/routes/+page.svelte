<script>
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/icons/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/icons/ScrollButtonUp.svelte";
    import SectionSticks from '../components/molecules/SectionSticks.svelte';

    import { settingsIsVisible, numberOfBlobs } from '../stores';
    import { onDestroy, onMount } from 'svelte';
    import Button from "../components/atoms/Button.svelte";

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

    const scrollUp = () => {
        const startY = window.pageYOffset;
        const endY = startY - window.innerHeight;
        const duration = 0;
        const startTime = performance.now();

        function animate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newY = startY + (endY - startY) * progress;

            window.scroll(0, newY);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    const scrollDown = () => {
        const startY = window.pageYOffset;
        const endY = startY + window.innerHeight;
        const duration = 0;
        const startTime = performance.now();

        function animate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newY = startY + (endY - startY) * progress;

            window.scroll(0, newY);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

</script>

    <Button btnClass='btnUp' on:click={ scrollUp } btnText=''>
        <ScrollButtonUp />
    </Button>

    <Blob blobBgr={blue} id="blueBlob"/>
    <Blob blobBgr={red} id="redBlob"/>
    <Blob blobBgr={green} id="greenBlob"/>
    <Blob blobBgr={yellow} id="yellowBlob"/>

    <Button btnClass='btnDown' on:click={ scrollDown } btnText=''>
        <ScrollButtonDown />
    </Button>

    <SectionSticks />

<style lang="scss">

    :global(.btnUp) {
        position: fixed;
        top: calc(var(--baseline)*5);
    }

    :global(.btnDown) {
        position: fixed;
        bottom: calc(var(--baseline)*5); 
    }

</style>