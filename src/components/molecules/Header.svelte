<script lang="ts">
    import HamburgerIcon from "../atoms/HamburgerIcon.svelte";
    import SettingsIcon from "../atoms/SettingsIcon.svelte";
    import ThemesIcon from "../atoms/ThemesIcon.svelte";
    import { settingsIsVisible } from "../../stores";

    let visibleSettings :Boolean;
    settingsIsVisible.subscribe(value => visibleSettings = value);

</script>

    <header>
        <HamburgerIcon />
        <div class="header-wrapper">
            {#if visibleSettings}
                <SettingsIcon />
            {/if}
            <ThemesIcon />
        </div>
    </header>

<style>

    header {
        height: calc(var(--baseline)*5);
        width: 100%;
        padding: var(--padding);
        background-color: var(--bg-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
    }

    .header-wrapper {
        display: flex;
        gap: calc(var(--baseline)*5);
    }

</style>