<script>

    export let blobBgr = '';
    export let id = '';

</script>

    <div class="wrapper">
        <div class="blob {blobBgr}" id={id}></div>
    </div>

<style lang="scss">

    .wrapper {
        min-height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;

        scroll-snap-align: center;
        scroll-snap-stop: always;
    }

    .blob {
        width: calc(var(--baseline)*15);
        height: calc(var(--baseline)*15);
        background-color: rgb(99, 215, 228);
        border-radius: 50%;
    }

    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }

    .green {
        background-color: green;
    }

    .yellow {
        background-color: yellow;
    }

</style>