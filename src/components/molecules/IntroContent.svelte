<script lang="ts">

    import { aboutContent } from "../../stores";
    import Link from "../atoms/Link.svelte";

    let content: String = 'intro';

    function set478() {
        aboutContent.set('478');
        console.log(content);
    }

    function setPranayama() {
        aboutContent.set('pranayama');
        console.log(content);
    }

    function setBox() {
        aboutContent.set('box');
        console.log(content);
    }

</script>

    <h1>Andas rätt</h1>
    <p>Det är bra om du sitter eller ligger bekvämt på en plats där du inte blir störd när du börjar göra övningarna. De första gångerna du gör övningen kan du känna dig rastlös. De flesta vänjer sig efter några gånger och då kommer avslappningen snabbare.</p>
    <p>Tänk på att försöka andas med magen eftersom att andning med bröstkorgen skapar spänningar i överkroppen, men all medveten andning är bra för avslappning och välmående.</p>
    <p>När du kommit in i andingsövningarna och kanske hittat en favorit så kan du med fördel använda dig av övningarna i andra situationer som t.ex. yoga eller promenader.</p>
    <h2>Några tekniker</h2>
    <div class="link-wrapper">
        <Link target='' on:click={set478} linkDescription='4-7-8-andning' linkPath='#' />
        <Link target='' on:click={setPranayama} linkDescription='Pranayama-andning' linkPath='#' />
        <Link target='' on:click={setBox} linkDescription='Box-andning' linkPath='#' />
    </div>

<style>

</style>