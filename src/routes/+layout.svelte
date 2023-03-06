<script lang=ts>
    import Header from '../components/molecules/Header.svelte';
    import '../global.scss';

    // const handleScroll = (event: { deltaY: any; }) => {
    //     const deltaY = event.deltaY;
    //     const vh = window.innerHeight;

    //     if (deltaY < 0) {
    //         window.scrollTo({ top: window.pageYOffset - vh, behavior: 'smooth' })
    //     } else {
    //         window.scrollTo({ top: window.pageYOffset + vh, behavior: 'smooth' })
    //     }
    // }

    // let vh = window.innerHeight * 0.01;

    // document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window.addEventListener('resize', () => {
    //     let vh = window.innerHeight * 0.01;
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // });

</script>

<div class="app">
    <Header />
    <!-- <main on:wheel = {handleScroll}> -->
    <main>
        <slot></slot>
    </main>
    <footer>footer</footer>
</div>

<style lang="scss">

    // :global(html, body) {
    //     scroll-behavior: smooth;
    // }

    .app {
        display: flex;
        flex-direction: column;
    }

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100dvh;
        
    }

    footer {
        background-color: rgb(36, 62, 36);
        height: 5rem;
        width: 100%;
        position: fixed;
        bottom: 0;
    }

</style>