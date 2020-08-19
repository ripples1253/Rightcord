module.exports = require((process.platform === "linux") ? './discord_dispatch_linux.node' : (process.platform === "darwin") ? './discord_dispatch_darwin.node' : './discord_dispatch.node');
