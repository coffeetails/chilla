<script lang=ts>
    export let id = '';
    import { activeBlob } from "../../stores";

    let currentActiveBlob: string;
    activeBlob.subscribe(value => currentActiveBlob = value);

    function handleClick() {
        let elem = document.querySelector("#" + id);
        if(elem !=null) {
            elem.scrollIntoView();
        }
	}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id={id+"Stick"} class:active={currentActiveBlob==id} on:click={handleClick}>
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