<script lang="ts">
    import { activeMenu } from "../../stores";

    let menuIsActive: Boolean;
    activeMenu.subscribe(value => menuIsActive = value);

</script>

    <section class="overlay" class:visible={ menuIsActive }>
        <h3>Andas</h3>
        <h3>Andas Rätt</h3>
        <h3>Avslappningsljud</h3>
        <h3>Om sidan</h3>
    </section>

<style>

    .overlay {
        background-color: #40513B;
        width: 100%;
        position: fixed;
        top: 5rem;
        bottom: 5rem;
        z-index: 2;
        transform: translateX(-100%);
        overflow-y: auto;
        transition: transform .3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 5rem;
    }

    .visible {
        transform: translate(0);
    }

    h3 {
        font-weight: 500;
        color: #9DC08B;
    }

</style>