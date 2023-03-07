<script lang=ts>
    import Header from '../components/molecules/Header.svelte';
    import ThemeSwitch from '../components/molecules/ThemeSwitch.svelte';
    import '../global.scss';
    import { theme } from '../stores';

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

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<div class="app">
    <Header />
    <main>
        <slot></slot>
    </main>
    <footer>footer
        <ThemeSwitch/>
    </footer>
</div>

<style lang="scss">

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
        height: 100vh;
        
    }

    footer {
        background-color: rgb(36, 62, 36);
        height: 5rem;
        width: 100%;
        position: fixed;
        bottom: 0;
    }

</style>