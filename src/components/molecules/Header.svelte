<script>
    import HamburgerMenu from "../atoms/HamburgerMenu.svelte";
    import SettingsMenu from "../atoms/SettingsMenu.svelte";
    import ThemesMenu from "../atoms/ThemesMenu.svelte";

</script>

    <header>
        <HamburgerMenu />
        <div class="wrapper">
            <SettingsMenu />
            <ThemesMenu />
        </div>
    </header>

<style>

    header {
        height: 5rem;
        padding: 1rem;
        background-color: #EDF1D6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
    }

    .wrapper {
        display: flex;
        gap: 2rem;
    }

</style>