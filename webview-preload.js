const { ipcRenderer } = require('electron');

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        ipcRenderer.sendToHost('open-new-tab', e.target.href);
    }
});
