const { MSICreator } = require('electron-wix-msi')
const path = require('path')

const APP_DIR = path.resolve(__dirname, './release-builds/hello-world-electron-win32-ia32')
const OUT_DIR = path.resolve(__dirname, './release-builds/windows_installer')
const ICON_PATH = path.resolve(__dirname, './src/favicon.ico')

const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,
    icon: ICON_PATH,
    
    description: 'A hello world app',
    exe: 'hello-world-electron',
    name: 'Hello World Electron',
    manufacturer: 'My Company',
    version: '1.0.0',
    
    ui: {
        chooseDirectory: true
    }
})

msiCreator.create().then(function() {
    msiCreator.compile()
})