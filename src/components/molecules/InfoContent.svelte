<script lang=ts>
    import Link from "../atoms/Link.svelte";
    
    import { aboutContent } from "../../stores";
    import data from '../../content.json';
    import Button from "../atoms/Button.svelte";

    let btnText = 'Tillbaka'
    
    let activeContent: String;
    aboutContent.subscribe(value => activeContent = value);
    
    console.log(data);
    
    let heading: String = data.intro.heading;
    let content: String = data.intro.content;
    let linkHeading: String = 'Våra andningsövningar';
    let links: any;
    
    function updateContent() {
        console.log(activeContent);
        
        if (activeContent == '478') {
            heading = data.fourSevenEight.heading;
            content = data.fourSevenEight.content;
            linkHeading = 'Mer info';
            links = data.fourSevenEight.links;
        
        } else if (activeContent == 'pranayama') {
            heading = data.pranayama.heading;
            content = data.pranayama.content;
            linkHeading = 'Mer info';
            links = data.pranayama.links;
            
        } else if (activeContent == 'box') {
            heading = data.box.heading;
            content = data.box.content;
            linkHeading = 'Mer info';
            links = data.box.links;
        } 
        else {
            heading = data.intro.heading;
            content = data.intro.content;
            linkHeading = 'Våra andningsövningar'
            links = [];
        }
    }
    
    function setIntro() {
        aboutContent.set('intro');
        updateContent();       
    }
    
    function set478() {
        aboutContent.set('478');
        updateContent();
    }
    
    function setPranayama() {
        aboutContent.set('pranayama');
        updateContent();
    }
    
    function setBox() {
        aboutContent.set('box');
        updateContent();
    }
     
</script>

    <h1>{heading}</h1>
    <p>{content}</p>
    <h2>{linkHeading}</h2>
    <div class="link-wrapper">
        {#if activeContent !== 'intro'}
            {#each links as link}
                <Link target='_blank' linkDescription={link.description} linkPath={link.url} />
            {/each} 
        {:else}
            <Link target='' on:click={set478} linkDescription='4-7-8-andning' linkPath='#' />
            <Link target='' on:click={setPranayama} linkDescription='Pranayama-andning' linkPath='#' />
            <Link target='' on:click={setBox} linkDescription='Box-andning' linkPath='#' />
        {/if}
        {#if activeContent !== 'intro'}
            <Button btnClass='' on:click={setIntro} {btnText} />
        {/if}
        
    </div>

<style lang=scss>

</style>