import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Link from '@material-ui/core/Link';
import Apikey from './Config';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WeatherBox from './currentWeather';
import useInputState from "../hooks/useInputState";
import '../styles/SearchBar.css';
import Responsive from '../components/Responsive';
import '../styles/normalize.css';


const fetchData = async (value, info, setInfo, setShowing) => {
    try {
        const apikey = Apikey;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${apikey}&units=metric`);
        const data = await res.json();

        const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${apikey}&units=metric`);
        const daily = await forecast.json();

        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateNow = new Intl.DateTimeFormat('en-US', options).format(date);

        const offset = new Date().getTimezoneOffset() * 60;
        const sunset = data.sys.sunset + data.timezone + offset;
        const sunsetTime = new Date(sunset * 1000).toTimeString().slice(0, 5);
        const sunrise = data.sys.sunrise + data.timezone + offset;
        const sunriseTime = new Date(sunrise * 1000).toTimeString().slice(0, 5);



        const weatherInfo = {
            city: data.name,
            country: data.sys.country,
            main: data.weather['0'].main,
            forecast: daily.list,
            date: dateNow,
            message: data.message,
            id: data.id,
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity,
            sunsetTime,
            sunriseTime,
            wind: data.wind.speed,
            snow: data.snow ? data.snow['3h'] || data.snow['1h'] : '',
            rain: data.rain ? data.rain['3h'] || data.rain['1h'] : '',
            description: data.weather['0'].description
        }
        setShowing(true);
        setInfo(weatherInfo);
    }
    catch (error) {
        alert('City is not found');
    };
}


function Search() {
    const [value, handleChange, reset] = useInputState("");
    const [info, setInfo] = useState({});
    const [showing, setShowing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(value, info, setInfo, setShowing);
        reset();
    }


    return (
        <ThemeProvider theme={Responsive}>
            <Box
                style={{ display: 'inline-block', marginTop: '-1rem' }}
                boxShadow={3}
                m={1}
                p={1}
            >
                <Typography style={{ color: 'white', fontWeight: 'bold' }}>
                    <Link
                        style={{ textDecoration: 'none' }}
                        href="https://www.linkedin.com/in/shahar-davidzon"
                        target="_blank"
                        rel="noreferrer"
                        color='inherit'
                    >
                        Made by Shahar Davidzon
                    </Link>
                </Typography>
            </Box>
            <ValidatorForm className="form" onSubmit={handleSubmit} >
                <TextValidator
                    className="search"
                    value={value}
                    onChange={handleChange}
                    type='text'
                    placeholder='Enter City'
                    name='search'
                    id='search'
                    validators={["required"]}
                    errorMessages={["Enter a City name"]}
                />
                <div>
                    {value ? <button className='icon' type='reset' onClick={reset}>
                        <i class="fa fa-times-circle"></i>
                    </button> : ''}
                    &nbsp; 
                    <button type='submit' className='icon' >
                        <i className="fas fa-search-location"></i>
                    </button>
                </div>
            </ValidatorForm>
            {showing ?
                <WeatherBox info={info} /> : ''
            }

        </ThemeProvider>
    );
}

export default Search;