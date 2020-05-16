const electron= require('electron')
const {app, BrowserWindow, Menu}= electron;

let mainWindow;
app.on('ready', ()=>{
    mainWindow= new BrowserWindow({ })
    mainWindow.loadURL(`file://${__dirname}/main.html`)
    const mainMenu= Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
})

let menuTemplate= [
    {
        label: "New File",
    },
    {
        label: "Quit",
        onClick(){
            app.quit();
        }
    }
]