const { app, BrowserWindow, Menu } = require('electron')

// Set env
process.env.NODE_ENV = 'production'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true : false

let win


function createWindow() {
  // Cria uma janela de navegação.
  win = new BrowserWindow({
    width: 300,
    height: 600,
    icon: './assets/icons/Icon_256x256.png',
    backgroundColor: '##d6d5d2',
    webPreferences: {
      nodeIntegration: true
    }

  })

  // carregar o index.html do aplicativo.
  //win.loadFile('./app/index.html')
  win.loadFile('./_TEMPLATE/index.html')
  //win.loadURL('http://gacha.club/')
}

// Cria o menu
const menu = [
  {
    role: 'fileMenu',
    // label: 'Diogo',
    // submenu: [{
    //   label: 'Quit',
    //   accelerator: 'CmdOrCtrl+W',
    //   click: () => app.quit()
    // }]

  }
]

function menuPrincipal() {
  const mainMenu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(mainMenu)
  win.on('close', () => { app.quit() })
}

// app.on('ready', () => {
//   createWindow()
//   const mainMenu = Menu.buildFromTemplate(menu)
//   Menu.setApplicationMenu(mainMenu)
//   win.on('ready', () => win = null)
// })
app.whenReady()
  .then(createWindow)
  .then(menuPrincipal)
