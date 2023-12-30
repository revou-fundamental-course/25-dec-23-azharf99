document.addEventListener("DOMContentLoaded", ()=>{
    var alas = document.getElementById('alas')
    var tinggi = document.getElementById('tinggi')
    var result = document.getElementById('result')

    document.getElementById('save').addEventListener('click', (e)=>{

        if (alas.value && tinggi.value){
            result.textContent = ""
            const p0 = result.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = result.appendChild(document.createElement("p"))
            p1.textContent = "L = 1/2 x a x t"
            const p2 = result.appendChild(document.createElement("p"))
            p2.textContent = `L = 1/2 x ${alas.value} x ${tinggi.value}`
            const p3 = result.appendChild(document.createElement("p"))
            p3.textContent =  `L = ${(alas.value*tinggi.value)/2} cm`
            e.preventDefault()
        }


    })

    document.getElementById('reset').addEventListener('click', (e)=>{
        alas.value = "";
        tinggi.value = "";

        result.textContent = ""
        e.preventDefault()
    })

})

