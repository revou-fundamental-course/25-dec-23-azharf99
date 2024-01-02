


document.addEventListener("DOMContentLoaded", ()=>{
    let alas_segitiga = document.getElementById('alas_segitiga')
    let alas_jajar_genjang = document.getElementById('alas_jajar_genjang')
    let tinggi_segitiga = document.getElementById('tinggi_segitiga')
    let tinggi_jajar_genjang = document.getElementById('tinggi_jajar_genjang')
    let resultLuasSegitiga = document.getElementById('resultLuasSegitiga')
    let resultKelilingSegitiga = document.getElementById('resultKelilingSegitiga')
    let resultLuasJajarGenjang = document.getElementById('resultLuasJajarGenjang')
    let resultKelilingJajarGenjang = document.getElementById('resultKelilingJajarGenjang')
    let sisi1 = document.getElementById('sisi1')
    let sisi2 = document.getElementById('sisi2')
    let sisi3 = document.getElementById('sisi3')
    let sisi4 = document.getElementById('sisi4')
    let sisi5 = document.getElementById('sisi5')
    let sisi6 = document.getElementById('sisi6')
    let sisi7 = document.getElementById('sisi7')


    let luas_segitiga = document.getElementById('luas-segitiga')
    let keliling_segitiga = document.getElementById('keliling-segitiga')
    let luas_jajar_genjang = document.getElementById('luas-jajar-genjang')
    let keliling_jajar_genjang = document.getElementById('keliling-jajar-genjang')

    document.getElementById('tombol_luas_segitiga').addEventListener('click', ()=>{
        console.log("Hai")
        luas_segitiga.style.display = 'block'
        keliling_segitiga.style.display = 'none'
        luas_jajar_genjang.style.display = 'none'
        keliling_jajar_genjang.style.display = 'none'
    })

    document.getElementById('tombol_keliling_segitiga').addEventListener('click', ()=>{
        keliling_segitiga.style.display = 'block'
        luas_segitiga.style.display = 'none'
        luas_jajar_genjang.style.display = 'none'
        keliling_jajar_genjang.style.display = 'none'
    })

    document.getElementById('tombol_luas_jajar_genjang').addEventListener('click', ()=>{
        luas_jajar_genjang.style.display = 'block'
        luas_segitiga.style.display = 'none'
        keliling_segitiga.style.display = 'none'
        keliling_jajar_genjang.style.display = 'none'
    })

    document.getElementById('tombol_keliling_jajar_genjang').addEventListener('click', ()=>{
        keliling_jajar_genjang.style.display = 'block'
        luas_segitiga.style.display = 'none'
        keliling_segitiga.style.display = 'none'
        luas_jajar_genjang.style.display = 'none'
    })



    document.getElementById('hitungLuasSegitiga').addEventListener('click', (e)=>{

        if (alas_segitiga.value && tinggi_segitiga.value){
            resultLuasSegitiga.textContent = ""
            const p0 = resultLuasSegitiga.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultLuasSegitiga.appendChild(document.createElement("p"))
            p1.textContent = "L = 1/2 x a x t"
            const p2 = resultLuasSegitiga.appendChild(document.createElement("p"))
            p2.textContent = `L = 1/2 x ${alas_segitiga.value} x ${tinggi_segitiga.value}`
            const p3 = resultLuasSegitiga.appendChild(document.createElement("p"))
            p3.textContent =  `L = ${(alas_segitiga.value*tinggi_segitiga.value)/2} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetLuasSegitiga').addEventListener('click', (e)=>{
        alas_segitiga.value = "";
        tinggi_segitiga.value = "";

        resultLuasSegitiga.textContent = ""
        e.preventDefault()
    })


    document.getElementById('hitungKelilingSegitiga').addEventListener('click', (e)=>{

        if (sisi1.value && sisi2.value && sisi3.value){
            resultKelilingSegitiga.textContent = ""
            const p0 = resultKelilingSegitiga.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultKelilingSegitiga.appendChild(document.createElement("p"))
            p1.textContent = "K = s + s + s"
            const p2 = resultKelilingSegitiga.appendChild(document.createElement("p"))
            p2.textContent = `K = ${parseFloat(sisi1.value)} + ${parseFloat(sisi2.value)} + ${parseFloat(sisi3.value)}`
            const p3 = resultKelilingSegitiga.appendChild(document.createElement("p"))
            p3.textContent =  `K = ${(parseFloat(sisi1.value) + parseFloat(sisi2.value) + parseFloat(sisi3.value))} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetKelilingSegitiga').addEventListener('click', (e)=>{
        sisi1.value = "";
        sisi2.value = "";
        sisi3.value = "";

        resultKelilingSegitiga.textContent = ""
        e.preventDefault()
    })


    document.getElementById('hitungLuasJajarGenjang').addEventListener('click', (e)=>{

        if (alas_jajar_genjang.value && tinggi_jajar_genjang.value){
            resultLuasJajarGenjang.textContent = ""
            const p0 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
            p1.textContent = "L = a x t"
            const p2 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
            p2.textContent = `L = ${alas_jajar_genjang.value} x ${tinggi_jajar_genjang.value}`
            const p3 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
            p3.textContent =  `L = ${(alas_jajar_genjang.value*tinggi_jajar_genjang.value)} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetLuasJajarGenjang').addEventListener('click', (e)=>{
        alas_jajar_genjang.value = "";
        tinggi_jajar_genjang.value = "";

        resultLuasJajarGenjang.textContent = ""
        e.preventDefault()
    })


    document.getElementById('hitungKelilingJajarGenjang').addEventListener('click', (e)=>{

        if (sisi4.value && sisi5.value && sisi6.value && sisi7.value){
            resultKelilingJajarGenjang.textContent = ""
            const p0 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
            p0.textContent = "Hasil Perhitungan:"
            const p1 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
            p1.textContent = "K = a + b + c + d"
            const p2 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
            p2.textContent = `K = ${sisi4.value} + ${sisi5.value} + ${sisi6.value} + ${sisi7.value} `
            const p3 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
            p3.textContent =  `K = ${(parseFloat(sisi4.value) + parseFloat(sisi5.value) + parseFloat(sisi6.value) + parseFloat(sisi7.value))} cm`
            e.preventDefault()
        }


    })

    document.getElementById('resetKelilingJajarGenjang').addEventListener('click', (e)=>{
        sisi4.value = "";
        sisi5.value = "";
        sisi6.value = "";
        sisi7.value = "";

        resultKelilingJajarGenjang.textContent = ""
        e.preventDefault()
    })

})

