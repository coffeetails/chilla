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
    breathIn.subscribe(value => { storeBreathIn = value; });
    
    let storePauseIn: any = $pauseIn;
    pauseIn.subscribe(value => { storePauseIn = value; });
    
    let storeBreathOut: any = $breathOut;
    breathOut.subscribe(value => { storeBreathOut = value; });
    
    let storePauseOut: any = $pauseOut;
    pauseOut.subscribe(value => { storePauseOut = value; });
    
    let storeAll: any = $all;
    all.subscribe(value => { storeAll = value; });
    
    let blob: any;
    onMount(() => {
        animateText(breathInElem, pauseInElem, breathOutElem, pauseOutElem);
        console.log(blob.getAnimations());
        console.log(blob.getAttribute('style'));
    });
    

</script>

    <div class="wrapper">
        <div class="blob animate" id={id} bind:this={blob}></div>

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

    .blob {
        width: calc(var(--baseline)*10);
        height: calc(var(--baseline)*10);
        background-color: #EAFDFC;
        box-shadow: 0 0 4px 2px var(--color-alpha);
        box-shadow: 0 0 2px 4px inset var(--color-omega);
        border-radius: 50%;
        opacity: 0.5;

        // transition: #{storeBreathIn}s transform;
        // transition: height 2s;
        // animation: name duration timing-function delay iteration-count direction fill-mode;
        // animation: grow 2s ease-in infinite, shrink 2s ease-in 2s infinite;
        animation: grow 4s ease-in infinite;
    }

    @keyframes grow {
        0% { transform: scale(1); }
        50% { transform: scale(1.5); }
        100% { transform: scale(1); }
    }
    @keyframes shrink {
        0% { transform: scale(1.5); }
        50% { transform: scale(1); }
        100% {  }
    }


    // .animate {
    //     height: calc(var(--baseline)*15);
    // }

    @for $i from 1 through 4 {
        .animText-#{$i} {
            z-index: 1;
            opacity: 0;
            transition: 0.5s;
        }
    }

</style>