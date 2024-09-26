import { commonAPI } from "./commonAPI";

import { server_url } from "./server_url";


// upload video APi

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allvideos`,video)
}

// get ALLUpload Videos Api

export const getALLVideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allvideos`,"")
}


// getALL video API

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allvideos/${id}`,"")
}

// delete video API

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allvideos/${id}`,{})
}

// add video history 

export const addVIdeoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)

}


// get video history
export const getVIdeoHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deleteVideoGHistory 

export const deleteVIdeoHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


// add category api
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/category`,category)   
}



// get category
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}



// delete category
export const deleteCategoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}


// update category 

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}