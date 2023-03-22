<script lang="ts">
    import AudioTitle from "../atoms/AudioTitle.svelte";
    import AudioControls from "./AudioControls.svelte";
    import AudioVolume from "./AudioVolume.svelte";

    import { audioData } from "../../audioData";
    import { playAudio, activeFooter } from "../../stores";

    let footerIsActive: boolean;
    activeFooter.subscribe(value => footerIsActive = value);

    let trackIndex = 0;
    let audioTitle = audioData[trackIndex].name;
    export let audioTrack = audioData[trackIndex].url;
    
    let audioPlayer: any;
    
    const playPause = () => {
        
        if (audioPlayer.paused) {
            audioPlayer.play();
            playAudio.set(true);
        } else {
            audioPlayer.pause();
            playAudio.set(false);
        }
    }

    const loadNextTrack = async () => {
        if (audioPlayer.paused) {
            playAudio.set(true);
        }
        
        if (trackIndex == audioData.length - 1) {
            trackIndex = 0;
        } else {
            trackIndex = trackIndex + 1;
        }
        audioTitle = audioData[trackIndex].name;
        audioTrack = audioData[trackIndex].url;
        await audioPlayer.load();
        await audioPlayer.play();
    }

    const loadPrevTrack = async () => {
        if (audioPlayer.paused) {
            playAudio.set(true);
        }

        if (trackIndex !== 0) {
            trackIndex = trackIndex - 1;
        }
        audioTitle = audioData[trackIndex].name;
        audioTrack = audioData[trackIndex].url;
        await audioPlayer.load();
        await audioPlayer.play();
    }

    export let volume: number = 5;

    const adjustVolume = () => {
        audioPlayer.volume = volume / 20;
    }

</script>

    <div class="player" class:visible={ footerIsActive }>

        <audio id="player" bind:this={audioPlayer} src={audioTrack} loop ></audio>

        <AudioTitle bind:audioTitle={audioTitle}/>
        <AudioControls on:loadNextTrack={loadNextTrack} on:playPause={playPause} on:loadPrevTrack={loadPrevTrack} />
        <AudioVolume bind:volume={volume} on:adjustVolume={adjustVolume}/>
        
    </div>

<style lang="scss">

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .visible {
        gap: 3rem;
    }

</style>