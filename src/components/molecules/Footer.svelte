<script lang=ts>
    import AudioPlayer from "../organisms/AudioPlayer.svelte";
    import Link from "../atoms/Link.svelte";

    import { activeFooter } from "../../stores";

    let footerIsActive: boolean;
    activeFooter.subscribe(value => footerIsActive = value);

</script>

    <footer class:maximized={ footerIsActive }>
        <div class="wrapper">
            <h1 class:visible={ footerIsActive }>Avslappningsljud</h1>
            <AudioPlayer />
        </div>
        {#if footerIsActive}
            <p class="license-info">
                Alla ljudfiler är tagna från<Link target='_empty' linkPath='https://freesound.org/' linkDescription='https://freesound.org/'/>och är under<Link target='_empty' linkPath='https://creativecommons.org/publicdomain/zero/1.0/' linkDescription='Creative Commons 0 License' />
            </p>   
        {/if}
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
        flex-direction: column;
        z-index: 12;
    }

    h1 {
        display: none;
        margin-bottom: 15rem;
        text-align: center;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    
    .maximized {
        height: calc(100% - 5rem);
    }
    
    .visible {
        display: inline-block;
    }

    p {
        font-size: 12px;
        padding: 1rem;
    }

    :global(.license-info a) {
        font-size: 12px;
    }
    
</style>