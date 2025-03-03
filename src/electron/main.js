const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// Add this at the start of your main.js
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Add this to handle file associations
app.setAsDefaultProtocolClient('note-template');

const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    if (isDev) {
        mainWindow.loadURL('http://localhost:5173');
    } else {
        const indexPath = path.join(app.getAppPath(), 'dist', 'index.html');
        console.log("Loading file:", indexPath);

        mainWindow.loadFile(indexPath).catch(err => {
            console.error("Failed to load file:", err);
        });
    }

    // Open external links in the default web browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('http')) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });

    // Prevent navigation within Electron (e.g., redirects)
    mainWindow.webContents.on('will-navigate', (event, url) => {
        if (url.startsWith('http')) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});