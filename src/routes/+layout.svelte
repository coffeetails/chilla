<script>
    import HamburgerMenu from '../components/atoms/HamburgerMenu.svelte';
import ScrollButtonDown from '../components/atoms/ScrollButtonDown.svelte';
import ScrollButtonUp from '../components/atoms/ScrollButtonUp.svelte';
import '../global.scss';
</script>

<div class="app">
    <header>
        <HamburgerMenu/>
        header
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