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

