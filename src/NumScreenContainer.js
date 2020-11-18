import React from 'react'
import NumScreen from './NumScreen'
import 'fontsource-roboto'
import { Grid, Typography } from '@material-ui/core'

function NumScreenContainer(props){
    
    let renderedNum

    if (props.total !== 0) {
        renderedNum = props.total
    } else if (props.operatorPressed) {
        renderedNum = props.secondNum
    } else {
        renderedNum = props.firstNum
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
                    <NumScreen renderedNum={renderedNum} total={props.total} secondNum={props.secondNum} firstNum={props.firstNum}/>
                </Typography>
            </Grid>
        </Grid>
    
    )
}

export default NumScreenContainer