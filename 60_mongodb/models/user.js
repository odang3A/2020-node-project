const mongoose = require("mongoose");

// 스키마 정의 (사용자 정의)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: Number,
        default: 0  //0: 일반사용자, 1: 관리자
    },
    token: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    }
});

// 모델 생성
// model(모델명, 스키마) -> 모델명s 컬렉션에 작업함
// model(모델명, 스키마, 컬렉션명)
const User = mongoose.model("user", UserSchema);
module.exports = User;