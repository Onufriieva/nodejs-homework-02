const fs = require("fs/promises");
const path = require('path');
  
const {User} = require('../../models');
 
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res, next) => {
    try {
        const {path: tempUpload, originalname} = req.file;
        const {_id} = req.user;
        const fileName = `${_id}_${originalname}`
        const resultUpload = path.join(avatarsDir, fileName);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("avatars", fileName);
        await User.findByIdAndUpdate(_id, {avatarURL})
    
        res.json({
            status: "Ok",
            code: 200,
            avatarURL,
        })
    } catch (error) {
        next(error) 
    } 
}

module.exports = updateAvatar;