import getToken, { linkAPI } from "../utils/data.jsx";
const accessToken = getToken()

const handleAddProducts = async ({ name, description, quantity, price, categoryId }) => {
    const response = await fetch(
        linkAPI + "products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
            ,
            body: JSON.stringify({ name, description, quantity, price, categoryId })
        }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()

    return data;

}

export const handleDeleteProducts = async ({ id }) => {
    const response = await fetch(
        linkAPI + "products/"+id,
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

export default handleAddProducts