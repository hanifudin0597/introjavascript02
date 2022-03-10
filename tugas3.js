const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    const validasi = dataArray.every((e)=>{
        const hasilValidasi = typeof e === "number"
        return hasilValidasi
    })

    // return validasi

    if(typeof nilaiAwal === "number" && typeof nilaiAkhir === "number" && validasi === true){
        const dataBaru = dataArray.filter((e)=>{
            return e>=nilaiAwal && e<=nilaiAkhir
        })
    
        if(nilaiAwal>nilaiAkhir){
            return "Nilai akhir harus lebih besar dari nilai awal"
        }
        else if(dataArray.length <=5){
            return "Jumlah angka dalam dataArray harus lebih dari 5"
        }
        else if(dataBaru.length === 0){
            return "Nilai tidak ditemukan"
        }
    }
    else{
        return "Input nilai Awal, nilai Akhir dan data Array harus bertipe number"
    }
       
       
   
    return dataBaru.sort((a,b)=>{
        return a-b
    })


}


console.log(seleksiNilai(7, 20 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(5, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, "18"]))
