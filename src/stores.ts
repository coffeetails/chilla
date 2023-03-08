import { writable } from 'svelte/store';

const theme = writable('system');

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

const activeMenu = writable(false);

const numberOfBlobs = writable(Array);

export { theme, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs };