<script lang=ts>
    import BackButton from "../../components/atoms/BackButton.svelte";
    import BoxContent from "../../components/molecules/BoxContent.svelte";
    import FourSevenEightContent from "../../components/molecules/FourSevenEightContent.svelte";
    import IntroContent from "../../components/molecules/IntroContent.svelte";
    import PranayamaContent from "../../components/molecules/PranayamaContent.svelte";
    
    import { aboutContent } from "../../stores";

    let content: String;
    aboutContent.subscribe(value => content = value);

</script>

    <div class="wrapper">
        {#if content == '478'}
            <FourSevenEightContent />
            <BackButton />
        {:else if content == 'pranayama'}
            <PranayamaContent />
            <BackButton />
        {:else if content == 'box'}
            <BoxContent />
            <BackButton />
        {:else}
            <IntroContent />
        {/if}
    </div>

<style lang="scss">

    .wrapper {
        margin: 5rem 0 5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
    }

    .wrapper :global() {
            color: #1C315E;

            & :global(h1) {
            text-align: center;
            }

            & :global(a) {
                text-align: center;
            }

            & :global(h3) {
                cursor: pointer;
            }

            & :global(.link-wrapper) {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
        }

        

    
    
    // h1, h2, h3, p, a {
    //     color: #1C315E;
    // }

    // h1 {
    //     text-align: center;
    // }

    // a {
    //     text-align: center;
    // }

    // h3 {
    //     cursor: pointer;
    // }

    

</style>