<script lang=ts>
    import '../global.scss';
    import Header from '../components/molecules/Header.svelte';
    import Footer from '../components/molecules/Footer.svelte';
    import HamburgerMenu from '../components/molecules/HamburgerMenu.svelte';
    
    import { theme } from '../stores';    
    import SettingsOverlay from '../components/organisms/SettingsOverlay.svelte';
    import ThemesOverlay from '../components/organisms/ThemesOverlay.svelte';
    import Dimmer from '../components/atoms/Dimmer.svelte';

</script>

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.scss`} />
    <!-- <script>
			
        window.addEventListener('wheel', function(e) {
            if (e.deltaY > 0) {
                let vh = window.innerHeight;
                window.scrollBy({
                    top: vh,
                    behavior: 'smooth'
                });
            } else {
                let vh = window.innerHeight;
                window.scrollBy({
                    top: -vh,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }, { passive: false });

    </script> -->
</svelte:head>

<div class="app">
    <Dimmer />
    <HamburgerMenu />
    <Header />
    <SettingsOverlay />
    <ThemesOverlay />
    <main>
        <slot></slot>
    </main>
    <Footer />
</div>

<style lang="scss">

    .app {
        display: flex;
        flex-direction: column;
    }

    main {
        background-color: var(--bg-color);
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 100dvh;
        background-color: var(--bg-color);
    }
</style>