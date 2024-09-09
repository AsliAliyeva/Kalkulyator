const icons = document.getElementById("icons")
const mainDiv = document.getElementById("mainDiv")
const manat = document.getElementById("manat")
const statikSehife = document.getElementById("statikSehife")
const statikQiymet = document.getElementById("statikQiymet")
const statikInp = document.getElementById("statikInp")
const dizaynInp = document.getElementById("dizaynInp")
const toggle1 = document.getElementById("toggle1")
const toggle2 = document.getElementById("toggle2")
const toggle3 = document.getElementById("toggle3")
const toggle4 = document.getElementById("toggle4")
const toggle5 = document.getElementById("toggle5")
const toggle6 = document.getElementById("toggle6")
const toggle7 = document.getElementById("toggle7")
const toggle8 = document.getElementById("toggle8")
const toggle9 = document.getElementById("toggle9")
const toggle10 = document.getElementById("toggle10")
const toggle11 = document.getElementById("toggle11")
const toggle12 = document.getElementById("toggle12")
const toggle13 = document.getElementById("toggle13")
const toggle14 = document.getElementById("toggle14")
const elavelerXerc = document.getElementById("elavelerXerc")
const axtaris1 = document.getElementById("axtaris1")
const axtaris2 = document.getElementById("axtaris2")
const axtaris3 = document.getElementById("axtaris3")
const axtaris4 = document.getElementById("axtaris4")
const axtaris5 = document.getElementById("axtaris5")
const axtarisXerc = document.getElementById("axtarisXerc")
const elave1 = document.getElementById("elave1")
const elave2 = document.getElementById("elave2")
const elave3 = document.getElementById("elave3")
const elave4 = document.getElementById("elave4")
const elave5 = document.getElementById("elave5")
const elave6 = document.getElementById("elave6")
const elektronXerc = document.getElementById("elektronXerc")
const logoInp = document.getElementById("logoInp")
const dizaynqiymet = document.getElementById("dizaynqiymet")
const statikSehifeler = document.getElementById("statikSehifeler")
const elavelerTeklif = document.getElementById("elavelerTeklif")
const seoTeklif = document.getElementById("seoTeklif")
const elektronTeklif = document.getElementById("elektronTeklif")
const logoTeklif = document.getElementById("logoTeklif")
const umumiXerc = document.getElementById("umumiXerc")
const vebDD = document.getElementById("vebDD")
const domenDD = document.getElementById("domenDD")
const hostinqDD = document.getElementById("hostinqDD")
const xidmetDD = document.getElementById("xidmetDD")
const sirketDD = document.getElementById("sirketDD")
const bayragDD = document.getElementById("bayragDD")
const barDD = document.getElementById("barDD")
const bayragBarsDD = document.getElementById("bayragBarsDD")
const manatBars = document.getElementById("manatBars")
const vebBars = document.getElementById("vebBars")
const domenBars = document.getElementById("domenBars")
const sirketBars = document.getElementById("sirketBars")
const xidmetBars = document.getElementById("xidmetBars")
const hostinqBars = document.getElementById("hostinqBars")
const sonMenu = document.getElementById("sonMenu")
const bitArtiq = document.getElementById("bitArtiq")

const bgBlur = document.querySelector(".bgBlur")
const popbagla = document.querySelector(".popbagla")

let globalDeyisen = 0
let globalDeyisen1 = 0
let globalDeyisen2 = 0
let globalDeyisen3 = 0
let globalDeyisen4 = 0


function vebSaytAch() {
vebDD.style.display = vebDD.style.display === "block" ? "none" : "block"
vebBars.style.display = vebBars.style.display === "block" ? "none" : "block"
}   

function domenAch() {
      domenDD.style.display = domenDD.style.display === "block" ? "none" : "block"
      domenBars.style.display = domenBars.style.display === "block" ? "none" : "block"
}

function hostinqAch() {
    hostinqDD.style.display = hostinqDD.style.display === "block" ? "none" : "block"
    hostinqBars.style.display = hostinqBars.style.display === "block" ? "none" : "block"
}

function xidmetlerAch() {
  xidmetDD.style.display = xidmetDD.style.display === "block" ? "none" : "block"
  xidmetBars.style.display = xidmetBars.style.display === "block" ? "none" : "block"
} 

function servisAch() {
    sirketDD.style.display = sirketDD.style.display === "block" ? "none" : "block"
    sirketBars.style.display = sirketBars.style.display === "block" ? "none" : "block"
} 

function manatAch() {
    manat.style.display = manat.style.display === "block" ? "none" : "block"
    manatBars.style.display = manatBars.style.display === "block" ? "none" : "block"
}

function bayragAch() {
    bayragDD.style.display = bayragDD.style.display === "block" ? "none" : "block"
    bayragBarsDD.style.display = bayragBarsDD.style.display === "block" ? "none" : "block"
}

