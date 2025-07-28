import getToken, { linkAPI } from "../utils/data.jsx";
const accessToken = getToken()

const handleAddCategories = async ({ name, description }) => {
    const response = await fetch(
        linkAPI + "categories",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
            ,
            body: JSON.stringify({ name, description })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    return data;

}


export const handleDeleteCategories = async ({ id }) => {
    const response = await fetch(
        linkAPI + "categories/"+id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            
        }
    )

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

}

export default handleAddCategories  ;