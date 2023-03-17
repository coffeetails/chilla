<script lang="ts">
    import AudioTitle from "../atoms/AudioTitle.svelte";
    import AudioControls from "./AudioControls.svelte";
    import AudioVolume from "./AudioVolume.svelte";

    import { audioData } from "../../audioData";
    import { onMount } from "svelte";
    import { playAudio } from "../../stores";

    let trackIndex = 0;
    let audioTitle = audioData[trackIndex].name;
    export let audioTrack = audioData[trackIndex].url;
    
    let audioPlayer: any

    let isPlaying: boolean;
    playAudio.subscribe(value => isPlaying = value);

    onMount(() => {
        playAudio.set(false);
    });
    
    const playPause = () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }

        playAudio.update(value => !value);
        console.log(audioTrack);
        
    }

    const forward = () => {
        console.log('next');
        // audioPlayer.currentTime += 10;
        console.log('testing');
        // audioPlayer.pause();
        
        if (!isPlaying) {
            // trackIndex = trackIndex + 1;
            // audioTitle = audioData[trackIndex].name;
            // audioTrack = audioData[trackIndex].url;
            loadTrack();
            playPause();
            // audioPlayer.play();
        } else {
            isPlaying = false;
            // audioPlayer.pause();
            
            loadTrack();
            playPause();
        }
        
        // audioPlayer.pause();
        console.log(trackIndex);
        console.log(audioTrack);
    }

    const back = () => {
        console.log('last');
        audioPlayer.currentTime -= 10;
    }

    export let volume: number = 5;

    const adjustVolume = () => {
        audioPlayer.volume = volume / 10;
    }

    const loadTrack = () => {
        trackIndex = trackIndex + 1;
        audioTitle = audioData[trackIndex].name;
        audioTrack = audioData[trackIndex].url;
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