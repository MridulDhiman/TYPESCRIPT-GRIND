interface cloth {
    type: string;
    size: string;

}

interface cloth {
    isOnSale: boolean;
}

// type clothPrize = (size: string, type: string) => number;

let x:cloth = {
    isOnSale: false,
    type: "cotton",
    size: "L"
}

type clothDetails = (type: string, size: string) => number;

let clothPrize : clothDetails = (type, size) => {
    if(type === "cotton" && size === "XL") {
        return 600;
    }
    return 800;
}

console.log(x, clothPrize("cotton", "XL") );

