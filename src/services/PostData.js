export function PostData(userData) {
    return new Promise((resolve, reject) => {
        //Typicode Test
        fetch('https://jsonplaceholder.typicode.com/posts', {
            // fetch('http://dgha-backend-aus-east.azurewebsites.net/api/members', {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        },
            //set browser cookie
            { withCredentials: true })
            .then((response) => {
                console.log("Login response", response.json());
            })
            .then((responseJson) => { resolve(responseJson) })
            .catch(error => {
                reject(error);
                console.log("Login error", error);
            });
    })
}