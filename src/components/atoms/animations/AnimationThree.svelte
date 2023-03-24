<script lang=ts>
    import { onMount } from "svelte";
    import { breathIn, pauseIn, breathOut, pauseOut } from "../../../stores";
    export let id = '';
    
    let blobElem: HTMLDivElement;
    let blobElemTwo: HTMLDivElement;
    let blobElemThree: HTMLDivElement;
    let blobElemFour: HTMLDivElement;
    let blobElemFive: HTMLDivElement;
    let blobElemSix: HTMLDivElement;

    let blobElemArray: HTMLDivElement[];

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
    
    const polygonLine = "polygon(70% 100%, 70% 100%, 70% 100%, 70% 100%, 70% 100%, 30% 100%, 30% 98%, 70% 98%)";
    const polygonTriangle = "polygon(70% 100%, 70% 100%, 70% 100%, 70% 100%, 70% 100%, 30% 100%, 50% 60%, 70% 100%)";
    const polygonSquare = "polygon(70% 100%, 70% 100%, 70% 100%, 70% 100%, 70% 100%, 30% 100%, 30% 60%, 70% 60%)";
    const polygonPentagon = "polygon(80% 68%, 70% 100%, 70% 100%, 70% 100%, 70% 100%, 30% 100%, 20% 68%, 50% 44%)";
    const polygonHexagon = "polygon(70% 44%, 85% 72%, 70% 100%, 70% 100%, 70% 100%, 30% 100%, 15% 72%, 30% 44%)";
    const polygonHeptagon = "polygon(50% 25%, 80% 38%, 90% 69%, 70% 100%, 70% 100%, 30% 100%, 10% 69%, 20% 38%)";

    const polygonOctagon = "polygon(30% 25%, 70% 25%, 90% 45%, 90% 75%, 70% 100%, 30% 100%, 10% 75%, 10% 45%)";
    
    onMount(() => {
        runAnimation();
        blobElemArray = [blobElem, blobElemTwo, blobElemThree, blobElemFour, blobElemFive, blobElemSix];
    });

    function runAnimation() {
        animateOne();

        function animateOne() {
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem && blobElem) {

                breathInElem.setAttribute("style", "opacity: 1;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");
            
                const options = { duration: storeBreathIn*1000, iterations: 1, } ;
            
                blobElem.animate({
                        clipPath: [polygonLine, polygonTriangle, polygonSquare, polygonPentagon, polygonHexagon, polygonHeptagon, polygonOctagon],
                        backgroundColor: ["var(--color-beta)", "var(--color-alpha)"]
                    }, options);
                    blobElemTwo.animate({
                        clipPath: [polygonLine, polygonTriangle, polygonSquare, polygonPentagon, polygonHexagon, polygonHeptagon],
                        backgroundColor: ["var(--color-beta)", "var(--color-beta)"]
                    }, options);
                    blobElemThree.animate({
                        clipPath: [polygonLine, polygonTriangle, polygonSquare, polygonPentagon, polygonHexagon],
                        backgroundColor: ["var(--color-beta)", "var(--color-gamma)"]
                    }, options);
                    blobElemFour.animate({
                        clipPath: [polygonLine, polygonTriangle, polygonSquare, polygonPentagon],
                        backgroundColor: ["var(--color-beta)", "var(--color-gamma)"]
                    }, options);
                    blobElemFive.animate({
                        clipPath: [polygonLine, polygonTriangle, polygonSquare],
                        backgroundColor: ["var(--color-beta)", "var(--color-psi)"]
                    }, options);
                    blobElemSix.animate({
                        clipPath: [polygonLine, polygonTriangle],
                        backgroundColor: ["var(--color-beta)", "var(--color-omega)"]
                    }, options);
                setTimeout(() => {
                    if (blobElem && blobElemTwo && blobElemThree && blobElemFour && blobElemFive && blobElemSix) {

                        blobElem.style.clipPath = polygonOctagon;
                        blobElemTwo.style.clipPath = polygonHeptagon;
                        blobElemThree.style.clipPath = polygonHexagon;
                        blobElemFour.style.clipPath = polygonPentagon;
                        blobElemFive.style.clipPath = polygonSquare;
                        blobElemSix.style.clipPath = polygonTriangle;
                        
                        blobElem.style.background = "var(--color-alpha)";
                        blobElemTwo.style.background = "var(--color-beta)";
                        blobElemThree.style.background = "var(--color-gamma)";
                        blobElemFour.style.background = "var(--color-gamma)";
                        blobElemFive.style.background = "var(--color-psi)";
                        blobElemSix.style.background = "var(--color-omega)";
                        
                        animateTwo();
                    }
                }, (storeBreathIn)*1000);
            }
        }
            
        function animateTwo() {

            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem && blobElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 1;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 0;");
                
                setTimeout(() => {
                    animateThree();
                }, (storePauseIn)*1000);
            }
        }

        function animateThree() {
            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem && blobElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 1;");
                pauseOutElem.setAttribute("style", "opacity: 0;");

                const options = { duration: storeBreathOut*1000, iterations: 1, } ;
                
                blobElem.animate({
                    clipPath: [polygonOctagon, polygonHeptagon, polygonHexagon, polygonPentagon,polygonSquare, polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-alpha)", "var(--color-beta)"]
                }, options);
                blobElemTwo.animate({
                    clipPath: [polygonHeptagon, polygonHexagon, polygonPentagon,polygonSquare, polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-beta)", "var(--color-beta)"]
                }, options);
                blobElemThree.animate({
                    clipPath: [polygonHexagon, polygonPentagon,polygonSquare, polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-gamma)", "var(--color-beta)"]
                }, options);
                blobElemFour.animate({
                    clipPath: [polygonPentagon,polygonSquare, polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-gamma)", "var(--color-beta)"]
                }, options);
                blobElemFive.animate({
                    clipPath: [polygonSquare, polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-psi)", "var(--color-beta)"]
                }, options);
                blobElemSix.animate({
                    clipPath: [polygonTriangle, polygonLine],
                    backgroundColor: ["var(--color-omega)", "var(--color-beta)"]
                }, options);
                
                setTimeout(() => {
                    for(let elem of blobElemArray) {
                        elem.style.clipPath = polygonLine;
                        elem.style.background = "var(--color-beta)";
                    }
                    animateFour();
                }, (storeBreathOut)*1000);
            }
        }
        
        function animateFour() {

            if (breathInElem && pauseInElem && breathOutElem && pauseOutElem && blobElem) {

                breathInElem.setAttribute("style", "opacity: 0;");
                pauseInElem.setAttribute("style", "opacity: 0;");
                breathOutElem.setAttribute("style", "opacity: 0;");
                pauseOutElem.setAttribute("style", "opacity: 1;");

                const options =  { duration: storePauseOut*1000, iterations: 1};
                
                blobElem.animate([
                    { 
                        clipPath: polygonLine, 
                        background: "var(--color-beta)" 
                    },
                ], options); 
                blobElemTwo.animate([
                    { 
                        clipPath: polygonLine, 
                        background: "var(--color-beta)" 
                    },
                ], options); 
                setTimeout(() => {
                    animateOne();
                }, (storePauseOut)*1000);
            }
        }
    }
        
    </script>
    
    <div {id} class="blobWrapper">
        <!-- create your animation here -->
        <div class="blob blobSection" bind:this={blobElem}></div>
        <div class="blobSection" bind:this={blobElemTwo}></div>
        <div class="blobSection" bind:this={blobElemThree}></div>
        <div class="blobSection" bind:this={blobElemFour}></div>
        <div class="blobSection" bind:this={blobElemFive}></div>
        <div class="blobSection" bind:this={blobElemSix}></div>

        <h3 class="animText" bind:this={breathInElem}>Andas in</h3>
        <h3 class="animText" bind:this={pauseInElem}>Håll andan</h3>
        <h3 class="animText" bind:this={breathOutElem}>Andas ut</h3>
        <h3 class="animText" bind:this={pauseOutElem}>Håll andan</h3>
    </div>

<style lang="scss">

    .blobWrapper {
        min-height: 80vh;
        margin: 10vh 0;
        display: grid;
        place-items: center;

        scroll-snap-align: center;
        scroll-snap-stop: always;

        h3 {
            margin-top: 15rem;
        }
    }

    .blobWrapper > * {
        grid-column: 1 / -1;
        grid-row: 1 / -1;
    }
    
    .blobSection {
        clip-path: polygon(50% 100%, 50% 100%, 100% 100%, 0% 100%);
        width: calc(var(--baseline)*20);
        height: calc(var(--baseline)*20);
        background-color: gray;
        margin-bottom: 10rem;
    }

</style>