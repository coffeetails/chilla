<script lang=ts>
    import { activeDimmer, activeSettings, breathIn, pauseIn, breathOut, pauseOut } from "../../stores";

    import Button from "../atoms/Button.svelte";
    import RadioButton from "../molecules/RadioButton.svelte";
    import SettingsSlider from "../molecules/SettingsSlider.svelte";

    let settingsIsActive: Boolean;
    activeSettings.subscribe(value => settingsIsActive = value);

    const closeOverlay = () => {
        activeSettings.set(false);
        activeDimmer.set(false);
    }

    let storeBreathIn: number;
    breathIn.subscribe(value => storeBreathIn = value);

    let storePauseIn: number;
    pauseIn.subscribe(value => storePauseIn = value);

    let storeBreathOut: number;
    breathOut.subscribe(value => storeBreathOut = value);

    let storePauseOut: number;
    pauseOut.subscribe(value => storePauseOut = value);

    function setBreathIn(event: any) {
        breathIn.set(event.target.value);
        console.log('inandning:', storeBreathIn);
    }

    function setPauseIn(event: any) {
        pauseIn.set(event.target.value);
        console.log('pauseOne:', storePauseIn);
    }

    function setBreathOut(event: any) {
        breathOut.set(event.target.value);
        console.log('utandning:', storeBreathOut);
    }

    function setPauseOut(event: any) {
        pauseOut.set(event.target.value);
        console.log('pauseTwo:', storePauseOut);
    }

</script>

    <div class="settings" class:visible={settingsIsActive}>
        <h2>Andningsintervall</h2>
        <div class="controls-wrapper">
            <SettingsSlider on:change={setBreathIn} bind:seconds={storeBreathIn} labelFor='breathIn' labelText='Inandning' />
            <SettingsSlider on:change={setPauseIn} bind:seconds={storePauseIn} labelFor='pauseIn' labelText='Paus' />
            <SettingsSlider on:change={setBreathOut} bind:seconds={storeBreathOut} labelFor='breathOut' labelText='Utandning' />
            <SettingsSlider on:change={setPauseOut} bind:seconds={storePauseOut} labelFor='pauseOut' labelText='Paus' />
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
        z-index: 12;
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