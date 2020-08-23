const searchbox = document.querySelector('#city');
const key = 'a36b3b604804a1dc6b5820c8b7911118'; /*ori*/ 
            /*'7b4e840accf560effac0b4981c1438fd'*/

/*  Adicionando um evento que escutará as teclas pessionadas  */
/*  Lista com keycodes para cada tecla: http://gcctech.org/csc/javascript/javascript_keycodes.htm */

searchbox.addEventListener('keypress', checkEnter)

function checkEnter(evt){

    if(evt.keyCode == 13){
        getInfo(searchbox.value)
    }

}


function getInfo(value){

    q = value;
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + q + "&units=metric&appid=" + key;
    /*Lembrar de zerar valor do input*/

    fetch(api)
        .then(res => res.json())
        .then( setResults)
}

function setResults(res){
    let city = document.querySelector('#setCity');
    let date = document.querySelector('#setDate');
    let temperature = document.querySelector('#setTemperature');
    let weatherMain = document.querySelector('#setWeather');
    let maxMin = document.querySelector('#maxMin');
    let main = document.querySelector('main')

    let now = new Date();

    city.innerHTML = res.name + ' , ' + res.sys.country;
    date.innerHTML = dateBuilder(now);
    temperature.innerHTML = Math.round(res.main.temp) + '<span>ºc</span>';
    weatherMain.innerHTML = res.weather[0].main;
    maxMin.innerHTML = res.main.temp_max + ' / ' + res.main.temp_min;

    main.style.opacity = 1; 

    /*checkWeather(res.weather[0].main)*/

}

function dateBuilder(date){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    /*
    let months = ["Janeiro", "Fevereiro", "Março", "Abril" , "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    */

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dates = date.getDate();
    let year = date.getFullYear();

    return day + ' ' + dates + ' ' + month + ' ' + year

}

/*
function checkWeather(value){

    switch (value) {
        case 'Clear':

            break;
        case 'Clouds':
            break;
        case 'Rain':
            document.body.style.backgroundImage = "url ('https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg')";
            break;
        case 'Thunderstorm':
            break;
        case 'Snow':
            break;
        default:
            break;    
    }

}
*/





/*  Amadodev    */

    


