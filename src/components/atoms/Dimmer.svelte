<script lang=ts>

    import { activeDimmer, activeSettings, activeThemes } from "../../stores";

    let dimmerIsActive: Boolean;
    activeDimmer.subscribe(value => dimmerIsActive = value);
    
    function setDimmer() {
        activeDimmer.set(false);
        activeThemes.set(false);
        activeSettings.set(false);
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={setDimmer} class="dimmer" class:active={dimmerIsActive}></div>

<style lang=scss>

    .dimmer {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 13;
        display: none;
    }

    .active {
        display: inline-block;
    }

</style>