<script lang=ts>
    export let id = '';
    import { activeBlob } from "../../stores";
    import Link from "./Link.svelte";

    let currentActiveBlob: string;
    activeBlob.subscribe(value => currentActiveBlob = value);

    function handleClick() {
        let elem = document.querySelector("#" + id);
        console.log("#" + id);
        console.log("OHAI1", elem);
        if(elem !=null) {
            elem.scrollIntoView();
            console.log("OHAI2", elem);
        }
		// alert('no more alerts');
	}

</script>

<!-- NOTE FÖR IMORGON: Testa att sätta name={id} på blobWrapper alt. en a-tag att länka till -->

<!-- <div id={id+"Stick"} class:active={currentActiveBlob==id}> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id={id+"Stick"} class:active={currentActiveBlob==id} on:click={handleClick}>
    <!-- <Link href={"#" + id} on:click={handleClick}> </Link> -->
    <!-- <a href={"#" + id}> </a> -->
    <!-- <a href={"#" + id} on:click={handleClick}> </a> -->
    <!-- <a href={"#" + id} on:click={handleClick} target="_self"> </a> -->
    <!-- <a href={"/#" + id} on:click={handleClick} target="_self"> </a> -->
</div>

<style lang="scss">
    .active {
        background-color: var(--color-alpha);
        &:hover {
            opacity: 0.5;
        }
    }
    div {
        cursor: pointer;
        width: calc(var(--baseline)*1.5);
        height: calc(var(--baseline)*4);
        background-color: var(--color-psi);
        border-radius: calc(var(--baseline)*1);
        transition: 0.25s;
        opacity: 0.5;
        &:hover {
            opacity: 1;
        }
    }

</style>