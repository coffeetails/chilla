import { writable } from 'svelte/store';

const theme = writable('system');

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

export { theme, settingsIsVisible, aboutContent };