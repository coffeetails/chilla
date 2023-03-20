<script lang=ts>
    import AudioPlayer from "../organisms/AudioPlayer.svelte";
    import { activeFooter } from "../../stores";

    let footerIsActive: boolean;
    activeFooter.subscribe(value => footerIsActive = value);

    // let audioTitle: string;
    // let volume: number;
    // export let audioPlayer;
    // export let audioTrack: any;

</script>

    <footer class:maximized={ footerIsActive }>
        <div class="wrapper">
            <h1 class:visible={ footerIsActive }>Avslappningsljud</h1>
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
        transition: height .3s ease-in-out;
        display: flex;
        justify-content: center;
        z-index: 20;
    }

    h1 {
        display: none;
        margin-top: 5rem;
        margin-bottom: 15rem;
        text-align: center;
        width: 100%;
    }
    
    .wrapper :global(.player) {
        flex-direction: column;
        gap: 1rem;
        
        & :global(.controls-wrapper) {
            width: 100%;
            padding: 0 3rem;
        }
    }
    
    .maximized {
        height: calc(100% - 5rem);
    }
    
    .visible {
        display: inline-block;
    }
    
</style>