<script>
    import data from '../../content.json';

</script>

    <div class="wrapper">
        <h1>{data.about.heading}</h1>
        <p>{data.about.content}</p>
        <h2>{data.whyBreathing.heading}</h2>
        <p>{data.whyBreathing.content}</p>
    </div>

<style lang="scss">

    .wrapper {
        margin-top: calc(var(--margin)*5);
        margin-bottom: calc(var(--margin)*15);
        display: flex;
        flex-direction: column;
        gap: calc(var(--baseline)*2);
        align-items: center;
        max-width: calc(var(--baseline)*50);
        padding: var(--padding);
    }

    h2 {
        text-align: center;
    }

</style>