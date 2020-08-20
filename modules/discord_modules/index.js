module.exports = require((process.platform === "linux") ? './discord_modules_linux.node' : (process.platform === "darwin") ? './discord_modules_darwin.node' : './discord_modules.node');
