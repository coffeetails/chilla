<script lang="ts">
    import { activeMenu } from "../../stores";
    import CloseIcon from "../atoms/CloseIcon.svelte";

    let menuIsActive: Boolean;
    activeMenu.subscribe(value => menuIsActive = value);

    const closeMenu = () => {
        activeMenu.set(false);
    }

</script>

    <section class="overlay" class:visible={ menuIsActive }>
        <CloseIcon />
        <div class="wrapper">
            <a on:click={closeMenu} href="/">Andas</a>
            <a on:click={closeMenu} href="/andasratt">Andas rätt</a>
            <a on:click={closeMenu} href="/avslappningsljud">Avslappningsljud</a>
            <a on:click={closeMenu} href="/omoss">Om sidan</a>
        </div>
    </section>

<style lang="scss">

    .overlay {
        background-color: #40513B;
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
    }

    a {
        text-decoration: none;
        color: #9DC08B;

        &:hover {
            opacity: .5;
        }
    }

</style>