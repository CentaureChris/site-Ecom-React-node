export const callLoginApi = async ({ email, pass }) => {
    const res = await fetch("api/user/connect", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({ email, pass })
    })
    return res.json()
}

export const callAddUserApi = async ({ email, pass, nom, prenom, adresse, code_postal, ville }) => {
    const res = await fetch("api/user", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({ email, pass, nom, prenom, adresse, code_postal, ville })
    })
    return res.json()
}

export const getListArt = async () => {
    return new Promise((resolve, reject) => (
        fetch("/api/article")
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => console.log(err.message))
    ))
}

export const callDeleteArtApi = async ({ id, token }) => {
    const res = await fetch(`/api/article/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        method: "DELETE",
        body: JSON.stringify({ id })
    })
    return res.json()
}

export const callAddArtApi = async ({ token, formData }) => {
    const res = await fetch('/api/article',{
        method: "POST",
        headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: formData
    })
    return res.json()
}

export const callEditArtApi = async ({ token, id, nom, description, prix }) => {
    const res = await fetch(`/api/article/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify({ nom, description, prix })
    })
    return res.json()
}

export const callApiCreateOrder = async ({ token, id_user, amount, state }) => {
    const res = await fetch(`/api/order/`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify({ id_user, amount, state })
    })
    return res.json()
}

export const callApiCreateOrderLine = async (token,id_art,id_order,price,qty) => {
    const res = await fetch(`/api/order_line/`,{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        body: JSON.stringify({id_art,id_order,price,qty})
    })
    return res.json()
}
