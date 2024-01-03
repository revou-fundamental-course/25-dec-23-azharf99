class GeometryCalculator {
    constructor(calculationType, geometry) {
  
      // Class variabel untuk menyimpan tipe perhitungan dan tipe bangun datar
      this.calculationType = calculationType
      this.geometry = geometry
      
      // Konstruktor untuk perhitungan "Luas", baik segitiga maupun Jajar Genjang. Karena sama-sama menggunakan alas dan tinggi
      if(this.calculationType === "Luas"){
          this.alas = document.getElementById(`alas${geometry}`);
          this.tinggi = document.getElementById(`tinggi${geometry}`);
          this.result = document.getElementById(`result${calculationType}${geometry}`);
      }
  
      // Konstruktor untuk perhitungan "Keliling Segitiga", karena agak sedikit berbeda rumusnya dengan jajar genjang.
      else if (this.calculationType === 'Keliling' && this.geometry === "Segitiga"){
          this.arr = []
          for(let i=1; i<=3; i++){
              this.arr.push(document.getElementById(`sisi${i}`));
          }
          this.result = document.getElementById(`result${calculationType}${geometry}`);
      }
      
      // Konstruktor untuk perhitungan "Keliling Jajar Genjang"
      else if (this.calculationType === 'Keliling' && this.geometry === "JajarGenjang"){
          this.arr = []
          for(let i=4; i<=7; i++){
              this.arr.push(document.getElementById(`sisi${i}`));
          }
          this.result = document.getElementById(`result${calculationType}${geometry}`);
      }
  
    }
  
    showResult() {
  
      // Ambil elemet result
      const resultElement = this.result;
      // Kita hapus dulu hasil sebelumnya jika ada. Sebelum menampilkan hasil yang baru.
      resultElement.textContent = '';
  
      // Buat array untuk menampung elemen paragraf baru yang akan di-append ke elemen result
      let arrParagraph = []
  
      // Isi aray tersebut
      for(let i=1; i<=4; i++){
          arrParagraph.push(resultElement.appendChild(document.createElement('p')))
      }
  
      // Menulis di paragraf yang kedua dan seterusnya.
      if (this.calculationType === 'Luas' && this.geometry === "Segitiga" && this.alas.value && this.tinggi.value) {
        arrParagraph[0].textContent = 'Hasil Perhitungan:';
        let arrText = [`L = 1/2 a x t`, `L = ${this.alas.value} x ${this.tinggi.value}`, `L = ${(this.alas.value * this.tinggi.value)/2} cm`]
        for(let i=1; i<=3; i++){
            arrParagraph[i].textContent = arrText[i-1]
          }
      } 
      else if (this.calculationType === 'Luas' && this.geometry === "JajarGenjang" && this.alas.value && this.tinggi.value) {
        arrParagraph[0].textContent = 'Hasil Perhitungan:';
        let arrText = [`L = a x t`, `L = ${this.alas.value} x ${this.tinggi.value}`, `L = ${(this.alas.value * this.tinggi.value)} cm`]
        for(let i=1; i<=3; i++){
            arrParagraph[i].textContent = arrText[i-1]
          }
      } 
      else if (this.calculationType === 'Keliling' && this.geometry === "Segitiga" && this.arr[0].value && this.arr[1].value && this.arr[2].value) {
        arrParagraph[0].textContent = 'Hasil Perhitungan:';  
        let arrText = [`K = s + s + s`, `K = ${this.arr[0].value} + ${this.arr[1].value} + ${this.arr[2].value}`, `K = ${(parseFloat(this.arr[0].value) + parseFloat(this.arr[1].value) + parseFloat(this.arr[2].value))} cm`]
          for(let i=1; i<=3; i++){
              arrParagraph[i].textContent = arrText[i-1]
            }
      } 
      else if (this.calculationType === 'Keliling' && this.geometry === "JajarGenjang" && this.arr[0].value && this.arr[1].value && this.arr[2].value && this.arr[3].value) {
        arrParagraph[0].textContent = 'Hasil Perhitungan:';  
        let arrText = [`K = s + s + s + s`, `K = ${this.arr[0].value} + ${this.arr[1].value} + ${this.arr[2].value} + ${this.arr[3].value}`, `K = ${(parseFloat(this.arr[0].value) + parseFloat(this.arr[1].value) + parseFloat(this.arr[2].value) + parseFloat(this.arr[3].value))} cm`]
          for(let i=1; i<=3; i++){
              arrParagraph[i].textContent = arrText[i-1]
            }
      }
    }
  
    resetInputs() {
  
      // Logic untuk menghapus element input dan result
      if(this.calculationType === "Luas"){
          this.alas.value = '';
          this.tinggi.value = '';
          this.result.textContent = '';
      }
      else if(this.calculationType === "Keliling" && this.geometry === "Segitiga"){
          for(let i=0; i<=2; i++){
              this.arr[i].value = ''
          }
          this.result.textContent = '';
      }
      else if(this.calculationType === "Keliling" && this.geometry === "JajarGenjang"){
          for(let i=0; i<=3; i++){
              this.arr[i].value = ''
          }
          this.result.textContent = '';
      }
    }
  }
  
  
  // Logic untuk menghitung Luas Segitiga
  document.getElementById('hitungLuasSegitiga').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Luas", "Segitiga");
      calculator.showResult()
  
  });
  
  // Logic untuk menghitung Keliling Segitiga
  document.getElementById('hitungKelilingSegitiga').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Keliling", "Segitiga");
      calculator.showResult()
  
  });
  
  // Logic untuk menghitung Luas Jajar Genjang
  document.getElementById('hitungLuasJajarGenjang').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Luas", "JajarGenjang");
      calculator.showResult()
  
  });
  
  // Logic untuk menghitung Keliling Jajar Genjang
  document.getElementById('hitungKelilingJajarGenjang').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Keliling", "JajarGenjang");
      calculator.showResult()
  
  });
  
  // Logic untuk mereset input Luas Segitiga
  document.getElementById('resetLuasSegitiga').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Luas", "Segitiga");
      calculator.resetInputs()
  
  });
  
  // Logic untuk mereset input Keliling Segitiga
  document.getElementById('resetKelilingSegitiga').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Keliling", "Segitiga");
      calculator.resetInputs()
  
  });
  
  // Logic untuk mereset input Luas Jajar Genjang
  document.getElementById('resetLuasJajarGenjang').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Luas", "JajarGenjang");
      calculator.resetInputs()
  
  });
  
  // Logic untuk mereset input Keliling jajar Genjang
  document.getElementById('resetKelilingJajarGenjang').addEventListener('click', (e)=>{
      e.preventDefault()
      // Instantiate the GeometryCalculator class
      const calculator = new GeometryCalculator("Keliling", "JajarGenjang");
      calculator.resetInputs()
  
  });
  
  
  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function () {
      scrollFunction();
  };
  
  function scrollFunction() {
      var mybutton = document.getElementById("myBtn");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  class ShowGeometry{
    constructor(calculationType, geometry){
        this.calculationType = calculationType
        this.geometry = geometry
        this.luasSegitiga = document.getElementById('luasSegitiga')
        this.kelilingSegitiga = document.getElementById('kelilingSegitiga')
        this.luasJajarGenjang = document.getElementById('luasJajarGenjang')
        this.kelilingJajarGenjang = document.getElementById('kelilingJajarGenjang')
        
    }
    
    showElement(){
        if(this.calculationType === "Luas" && this.geometry === "Segitiga"){
            this.luasSegitiga.style.display = 'block'
            this.kelilingSegitiga.style.display = 'none'
            this.luasJajarGenjang.style.display = 'none'
            this.kelilingJajarGenjang.style.display = 'none'
        }
        else if(this.calculationType === "Keliling" && this.geometry === "Segitiga"){
            this.luasSegitiga.style.display = 'none'
            this.kelilingSegitiga.style.display = 'block'
            this.luasJajarGenjang.style.display = 'none'
            this.kelilingJajarGenjang.style.display = 'none'
        }
        if(this.calculationType === "Luas" && this.geometry === "JajarGenjang"){
            this.luasSegitiga.style.display = 'none'
            this.kelilingSegitiga.style.display = 'none'
            this.luasJajarGenjang.style.display = 'block'
            this.kelilingJajarGenjang.style.display = 'none'
        }
        else if(this.calculationType === "Keliling" && this.geometry === "JajarGenjang"){
            this.luasSegitiga.style.display = 'none'
            this.kelilingSegitiga.style.display = 'none'
            this.luasJajarGenjang.style.display = 'none'
            this.kelilingJajarGenjang.style.display = 'block'
        }
        
    }
  }


document.getElementById('tombolLuasSegitiga').addEventListener('click', (e)=>{
    e.preventDefault()
    // Instantiate the GeometryCalculator class
    const button = new ShowGeometry("Luas", "Segitiga");
    button.showElement()

});

document.getElementById('tombolKelilingSegitiga').addEventListener('click', (e)=>{
    e.preventDefault()
    // Instantiate the GeometryCalculator class
    const button = new ShowGeometry("Keliling", "Segitiga");
    button.showElement()

});
document.getElementById('tombolLuasJajarGenjang').addEventListener('click', (e)=>{
    e.preventDefault()
    // Instantiate the GeometryCalculator class
    const button = new ShowGeometry("Luas", "JajarGenjang");
    button.showElement()

});
document.getElementById('tombolKelilingJajarGenjang').addEventListener('click', (e)=>{
    e.preventDefault()
    // Instantiate the GeometryCalculator class
    const button = new ShowGeometry("Keliling", "JajarGenjang");
    button.showElement()

});


const darkModeToggle = document.getElementById('darkModeToggle');
const lightModeToggle = document.getElementById('lightModeToggle');
const form = document.getElementsByClassName('form');
console.log(form)
const body = document.body;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeToggle.style.display = 'block'
    lightModeToggle.style.display = 'none'
}
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    darkModeToggle.style.display = 'block'
    lightModeToggle.style.display = 'none'
}

darkModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    darkModeToggle.style.display = 'none'
    lightModeToggle.style.display = 'block'
    for(node of form){
        node.style.color = 'black'
    }
});

lightModeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    lightModeToggle.style.display = 'none'
    darkModeToggle.style.display = 'block'
});

// CODE VERSI LAMA SEBELUM REFAKTOR

//     let alas_segitiga = document.getElementById('alasSegitiga')
//     let tinggi_segitiga = document.getElementById('tinggiSegitiga')
//     let alas_jajar_genjang = document.getElementById('alasJajarGenjang')
//     let tinggi_jajar_genjang = document.getElementById('tinggiJajarGenjang')
//     let resultLuasSegitiga = document.getElementById('resultLuasSegitiga')
//     let resultKelilingSegitiga = document.getElementById('resultKelilingSegitiga')
//     let resultLuasJajarGenjang = document.getElementById('resultLuasJajarGenjang')
//     let resultKelilingJajarGenjang = document.getElementById('resultKelilingJajarGenjang')
//     let sisi1 = document.getElementById('sisi1')
//     let sisi2 = document.getElementById('sisi2')
//     let sisi3 = document.getElementById('sisi3')
//     let sisi4 = document.getElementById('sisi4')
//     let sisi5 = document.getElementById('sisi5')
//     let sisi6 = document.getElementById('sisi6')
//     let sisi7 = document.getElementById('sisi7')


