import Student from "./Student.js";

const s1 = new Student("Anna", 120, [1, 2, 1]);
const s2 = new Student("Petr", 90, [2, 3]);

// dodá známky
s1.pridejZnamku(3);
s2.pridejZnamku(4);

// test zapouzdření dnů
s1.dny = -50;  

// promítne do konzole
console.log(s1.popis());
console.log("Průměr Anny:", s1.prumer());

console.log(s2.popis());
console.log("Průměr Petra:", s2.prumer());
