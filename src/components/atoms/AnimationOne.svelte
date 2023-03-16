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
    
    onMount(() => {
        animateText(breathInElem, pauseInElem, breathOutElem, pauseOutElem);
    });
    
</script>

    <div class="wrapper">
        <!-- create your animation here -->
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
    
    @for $i from 1 through 4 {
        .animText-#{$i} {
            z-index: 1;
            opacity: 0;
            transition: 0.5s;
        }
    }
    

    // style you elements and add animations as needed
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

</style>