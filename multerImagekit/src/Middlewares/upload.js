import multer from "multer";



// --------------------------------------Local File System setup -----------------------------------
// import path from "path";

// const storage = multer.diskStorage({
//     destination: function (req, res, cb){
//         cb(null, "uploads/")
//     },
//     filename: function(req, file, cb){
//         cb(null, Date.now()+path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb)=>{
//     if(file.mimetype.startsWith("image/")){
//         cb(null, true)
//     }
//     else{
//         cb(new Error("Only images are allowed"), false)
//     }
// }

// const upload = multer({storage, fileFilter});

// export default upload;


// ---------------------- Imagekit IO Setup -------------------------------------------------------------

const storage = multer.memoryStorage();

const upload = multer({storage});

export default upload;