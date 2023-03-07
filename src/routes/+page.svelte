<script>
    // import { theme } from '../stores';
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/ScrollButtonUp.svelte";

    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';
</script>


<ScrollButtonUp />

<div class="colorTest">
    <p id="alpha">alpha</p>
    <p id="beta">beta</p>
    <p id="gamma">gamma</p>
    <p id="psi">psi</p>
    <p id="omega">omega</p>
</div>

<Blob blobBgr={blue}/>
<Blob blobBgr={red}/>
<Blob blobBgr={green}/>
<Blob blobBgr={yellow}/>
<ScrollButtonDown />


<style lang="scss">

    .colorTest { 
        margin-top: 15rem;
        margin-bottom: -20rem;
        padding: 1rem;
        color: $font-color;
        background-color: $bg-color; 
        #alpha {background-color: $color-alpha;}
        #beta {background-color: $color-beta;}
        #gamma {background-color: $color-gamma;}
        #psi {background-color: $color-psi;}
        #omega {background-color: $color-omega;}
    }
</style>