<script lang=ts>
    import { element, onMount } from "svelte/internal";
    import { activeDimmer, activeSettings, breathIn, pauseIn, breathOut, pauseOut } from "../../stores";

    import Button from "../atoms/Button.svelte";
    import RadioButton from "../molecules/RadioButton.svelte";
    import SettingsSlider from "../molecules/SettingsSlider.svelte";

    let settingsIsActive: Boolean;
    activeSettings.subscribe(value => settingsIsActive = value);

    let boxElem: HTMLInputElement | null;
    let pranayamaElem: HTMLInputElement | null;
    let fourSevenEightElem: HTMLInputElement | null;
    onMount(() => {
        boxElem = document.querySelector('#box') as HTMLInputElement;
        pranayamaElem = document.querySelector('#pranayama') as HTMLInputElement;
        fourSevenEightElem = document.querySelector('#fourSevenEight') as HTMLInputElement;
    });

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
        checkTechniques();
        console.log('inandning:', storeBreathIn);
    }

    function setPauseIn(event: any) {
        pauseIn.set(event.target.value);
        checkTechniques();
        console.log('pauseOne:', storePauseIn);
    }

    function setBreathOut(event: any) {
        breathOut.set(event.target.value);
        checkTechniques();
        console.log('utandning:', storeBreathOut);
    }

    function setPauseOut(event: any) {
        pauseOut.set(event.target.value);
        checkTechniques();
        console.log('pauseTwo:', storePauseOut);
    }

    function techniques(event: any) {
        console.log(event.target.id);
        if(event.target.id == "box") {
            breathIn.set(4);
            pauseIn.set(4);
            breathOut.set(4);
            pauseOut.set(4);
        } else if(event.target.id == "pranayama") {
            breathIn.set(4);
            pauseIn.set(16);
            breathOut.set(8);
            pauseOut.set(0);
        } else if(event.target.id == "fourSevenEight") {
            breathIn.set(4);
            pauseIn.set(7);
            breathOut.set(8);
            pauseOut.set(0);
        } else {
            console.log("odd thing happend when choosing breathing technique");
        }
    }


    function checkTechniques() {
        console.log("checkTechniques()");
        if(boxElem != null && pranayamaElem != null && fourSevenEightElem != null) {
            boxElem.checked = false;
            pranayamaElem.checked = false;
            fourSevenEightElem.checked = false;
            console.log("ohai");
            if(storeBreathIn == 4 && storePauseIn == 4 && storeBreathOut == 4 && storePauseOut == 4) {
                console.log("box");
                boxElem.checked = true;
            } else if(storeBreathIn == 4 && storePauseIn == 16 && storeBreathOut == 8 && storePauseOut == 0) {
                console.log("pranayama");
                pranayamaElem.checked = true;
            } else if(storeBreathIn == 4 && storePauseIn == 7 && storeBreathOut == 8 && storePauseOut == 0) {
                console.log("4-7-8");
                fourSevenEightElem.checked = true;
            } else {
                console.log("odd thing happend when choosing breathing technique");
            }
        }
    }

</script>

    <div class="settings" class:visible={settingsIsActive}>
        <h2>Andningsintervall</h2>
        <div class="controls-wrapper">
            <SettingsSlider on:input={setBreathIn} bind:seconds={storeBreathIn} labelFor='breathIn' labelText='Inandning' />
            <SettingsSlider on:input={setPauseIn} bind:seconds={storePauseIn} labelFor='pauseIn' labelText='Paus' />
            <SettingsSlider on:input={setBreathOut} bind:seconds={storeBreathOut} labelFor='breathOut' labelText='Utandning' />
            <SettingsSlider on:input={setPauseOut} bind:seconds={storePauseOut} labelFor='pauseOut' labelText='Paus' />
        </div>
        <div class="techniques-wrapper">
            <h3>Andningstekniker</h3>
            <RadioButton radioGroup='tech' on:change={techniques} labelFor='box' labelText='Box-andning'/>
            <RadioButton radioGroup='tech' on:change={techniques} labelFor='pranayama' labelText='Pranayama-andning'/>
            <RadioButton radioGroup='tech' on:change={techniques} labelFor='fourSevenEight' labelText='4-7-8-andning'/>
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
        z-index: 14;
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