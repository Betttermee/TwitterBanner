const client = require("./twitterClient");

async function testTweet() {
    await client.v2.tweet("Hi, I am Building a twitter bot")
}

testTweet()