//     let luas_segitiga = document.getElementById('luasSegitiga')
//     let keliling_segitiga = document.getElementById('kelilingSegitiga')
//     let luas_jajar_genjang = document.getElementById('luasJajarGenjang')
//     let keliling_jajar_genjang = document.getElementById('kelilingJajarGenjang')

//     document.getElementById('tombol_luas_segitiga').addEventListener('click', ()=>{
//         console.log("Hai")
//         luas_segitiga.style.display = 'block'
//         keliling_segitiga.style.display = 'none'
//         luas_jajar_genjang.style.display = 'none'
//         keliling_jajar_genjang.style.display = 'none'
//     })

//     document.getElementById('tombol_keliling_segitiga').addEventListener('click', ()=>{
//         keliling_segitiga.style.display = 'block'
//         luas_segitiga.style.display = 'none'
//         luas_jajar_genjang.style.display = 'none'
//         keliling_jajar_genjang.style.display = 'none'
//     })

//     document.getElementById('tombol_luas_jajar_genjang').addEventListener('click', ()=>{
//         luas_jajar_genjang.style.display = 'block'
//         luas_segitiga.style.display = 'none'
//         keliling_segitiga.style.display = 'none'
//         keliling_jajar_genjang.style.display = 'none'
//     })

//     document.getElementById('tombol_keliling_jajar_genjang').addEventListener('click', ()=>{
//         keliling_jajar_genjang.style.display = 'block'
//         luas_segitiga.style.display = 'none'
//         keliling_segitiga.style.display = 'none'
//         luas_jajar_genjang.style.display = 'none'
//     })



//     document.getElementById('hitungLuasSegitiga').addEventListener('click', (e)=>{

