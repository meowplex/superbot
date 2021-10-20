import { Resp } from "../../../../lib/superbot/index.js";
import fetch from "node-fetch";

export default async function weather_command(context, cityName) {
    let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&lang=ru&units=metric`)
    let weatherJson = await weatherData.json();
    if (weatherJson.cod == "404") {
        let res = new Resp(`Место не найдено`)
        context.reply(res)
    }
    else {
        let res = new Resp(`Погода в ${weatherJson.name}\n\tТемпература: ${weatherJson.main.temp} ℃\n\t` +
            `Ощущается как: ${weatherJson.main.feels_like} ℃\n\tСкорость ветра: ${weatherJson.wind.speed} м/с`
        )
        context.reply(res)
    }
}
