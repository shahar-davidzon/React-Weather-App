import React from 'react';
import '../styles/currentWeather.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import '../styles/normalize.css';


export default function ForecastBox({ info }) {

    return (
        <div className='animation' key={info.id}>
            <Typography
                style={{
                    color: 'white',
                    marginTop: '1rem',
                    fontWeight: '600',
                    fontSize: '2.5rem'
                }}
            >
                Forecast
            </Typography>
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
                    style={{ width: '8rem', height: '5rem' }}
                >
                    <Typography style={{ fontWeight: '600', fontSize: '1.8rem' }} >
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
                    style={{ width: '8rem', height: '5rem' }}
                >
                    <Typography style={{ fontWeight: '600', fontSize: '1.8rem' }}>
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
                    style={{ width: '8rem', height: '5rem' }}
                >
                    <Typography style={{ fontWeight: '600', fontSize: '1.8rem' }}>
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
                    style={{ width: '8rem', height: '5rem' }}
                >
                    <Typography style={{ fontWeight: '600', fontSize: '1.8rem' }}>
                        Wind
                </Typography>
                    <Typography variant="h4">
                        {info.wind ? `${info.wind.toFixed(1)}m/s` : ''}
                    </Typography>
                </Box>
            </Grid>
        </div>
    );
}