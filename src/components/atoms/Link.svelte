<script lang=ts>

    export let linkPath: string | null;
    export let target: string;
    export let linkDescription: string;

</script>

    <a on:click href={linkPath} target={target} rel="noreferrer">{linkDescription}</a>

<style lang="scss">

    a:hover {
        opacity: .5;
    }

</style>