import * as fs from 'fs'

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err, data) => {
    if (err) {console.log(err)}
    console.log('DOSYA OLUŞTURULDU')
})

fs.readFile('employees.json','utf-8', (err, data) => {
    if (err) {console.log(err)}
    console.log('VERİLER OKUNDU.')
})

fs.appendFile('employees.json', '\n{"name":"Murat", "salary": 3000}', (err, data) => {
    console.log("VERİLER GÜNCELLENDİ")
})

function deleter() {
    fs.unlink('employees.json', (err) => {
        if (err) console.log(err)
        console.log("DOSYA SİLİNDİ")
    })
}

setTimeout(deleter, 10000)