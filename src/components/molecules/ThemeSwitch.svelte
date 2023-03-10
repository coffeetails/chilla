<script lang="ts">
    import { theme, themes } from '../../stores';
    console.log(themes);

</script>

<h3>Färgtema</h3>
<div role="radiogroup" class="wrapper">
    {#each themes as themeName}
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
        }
    }

</style>