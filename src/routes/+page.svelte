<script>
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/ScrollButtonUp.svelte";

    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';

</script>

    <!-- <h1>chilla</h1>
    <a href="/omoss">om oss</a>
    <a href="/andasratt">andas rätt</a>
    <a href="/avslappningsljud">avslappningsljud</a> -->
    <!-- <Blob /> -->
    <ScrollButtonUp />
    <Blob blobBgr={blue}/>
    <Blob blobBgr={red}/>
    <Blob blobBgr={green}/>
    <Blob blobBgr={yellow}/>
    <ScrollButtonDown />

<style lang="scss">


</style>