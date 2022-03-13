const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    

    if(typeof nilaiAwal === "number" && typeof nilaiAkhir === "number"){
        if(Array.isArray(dataArray)===true){
            const validasi = dataArray.every((e)=>{
                const hasilValidasi = typeof e === "number"
                return hasilValidasi
            })
            if(validasi===true){
                if(nilaiAwal>nilaiAkhir){
                    return "Nilai akhir harus lebih besar dari nilai awal"
                }
                else if(dataArray.length <=5){
                    return "Jumlah angka dalam dataArray harus lebih dari 5"
                }
                const dataBaru = dataArray.filter((e)=>{
                    return e>=nilaiAwal && e<=nilaiAkhir
                })

                if(dataBaru.length === 0){
                    return "Nilai tidak ditemukan"
                }
                
                return dataBaru.sort((a,b)=>{
                    return a-b
                })
            }
            else{
                return "Elemen dalam data array harus bertipe number"
            }
        }
        else{
            return "Nilai yang di input harus array"
        }
    }
    else{
        return "Input nilai Awal, nilai Akhir"
    }

}


console.log(seleksiNilai(7, 20 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
console.log(seleksiNilai(5, 17 , [2, 25, 4]))
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))
console.log(seleksiNilai(5, "17" , [2, 25, 4, 1, 30, "18"]))
console.log(seleksiNilai(5, 17 , undefined))

