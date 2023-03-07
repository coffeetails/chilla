<script>
    import { aboutContent } from "../../stores";

    function setIntro() {
        aboutContent.set('intro');
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h3 on:click={ setIntro } class="back">Tillbaka</h3>

<style>

    .back {
        font-size: 1rem;
        margin-top: var(--margin-large);
        border: 1px solid var(--color-beta);
        padding: var(--padding-small) var(--padding);
        align-self: flex-start;
        cursor: pointer;
    }

</style>