<script lang=ts>
    import '../global.scss';

    import Header from '../components/molecules/Header.svelte';
    import Footer from '../components/molecules/Footer.svelte';
    import HamburgerMenu from '../components/molecules/HamburgerMenu.svelte';
    
    import { theme } from '../stores';    

</script>

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<div class="app">
    <Header />
    <HamburgerMenu />
    <main>
        <slot></slot>
    </main>
    <Footer />
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
        min-height: 100dvh;
        padding: 4rem;
    }

</style>