<script lang=ts>
    import { activeDimmer, activeSettings, inanding, pauseOne, utandning, pauseTwo, all } from "../../stores";

    import Button from "../atoms/Button.svelte";
    import RadioButton from "../molecules/RadioButton.svelte";
    import SettingsSlider from "../molecules/SettingsSlider.svelte";

    let settingsIsActive: Boolean;
    activeSettings.subscribe(value => settingsIsActive = value);

    const closeOverlay = () => {
        activeSettings.set(false);
        activeDimmer.set(false);
    }

    let storeInandning: number;
    inanding.subscribe(value => storeInandning = value);

    let storePauseOne: number;
    pauseOne.subscribe(value => storePauseOne = value);

    let storeUtandning: number;
    utandning.subscribe(value => storeUtandning = value);

    let storePauseTwo: number;
    pauseTwo.subscribe(value => storePauseTwo = value);

    let storeAll: number;
    all.subscribe(value => storeAll = value);

    function setInandning(event: any) {
        inanding.set(event.target.value);
        console.log('inandning:', storeInandning);
    }

    function setPauseOne(event: any) {
        pauseOne.set(event.target.value);
        console.log('pauseOne:', storePauseOne);
    }

    function setUtandning(event: any) {
        utandning.set(event.target.value);
        console.log('utandning:', storeUtandning);
    }

    function setPauseTwo(event: any) {
        pauseTwo.set(event.target.value);
        console.log('pauseTwo:', storePauseTwo);
    }

    function setAll(event: any) {
        all.set(event.target.value);
        console.log('all:', storeAll);
    }

</script>

    <div class="settings" class:visible={settingsIsActive}>
        <h2>Andningsintervall</h2>
        <div class="controls-wrapper">
            <SettingsSlider on:change={setInandning} bind:seconds={storeInandning} labelFor='inandning' labelText='Inandning' />
            <SettingsSlider on:change={setPauseOne} bind:seconds={storePauseOne} labelFor='paus-one' labelText='Paus' />
            <SettingsSlider on:change={setUtandning} bind:seconds={storeUtandning} labelFor='utandning' labelText='Utandning' />
            <SettingsSlider on:change={setPauseTwo} bind:seconds={storePauseTwo} labelFor='paus-two' labelText='Paus' />
            <SettingsSlider on:change={setAll} bind:seconds={storeAll} labelFor='all' labelText='Justera alla' />
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