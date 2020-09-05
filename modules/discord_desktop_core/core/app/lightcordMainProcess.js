/**
 * This file is for injections other than already present modules. mostly ipc thing
 */

const electron = require("electron")

const UserAgent = electron.session.defaultSession.getUserAgent()
electron.ipcMain.on("LIGHTCORD_GET_USER_AGENT", (event) => {
    event.returnValue = UserAgent
})