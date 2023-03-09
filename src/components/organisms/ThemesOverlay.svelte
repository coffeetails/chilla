<script lang=ts>
    import { activeDimmer, activeThemes } from "../../stores";
    import CloseIcon from "../atoms/icons/CloseIcon.svelte";
    import ThemeSwitch from "../molecules/ThemeSwitch.svelte";

    let themesIsActive: Boolean;
    activeThemes.subscribe(value => themesIsActive = value);

    const closeOverlay = () => {
        activeThemes.set(false);
        activeDimmer.set(false);
    }

</script>

    <div class="themes" class:visible={themesIsActive}>
        <CloseIcon on:click={closeOverlay}/>
        <ThemeSwitch />
    </div>

<style lang=scss>

    .themes {
        background-color: var(--bg-color);
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        border: 2px solid var(--color-gamma);
    }

    .visible {
        display: inline-block;
    }

</style>