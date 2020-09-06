/**
 * This file is for injections other than already present modules. mostly ipc thing
 */

const electron = require("electron")
const { setBlurType, setVibrancy } = require("./mainScreen");

const UserAgent = electron.session.defaultSession.getUserAgent()
electron.ipcMain.on("LIGHTCORD_GET_USER_AGENT", (event) => {
    event.returnValue = UserAgent
})

electron.ipcMain.handle("LIGHTCORD_SET_BLUR_TYPE", async (event, blurType) => {
    setBlurType(blurType)
});

electron.ipcMain.handle("LIGHTCORD_SET_VIBRANCY", async (event, vibrancy) => {
    setVibrancy(vibrancy)
});