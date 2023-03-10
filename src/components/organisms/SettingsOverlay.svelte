<script lang=ts>
    import { activeDimmer, activeSettings } from "../../stores";

    import Button from "../atoms/Button.svelte";
    import RadioButton from "../molecules/RadioButton.svelte";
    import SettingsSlider from "../molecules/SettingsSlider.svelte";

    let settingsIsActive: Boolean;
    activeSettings.subscribe(value => settingsIsActive = value);

    const closeOverlay = () => {
        activeSettings.set(false);
        activeDimmer.set(false);
    }

    let seconds = '?';
    
</script>

    <div class="settings" class:visible={settingsIsActive}>
        <h2>Andningsintervall</h2>
        <div class="controls-wrapper">
            <SettingsSlider labelFor='inandning' labelText='Inandning' seconds={seconds} />
            <SettingsSlider labelFor='paus-one' labelText='Paus' seconds={seconds} />
            <SettingsSlider labelFor='utandning' labelText='Utandning' seconds={seconds} />
            <SettingsSlider labelFor='paus-two' labelText='Paus' seconds={seconds} />
            <SettingsSlider labelFor='all' labelText='Justera alla' seconds={seconds} />
        </div>
        <div class="techniques-wrapper">
            <h3>Andningstekniker</h3>
            <RadioButton radioGroup='tech' labelFor='box' labelText='Box-andning'/>
            <RadioButton radioGroup='tech' labelFor='pranayama' labelText='Pranayama-andning'/>
            <RadioButton radioGroup='tech' labelFor='4-7-8' labelText='4-7-8-andning'/>
        </div>
        <div class="btn-wrapper">
            <Button btnClass='' btnText='Spara' />
            <Button btnClass='' on:click={closeOverlay} btnText='Stäng' />
        </div>
    </div>

<style lang=scss>

    .settings {
        background-color: var(--bg-color);
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
        padding: var(--padding-large);
        border: 2px solid var(--color-gamma);
    }

    .settings :global(i) {
        padding: 0;
    }

    .settings :global(button) {
            
            margin-top: var(--margin-large);
            border: 1px solid var(--color-beta);
            padding: var(--padding-small) var(--padding);
        }

    .settings :global(button:nth-child(1)) {
        background-color: var(--color-omega);
    }

    .visible {
        display: inline-block;
    }

    .controls-wrapper {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-left: 2rem;
    }

    .techniques-wrapper {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    h3 {
        font-weight: 600;
        text-align: center;
    }

    .btn-wrapper {
        display: flex;
        justify-content: space-between;
    }

</style>