<script>
    const nextView = "id";

    // const scrollDown = () => {
    //     window.scrollBy(0, window.innerHeight);
    // }

    const scrollDown = () => {
        const startY = window.pageYOffset;
        const endY = startY + window.innerHeight;
        const duration = 500;
        const startTime = performance.now();

        function animate() {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newY = startY + (endY - startY) * progress;

            window.scroll(0, newY);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // function handleScroll(event) {
    //     const delta = event.deltaY || event.detail || event.wheelData;
    //     const direction = delta > 0 ? 1 : -1;
    //     const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //     window.scrollBy({
    //         top: direction * viewHeight,
    //         behavior: 'smooth'
    //     });
    // }

    // window.addEventListener('wheel', handleScroll);

</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={scrollDown} class="fa-solid fa-chevron-down fa-5x nav-icon"></i>

<style>

    i {
        position: fixed;
        bottom: 5rem;
        cursor: pointer;
    }

</style>