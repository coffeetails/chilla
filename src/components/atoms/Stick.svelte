<script lang=ts>
    export let id = '';
    import { activeBlob } from "../../stores";
    import Link from "./Link.svelte";

    let currentActiveBlob: string;
    activeBlob.subscribe(value => currentActiveBlob = value);

    function handleClick() {
		// alert('no more alerts');
	}

</script>

<div id={id+"Stick"} class:active={currentActiveBlob==id}>
    <!-- <Link href={`#${id}`} on:click|once={handleClick}> </Link> -->
    <!-- <a href={`#${id}`} on:click|once={handleClick} target="_self"> </a> -->
    <!-- <a href={"#" + id} on:click|once={handleClick} target="_self"> </a> -->
    <a href={"/#" + id} on:click|once={handleClick} target="_self"> </a>
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