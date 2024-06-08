const mongoose = require("mongoose")

const todoShema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("todo", todoShema)

// https://github.com/jadhavkomal77/mobile-todo-server.git