<script>
    import Header from '../components/molecules/Header.svelte';
    import ScrollButtonDown from '../components/atoms/ScrollButtonDown.svelte';
    import ScrollButtonUp from '../components/atoms/ScrollButtonUp.svelte';
    import '../global.scss';
</script>

<div class="app">
    <Header />
    <main>
        <ScrollButtonUp/>
        <slot></slot>
        <ScrollButtonDown/>
    </main>
    <footer>footer</footer>
</div>

<style lang="scss">

    .app {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex-grow: 1;
    }

</style>