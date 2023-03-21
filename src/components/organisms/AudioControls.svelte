<script lang=ts>
    import Button from "../atoms/Button.svelte";
    import BackwardIcon from "../atoms/icons/BackwardIcon.svelte";
    import ForwardIcon from "../atoms/icons/ForwardIcon.svelte";
    import PlayIcon from "../atoms/icons/PlayIcon.svelte";
    import PauseIcon from "../atoms/icons/PauseIcon.svelte";

    import { createEventDispatcher } from "svelte";
    import { playAudio } from "../../stores";
    
    let dispatch = createEventDispatcher();

    let audioPlaying: boolean;
    playAudio.subscribe(value => audioPlaying = value);

</script>

    <div class="controls-wrapper">
        <Button btnClass='back' on:click={() => dispatch('loadPrevTrack')} btnText=''>
            <BackwardIcon />
        </Button>
        {#if audioPlaying}
            <Button btnClass='pause' on:click={() => dispatch('playPause')} btnText=''>
                <PauseIcon /> 
            </Button> 
        {:else}
            <Button btnClass='play' on:click={() => dispatch('playPause')} btnText=''>
                <PlayIcon />
            </Button>
        {/if}
        <Button btnClass='forward' on:click={() => dispatch('loadNextTrack')} btnText=''>
            <ForwardIcon />
        </Button>
    </div>

<style lang=scss>

    .controls-wrapper {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
    }

    .controls-wrapper :global(button:nth-child(2)) {
        width: 4rem;
    }

    .controls-wrapper :global(i) {
        color: var(--color-beta);

        &:active {
            opacity: .5;
        }
    }

</style>