<script>
    export let id = '';
    import { activeBlob } from "../../stores";

</script>

<div id={id} class:active={$activeBlob==id}></div>

<style lang="scss">
    .active {
        background-color: var(--color-alpha);
    }
    div {
        width: calc(var(--baseline)*0.75);
        height: calc(var(--baseline)*4);
        background-color: var(--color-psi);
        border-radius: var(--baseline);
        transition: 0.25s;
    }

</style>