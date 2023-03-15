<script lang=ts>
    // import { theme } from '../../stores';
    import anime from 'animejs';
    import { onMount } from 'svelte';
    // import { inandning, pauseOne, utandning, pauseTwo, all } from "../../stores";
    export let id = '';
    
    // onMount(() => {
    //     let storeInandning: any = $inandning;
    //     let storePauseOne: any = $pauseOne;
    //     let storeUtandning: any = $utandning;
    //     let storePauseTwo: any = $pauseTwo;
    //     let storeAll: any = $all;

    //     function getColor(color: string) {
    //         return getComputedStyle(document.documentElement).getPropertyValue('--color-' + color);
    //     }
        
    //         let breathIn = 4000;
    //         let pauseIn = 4000;
    //         let breathOut = 4000;
    //         let pauseOut = 4000;

    //         anime({
    //             targets: ['.blob'],
    //             easing: 'linear',
    //             keyframes: [
    //                 {
    //                     duration: pauseOut/2,
    //                     translateX: -100,
    //                     background: '#fff'
    //                 },
    //                 {
    //                     duration: breathIn,
    //                     translateY: -200,
    //                     background: '#000'
    //                 },
    //                 {
    //                     duration: pauseIn,
    //                     translateX: 100,
    //                     background: '#fff'
    //                 },
    //                 {
    //                     duration: breathOut,
    //                     translateY: 0,
    //                     background: '#000'
    //                 },
    //                 {
    //                     duration: pauseOut/2,
    //                     translateX: 0,
    //                     background: '#fff'
    //                 }
    //             ],
    //             loop: true
    //         });
            
    //         anime.timeline({
    //             targets: '.text',
    //             loop: true,
    //         }).add({
    //             duration: pauseOut/2,
    //             innerHTML: "Håll andan",
    //             opacity: [0, 1]
    //         }).add({
    //             duration: breathIn,
    //             innerHTML: "Andas in",
    //             opacity: [0, 1]
    //         }).add({
    //             duration: pauseIn,
    //             innerHTML: "Håll andan",
    //             opacity: [0, 1]
    //         }).add({
    //             duration: breathOut,
    //             innerHTML: "Andas ut",
    //             opacity: [0, 1]
    //         }).add({
    //             duration: pauseOut/2,
    //             innerHTML: "Håll andan",
    //             opacity: [0, 1]
    //         });
    // });
    
</script>

    <div class="wrapper">
        <div class="blob" id={id}> </div>
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
</style>