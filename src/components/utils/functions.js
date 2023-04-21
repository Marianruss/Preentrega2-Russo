
export const productData = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr.games)
        }, 1000);
    })
}

export const setLogo = (subcat) => {
    let logo
    switch (true) {
        case subcat === "pc":
            logo = "/images/icons/steam.png"
            break

        case subcat === "playstation":
            logo = "/images/icons/pslogo.png"
            break

        case subcat === "xbox":
            logo = "/images/icons/logoxbox.png"
            break

        case subcat === "funkos":
            logo = "/images/icons/logofunko.png"
            break

        case subcat === "figuras":
            logo = "/images/icons/figureslogo.jfif"
            break
    }

    return logo
}


export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

