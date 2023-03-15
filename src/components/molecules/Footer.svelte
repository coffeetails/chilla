<script lang=ts>
    import AudioTitle from "../atoms/AudioTitle.svelte";
    import AudioControls from "../organisms/AudioControls.svelte";
    import AudioPlayer from "../organisms/AudioPlayer.svelte";
    import AudioVolume from "../organisms/AudioVolume.svelte";

    let audioTitle: string;
    let volume: number;

</script>

    <footer>
        <div class="wrapper">
            <!-- <AudioTitle bind:audioTitle={audioTitle} /> -->
            <!-- <AudioControls /> -->
            <!-- <AudioVolume bind:volume={volume} /> -->
            <AudioPlayer />
        </div>
    </footer>

<style lang=scss>

    footer {
        background-color: var(--bg-color);
        height: 5rem;
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