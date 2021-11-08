import { createTheme } from "@mui/material";
import { green, red } from '@mui/material/colors'


const theme = createTheme({
    palette: {
        increase: {
            main: '#4caf50',
        },
        decrease: {
            main: '#d32f2f',
        }
    },
})

export default theme