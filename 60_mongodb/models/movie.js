const mongoose = require("mongoose");

//스키마 정의
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    director: {
        type: String,
        trim: true,
        required: true,
    },
    year: {
        type: String,
        trim: true,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;