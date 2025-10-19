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
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')

  // Create BrowserView for web content
  browserView = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  mainWindow.setBrowserView(browserView)
  browserView.setBounds({ x: 0, y: 50, width: 1000, height: 650 }) // Adjust for toolbar height
  browserView.webContents.loadURL('https://www.google.com')

  // Handle window resize
  mainWindow.on('resize', () => {
    const [width, height] = mainWindow.getSize()
    browserView.setBounds({ x: 0, y: 50, width, height: height - 50 })
  })
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
