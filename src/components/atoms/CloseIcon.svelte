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
        padding-left: 1.5rem;
        padding-top: 1rem;
        cursor: pointer;
    }

</style>