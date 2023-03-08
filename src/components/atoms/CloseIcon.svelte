<script>
    import { activeMenu } from "../../stores";

    function setMenu() {
        activeMenu.set(false);
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={ setMenu } class="fa-solid fa-xmark fa-3x"></i>

<style>

    i {
        align-self: flex-start;
        padding-left: var(--padding-large);
        padding-top: var(--padding-large);
        cursor: pointer;
        color: var(--color-omega);
    }

</style>