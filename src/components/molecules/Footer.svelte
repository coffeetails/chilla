<script lang=ts>
    import AudioPlayer from "../organisms/AudioPlayer.svelte";

    // let audioTitle: string;
    // let volume: number;
    // export let audioPlayer;
    // export let audioTrack: any;

</script>

    <footer>
        <div class="wrapper">
            <h1>Avslappningsljud</h1>
            <AudioPlayer />
        </div>
    </footer>

<style lang=scss>

    footer {
        background-color: var(--bg-color);
        height: 5rem;
        height: calc(100% - 5rem);
        width: 100%;
        position: fixed;
        bottom: 0;
    }

    .wrapper :global(.player) {
        flex-direction: row;
        gap: 1rem;
        padding: .5rem;

        & :global(h3) {
            font-size: 14px;
        }

        & :global(.controls-wrapper) {
            gap: .5rem;
            margin: 0 2rem;
        }
    }
    

</style>