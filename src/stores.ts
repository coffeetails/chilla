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

const activeFooter = writable(false);

// SETTINGS

export const breathIn = writable(2);
export const pauseIn = writable(2);
export const breathOut = writable(2);
export const pauseOut = writable(2);

export { theme, themes, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs, playAudio, activeSettings, activeThemes, activeDimmer, activeBlob, activeFooter };
