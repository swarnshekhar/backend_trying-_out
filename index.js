require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubapi={
    "login": "swarnshekhar",
    "id": 136175375,
    "node_id": "U_kgDOCB3fDw",
    "avatar_url": "https://avatars.githubusercontent.com/u/136175375?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/swarnshekhar",
    "html_url": "https://github.com/swarnshekhar",
    "followers_url": "https://api.github.com/users/swarnshekhar/followers",
    "following_url": "https://api.github.com/users/swarnshekhar/following{/other_user}",
    "gists_url": "https://api.github.com/users/swarnshekhar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/swarnshekhar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/swarnshekhar/subscriptions",
    "organizations_url": "https://api.github.com/users/swarnshekhar/orgs",
    "repos_url": "https://api.github.com/users/swarnshekhar/repos",
    "events_url": "https://api.github.com/users/swarnshekhar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/swarnshekhar/received_events",
    "type": "User",
    "site_admin": false,
    "name": "swarn shekhar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "tech savyy type persion",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2023-06-10T13:20:33Z",
    "updated_at": "2024-09-04T09:44:50Z"
  }
app.get('/', (req, res) => {
  res.send('Hello swarn!')
})
app.get('/github', (req, res) => {
  res.json(githubapi)
})
app.get('/twitter', (req, res) => {
  res.send('Hello swarn u are handling your twitter!')
})
app.get('/login', (req, res) => {
  res.send('<h1>hii u can login here </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})