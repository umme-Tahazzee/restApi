const {v4 : uuidv4} = require("uuid")

const users =[
     {
        id : uuidv4(),
        username : "karia",
        email : "a@gmail.com"
     },
     {
        id : uuidv4(),
        username : "tahazzee",
        email : "b@gmail.com"
     }
]

module.exports = users;