const fs = require("fs")
const fsAsync = fs.promises
const yazl = require("yazl")
const __path = require("path")

const buildsPaths = __path.join(__dirname, "builds")
const folders = [
    "lightcord-win32-ia32",
    "lightcord-linux-x64",
    "lightcord-darwin-x64"
]
folders.forEach(folder => {
    const path = __path.join(buildsPaths, folder)
    if(!fs.existsSync(path))return console.warn(`\x1b[33mCan't pack build ${folder} because it doesn't exist.\x1b[0m`)
    const zipPath = __path.join(buildsPaths, folder+".zip")
    if(fs.existsSync(zipPath)){
        console.warn(`Deleting ${zipPath}.`)
        fs.unlinkSync(zipPath)
    }
    const zip = new yazl.ZipFile()
    zip.outputStream.pipe(fs.createWriteStream(zipPath))

    const platform = folder.split("-")[1]
    processNextDir(path, zip, platform)
    .then(() => {
        console.log(`Zipped ${platform}.`)
        zip.end()
    })
})

async function processNextDir(dir, zip, platform, bpath = dir){
    if(dir.replace(bpath, ""))zip.addEmptyDirectory(dir.replace(bpath, "").slice(1))
    await Promise.all(fs.readdirSync(dir, {withFileTypes: true})
    .map(async file => {
        let path = __path.join(dir, file.name)
        if(file.isDirectory()){
            return await processNextDir(path, zip, platform, bpath)
        }else if(file.isFile()){
            if(!path.includes("node_modules")){
                if(platform === "win32"){
                    if(file.name.endsWith("_linux.node"))return
                    if(file.name.endsWith("_darwin.node"))return
                    if(file.name.endsWith(".dylib"))return
                    if(file.name.endsWith(".so.4"))return
                }else if(platform === "linux"){
                    if(file.name.endsWith("_win32.node"))return
                    if(file.name.endsWith("_darwin.node"))return
                    if(file.name.endsWith(".dylib"))return
                    if(file.name.endsWith(".dll"))return
                }else if(platform === "darwin"){
                    if(file.name.endsWith("_linux.node"))return
                    if(file.name.endsWith("_win32.node"))return
                    if(file.name.endsWith(".dll"))return
                    if(file.name.endsWith(".so.4"))return
                }
            }
            let stat = fs.statSync(path)
            zip.addBuffer(await fsAsync.readFile(path), __path.relative(bpath, path), {
                mode: stat.mode,
                mtime: stat.mtime
            })
        }
    }))
}