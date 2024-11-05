const userForm = document.getElementById('user-form');
// can dynamically create form to dom here if you want

// post form data to express server
async function postUserData(e) {
    try {
        e.preventDefault();
        const url = `http://localhost:3000/users`;
        // grabbing the form data to post to the backend
        const userFormData = new FormData(userForm);
        const userFormDataObject = Object.fromEntries(userFormData.entries());
        // telling how to post to the backend
        const options = {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userFormDataObject)
        };
        // now posting the data
        const response = await fetch(url, options);
        const userData = await response.json();
    } catch (error) {
        console.log(error);
    }
};

userForm.addEventListener('submit', postUserData);