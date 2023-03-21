<script>
    import ScrollButtonDown from "../components/atoms/icons/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/icons/ScrollButtonUp.svelte";
    import SectionSticks from '../components/molecules/SectionSticks.svelte';
    import Button from "../components/atoms/Button.svelte";
    import AnimationOne from "../components/atoms/animations/AnimationOne.svelte";
    import AnimationTwo from "../components/atoms/animations/AnimationTwo.svelte";
    import AnimationThree from "../components/atoms/animations/AnimationThree.svelte";
    import AnimationFour from "../components/atoms/animations/AnimationFour.svelte";
    
    import { settingsIsVisible, numberOfBlobs } from '../stores';
    import { onDestroy, onMount } from 'svelte';

    onMount(() => {
        settingsIsVisible.set(true);
        
        const blobElems = document.querySelectorAll('.blobWrapper');
        // @ts-ignore
        numberOfBlobs.set(blobElems);
        console.log(blobElems);
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
            //Ändra newY till 100

            if (progress < 1) {
                // Behöver kika på progress och se om animate körs
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

</script>

    <!-- <Button btnClass='btnUp' on:click={ scrollUp } btnText=''>
        <ScrollButtonUp />
    </Button> -->

    <AnimationOne id="animationOne" />
    <AnimationTwo id="animationTwo" />
    <AnimationThree id="animatonThree" />
    <AnimationFour id="animationFour" />
    <div class="box"></div>

    <!-- <Button btnClass='btnDown' on:click={ scrollDown } btnText=''>
        <ScrollButtonDown />
    </Button> -->

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

    // .box {
    //     height: 50dvh;
    //     width: 2em;
    //     background-color: red;
    //     position: fixed;
    //     top: 10em;
    //     left: 10em;
    // }

</style>