document.addEventListener('DOMContentLoaded', ()=>{
    var alas = document.getElementById('alas')
    var tinggi = document.getElementById('tinggi')
    var result = document.getElementById('result')

    document.getElementById('save').addEventListener('click', (e)=>{
        result.textContent = ""
        result.textContent += `Alas: ${alas.value}, Tinggi: ${tinggi.value}`
        result.textContent += `Hasil: ${(alas.value*tinggi.value)/2}`

        e.preventDefault()
    })

    document.getElementById('reset').addEventListener('click', (e)=>{
        alas.value = "";
        tinggi.value = "";

        result.textContent = ""
        e.preventDefault()
    })

})
