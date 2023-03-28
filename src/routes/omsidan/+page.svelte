<script>
    import data from '../../content.json';

</script>

    <div class="wrapper">
        <h1>{data.about.heading}</h1>
        <p>{data.about.content}</p>
        <h2>{data.whyBreathing.heading}</h2>
        <p>{data.whyBreathing.content}</p>
        <h2>Om oss</h2>
        <p>Sidan är gjord av <a href="https://github.com/Hampus83">Hampus Egecioglu</a> och <a href="https://github.com/MonBjo">Monica Björk</a> som ett examenarbete 2023 för utbildning till Frontendutvecklare.</p>
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