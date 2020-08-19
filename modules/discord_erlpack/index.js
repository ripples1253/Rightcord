module.exports = require((process.platform === "linux") ? './discord_erlpack_linux.node' : (process.platform === "darwin") ? './discord_erlpack_darwin.node' : './discord_erlpack.node');
