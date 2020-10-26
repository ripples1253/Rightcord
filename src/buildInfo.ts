import { getCommitID } from "./common/git"
const pak = require("../package.json")

export const releaseChannel:"stable"|"canary"|"ptb"|"development" = "stable"
export let version
    if(process.platform === "darwin")
      version = "0.0.259"
    else if(process.platform === "linux")
      version = "0.0.12"
    else
      version = "0.0.308"
export const commit = getCommitID()
export default {
    releaseChannel,
    version,
    commit
}

global["BuildInfo"] = {
    releaseChannel,
    version: pak.version,
    commit
}
