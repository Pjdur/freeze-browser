const { app, BrowserWindow, BrowserView, ipcMain } = require('electron/main')
const path = require('node:path')

let mainWindow
let browserView

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true
    }
  })

  mainWindow.loadFile('index.html')
}

// IPC handlers
ipcMain.on('load-url', (event, url) => {
  if (browserView) {
    browserView.webContents.loadURL(url)
  }
})

ipcMain.on('go-back', () => {
  if (browserView && browserView.webContents.canGoBack()) {
    browserView.webContents.goBack()
  }
})

ipcMain.on('go-forward', () => {
  if (browserView && browserView.webContents.canGoForward()) {
    browserView.webContents.goForward()
  }
})

ipcMain.on('reload', () => {
  if (browserView) {
    browserView.webContents.reload()
  }
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
