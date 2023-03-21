<script lang=ts>
    export let id = '';
    import { activeBlob } from "../../stores";

    let currentActiveBlob: string;
    activeBlob.subscribe(value => currentActiveBlob = value);

</script>
<!-- mouseup keyup click -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- <div id={id+"Stick"} class:active={$activeBlob==id} on:click={navToBlob}> -->
<div id={id+"Stick"} class:active={currentActiveBlob==id}>
    <a href={"#"+ id }> </a>
</div>

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

        a {
            display: block;
            margin: 0;
            padding: 0;
            width: calc(var(--baseline)*0.75);
            height: calc(var(--baseline)*4);
        }
    }

</style>