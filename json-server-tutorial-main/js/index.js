// javascript for index.html
const axios = require("axios")

let uri = "http://localhost:3000"

const getPosts = async () => {
    const response = await axios.get(`${uri}/posts`)
    return response.data
}

const addPosts = async(postObj) => {
    const response = await axios.post(`${uri}/posts`,postObj)
    console.log(response,postObj);
}


addPosts({
            "id": 4,
            "title": "Welcome to the new blog",
            "body": "There are so many things in this world on whichw e donty have any control like earthquakes, tsunamies and what not but the thing is that on what we can like to forgive others or to spread love without expecting any in return.",
            "likes": 30
        },  ) d


