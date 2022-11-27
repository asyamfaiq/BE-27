const forum = require("../models/forum")
const db = require("../config/koneksi")

module.exports = {
    getAllForum: async (req, res) => {
        try {
            const Forum = await forum.find()
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getForumById: async (req, res) => {
        try {
            const id = req.params.id
            const artikels = await forum.findById(id)
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getForumByKategori: async (req, res) => {
        try {
            const kategori = req.params.kategori
            const artikels = await forum.findOne(kategori)
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            
        }
    },

    addForum: (req, res) => {
        try {
            const data = req.body
            const img = fs.readFileSync(req.file.path)
            const encode_image = img.toString('base64')

            const finalImg = {
                nama: req.file.originalname,
                contentType: req.file.mimetype,
                image: new Buffer.from(encode_image, 'base64')
            }

            const Forum = new forum(data, finalImg)
            Forum.save()

            unlinkAsync(req.file.path)
            res.redirect("/dashboard")
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    }
}