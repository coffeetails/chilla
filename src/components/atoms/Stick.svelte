<script>
    export let id = '';

</script>

<div id={id}></div>

<style lang="scss">
    div {
        width: calc(var(--baseline)*0.75);
        height: calc(var(--baseline)*4);
        background-color: var(--color-gamma);
        border-radius: var(--baseline);
    }
</style>