function barsAch() {
    const barDD = document.getElementById("barDD")
    if(barDD.classList.contains("hidden")){
        barDD.classList.remove("hidden")
        barDD.classList.add("block")
    }

}
 function barBagla() {
    const barDD = document.getElementById("barDD")
    if(barDD.classList.contains("block")){
        barDD.classList.remove("block")
        barDD.classList.add("hidden")
    }
 }


function getStatikInp() {
    statikSehife.innerHTML = statikInp.value
    statikQiymet.innerHTML = statikInp.value * 100 * dizaynInp.value
    statikSehifeler.innerHTML =  statikQiymet.innerHTML 
    globalDeyisen1 = statikQiymet.innerHTML
    umumihesabla()
    
}

function elavelerFunk() {
    let deyisen =0
   
 if(toggle1.checked) deyisen+=+toggle1.value
 if(toggle2.checked) deyisen+=+toggle2.value
 if(toggle3.checked) deyisen+=+toggle3.value
 if(toggle4.checked) deyisen+=+toggle4.value
 if(toggle5.checked) deyisen+=+toggle5.value
 if(toggle6.checked) deyisen+=+toggle6.value
 if(toggle7.checked) deyisen+=+toggle7.value
 if(toggle8.checked) deyisen+=+toggle8.value
 if(toggle9.checked) deyisen+=+toggle9.value
 if(toggle10.checked) deyisen+=+toggle10.value
 if(toggle11.checked) deyisen+=+toggle11.value
 if(toggle12.checked) deyisen+=+toggle12.value
 if(toggle13.checked) deyisen+=+toggle13.value
 if(toggle14.checked) deyisen+=+toggle14.value
 
 elavelerXerc.innerHTML=deyisen
 elavelerTeklif.innerHTML = elavelerXerc.innerHTML
 globalDeyisen = deyisen
 umumihesabla()
}

function axtarisFunk() {
    let deyisen = 0
    if(axtaris1.checked) deyisen+=+axtaris1.value
    if(axtaris2.checked) deyisen+=+axtaris2.value
    if(axtaris3.checked) deyisen+=+axtaris3.value
    if(axtaris4.checked) deyisen+=+axtaris4.value
    if(axtaris5.checked) deyisen+=+axtaris5.value
    axtarisXerc.innerHTML=deyisen
    seoTeklif.innerHTML = axtarisXerc.innerHTML
    globalDeyisen2 = deyisen
 umumihesabla()
}

function elektronFunk() {
    let deyisen =0
    if(elave1.checked) deyisen+=+elave1.value
    if(elave2.checked) deyisen+=+elave2.value
    if(elave3.checked) deyisen+=+elave3.value
    if(elave4.checked) deyisen+=+elave4.value
    if(elave5.checked) deyisen+=+elave5.value
    if(elave6.checked) deyisen+=+elave6.value
    elektronXerc.innerHTML=deyisen
    elektronTeklif.innerHTML = elektronXerc.innerHTML
    globalDeyisen3 = deyisen
 umumihesabla()
}

function dizaynFunk() {
    dizaynqiymet.innerHTML =  100 * logoInp.value
    logoTeklif.innerHTML = dizaynqiymet.innerHTML
    globalDeyisen4 = logoTeklif.innerHTML
    umumihesabla()
}

function umumihesabla() {
    let deyisen = +globalDeyisen + +globalDeyisen1 + +globalDeyisen2 +  +globalDeyisen3 + +globalDeyisen4
    umumiXerc.innerHTML = deyisen <=450 ? "450" : deyisen
    
}
umumihesabla()

let flag = true
function handlePopup() {
    bgBlur.style.display = flag ? "grid" : "none"
    flag = !flag
    
    bgBlur.innerHTML = `
        <div id="popups" style="display:grid"  class="popup flex flex-col p-10" " >
            <div class="flex justify-between">
                <h3>Veb sayt Təklifi</h3>
                <div class="flex justify-end" onclick="popUpBagla()"><i   class="fa-solid fa-xmark cursor-pointer text-[20px] mt-2"></i></div>
            </div>
            <h3 class="mb-5">Zəhmət olmasa əlaqə məlumatlarını təqdim edin</h3>
            <div>
                <input class="p-3 w-full border rounded my-2" type="text" placeholder="Ad və Soyad" class=" border rounded" />
                <div class="flex justify-between">
                    <input class="p-3 w-[48%] border rounded my-2" type="text" placeholder="Telefon nömrəniz" />
                    <input class="p-3 w-[48%]  border rounded my-2" type="email" placeholder="Elektron poçt ünvanı" />
                </div>
                    <textarea class="p-3 w-full border rounded my-2 h-[150px]" placeholder="Bəzi qeydlər...(məcburi deyil)"></textarea>
            <button class="bg-[#2bc48a] text-[white] px-12 py-4 rounded">Müraciət et<i class="fa-solid fa-arrow-right ml-2"></i></button>
            </div>
        </div>
    `   
}

function dayan(event) {
        const  popups =document.getElementById('popups').style.display='none'
}

function popUpBagla() {
    bgBlur.style.display='none'
    const  popups =document.getElementById('popups').style.display='none'
}
    