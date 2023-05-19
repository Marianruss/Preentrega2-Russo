import alertify from "alertifyjs";


export const productData = (arr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr.games)
        }, 700);
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

export function containsNumbers(str) {
    return /\d/.test(str);
}

export const checkSubmit = (nombre,mail,direccion,ciudad,provincia,codigoPostal) =>{
    if (nombre.length == 0 || containsNumbers(nombre) === true){
        alertify.alert("Ingresá un nombre valido")
    }
    else if (mail.length == 0 || mail.includes("@") === false || mail.includes(".com") === false){
        alertify.alert("Ingresá un mail valido")
    }
    else if (direccion.length == 0){
        alertify.alert("Ingresá una dirección valida")
    }
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

