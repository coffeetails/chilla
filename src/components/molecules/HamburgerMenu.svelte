<script lang="ts">
    import { activeMenu } from "../../stores";
    import CloseIcon from "../atoms/icons/CloseIcon.svelte";
    import Link from "../atoms/Link.svelte";

    let menuIsActive: Boolean;
    activeMenu.subscribe(value => menuIsActive = value);

    const closeMenu = () => {
        activeMenu.set(false);
    }

</script>

    <section class="overlay" class:visible={ menuIsActive }>
        <CloseIcon on:click={closeMenu}/>
        <div class="wrapper">
            <Link target='' on:click={closeMenu} linkDescription='Andas' linkPath='/'/>
            <Link target='' on:click={closeMenu} linkDescription='Andas rätt' linkPath='/andasratt'/>
            <Link target='' on:click={closeMenu} linkDescription='Avslappningsljud' linkPath='/avslappningsljud'/>
            <Link target='' on:click={closeMenu} linkDescription='Om oss' linkPath='/omoss'/>
        </div>
    </section>

<style lang="scss">

    .overlay {
        background-color: var(--color-psi);
        width: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 2;
        transform: translateX(-100%);
        overflow-y: auto;
        transition: transform .3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .visible {
        transform: translate(0);
    }

    .wrapper {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    .wrapper :global(a) {
        text-decoration: none;
        font-size: 28px;
        font-weight: 600;
        // color: var(--color-psi);
    }

</style>