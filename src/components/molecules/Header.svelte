<script lang="ts">
    import HamburgerMenu from "../atoms/HamburgerMenu.svelte";
    import SettingsMenu from "../atoms/SettingsMenu.svelte";
    import ThemesMenu from "../atoms/ThemesMenu.svelte";
    import { settingsIsVisible } from "../../stores";

    let visibleSettings :Boolean;
    settingsIsVisible.subscribe(value => visibleSettings = value);

</script>

    <header>
        <HamburgerMenu />
        <div class="wrapper">
            {#if visibleSettings}
                <SettingsMenu />
            {/if}
            <ThemesMenu />
        </div>
    </header>

<style>

    header {
        height: 5rem;
        width: 100%;
        padding: 1rem;
        background-color: #EDF1D6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
    }

    .wrapper {
        display: flex;
        gap: 2rem;
    }

</style>