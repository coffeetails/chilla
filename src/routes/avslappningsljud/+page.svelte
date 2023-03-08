<script>
    
    import AudioPlayer from "../../components/organisms/AudioPlayer.svelte";

</script>

    <div class="wrapper">
        <h1>Avslappningsljud</h1>
        <AudioPlayer />
    </div>

<style lang="scss">

    .wrapper {
        margin-top: calc(var(--margin) * 10);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: calc(var(--baseline) * 5);
    }

</style>