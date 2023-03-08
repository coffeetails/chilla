<script lang="ts">
    import BackwardIcon from "../../components/atoms/icons/BackwardIcon.svelte";
    import ForwardIcon from "../../components/atoms/icons/ForwardIcon.svelte";
    import PlayIcon from "../../components/atoms/icons/PlayIcon.svelte";
    import PauseIcon from "../atoms/icons/PauseIcon.svelte";

    import { playAudio } from "../../stores";

    let audioPlaying: boolean;
    playAudio.subscribe(value => audioPlaying = value);

    let title = 'Raindrops';

    const play = () => {
        console.log('play');
        playAudio.set(true);
    }

    const pause = () => {
        console.log('pause');
        playAudio.set(false);
    }

    const next = () => {
        console.log('next');

    }

    const last = () => {
        console.log('last');

    }

</script>

    <div class="player">

        <audio id="player" src=""></audio>

        <div class="title-wrapper">
            <h3>{title}</h3>
        </div>
        <div class="controls-wrapper">
            <BackwardIcon on:click={last} />
            {#if audioPlaying}
                <PauseIcon on:click={pause} />  
            {:else}
                <PlayIcon on:click={play} />
            {/if}
            <ForwardIcon on:click={next} />
        </div>
        <div class="progress-bar">
            <input type="range">
        </div>
    </div>

<style lang="scss">

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    .controls-wrapper {
        width: 18rem;
        display: flex;
        justify-content: space-between;
        gap: 3rem;
    }

    .controls-wrapper :global(i) {
        color: var(--color-beta);

        &:active {
            opacity: .5;
        }
    }

    .progress-bar {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .progress-bar input {
        appearance: none;
        height: .2rem;
        background-color: var(--color-omega);
        width: 80%;

        &::-webkit-slider-thumb {
            appearance: none;
            height: .7rem;
            width: .7rem;
            border-radius: 50%;
            background-color: var(--color-beta);
        }
    }

</style>