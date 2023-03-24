<script lang=ts>

    export let labelText: string;
    export let labelFor: string;
    export let radioGroup: string;

</script>

    <div class="radio-wrapper">
        <input on:change id={labelFor} name={radioGroup} type="radio">
        <label for={labelFor}>{labelText}</label>
    </div>

<style lang=scss>

    .radio-wrapper, .radio-wrapper *{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    label {
        padding: 0;
    }

    input[type=radio] {
        width: calc(var(--baseline)*1.25);
        height: calc(var(--baseline)*1.25);
        
        &:checked {
            accent-color: var(--color-beta);
        }
    }

</style>