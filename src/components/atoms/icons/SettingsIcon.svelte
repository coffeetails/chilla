<script>
    import { activeSettings, activeThemes, activeDimmer } from "../../../stores";

    const setSettings = () => {
        activeSettings.set(true);
        activeThemes.set(false);
        activeDimmer.set(true);
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={setSettings} class="nav-icon fa-solid fa-hourglass fa-2x"> </i>

<style>

</style>