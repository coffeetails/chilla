<script lang=ts>
    import Header from '../components/molecules/Header.svelte';
    import ThemeSwitch from '../components/molecules/ThemeSwitch.svelte';
    import '../global.scss';
    import { theme } from '../stores';
    import ThemeSwitch from '../components/molecules/ThemeSwitch.svelte';
    import HamburgerMenu from '../components/molecules/HamburgerMenu.svelte';
    import Footer from '../components/molecules/Footer.svelte';

</script>

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
</svelte:head>

<div class="app">
    <Header />
    <main>
        <HamburgerMenu />
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