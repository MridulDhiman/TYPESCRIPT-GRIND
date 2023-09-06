// type clothPrize = (size: string, type: string) => number;
let x = {
    isOnSale: false,
    type: "cotton",
    size: "L"
};
const clothPrize = (type, size) => {
    if (type === "cotton" && size === "XL") {
        return 600;
    }
    return 800;
};
console.log(x, clothPrize("cotton", "XL"));
