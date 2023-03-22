<script lang="ts">
    import HamburgerIcon from "../atoms/icons/HamburgerIcon.svelte";
    import SettingsIcon from "../atoms/icons/SettingsIcon.svelte";
    import ThemesIcon from "../atoms/icons/ThemesIcon.svelte";
    import Button from "../atoms/Button.svelte";

    import { settingsIsVisible, activeMenu, activeSettings, activeThemes, activeDimmer, activeFooter } from "../../stores";
    

    let visibleSettings :Boolean;
    settingsIsVisible.subscribe(value => visibleSettings = value);

    const setMenu = () => {
        activeMenu.update(value => !value);
        activeFooter.set(false);
    }

    const setSettings = () => {
        activeSettings.set(true);
        activeThemes.set(false);
        activeDimmer.set(true);
    }

    const setThemes = () => {
        activeThemes.set(true);
        activeSettings.set(false);
        activeDimmer.set(true);
    }

</script>

    <header>
        <Button on:click={ setMenu } btnText='' btnClass=''>
            <HamburgerIcon />
        </Button>
        <div class="header-wrapper">
            {#if visibleSettings}
                <Button on:click={ setSettings } btnText='' btnClass=''>
                    <SettingsIcon />
                </Button>
            {/if}
            <Button on:click={ setThemes } btnText='' btnClass=''>
                <ThemesIcon />
            </Button>
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
        z-index: 2;
        touch-action: none;  
    }

    .header-wrapper {
        display: flex;
        gap: calc(var(--baseline)*2);
    }

</style>