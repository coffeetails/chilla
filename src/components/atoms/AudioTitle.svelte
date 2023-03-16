<script lang=ts>
    import { activeFooter } from "../../stores";

    let footerIsActive:boolean;
    activeFooter.subscribe(value => footerIsActive = value);

    export let audioTitle: string;

</script>

    <div class="title-wrapper">
        <h3 class:visible={ footerIsActive }>{audioTitle}</h3>
    </div>

<style lang=scss>

    h3 {
        display: none;
    }

    .visible {
        display: inline-block;
    }

</style>