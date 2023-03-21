<script>
    export let id = '';
    import { activeBlob } from "../../stores";

    function navToBlob() {
        
    }

</script>

<div id={id+"Stick"} class:active={$activeBlob==id} on:keyup={navToBlob}>
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