<script lang=ts>
    import Input from "../atoms/Input.svelte";

    export let labelFor: string;
    export let labelText: string;
    export let seconds: number;

</script>

    <label for={labelFor}>{labelText}: {seconds}s
        <Input bind:value={seconds} on:input />
    </label>

<style lang=scss>

    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: .5rem;
    }

    label::before {
        margin-right: auto;
    }

</style>