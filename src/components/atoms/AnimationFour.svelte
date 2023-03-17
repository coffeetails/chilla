<script lang=ts>
    import { onMount } from "svelte";
    import { breathIn, pauseIn, breathOut, pauseOut, all } from "../../stores";
    export let id = '';
    
    let blobElem: HTMLDivElement;
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
        console.log("start animation");
        animateOne();

        function animateOne() {
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
            }, (storeBreathIn)*1000);
        }

        function animateTwo() {
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

        function animateThree() {
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
            }, (storeBreathOut)*1000);
        }

        function animateFour() {
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
        
    </script>
    
    <div class="wrapper">
        <!-- create your animation here -->
        <div class="blob" id={id}></div>
        <div class="blob2" bind:this={blobElem2}></div>
        <div class="blob3" bind:this={blobElem3}></div>
        <div class="blob4" bind:this={blobElem4}></div>
        <div class="blob5" bind:this={blobElem5}></div>
        <div class="blob6" bind:this={blobElem6}></div>

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
        padding-top: 12rem;

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
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        background-color: var(--color-gamma);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }

    .blob2 {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
        z-index: 9;
    }

    .blob3 {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
        z-index: 8;
    }

    .blob4 {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
        z-index: 7;
    }

    .blob5 {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
        z-index: 6;
    }

    .blob6 {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        // box-shadow: 0 0 4px 2px var(--color-alpha);
        // box-shadow: 0 0 2px 4px inset var(--color-omega);
        border: 2px solid var(--color-psi);
        border-radius: 50%;
        // opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: bottom;
        z-index: 5;
    }

    h3 {
        margin-bottom: -10rem;
    }


</style>