//Method built in function Javascript Array

//1. concat = menggabungkan satu array atau lebih menjadi array baru
const arr1 = ["memancing"];
const arr2 = ["sepak bola"];
const hobby = arr1.concat(arr2);
console.log(hobby)
//2. toString = mengubah array ke dalam bentuj string
const fruits = ["apple", "orange", "cherry"];
const fruit = fruits.toString();
console.log(fruit)
//3. every = Mengembalikan nilai true jika setiap elemen dalam array ini memenuhi kondisi tertentu
const angka = [32, 33, 16, 40];

const angkas = angka.every((cekAngka)=>{
    return cekAngka > 18
})

console.log(angkas)

//4. filter = membuat array baru yang berisi elemen yang sesuai dengan kondisi suatu fungsi
const umurs = [32, 33, 16, 40];
const result = umurs.filter((checkUmur)=>{
    return checkUmur >= 18;
});

console.log(result)
//5. include = mengembalikan nilai trus jika array sesuai dengan kondisi suatu fungsi
const buah = ["Banana", "Orange", "Apple", "Mango"];
let text = buah.includes("Banana");
console.log(text)
//6. pop = menghapus elemen terakhir dalam array
const nama = ["hanif", "udin", "alfauzi"];
const namas = nama.pop();
console.log(namas)
//7. push = menambahkan satu atau lebih elemen ke dalam array dan terletak di indeks terkahir
const nama2 = ["hanif", "udin", "alfauzi"];
nama2.push("hajime");
console.log(nama2)
//8. isArray = untuk mengecek apakah termasuk array atau bukan dan jika iya mengembalikan nilai true
const nama3 = ["hanif", "udin", "alfauzi"];
const namas3 = Array.isArray(nama3);
console.log(namas3)
//9. slice = mengeluarkan elemen array dengan kondisi tertentu
const nama4 = ["hanif", "udin", "alfauzi"];
const namas4 = nama4.slice(1,2);
console.log(namas4)
//10. sort = mengurutkan elemen dalam array
const angkaAcak = [1,5,7,9,3,4,6,7]
const hasilku = angkaAcak.sort((a,b) => a-b) 
console.log(hasilku)
