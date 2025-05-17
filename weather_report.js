function showweatherDetails(event) {
      event.preventDefault();
}
 const city = document.getElementById('city').value;
      const apiKey = '788d95382dd351a23f41f0b363ca5e66'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
