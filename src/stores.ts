import { writable } from 'svelte/store';

const theme = writable('system');

const themes = ['system', 'light', 'dark', 'lightSea', 'darkSea', 'lightBlue', 'darkBlue'];

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

const activeMenu = writable(false);

const activeSettings = writable(false);

const activeThemes = writable(false);

const activeDimmer = writable(false);

const numberOfBlobs = writable([]);

const activeBlob = writable('');

const playAudio = writable(false);

// SETTINGS

export const inandning = writable(2);
export const pauseOne = writable(2);
export const utandning = writable(2);
export const pauseTwo = writable(2);
export const all = writable(2);

export { theme, themes, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs, playAudio, activeSettings, activeThemes, activeDimmer, activeBlob };
