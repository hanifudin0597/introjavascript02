const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

    const searchName = (word, limit, callback) => {
        const find = names.filter(element => {
           const hasil = element.toLowerCase().includes(word)
           return hasil
        })
        let final = find.slice(0,limit)

        return callback(final)
     
    }

    const callback = (final) => {
        const cetak = final
        return cetak
    }

    const output = searchName("a",4,callback)
    console.log(output)

