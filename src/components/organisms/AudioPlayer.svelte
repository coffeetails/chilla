<script lang="ts">
    import AudioTitle from "../atoms/AudioTitle.svelte";
    import AudioControls from "./AudioControls.svelte";
    import Input from "../atoms/Input.svelte";

    // import sound1 from '../../assets/sample-6s.mp3';

    import { audioData } from "../../audioData";
    import { onMount } from "svelte";
    import { playAudio } from "../../stores";
    import AudioVolume from "./AudioVolume.svelte";

    let trackIndex = 0;
    let audioTitle = audioData[trackIndex].name;
    export let audioTrack = audioData[trackIndex].url;
    
    let audioPlayer: any

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
    }

    const forward = () => {
        console.log('next');
        audioPlayer.currentTime += 10;
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
        <!-- <div class="wrapper"> -->
        <AudioControls on:back={back} on:playPause={playPause} on:forward={forward} />
        <AudioVolume bind:volume={volume} on:adjustVolume={adjustVolume}/>
        <!-- </div> -->
        
    </div>

<style lang="scss">

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

</style>