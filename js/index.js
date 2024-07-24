document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'f9da234140d69fe1ecafc23a186e7c94'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uz`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            if (data.cod === 200) {
                weatherResult.innerHTML = `
                    <h2>${data.name}</h2>
                    <p>Harorat: ${data.main.temp} °C</p>
                    <p>Holati: ${data.weather[0].description}</p>
                    <p>Namlik: ${data.main.humidity} %</p>
                `;
            } else {
                weatherResult.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Xato yuz berdi:', error);
            document.getElementById('weatherResult').innerHTML = `<p>Xato yuz berdi. Iltimos, qayta urinib ko'ring.</p>`;
        });
});
