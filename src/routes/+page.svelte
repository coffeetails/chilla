<script>
    import { theme } from '../stores';
    import '../static/system.scss';
    import '../static/light';
    import '../static/dark';
</script>

<h1>chilla</h1>
<a href="/omoss">om oss</a>
<a href="/andasratt">andas rätt</a>
<a href="/avslappningsljud">avslappningsljud</a>
<div class="colorTest">
    <p>alpha</p>
    <p>beta</p>
    <p>gamma</p>
    <p>psi</p>
    <p>omega</p>
</div>

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