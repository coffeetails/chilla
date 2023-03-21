<script lang=ts>
    import InfoContent from "../../components/molecules/InfoContent.svelte";

</script>

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

            & :global(button) {
                align-self: flex-start;
                border: 1px solid var(--color-psi);
                padding: var(--padding-small) var(--padding);
            }
        }
</style>