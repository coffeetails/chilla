<script>
    import { activeThemes, activeSettings, activeDimmer } from "../../../stores";

    const setThemes = () => {
        activeThemes.set(true);
        activeSettings.set(false);
        activeDimmer.set(true);
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={setThemes} class="nav-icon fa-solid fa-palette fa-2x"> </i>

<style>

</style>