const axios = require("axios")
const sharp = require("sharp")

async function saveImage(name, url) {
    const {data} = await axios.get(url, {
        responseType: "arraybuffer"
    })

    await sharp(data).resize(100,100).toFile(`./images/${name}.png`)
}

module.exports = {saveImage}