import { writable } from 'svelte/store';

const theme = writable('system');

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

const activeMenu = writable(false);

const activeSettings = writable(false);

const activeThemes = writable(false);

const activeDimmer = writable(false);

const numberOfBlobs = writable(Array);

const activeBlob = writable('');

const playAudio = writable(false);

export { theme, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs, playAudio, activeSettings, activeThemes, activeDimmer, activeBlob };
