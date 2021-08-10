import { createMuiTheme } from '@material-ui/core/styles';
import '../styles/normalize.css';


function Responsive() {
    let theme = createMuiTheme();


    theme.typography.h4 = {
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.9rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.65rem'
        },
    };


    theme.typography.h3 = {
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8rem',
            marginLeft: '-2em',
            marginRight: '2.4rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.1rem',
            marginLeft: '-3rem',
            marginRight: '6rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.7rem',
            margin: '2rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.2rem',
            margin: '1.5rem'
        },
    };
    return theme;
}

export default Responsive; 