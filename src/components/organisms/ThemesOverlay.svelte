<script lang=ts>
    import { activeDimmer, activeThemes } from "../../stores";
    import Button from "../atoms/Button.svelte";
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
        <!-- <CloseIcon on:click={closeOverlay}/> -->
        <ThemeSwitch />
        <div class="buttonWrapper">
        <Button btnClass="" btnText="Spara" />
        <Button btnClass="" btnText="Stäng" />
        </div>
    </div>

<style lang=scss>

    .themes {
        padding: var(--padding);
        background-color: var(--bg-color);
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        border: var(--border);
        border-radius: var(--radius);

        .buttonWrapper {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }

    .visible {
        display: inline-block;
    }

</style>