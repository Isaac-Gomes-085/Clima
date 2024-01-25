
import { apiKey } from "./.env"


const cidade_input = document.querySelector("#city_input")
const procurar_btn = document.querySelector("#procurar")
let cidade = document.getElementById("city_name")
let temperatua = document.getElementById("temperatura_atual")
let previsao = document.getElementById("previsao")
let pais = document.getElementById("pais")
let res_wind = document.getElementById("res_wind")
let res_humidity = document.getElementById("res_humidity")
let tempMax = document.getElementById("max")
let tempMin = document.getElementById("min")

//FUNÇOES
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city) 
    console.log(getWeatherData(city))
    //let siglaPais = data.sys.country
    //const apiCoutryURL = `https://flagsapi.com/${siglaPais}/flat/64.png`
    cidade.innerHTML = data.name
    temperatua.innerHTML = parseInt(data.main.temp)+'&deg;C'
    previsao.innerHTML = data.weather[0].description
    res_wind.innerHTML = data.wind.speed + 'km'
    res_humidity.innerHTML = data.main.humidity + '%'
    tempMax.innerHTML = 'max: ' + data.main.temp_max + '&deg;C'
    tempMin.innerHTML = 'min: ' + data.main.temp_min + '&deg;C'
    
    //pais.setAttribute("scr", apiCoutryURL + data.sys.country)
    /*
    weatherIconeElement.setAttribute("scr", ``)
    */

}

//EVENTOS
procurar_btn.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cidade_input.value
    showWeatherData(city)
})



//Relogio
const hora = document.getElementById('hora')
const min = document.getElementById('minuto')

const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')

const seg = document.getElementById('segunda')
const quar = document.getElementById('quarta')
const sex = document.getElementById('sexta')

let segunda_btn =document.getElementById('segunda_btn')
let quarta_btn = document.getElementById('quarta_btn')
let sexta_btn = document.getElementById('sexta_btn')


let voltar = document.getElementById('voltar')




function back() {
    segunda_btn.style.display = 'block'
    quarta_btn.style.display = 'block'
    sexta_btn.style.display = 'block'
    seg.style.display = 'none'
    quar.style.display = 'none'
    sex.style.display = 'none'
}
//dias responsive
function dia1() {
    segunda_btn.style.display = 'none'
    quarta_btn.style.display = 'none'
    sexta_btn.style.display = 'none'
    if(segunda_btn) {
        seg.style.display = 'flex'
    }
}

function dia2() {
    segunda_btn.style.display = 'none'
    quarta_btn.style.display = 'none'
    sexta_btn.style.display = 'none'
    if(quarta_btn) {
        quar.style.display = 'flex'
    }
}

function dia3() {
    segunda_btn.style.display = 'none'
    quarta_btn.style.display = 'none'
    sexta_btn.style.display = 'none'
    if(sexta_btn) {
        sex.style.display = 'flex'
    }
}

//relogio
const relogio = setInterval( () => {
    const agora = new Date()
    //hora e minuto
    let nesta_hora = agora.getHours()
    let neste_min = agora.getMinutes()

    if(nesta_hora <10) {
        nesta_hora = `0${nesta_hora}`
    }
    if(neste_min <10) {
        neste_min = `0${neste_min}`
    }
    hora.innerHTML = nesta_hora + ' h'
    min.innerHTML = neste_min + ' min'
    //dia mes e ano
    let dia_atual = agora.getDate()
    let mes_atual = agora.getMonth()
    let ano_atual = agora.getFullYear()
    mes_atual ++

    if(dia_atual <10) {
        dia_atual = `<u>0${dia_atual}<u/>`
    }
    if(mes_atual <10) {
        mes_atual = `<u>0${mes_atual}<u/>`
    }
    
    dia.innerHTML = `<u>${dia_atual}<u/>`
    mes.innerHTML = `<u>${mes_atual}<u/>`
    ano.innerHTML = `<u>${ano_atual}<u/>`

})
