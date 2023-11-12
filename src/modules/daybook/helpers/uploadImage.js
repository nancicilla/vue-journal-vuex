import axios from "axios"
const uploadImage=async(file)=>{
    if(!file) return
    try {
        const formData= new FormData()
        formData.append('upload_preset','curso-vue')
        formData.append('file',file)
        const {data}= await axios.post('https://api.cloudinary.com/v1_1/dfjlewiqn/image/upload',formData)
        return data.url
    } catch (error) {
        console.error("Error al cargar la imagen, revisar logs")
        console.log(error)
        return null
    }
    
}
export default uploadImage