const { app, BrowserWindow, BrowserView, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require('node:fs')
const os = require('node:os')

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

ipcMain.on('save-history', (event, entry) => {
  const historyPath = path.join(os.homedir(), 'history.json')
  let history = []
  if (fs.existsSync(historyPath)) {
    try {
      history = JSON.parse(fs.readFileSync(historyPath, 'utf8'))
    } catch (e) {
      history = []
    }
  }
  history.push({ ...entry, timestamp: new Date().toISOString() })
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2))
})

ipcMain.handle('get-history', () => {
  const historyPath = path.join(os.homedir(), 'history.json')
  if (fs.existsSync(historyPath)) {
    try {
      return JSON.parse(fs.readFileSync(historyPath, 'utf8'))
    } catch (e) {
      return []
    }
  }
  return []
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
