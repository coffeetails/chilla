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
        <ThemeSwitch />
        <div class="buttonWrapper">
            <Button on:click={closeOverlay} btnClass="" btnText="Stäng" />
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
        z-index: 14;
        border: var(--border);
        border-radius: var(--radius);
        flex-direction: column;
        // align-items: center;
        gap: var(--padding);

        .buttonWrapper {
            padding: 1rem 2rem;
            display: flex;
            justify-content: center;

            & :global(button) {
                border: 1px solid var(--color-beta);
                padding: var(--padding-small) var(--padding);
            }
        }
    }

    .visible {
        display: flex;
    }

</style>