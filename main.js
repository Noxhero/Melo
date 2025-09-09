const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  // Dynamically import electron-is-dev
  const isDev = (await import('electron-is-dev')).default;

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'public/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, 'dist/index.html')}`);
}

app.commandLine.appendSwitch('no-sandbox'); // Keep this for Linux dev
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
