import imagekitSetup from "../config/imagekit.js";

const uploadToIMagekit = async(file)=>{
    try {
        if(!file){
            throw new Error("No file provided")
        }

        const uploadedFile = await imagekitSetup.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "/seprate"
        });

        return uploadedFile.url;
    } catch (error) {
        console.log(error.message)
    }
}

export default uploadToIMagekit;