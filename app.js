 const submitBtn = document.getElementById('button');
 submitBtn.addEventListener('click',function () {
const inputBtn = document.getElementById('input').value
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=3107b659555de4ada18c112838ef8ee0')
.then(Response => Response.json())
.then(data => {
    const country = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15;
    const description = data.weather[0].description;

    document.getElementById('city').innerText = country;
    document.getElementById('temp').innerText = temp.toFixed(2);
    document.getElementById('des').innerText = description;
})
 })
