import mongoose, {Mongoose, Schema} from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    fullname : {
        type: String,
        required: true
    },
    adminAccess : {
        type: Boolean,
        default: false
    },
    password : {
        type: String,
        required: true
    },
    refreshToken : {
        type : String,
    },
    vehicleNumbers : [{
        vehicleNumber: { type: String },
        fineImposed : {
            type: Number,
            min : 0,
            // default: () => Math.random() < 0.5 ? 0 : 100,
        }
    }]
}, {
    timestamps: true
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            fullname : this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
// UserSchema.methods.generateRefreshToken = function () {
//     return jwt.sign(
//         {
//             _id : this._id,
//             username : this.username,
//             fullname : this.fullname
//         },
//         process.env.REFRESH_TOKEN_SECRET ,
//         {
//             expiresIn : process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }

export const User = mongoose.model('User', UserSchema);