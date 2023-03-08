import { writable } from 'svelte/store';

const theme = writable('system');

const settingsIsVisible = writable(false);

const aboutContent = writable('intro');

const activeMenu = writable(false);

<<<<<<< HEAD
const numberOfBlobs = writable(Array);

export { theme, settingsIsVisible, aboutContent, activeMenu, numberOfBlobs };
=======
const playAudio = writable(false);

export { theme, settingsIsVisible, aboutContent, activeMenu, playAudio };
>>>>>>> b449c89f442f9d5e749683c55658721c049beda7
