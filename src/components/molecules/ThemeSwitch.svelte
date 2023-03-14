<script lang="ts">
    import { onMount } from 'svelte';
    import { theme, themes } from '../../stores';
    console.log("themes ", themes);

    let displayThemes: string[] = themes;
    console.log("1 displayThemes", displayThemes);

    onMount(() => {
        
        theme.subscribe(() => {
            console.log("light theme ", $theme);
            displayThemes = [];
            console.log("2 displayThemes", displayThemes);
            for(let themePick of themes) {
                if(themePick.includes("light")) {
                    displayThemes.push(themePick);
                } else if(themePick.includes("dark")) {
                    displayThemes.push(themePick);
                // } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                //     displayThemes.push(themePick);
                //     console.log("system dark theme ", $theme);
                // } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                //     displayThemes.push(themePick);
                //     console.log("system light theme ", $theme);
                } else {
                    console.log("wtf");
                }
            }
            console.log("3 displayThemes", displayThemes);
        });
        console.log("4 displayThemes", displayThemes);
    });

</script>

<h3>Färgtema</h3>
<div role="radiogroup" class="wrapper">
    {#each displayThemes as themeName}
        <div class="radiobutton">
            <input class="sr-only" type="radio" id={themeName} bind:group={$theme} value={themeName} />
            <label for={themeName}> {themeName} </label>
        </div>
    {/each}
</div>


<style lang="scss">
    h3 {
        padding: 0rem var(--padding-small) var(--padding-small);
    }

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        .radiobutton {
            flex-grow: 1;
            text-align: center;
            // width: fit-content;

            margin: var(--margin-small);
            border: var(--border);
            border-radius: var(--radius-small);
            padding: 0 var(--padding);

            color: var(--font-color);
            cursor: pointer;
        }

        .radiobutton > * {
            cursor: pointer;
        }
    }

</style>