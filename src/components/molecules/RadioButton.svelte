<script lang=ts>

    export let labelText: string;
    export let labelFor: string;
    export let radioGroup: string;

</script>

    <div class="radio-wrapper">
        <input id={labelFor} name={radioGroup} type="radio">
        <label id={labelFor} for={labelFor}>{labelText}</label>
    </div>

<style lang=scss>

    .radio-wrapper, .radio-wrapper *{
        cursor: pointer;
        display: flex;
        gap: 1rem;
    }

    input[type=radio]:checked {
        accent-color: var(--color-beta);
    }

</style>