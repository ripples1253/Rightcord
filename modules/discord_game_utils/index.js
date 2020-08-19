module.exports = require((process.platform === "linux") ? './discord_game_utils_linux.node' : (process.platform === "darwin") ? './discord_game_utils_darwin.node' : './discord_game_utils.node');
