const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

    const searchName = (word, limit, callback) => {
        const find = names.filter(element => {
           const hasil = element.toLowerCase().includes(word.toLowerCase())
           return hasil
        })
        let final = find.slice(0,limit)

        return callback(final)
     
    }

    const callback = (final) => {
        const cetak = final
        if(cetak.length === 0){
            return "Data tidak ditemukan"
        }
        else{
            return cetak
        }
        
    }

    const output = searchName("1",3,callback)
    console.log(output)
    // searchName("an",3,callback)

