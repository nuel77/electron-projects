const electron=require('electron');
const ffmpeg = require('fluent-ffmpeg');
const {app, BrowserWindow, ipcMain}= electron;

let mainWindow;

app.on('ready',()=>{
     mainWindow = new BrowserWindow({webPreferences:{
            nodeIntegration:true
        }})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    console.log('app started')
}) ;

ipcMain.on('video:submit',(event,path)=>{
    console.log('inside event listener ')
    ffmpeg.ffprobe(path, (err, metadata)=>{
     let duration= metadata.format.duration
      mainWindow.webContents.send('video:metadata',duration)
    })
})