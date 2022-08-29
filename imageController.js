const axios = require("axios")
const sharp = require("sharp")
const Jimp = require("jimp")
const fs = require("fs")
const fsPromises = fs.promises


async function saveImage(name, url) {
    const {data} = await axios.get(url, {
        responseType: "arraybuffer"
    })

    await sharp(data).resize(50,50).toFile(`./images/${name}.png`)
}

async function createBanner() {
    const banner = await Jimp.read("./banner.jpg")
    const files = await fsPromises.readdir("./images")

    let index = 0;
    for (const avatar of files) {
        const imgPath = `./images/${avatar}`
        const image = await Jimp.read(imgPath)
        const position = 850 + index * (50 + 10);
        banner.composite(image,position, 380);

        index++
    }

    await banner.writeAsync("./final.png")
}


module.exports = {saveImage, createBanner}