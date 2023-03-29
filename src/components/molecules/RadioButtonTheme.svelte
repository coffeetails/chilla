<script lang=ts>
    import { theme } from '../../stores';

    export let themeName: string;
    console.log(themeName);

</script>

<div class="radiobutton {themeName}">
    <input class="sr-only" type="radio" id={themeName} bind:group={$theme} value={themeName} />
    <label for={themeName}> </label>
</div>

<style lang=scss>

.lightGreen {
    border: 4px solid var(--lightgreen-font-color);
    background: var(--lightgreen-color-alpha);
    background: linear-gradient(0deg, 
    var(--lightgreen-color-alpha) 33%, 
    var(--lightgreen-color-gamma) 33%, 
    var(--lightgreen-color-gamma) 60%, 
    var(--lightgreen-color-omega) 60%);
} 
.darkGreen {
    border: 4px solid var(--darkgreen-font-color);
    background: var(--darkgreen-color-alpha);
    background: linear-gradient(0deg, 
    var(--darkgreen-color-alpha) 33%, 
    var(--darkgreen-color-gamma) 33%, 
    var(--darkgreen-color-gamma) 60%, 
    var(--darkgreen-color-omega) 60%);
} 
.lightSea {
    border: 4px solid var(--lightsea-font-color);
    background: var(--lightsea-color-alpha);
    background: linear-gradient(0deg, 
    var(--lightsea-color-alpha) 33%, 
    var(--lightsea-color-gamma) 33%, 
    var(--lightsea-color-gamma) 60%, 
    var(--lightsea-color-omega) 60%);
} 
.darkSea {
    border: 4px solid var(--darksea-font-color);
    background: var(--darksea-color-alpha);
    background: linear-gradient(0deg, 
    var(--darksea-color-alpha) 33%, 
    var(--darksea-color-gamma) 33%, 
    var(--darksea-color-gamma) 60%, 
    var(--darksea-color-omega) 60%);
}
.lightBlue {
    border: 4px solid var(--lightblue-font-color);
    background: var(--lightblue-color-alpha);
    background: linear-gradient(0deg, 
    var(--lightblue-color-alpha) 33%, 
    var(--lightblue-color-gamma) 33%, 
    var(--lightblue-color-gamma) 60%, 
    var(--lightblue-color-omega) 60%);
} 
.darkBlue {
    border: 4px solid var(--darkblue-font-color);
    background: var(--darkblue-color-alpha);
    background: linear-gradient(0deg, 
    var(--darkblue-color-alpha) 33%, 
    var(--darkblue-color-gamma) 33%, 
    var(--darkblue-color-gamma) 60%, 
    var(--darkblue-color-omega) 60%);
}

.radiobutton {
    display: flex;
    // flex-grow: 1;
    text-align: center;
    justify-content: center;
    width: calc(var(--baseline)*3);
    height: calc(var(--baseline)*3);
    border-radius: 100%;
    margin: var(--margin);
    cursor: pointer;
    transform: 0.5s;

    & * {
        width: calc(var(--baseline)*3);
        height: calc(var(--baseline)*3);
        border-radius: 100%;
        cursor: pointer;
    }
}

</style>