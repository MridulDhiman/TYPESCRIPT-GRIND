type strongest = "goku" | "saitama" | "luffy";


type brave<a extends strongest> = a extends "goku" ? "ram ram" | "systumm" : "nothing";

const user: brave<"goku"> = "systumm";
console.log(user);