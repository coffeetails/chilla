<script>
    import { theme } from '../stores';
    import '../static/system.scss';
    import '../static/light';
    import '../static/dark';
    import Blob from "../components/atoms/Blob.svelte";
    import ScrollButtonDown from "../components/atoms/ScrollButtonDown.svelte";
    import ScrollButtonUp from "../components/atoms/ScrollButtonUp.svelte";

    let blue = 'blue';
    let red = 'red';
    let green = 'green'
    let yellow = 'yellow';
</script>


<ScrollButtonUp />
<Blob blobBgr={blue}/>
<Blob blobBgr={red}/>
<Blob blobBgr={green}/>
<Blob blobBgr={yellow}/>

<div class="colorTest">
    <p>alpha</p>
    <p>beta</p>
    <p>gamma</p>
    <p>psi</p>
    <p>omega</p>
</div>

<ScrollButtonDown />


<style lang="scss">
@use '../static/system';
@use '../static/light';
@use '../static/dark';

.colorTest { 
    color: $font-color;
    background-color: $bg-color; 
    &:nth-child(0) {background-color: $color-alpha;}
    &:nth-child(1) {background-color: $color-beta;}
    &:nth-child(2) {background-color: $color-gamma;}
    &:nth-child(3) {background-color: $color-psi;}
    &:nth-child(4) {background-color: $color-omega;}
}
</style>