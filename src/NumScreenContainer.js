import React from 'react'
import 'fontsource-roboto'
import { Grid, Typography, Box} from '@material-ui/core'

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
        <Box border={1} height={80}>
            <Grid 
            container 
            direction="row"
            justify="flex-end"
            alignItems="center"
            >
                <Grid item>
                    <Typography variant="h4">
                        {renderedNum}
                    </Typography> 
                </Grid>     
            </Grid>
        </Box>
    )
}

export default NumScreenContainer