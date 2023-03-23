<script lang=ts>
    import { onMount } from "svelte";
    import { breathIn, pauseIn, breathOut, pauseOut } from "../../../stores";
    export let id = '';
    
    // let blobElem: HTMLDivElement;
    let blobElem2: HTMLDivElement;
    let blobElem3: HTMLDivElement;
    let blobElem4: HTMLDivElement;
    let blobElem5: HTMLDivElement;
    let blobElem6: HTMLDivElement;

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
        animateOne();

        function animateOne() {
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem) {
                breathInElem.setAttribute("style", "opacity: 1;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");
                
                blobElem2.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                        { transform: "scale(1.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem3.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                        { transform: "scale(2)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem4.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                        { transform: "scale(2.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem5.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                        { transform: "scale(3)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem6.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                        { transform: "scale(3.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                setTimeout(() => {
                    if (blobElem2 && blobElem3 && blobElem4 && blobElem5 && blobElem6) {
                        blobElem2.style.transform = "scale(1.5)";
                        blobElem2.style.background = "var(--color-gamma)";
                        blobElem3.style.transform = "scale(2)";
                        blobElem3.style.background = "var(--color-gamma)";
                        blobElem4.style.transform = "scale(2.5)";
                        blobElem4.style.background = "var(--color-gamma)";
                        blobElem5.style.transform = "scale(3)";
                        blobElem5.style.background = "var(--color-gamma)";
                        blobElem6.style.transform = "scale(3.5)";
                        blobElem6.style.background = "var(--color-gamma)";
                        animateTwo();
                    }
                    
                }, (storeBreathIn)*1000);
            }
                
        }

        function animateTwo() {
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 1;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");

                blobElem2.animate(
                    [
                        { transform: "scale(1.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem3.animate(
                    [
                        { transform: "scale(2)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem4.animate(
                    [
                        { transform: "scale(2.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem5.animate(
                    [
                        { transform: "scale(3)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem6.animate(
                    [
                        { transform: "scale(3.5)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseIn*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                setTimeout(() => {
                    animateThree();
                }, (storePauseIn)*1000);
            }
                
        }

        function animateThree() {
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 1;");
                pauseOutElem.setAttribute("style", "opacity: 0;");

                blobElem2.animate(
                    [
                        { transform: "scale(1.5)", background: "var(--color-gamma)" },
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem3.animate(
                    [
                        { transform: "scale(2)", background: "var(--color-gamma)" },
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem4.animate(
                    [
                        { transform: "scale(2.5)", background: "var(--color-gamma)" },
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem5.animate(
                    [
                        { transform: "scale(3)", background: "var(--color-gamma)" },
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                blobElem6.animate(
                    [
                        { transform: "scale(3.5)", background: "var(--color-gamma)" },
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storeBreathOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    });
                setTimeout(() => {
                    if (blobElem2 && blobElem3 && blobElem4 && blobElem5 && blobElem6) {
                        blobElem2.style.transform = "scale(1)";
                        blobElem2.style.background = "var(--color-gamma)";
                        blobElem3.style.transform = "scale(1)";
                        blobElem3.style.background = "var(--color-gamma)";
                        blobElem4.style.transform = "scale(1)";
                        blobElem4.style.background = "var(--color-gamma)";
                        blobElem5.style.transform = "scale(1)";
                        blobElem5.style.background = "var(--color-gamma)";
                        blobElem6.style.transform = "scale(1)";
                        blobElem6.style.background = "var(--color-gamma)";
                        animateFour();
                    }
                    
                }, (storeBreathOut)*1000);
            }
                
        }

        function animateFour() { 
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 1;");

                blobElem2.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    }); 
                blobElem3.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    }); 
                blobElem4.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    }); 
                blobElem5.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    }); 
                blobElem6.animate(
                    [
                        { transform: "scale(1)", background: "var(--color-gamma)" },
                    ], {
                        duration: storePauseOut*1000,
                        easing: 'ease-in-out',
                        iterations: 1,
                    }); 
                setTimeout(() => {
                    animateOne();
                }, (storePauseOut)*1000);
            }
                
        }
    }
        
    </script>
    
    <div {id} class="blobWrapper">
        <!-- create your animation here -->
        <div class="blob blobSection animOne"></div>
        <div class="blobSection animTwo" bind:this={blobElem2}></div>
        <div class="blobSection animThree" bind:this={blobElem3}></div>
        <div class="blobSection animFour" bind:this={blobElem4}></div>
        <div class="blobSection animFive" bind:this={blobElem5}></div>
        <div class="blobSection animSix" bind:this={blobElem6}></div>

        <h3 class="animText-1" bind:this={breathInElem}>Andas in</h3>
        <h3 class="animText-2" bind:this={pauseInElem}>Håll andan</h3>
        <h3 class="animText-3" bind:this={breathOutElem}>Andas ut</h3>
        <h3 class="animText-4" bind:this={pauseOutElem}>Håll andan</h3>
    </div>

<style lang="scss">

    .blobWrapper {
        min-height: 80vh;
        margin: 10vh 0;
        display: grid;
        place-items: center;
        padding-top: 12rem;

        scroll-snap-align: center;
        scroll-snap-stop: always;
    }

    .blobWrapper > * {
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

    .blobSection {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        border: 2px solid var(--color-psi);
        background-color: var(--color-gamma);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
    }
    

    .animOne {
        z-index: 10;
    }

    .animTwo {
        z-index: 9;
    }

    .animThree {
        z-index: 8;
    }

    .animFour {
        z-index: 7;
    }

    .animFive {
        z-index: 6;
    }

    .animSix {
        z-index: 5;
    }

    h3 {
        margin-bottom: -10rem;
    }


</style>