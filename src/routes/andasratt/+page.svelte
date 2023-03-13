<script lang=ts>
    import Button from "../../components/atoms/Button.svelte";
    import BoxContent from "../../components/molecules/BoxContent.svelte";
    import FourSevenEightContent from "../../components/molecules/FourSevenEightContent.svelte";
    import InfoContent from "../../components/molecules/InfoContent.svelte";
    import IntroContent from "../../components/molecules/IntroContent.svelte";
    import PranayamaContent from "../../components/molecules/PranayamaContent.svelte";

    import data from '../../content.json';
    
    // export let heading: string;
    // export let content: string;

    let btnText = 'Tillbaka'

</script>

    <!-- <div class="wrapper">
        {#if content == '478'}
            <FourSevenEightContent />
            <Button btnClass='' on:click={setIntro} {btnText} />
        {:else if content == 'pranayama'}
            <PranayamaContent />
            <Button btnClass='' on:click={setIntro} {btnText} />
        {:else if content == 'box'}
            <BoxContent />
            <Button btnClass='' on:click={setIntro} {btnText} />
        {:else}
            <IntroContent />
        {/if}
    </div> -->
    <div class="wrapper">

        <InfoContent />

    </div>

<style lang="scss">
    .wrapper {
        margin-top: calc(var(--margin)*5);
        margin-bottom: calc(var(--margin)*15);
        display: flex;
        flex-direction: column;
        gap: calc(var(--baseline)*2);
        align-items: center;
        max-width: calc(var(--baseline)*50);
        padding: var(--padding);
    }
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