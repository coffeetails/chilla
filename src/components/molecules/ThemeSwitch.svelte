<script lang="ts">
    import { onMount } from 'svelte';
    import { theme, themes } from '../../stores';
    import Button from '../atoms/Button.svelte';

    let displayThemes: string[] = themes;
    let colorValueSwitch: string;

    onMount(() => {
        theme.subscribe(() => {
            displayThemes = [];
            console.log("current theme: ", $theme);

            if(window.matchMedia('(prefers-color-scheme: light)').matches || $theme.includes("light")) {
                colorValueSwitch = "mörkt";
                for(let themePick of themes) {
                    if(themePick.includes("light")) {
                        displayThemes.push(themePick);
                    }
                }
            } else if(window.matchMedia('(prefers-color-scheme: dark)').matches || $theme.includes("dark")) {
                colorValueSwitch = "ljust";
                for(let themePick of themes) {
                    if(themePick.includes("dark")) {
                        displayThemes.push(themePick);
                    }
                }
            } else {
                console.log("what is going on?");
            }
        });
    });

    function handleClick() {
        console.log($theme);
        if($theme == "system") {
            if(window.matchMedia('(prefers-color-scheme: light)').matches) {
                theme.set("darkGreen");
            } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme.set("lightGreen");
            }
        } else if($theme.includes("light")) {
            theme.set($theme.replace("light", "dark"));
        } else if($theme.includes("dark")) {
            theme.set($theme.replace("dark", "light"));
        } else {
            console.log("this was a bit unexpected.. ", $theme);
        }
    }

</script>

<div role="radiogroup" class="wrapper">
    {#each displayThemes as themeName}
        <div class="radiobutton {themeName}">
            <input class="sr-only" type="radio" id={themeName} bind:group={$theme} value={themeName} />
            <label for={themeName}> </label>
        </div>
    {/each}
</div>

<div class="buttonWrapper">
    <Button on:click={handleClick} btnClass="themeButton" btnText=""><i class="fa-sharp fa-solid fa-circle-half-stroke"></i> Byt till {colorValueSwitch} tema</Button>
</div>

<style lang="scss">

    .buttonWrapper :global(button) {
        background-color: var(--bg-color);
        color: var(--font-color);
        border: 1px solid var(--color-beta);
        padding: var(--padding-small) var(--padding);
        & :global(i) {
            font-size: calc(var(--baseline)*1.2);
            padding-right: var(--padding);
        }
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;

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
    }

</style>