const linkAPI = "http://localhost:4200/";

function getToken() {
    const accessToken = localStorage.getItem("accessToken")
    return accessToken
}

export {linkAPI};
export default getToken