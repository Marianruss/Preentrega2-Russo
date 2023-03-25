
export const productData = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr.games)
        }, 1000);
    })
}

export const setLogo = (subcat) => {
    let logo
    if (subcat === "pc") {
        logo = "/images/icons/steam.png"
    }
    else if (subcat === "playstation") {
        logo = "/images/icons/pslogo.png"
    } else if (subcat === "xbox") {
        logo = "/images/icons/logoxbox.png"
    }
    return logo
}

