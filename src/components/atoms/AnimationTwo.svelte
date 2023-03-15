<script lang=ts>
    import { onMount } from "svelte";
    import { breathIn, pauseIn, breathOut, pauseOut, all } from "../../stores";
    export let id = '';
    import { animateText } from '../../textAnimation';
    
    
    let breathInElem: HTMLHeadingElement;
    let pauseInElem: HTMLHeadingElement;
    let breathOutElem: HTMLHeadingElement;
    let pauseOutElem: HTMLHeadingElement;
    
    let storeBreathIn: any = $breathIn;
    let storePauseIn: any = $pauseIn;
    let storeBreathOut: any = $breathOut;
    let storePauseOut: any = $pauseOut;
    let storeAll: any = $all;
    
    breathIn.subscribe(value => { storeBreathIn = value; });
    pauseIn.subscribe(value => { storePauseIn = value; });
    breathOut.subscribe(value => { storeBreathOut = value; });
    pauseOut.subscribe(value => { storePauseOut = value; });
    all.subscribe(value => { storeAll = value; });
    
    onMount(() => {
        animateText(breathInElem, pauseInElem, breathOutElem, pauseOutElem);

    });
    
</script>

    <div class="wrapper">
        <div class="blob animTwo" id={id}></div>

        <h3 class="animText-1" bind:this={breathInElem}>Andas in 1</h3>
        <h3 class="animText-2" bind:this={pauseInElem}>Håll andan 2</h3>
        <h3 class="animText-3" bind:this={breathOutElem}>Andas ut 3</h3>
        <h3 class="animText-4" bind:this={pauseOutElem}>Håll andan 4</h3>
    </div>

<style lang="scss">

    .wrapper {
        min-height: 100dvh;
        display: grid;
        place-items: center;

        scroll-snap-align: center;
        scroll-snap-stop: always;
    }

    .wrapper > * {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    }

    .animTwo {
        width: calc(var(--baseline)*10);
        height: calc(var(--baseline)*10);
        background-color: #EAFDFC;
        box-shadow: 0 0 4px 2px var(--color-alpha);
        box-shadow: 0 0 2px 4px inset var(--color-omega);
        border-radius: 50%;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @for $i from 1 through 4 {
        .animText-#{$i} {
            z-index: 1;
            opacity: 0;
            transition: 0.5s;
            // animation: fade-#{$i} 8s ease-in infinite;
        }
    }

    // @keyframes fade-1 {
    //     0% { opacity: 1; }
    //     14% { opacity: 1; }
    //     27% { opacity: 0; }
    //     43% { opacity: 0; }
    //     57% { opacity: 0; }
    //     72% { opacity: 0; }
    //     86% { opacity: 0; }
    //     100% { opacity: 0; }
    // }

    // @keyframes fade-2 {
    //     0% { opacity: 0; }
    //     14% { opacity: 0; }
    //     27% { opacity: 1; }
    //     57% { opacity: 1; }
    //     62% { opacity: 0; }
    //     72% { opacity: 0; }
    //     86% { opacity: 0; }
    //     100% { opacity: 0; }
    // }

    // @keyframes fade-3 {
    //     0% { opacity: 0; }
    //     14% { opacity: 0; }
    //     27% { opacity: 0; }
    //     43% { opacity: 0; }
    //     57% { opacity: 1; }
    //     72% { opacity: 1; }
    //     86% { opacity: 0; }
    //     100% { opacity: 0; }
    // }
    // @keyframes fade-4 {
    //     0% { opacity: 0; }
    //     14% { opacity: 0; }
    //     27% { opacity: 0; }
    //     43% { opacity: 0; }
    //     57% { opacity: 0; }
    //     72% { opacity: 0; }
    //     86% { opacity: 1; }
    //     100% { opacity: 1; }
    // }

</style>