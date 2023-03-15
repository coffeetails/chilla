<script lang=ts>
    import { inandning, pauseOne, utandning, pauseTwo, all } from "../../stores";
    import anime from 'animejs';
    import { onMount } from 'svelte';
    // export let blobBgr = '';
    export let id = '';

    // window.addEventListener("load", () => {
    onMount(() => {

        let storeInandning: any = $inandning;
        let storePauseOne: any = $pauseOne;
        let storeUtandning: any = $utandning;
        let storePauseTwo: any = $pauseTwo;
        let storeAll: any = $all;
    
        let animation: any;
        let textAnimation: any;

        // let colorAlpha = getColor("alpha");
        // let colorBeta = getColor("beta");
        // let colorGamma = getColor("gamma");
        // let colorPsi = getColor("psi");
        // let colorOmega = getColor("omega");

        // function getColor(color: string) {
        //     // console.log("getColor ", getComputedStyle(document.documentElement).getPropertyValue('--color-' + color));
        //     return getComputedStyle(document.documentElement).getPropertyValue('--color-' + color);
        // }

        let textFade = 50;

        const updateAnim = () => {
            animation = anime ({
                targets: ['.animTwo'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: storeInandning * 1000,
                        scale: 2.5,
                        background: '#91D8E3'
                    },
                    {
                        duration: storePauseOne * 1000,
                        scale: 2.5
                    },
                    {
                        duration: storeUtandning * 1000,
                        scale: 1,
                        background: '#EAFDFC'
                    },
                    {
                        duration: storePauseTwo * 1000,
                        scale: 1,
                        background: '#91D8E3'
                    },
                ],
                loop: true
            });
        }

        const updateTextFade = () => {
            textAnimation = anime({
                targets: ['.animTwoText'],
                easing: 'linear',
                keyframes: [
                    {
                        duration: textFade,
                        opacity: 0
                    },
                    {
                        duration: (storeInandning * 1000) - (textFade * 2),
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
                        duration: (storePauseOne * 1000) - (textFade * 2),
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
                        duration: (storePauseTwo * 1000) - (textFade * 2),
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
                        duration: (storeUtandning * 1000) - (textFade * 2),
                        opacity: 1
                    },
                    {
                        duration: textFade,
                        opacity: 0
                    },
                ],
                loop: true
            });
        }

        const updateText = () => {
            anime.timeline({
                targets: '.animTwoText',
                loop: true,
            }).add({
                duration: storeInandning * 1000,
                // innerHTML: "0----Andas in-----0", 
                // innerHTML: "Andas in",
                innerHTML: textArr[0].toString().replace(/0/g, '')
            }).add({
                duration: storePauseOne * 1000,
                // innerHTML: "0----Håll andan-----0",
                // innerHTML: "Håll andan",
                innerHTML: textArr[1]
            }).add({
                duration: storeUtandning * 1000,
                // innerHTML: "0----Andas ut-----0"
                // innerHTML: "Andas ut"
                innerHTML: textArr[2]
            }).add({
                duration: storePauseTwo * 1000,
                // innerHTML: "0----Håll andan-----0",
                // innerHTML: "Håll andan",
                innerHTML: textArr[1]
            });
        }

        inandning.subscribe(value => {
            storeInandning = value;
            updateAnim();
            updateTextFade();
            updateText();
            animation.restart;
            textAnimation.restart;
        });

        pauseOne.subscribe(value => {
            storePauseOne = value;
            updateAnim();
            updateTextFade();
            updateText();
            animation.restart;
            textAnimation.restart;
        });

        utandning.subscribe(value => {
            storeUtandning = value;
            updateAnim();
            updateTextFade();
            updateText();
            animation.restart;
            textAnimation.restart;
        });

        pauseTwo.subscribe(value => {
            storePauseTwo = value;
            updateAnim();
            updateTextFade();
            updateText();
            animation.restart;
            textAnimation.restart;
        });

        all.subscribe(value => {
            storeAll = value;
            updateAnim();
            updateTextFade();
            updateText();
            animation.restart;
            textAnimation.restart;
        });       
    });

    // let text = 'Andas';
    let textArr = ['Andas in', 'Håll andan', 'Andas ut'];

</script>

    <div class="wrapper">
        <div class="blob animTwo" id={id}></div>
        <h3 class="animTwoText"> </h3>
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

    .animTwoText {
        z-index: 1;
    }

    // .animTwoText::before {
    //     z-index: 1;
    //     animation: fade 8s infinite ease-in;
    //     content: 'Andas in'
    // }

    // @keyframes fade {
    //     0% { opacity: 0; }
    //     10% { opacity: 1; content: 'Andas in' }
    //     20% { opacity: 1; content: 'Andas in' }
    //     30% { opacity: 0;  }
    //     40% { opacity: 1; content: 'Håll andan' }
    //     50% { opacity: 1; content: 'Håll andan' }
    //     60% { opacity: 0;  }
    //     70% { opacity: 1; content: 'Andas ut' }
    //     80% { opacity: 1; content: 'Andas ut' }
    //     90% { opacity: 0;  }
    //     100% { opacity: 1; content: 'Håll andan' }
    // }

</style>