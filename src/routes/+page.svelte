<script lang="ts">
    import SectionSticks from '../components/molecules/SectionSticks.svelte';
    import AnimationOne from "../components/atoms/animations/AnimationOne.svelte";
    import AnimationTwo from "../components/atoms/animations/AnimationTwo.svelte";
    import AnimationThree from "../components/atoms/animations/AnimationThree.svelte";
    import AnimationFour from "../components/atoms/animations/AnimationFour.svelte";
    
    import { settingsIsVisible, numberOfBlobs } from '../stores';
    import { onDestroy, onMount } from 'svelte';

    onMount(() => {
        settingsIsVisible.set(true);
        
        const blobElems = document.querySelectorAll('.blobWrapper');
        // @ts-ignore
        numberOfBlobs.set(blobElems);
        console.log(blobElems);
    });

    function disableVisibleSettings() {
        settingsIsVisible.set(false);
    }

    onDestroy(disableVisibleSettings);



    // TODO: Förenkla koden nedan iom att det inte ska gå att toggla!

	let scrollable = false;
	
	const wheel = (node: { addEventListener: (arg0: string, arg1: (e: any) => void, arg2: { passive: boolean; }) => void; removeEventListener: (arg0: string, arg1: (e: any) => void, arg2: { passive: boolean; }) => void; }, options: { scrollable: any; }) => {
		let { scrollable } = options;
		
		const handler = (e: { preventDefault: () => void; }) => {
			if (!scrollable) e.preventDefault();
		};
		
		node.addEventListener('wheel', handler, { passive: false });
		
		return {
			update(options: { scrollable: any; }) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
  };

</script>

<svelte:window use:wheel={{scrollable}} />

    <div>
        <AnimationOne id="animationOne" />
        <AnimationTwo id="animationTwo" />
        <AnimationThree id="animatonThree" />
        <AnimationFour id="animationFour" />
    </div>

    <SectionSticks />

<style lang="scss">

    div {
        touch-action: none; 
        width: 100%;
    }

    :global(.btnUp) {
        position: fixed;
        top: calc(var(--baseline)*5);
    }

    :global(.btnDown) {
        position: fixed;
        bottom: calc(var(--baseline)*5); 
    }
</style>