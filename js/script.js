document.addEventListener("DOMContentLoaded", ()=>{
    let alas = document.getElementById('alas')
    let tinggi = document.getElementById('tinggi')
    let resultLuas = document.getElementById('resultLuas')
    let resultKeliling = document.getElementById('resultKeliling')
    let sisi1 = document.getElementById('sisi1')
    let sisi2 = document.getElementById('sisi2')
    let sisi3 = document.getElementById('sisi3')

    document.getElementById('hitungLuas').addEventListener('click', (e)=>{

        if (alas.value && tinggi.value){
            resultLuas.textContent = ""
            const p0 = resultLuas.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultLuas.appendChild(document.createElement("p"))
            p1.textContent = "L = 1/2 x a x t"
            const p2 = resultLuas.appendChild(document.createElement("p"))
            p2.textContent = `L = 1/2 x ${alas.value} x ${tinggi.value}`
            const p3 = resultLuas.appendChild(document.createElement("p"))
            p3.textContent =  `L = ${(alas.value*tinggi.value)/2} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetLuas').addEventListener('click', (e)=>{
        alas.value = "";
        tinggi.value = "";

        resultLuas.textContent = ""
        e.preventDefault()
    })


    document.getElementById('hitungKeliling').addEventListener('click', (e)=>{

        if (sisi1.value && sisi2.value && sisi3.value){
            resultKeliling.textContent = ""
            const p0 = resultKeliling.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultKeliling.appendChild(document.createElement("p"))
            p1.textContent = "L = s x s x s"
            const p2 = resultKeliling.appendChild(document.createElement("p"))
            p2.textContent = `L = ${sisi1.value} x ${sisi2.value} x ${sisi3.value}`
            const p3 = resultKeliling.appendChild(document.createElement("p"))
            p3.textContent =  `L = ${(sisi1.value*sisi2.value*sisi3.value)} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetKeliling').addEventListener('click', (e)=>{
        sisi1.value = "";
        sisi2.value = "";
        sisi3.value = "";

        resultKeliling.textContent = ""
        e.preventDefault()
    })

})

