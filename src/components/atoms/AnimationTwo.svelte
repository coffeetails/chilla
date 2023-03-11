<script lang=ts>
    // import { theme } from '../../stores';
    import anime from 'animejs';
    import { onMount } from 'svelte';
    // export let blobBgr = '';
    export let id = '';
    
    onMount(() => {
        let colorAlpha = getColor("alpha");
        let colorBeta = getColor("beta");
        let colorGamma = getColor("gamma");
        let colorPsi = getColor("psi");
        let colorOmega = getColor("omega");
        
        // console.log("$theme ", $theme);
        // console.log("colors1", colorAlpha, colorBeta, colorGamma, colorPsi, colorOmega);

        // let activeTheme;
        // theme.subscribe(value => {
        //     colorAlpha = getColor("alpha");
        //     colorBeta = getColor("beta");
        //     colorGamma = getColor("gamma");
        //     colorPsi = getColor("psi");
        //     colorOmega = getColor("omega");
        //     // console.log("$theme ", $theme);
        //     console.log("colors2", colorAlpha, colorBeta, colorGamma, colorPsi, colorOmega);
        //     activeTheme = value;
        // });

        function getColor(color: string) {
            // console.log("getColor ", getComputedStyle(document.documentElement).getPropertyValue('--color-' + color));
            return getComputedStyle(document.documentElement).getPropertyValue('--color-' + color);
        }
        
            let breathIn = 4000;
            let pauseIn = 4000;
            let breathOut = 4000;
            let pauseOut = 4000;

            anime({
                targets: ['.animTwo'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: pauseOut/2,
                        scale: 1,
                        // background: '#fff'
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
                    {
                        duration: pauseOut/2,
                        scale: 1,
                        // background: '#fff'
                    }
                ],
                loop: true
            });

            // setInterval(() => {
            //     setTimeout(() => {
            //         text = "andas in"
            //         setTimeout(() => {
            //             text = "håll andan";
            //             setTimeout(() => {
            //                 text = "andas ut";
            //                 setTimeout(() => {
            //                     text = "håll andan";
            //                 },pauseOut/2);
            //             }, breathOut);
            //         }, pauseIn);
            //     }, breathIn+(pauseOut/2));
            // }, breathIn+breathOut+pauseIn+pauseOut);
            
            let blah = document.querySelector(".text");
            anime.timeline({
                targets: '.text',
                loop: true,
            }).add({
                duration: pauseOut/2,
                innerHTML: "Håll andan",
                opacity: [0, 1]
            }).add({
                duration: breathIn,
                innerHTML: "Andas in",
                opacity: [0, 1]
            }).add({
                duration: pauseIn,
                innerHTML: "Håll andan",
                opacity: [0, 1]
            }).add({
                duration: breathOut,
                innerHTML: "Andas ut",
                opacity: [0, 1]
            }).add({
                duration: pauseOut/2,
                innerHTML: "Håll andan",
                opacity: [0, 1]
            });
            
    //DO NOT TOUCH
    });
    //DO NOT TOUCH
</script>

    <div class="wrapper">
        <div class="animTwo" id={id}></div>
        <h3 class="text" >andas</h3>
    </div>

<style lang="scss">

    .wrapper {
        min-height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        scroll-snap-align: center;
        scroll-snap-stop: always;
    }

    .animTwo {
        width: calc(var(--baseline)*10);
        height: calc(var(--baseline)*10);
        background-color: #EAFDFC;
        border-radius: 50%;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text {
        position: absolute;
    }

    // .red {
    //     background-color: red;
    // }

    // .blue {
    //     background-color: blue;
    // }

    // .green {
    //     background-color: green;
    // }

    // .yellow {
    //     background-color: yellow;
    // }

</style>