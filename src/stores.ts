import { writable } from 'svelte/store';

const theme = writable('system');

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

const activeMenu = writable(false);

const numberOfBlobs = writable(Array);

const playAudio = writable(false);

export { theme, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs, playAudio };
