import axios from 'axios';

export const logIn = async (email, password) => {
    const response = await axios.post("/login", {
        email,
        password,
    });
    return { token: response.data.accessToken };
};

export const register = async (email, password) => {
    await axios.post("/register", {
        email,
        password,
    });
};

export const getContacts = async () => {
    return await axios.get(`/contacts`);
};

export const postNewContact = async (contactObj) => {
    return await axios.post('/contacts', contactObj);
};

export const apiDeleteContact = async (id) => {
    return await axios.delete(`/contacts/${id}`);
};

export const putContact = async (contactObj) => {
    return await axios.put(`/contacts/${contactObj.id}`, contactObj)
}