//         if (alas_segitiga.value && tinggi_segitiga.value){
//             resultLuasSegitiga.textContent = ""
//             const p0 = resultLuasSegitiga.appendChild(document.createElement("p"))
//             p0.textContent = "Hasil Perhitungan:"
//             const p1 = resultLuasSegitiga.appendChild(document.createElement("p"))
//             p1.textContent = "L = 1/2 x a x t"
//             const p2 = resultLuasSegitiga.appendChild(document.createElement("p"))
//             p2.textContent = `L = 1/2 x ${alas_segitiga.value} x ${tinggi_segitiga.value}`
//             const p3 = resultLuasSegitiga.appendChild(document.createElement("p"))
//             p3.textContent =  `L = ${(alas_segitiga.value*tinggi_segitiga.value)/2} cm`
//             e.preventDefault()
//         }


//     })

//     document.getElementById('resetLuasSegitiga').addEventListener('click', (e)=>{
//         alas_segitiga.value = "";
//         tinggi_segitiga.value = "";

//         resultLuasSegitiga.textContent = ""
//         e.preventDefault()
//     })


//     document.getElementById('hitungKelilingSegitiga').addEventListener('click', (e)=>{

//         if (sisi1.value && sisi2.value && sisi3.value){
//             resultKelilingSegitiga.textContent = ""
//             const p0 = resultKelilingSegitiga.appendChild(document.createElement("p"))
//             p0.textContent = "Hasil Perhitungan:"
//             const p1 = resultKelilingSegitiga.appendChild(document.createElement("p"))
//             p1.textContent = "K = s + s + s"
//             const p2 = resultKelilingSegitiga.appendChild(document.createElement("p"))
//             p2.textContent = `K = ${parseFloat(sisi1.value)} + ${parseFloat(sisi2.value)} + ${parseFloat(sisi3.value)}`
//             const p3 = resultKelilingSegitiga.appendChild(document.createElement("p"))
//             p3.textContent =  `K = ${(parseFloat(sisi1.value) + parseFloat(sisi2.value) + parseFloat(sisi3.value))} cm`
//             e.preventDefault()
//         }


//     })

//     document.getElementById('resetKelilingSegitiga').addEventListener('click', (e)=>{
//         sisi1.value = "";
//         sisi2.value = "";
//         sisi3.value = "";

//         resultKelilingSegitiga.textContent = ""
//         e.preventDefault()
//     })


//     document.getElementById('hitungLuasJajarGenjang').addEventListener('click', (e)=>{

//         if (alas_jajar_genjang.value && tinggi_jajar_genjang.value){
//             resultLuasJajarGenjang.textContent = ""
//             const p0 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
//             p0.textContent = "Hasil Perhitungan:"
//             const p1 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
//             p1.textContent = "L = a x t"
//             const p2 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
//             p2.textContent = `L = ${alas_jajar_genjang.value} x ${tinggi_jajar_genjang.value}`
//             const p3 = resultLuasJajarGenjang.appendChild(document.createElement("p"))
//             p3.textContent =  `L = ${(alas_jajar_genjang.value*tinggi_jajar_genjang.value)} cm`
//             e.preventDefault()
//         }


//     })

//     document.getElementById('resetLuasJajarGenjang').addEventListener('click', (e)=>{
//         alas_jajar_genjang.value = "";
//         tinggi_jajar_genjang.value = "";

//         resultLuasJajarGenjang.textContent = ""
//         e.preventDefault()
//     })


//     document.getElementById('hitungKelilingJajarGenjang').addEventListener('click', (e)=>{

//         if (sisi4.value && sisi5.value && sisi6.value && sisi7.value){
//             resultKelilingJajarGenjang.textContent = ""
//             const p0 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
//             p0.textContent = "Hasil Perhitungan:"
//             const p1 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
//             p1.textContent = "K = a + b + c + d"
//             const p2 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
//             p2.textContent = `K = ${sisi4.value} + ${sisi5.value} + ${sisi6.value} + ${sisi7.value} `
//             const p3 = resultKelilingJajarGenjang.appendChild(document.createElement("p"))
//             p3.textContent =  `K = ${(parseFloat(sisi4.value) + parseFloat(sisi5.value) + parseFloat(sisi6.value) + parseFloat(sisi7.value))} cm`
//             e.preventDefault()
//         }


//     })

//     document.getElementById('resetKelilingJajarGenjang').addEventListener('click', (e)=>{
//         sisi4.value = "";
//         sisi5.value = "";
//         sisi6.value = "";
//         sisi7.value = "";

//         resultKelilingJajarGenjang.textContent = ""
//         e.preventDefault()
//     })



