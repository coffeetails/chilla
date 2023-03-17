<script lang=ts>
    import { onMount } from "svelte";
    import { breathIn, pauseIn, breathOut, pauseOut } from "../../stores";
    export let id = '';
    
    let blobElem: HTMLDivElement;

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
    
    onMount(() => {
        runAnimation();
    });

    function runAnimation() {
        console.log("start animation");
        animateOne();

        function animateOne() {
                breathInElem.setAttribute("style", "opacity: 1;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");
                
                blobElem.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-beta)" },
                        { transform: "scale(2)", background: "var(--color-psi)" },
                    ], {
                        duration: storeBreathIn*1000,
                        iterations: 1,
                    });
            setTimeout(() => {
                blobElem.style.transform = "scale(2)";
                blobElem.style.background = "var(--color-psi)";
                animateTwo();
            }, (storeBreathIn)*1000);
        }

        function animateTwo() {
                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 1;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");

                blobElem.animate(
                    [
                        { transform: "scale(2)", background: "var(--color-psi)" },
                    ], {
                        duration: storePauseIn*1000,
                        iterations: 1,
                    });
            setTimeout(() => {
                animateThree();
            }, (storePauseIn)*1000);
        }

        function animateThree() {
                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 1;");
                pauseOutElem.setAttribute("style", "opacity: 0;");

                blobElem.animate(
                    [
                        { transform: "scale(2)", background: "var(--color-psi)" },
                        { transform: "scale(1)", background: "var(--color-beta)" },
                    ], {
                        duration: storeBreathOut*1000,
                        iterations: 1,
                    });
            setTimeout(() => {
                blobElem.style.transform = "scale(1)";
                blobElem.style.background = "var(--color-beta)";
                animateFour();
            }, (storeBreathOut)*1000);
        }

        function animateFour() {
                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 1;");

                blobElem.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-beta)" },
                    ], {
                        duration: storePauseOut*1000,
                        iterations: 1,
                    }); 
            setTimeout(() => {
                animateOne();
            }, (storePauseOut)*1000);
        }
    }
        
    </script>
    
    <div class="wrapper">
        <!-- create your animation here -->
        <div class="blob" bind:this={blobElem} id={id}></div>

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
    

    .blob {
        width: calc(var(--baseline)*10);
        height: calc(var(--baseline)*10);
        box-shadow: 0 0 4px 2px var(--color-alpha);
        box-shadow: 0 0 2px 4px inset var(--color-omega);
        border-radius: 50%;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>