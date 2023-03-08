<script>
    import { activeMenu } from "../../../stores";

    const setMenu = () => {
        activeMenu.update(value => !value);
    }

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={ setMenu } class="fa-solid fa-bars fa-3x nav-icon"> </i>
    
<style>

</style>