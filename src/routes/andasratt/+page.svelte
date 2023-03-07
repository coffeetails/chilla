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

    .wrapper :global() {

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
</style>