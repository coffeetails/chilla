<script>

    const scrollUp = () => {
        const startY = window.pageYOffset;
        const endY = startY - window.innerHeight;
        const duration = 0;
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
    
</script>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i on:click={scrollUp} class="fa-solid fa-chevron-up fa-5x nav-icon"></i>

<style>
    i {
        position: fixed;
        top: calc(var(--baseline)*5);
    }

</style>