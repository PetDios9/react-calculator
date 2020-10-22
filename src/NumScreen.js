import React from 'react'
import 'fontsource-roboto'
import { Grid, Typography } from '@material-ui/core'

function NumScreen(props){
    let renderedNum
    if (props.total !== '') {
        renderedNum = props.total
    } else if (props.operatorPressed) {
        renderedNum = props.secondNum
    } else {
        renderedNum = props.num
    }
    return(
        
    <Grid 
        container 
        justify='flex-end'
        direction='column'
        alignItems="flex-end"
        >

        <Grid item >
            <Typography variant="h4">
                {renderedNum}
            </Typography>
        </Grid>
    </Grid>
    
    )
}

export default NumScreen