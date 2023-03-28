<script>
    import data from '../../content.json';
    import Link from '../../components/atoms/Link.svelte';

</script>

    <div class="wrapper">
        <h1>{data.about.heading}</h1>
        <p>{data.about.content}</p>
        <h2>{data.whyBreathing.heading}</h2>
        <p>{data.whyBreathing.content}</p>
        <h2>Om oss</h2>
        <p>Sidan är gjord av <Link target='_blank' linkPath="https://github.com/Hampus83" linkDescription='Hampus Egecioglu' /> och <Link  target='_blank' linkPath="https://github.com/MonBjo" linkDescription='Monica Björk' /> som ett examenarbete 2023 för utbildning till Frontendutvecklare.</p>
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