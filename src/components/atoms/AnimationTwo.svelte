<script lang=ts>
    // import { theme } from '../../stores';
    import anime from 'animejs';
    import { onMount } from 'svelte';
    // export let blobBgr = '';
    export let id = '';
    
    onMount(() => {
        // let colorAlpha = getColor("alpha");
        // let colorBeta = getColor("beta");
        // let colorGamma = getColor("gamma");
        // let colorPsi = getColor("psi");
        // let colorOmega = getColor("omega");

        // function getColor(color: string) {
        //     // console.log("getColor ", getComputedStyle(document.documentElement).getPropertyValue('--color-' + color));
        //     return getComputedStyle(document.documentElement).getPropertyValue('--color-' + color);
        // }
        
            let breathIn = 2000;
            let pauseIn = 2000;
            let breathOut = 2000;
            let pauseOut = 2000;
            let textFade = 50;

            anime({
                targets: ['.animTwo'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: pauseOut,
                        scale: 1,
                    },
                    {
                        duration: breathIn,
                        scale: 2.5,
                        background: '#91D8E3'
                    },
                    {
                        duration: pauseIn,
                        scale: 2.5,
                        background: '#91D8E3'
                    },
                    {
                        duration: breathOut,
                        scale: 1,
                        background: '#EAFDFC'
                    },
                ],
                loop: true
            });

            anime({
                targets: ['.text'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    
                    {
                        duration: breathIn - (textFade * 2),
                        opacity: 1
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    
                    {
                        duration: pauseIn - (textFade * 2),
                        opacity: 1
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    
                    {
                        duration: breathOut - (textFade * 2),
                        opacity: 1
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    
                    {
                        duration: pauseOut - (textFade * 2),
                        opacity: 1
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                ],
                loop: true
            });
            
            anime.timeline({
                targets: '.text',
                loop: true,
            }).add({
                duration: pauseOut,
                textContent: "Håll andan",
            }).add({
                duration: breathIn,
                textContent: "Andas in",
                
            }).add({
                duration: pauseIn,
                textContent: "Håll andan",
                
            }).add({
                duration: breathOut,
                textContent: "Andas ut"
            });
            
    });

</script>

    <div class="wrapper">
        <div class="blob animTwo" id={id}></div>
        <h3 class="text"> </h3>
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

    .text {
        z-index: 1;
        opacity: 0;
    }

</style>