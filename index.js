const {getFollowers, getProfileImageUrl, updateBanner} = require("./twitterController");
const {saveImage, createBanner} = require("./imageController");


async function generateBanner() {
    const followers = await getFollowers()

    for(const follower of followers) {
        const url = await getProfileImageUrl(follower.id)
        await saveImage(follower.id, url)
    }

    await createBanner()
    await updateBanner()
}

generateBanner()