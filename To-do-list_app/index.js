const electron = require('electron')
const {app, BrowserWindow, Menu} = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`file://${__dirname}/main.html`)
    mainWindow.on('closed',()=> app.quit())

    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
})

function createAddWindow() {
    addWindow = new BrowserWindow({
        height: 200,
        width: 300,
        title: "Add new Todo"
    })
    addWindow.loadURL(`file://${__dirname}/add.html`)
}

let menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "New Todo",
                click: ()=> {
                    createAddWindow()
                }
            },
            {
                label: "Quit",
                click: ()=> {
                    app.quit();
                }
            }
        ]
    },
]