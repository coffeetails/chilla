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
        font-size: 16px;
        margin-top: 2rem;
        border: 1px solid #6c6c6c;
        padding: .5rem 1rem;
        align-self: flex-start;
        cursor: pointer;
    }

</style>