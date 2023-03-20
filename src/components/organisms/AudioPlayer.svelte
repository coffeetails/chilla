<script lang="ts">
    import AudioTitle from "../atoms/AudioTitle.svelte";
    import AudioControls from "./AudioControls.svelte";
    import AudioVolume from "./AudioVolume.svelte";

    import { audioData } from "../../audioData";
    import { playAudio } from "../../stores";

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

    const loadTrack = async () => {
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

    const forward = () => {
        loadTrack(); 
    }

    const back = () => {
        console.log('last');
        audioPlayer.currentTime -= 10;
    }

    export let volume: number = 5;

    const adjustVolume = () => {
        audioPlayer.volume = volume / 10;
    }

</script>

    <div class="player">

        <audio id="player" bind:this={audioPlayer} src={audioTrack} loop ></audio>

        <AudioTitle bind:audioTitle={audioTitle}/>
        <AudioControls on:back={back} on:playPause={playPause} on:forward={forward} />
        <AudioVolume bind:volume={volume} on:adjustVolume={adjustVolume}/>
        
    </div>

<style lang="scss">

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

</style>