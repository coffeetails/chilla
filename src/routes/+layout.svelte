<script>
    import HamburgerMenu from '../components/atoms/HamburgerMenu.svelte';
    import ScrollButtonDown from '../components/atoms/ScrollButtonDown.svelte';
    import ScrollButtonUp from '../components/atoms/ScrollButtonUp.svelte';
    import ThemeSwitch from '../components/molecules/ThemeSwitch.svelte';
    import '../global.scss';
    import { theme } from '../stores';
</script>

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<div class="app">
    <header>
        <HamburgerMenu/>
        header
        <ThemeSwitch/>
    </header>
    <main>
        <ScrollButtonUp/>
        <slot></slot>
        <ScrollButtonDown/>
    </main>
    <footer>footer</footer>
</div>

<style lang="scss">

</style>