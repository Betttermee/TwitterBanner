const client = require("./twitterClient");

async function getFollowers() {
    const followers = await client.v2.followers("1563948691966140416")
    return followers.data.slice(0,5)
}

async function getProfileImageUrl(user_id) {
    const {profile_image_url} = await client.v1.user({user_id})
    return profile_image_url
}

module.exports = {getFollowers, getProfileImageUrl}