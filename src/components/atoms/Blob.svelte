<script lang=ts>
    // import { theme } from '../../stores';
    import anime from 'animejs';
    import { onMount } from 'svelte';
    export let blobBgr = '';
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
                targets: ['.blob'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: pauseOut/2,
                        translateX: -100,
                        background: '#fff'
                    },
                    {
                        duration: breathIn,
                        translateY: -200,
                        background: '#000'
                    },
                    {
                        duration: pauseIn,
                        translateX: 100,
                        background: '#fff'
                    },
                    {
                        duration: breathOut,
                        translateY: 0,
                        background: '#000'
                    },
                    {
                        duration: pauseOut/2,
                        translateX: 0,
                        background: '#fff'
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
        <div class="blob {blobBgr}" id={id}></div>
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

    .blob {
        width: calc(var(--baseline)*5);
        height: calc(var(--baseline)*5);
        background-color: var(--color-gamma);
        border-radius: 50%;
        opacity: 0.5;
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