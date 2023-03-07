<script lang="ts">
    import { theme } from '../../stores';
</script>
  
<!-- TODO: chage this to radiobuttons and then style them correctly -->
<select bind:value="{$theme}">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
</select>

<style>

</style>