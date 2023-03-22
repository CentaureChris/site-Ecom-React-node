import React, { useEffect } from "react"

const SuccessPayment = () => {

    useEffect(() => {
        localStorage.setItem('cart', "")
    }, []);
    
    return (
        <>
            <h1>Success Order payment</h1>
        </>
    )
}

export default SuccessPayment