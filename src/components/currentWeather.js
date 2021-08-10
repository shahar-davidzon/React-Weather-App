import React from 'react';
import '../styles/currentWeather.css';
import Responsive from '../components/Responsive';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import '../styles/normalize.css';


export default function WeatherBox({ info }) {
    let weatherIcon = null;
    let desc;
    let icons = [];
    const arr = [
        info.main,
        info.forecast ? info.forecast[8].weather[0].main : '',
        info.forecast ? info.forecast[16].weather[0].main : '',
        info.forecast ? info.forecast[24].weather[0].main : '',
        info.forecast ? info.forecast[32].weather[0].main : ''
    ]

    for (let i = 0; i < arr.length; i++) {


        desc = arr[i];
    
        if (desc === 'Thunderstorm') {
            weatherIcon = <i className="fas fa-bolt"></i>;
        } else if (desc === 'Drizzle') {
            weatherIcon = <i className="fas fa-cloud-rain"></i>;
        } else if (desc === 'Rain') {
            weatherIcon = <i className="fas fa-cloud-showers-heavy"></i>;
        } else if (desc === 'Snow') {
            weatherIcon = <i className="fas fa-snowflake"></i>;
        } else if (desc === 'Clear') {
            weatherIcon = <i className="far fa-sun"></i>;
        } else if (desc === 'Clouds') {
            weatherIcon = <i className="fas fa-cloud"></i>;
        } else {
            weatherIcon = <i className="fas fa-smog"></i>;
        }
        icons.push(weatherIcon);
    }



    if (info.description === 'heavy intensity rain') {
        info.description = 'heavy rain'
    }



    return (

        <ThemeProvider theme={Responsive}>
            <div className="animation" key={info.id}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: '3rem', marginLeft: '3rem' }}>
                    <Typography
                        variant="h3"
                        style={{
                            marginTop: '-3rem',
                            color: 'white',
                            fontWeight: '600',
                        }}
                    >
                        {info.date}
                    </Typography>
                    <Typography
                        variant="h3"
                        style={{
                            marginTop: '-3rem',
                            color: 'white',
                            fontWeight: '600',

                        }}
                    >
                        {info.city}, {info.country}
                    </Typography>
                    <Typography
                        variant="h3"
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            marginTop: '-3rem',

                        }}
                    >
                        {info.temp}° {icons[0]} {info.description}
                    </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: '0.5rem' }}>
                    <Box

                        boxShadow={3}
                        color='white'
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }} >
                            Sunrise
                </Typography>
                        <Typography variant="h4">
                            {info.sunriseTime}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }} >
                            Sunset
                </Typography>
                        <Typography variant="h4">
                            {info.sunsetTime}
                        </Typography>
                    </Box>
                    <Box

                        boxShadow={3}
                        color='white'
                        fontWeight="fontWeightBold"
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            Humidity
                </Typography>
                        <Typography variant="h4">
                            {info.humidity ? `${info.humidity}%` : ''}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            Wind
                </Typography>
                        <Typography variant="h4">
                            {info.wind ? `${info.wind.toFixed(1)}m/s` : ''}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            Rain
                </Typography>
                        <Typography variant="h4">
                            {info.rain ? `${info.rain.toFixed(1)}mm` : '-'}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={1}

                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            Snow
                </Typography>
                        <Typography variant="h4">
                            {info.snow ? `${info.snow.toFixed(1)}mm` : '-'}
                        </Typography>
                    </Box>
                </Grid>
                <Typography
                    variant="h4"
                    style={{
                        color: 'white',
                        marginTop: '1rem',
                        fontWeight: '600'
                    }}
                >
                    Forecast
                </Typography>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ marginTop: '0rem' }}>
                    <Box
                        boxShadow={3}
                        color='white'
                        m={1}
                        p={2}
                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }} >
                            {info.forecast ? info.forecast[8].dt_txt.slice(5, 10) : ''}
                        </Typography>
                        <Typography variant="h4">
                            {info.forecast ? Math.round(info.forecast[8].main.temp) : ''}°
                    </Typography>
                        <Typography variant="h4">
                            {icons[1]}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={2}
                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            {info.forecast ? info.forecast[16].dt_txt.slice(5, 10) : ''}
                        </Typography>
                        <Typography variant="h4">
                            {info.forecast ? Math.round(info.forecast[16].main.temp) : ''}°
                    </Typography>
                        <Typography variant="h4">
                            {icons[2]}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight="fontWeightBold"
                        m={1}
                        p={2}
                    >
                        <Typography variant='h4' style={{ fontWeight: '600' }}>
                            {info.forecast ? info.forecast[24].dt_txt.slice(5, 10) : ''}
                        </Typography>
                        <Typography variant="h4">
                            {info.forecast ? Math.round(info.forecast[24].main.temp) : ''}°
                    </Typography>
                        <Typography variant="h4">
                            {icons[3]}
                        </Typography>
                    </Box>
                    <Box
                        boxShadow={3}
                        color='white'
                        fontWeight='700'
                        m={1}
                        p={2}
                    >
                        <Typography variant="h4" style={{ fontWeight: '600' }}>
                            {info.forecast ? info.forecast[32].dt_txt.slice(5, 10) : ''}
                        </Typography>
                        <Typography variant="h4">
                            {info.forecast ? Math.round(info.forecast[32].main.temp) : ''}°
                    </Typography>
                        <Typography variant="h4">
                            {icons[4]}
                        </Typography>
                    </Box>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

