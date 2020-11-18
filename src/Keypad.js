import React from 'react'
import { Grid, Button, makeStyles,} from '@material-ui/core'
import 'fontsource-roboto'



function Keypad(props){
    let useBtnStyles = makeStyles({
        root: {
            borderRadius: 0,
        }
    })
    let btnStyles = useBtnStyles()

    const numButtons = [0,1,2,3,4,5,6,7,8,9].map(num => 
        <Grid item xs={3} key={num}>
            <Button
            disableElevation
            className={btnStyles.root}
            variant="contained"
            color="primary"
            onClick={props.renderNumber}
            value={num}
            >
                {num}
            </Button>
        </Grid>)

    const operatorButtons = ['+', '-', 'X', '/'].map(op =>     
        <Grid item xs={3} key={op}>
            <Button
            disableElevation
            className={btnStyles.root}
            variant="contained"
            onClick={props.handleOperator}
            value={`${op}`}
            name={`${op}`}
            >
                {op}
            </Button>
        </Grid>)
    
    const ceButton = 
        <Grid item xs={3}>
            <Button 
            disableElevation
            className={btnStyles.root}
            variant="contained"
            color="secondary"
            onClick={props.clearEverything}
            value="CE"
            name="CE"
            >
                CE
            </Button> 
        </Grid>

    const cButton = 
        <Grid item xs={3}>
            <Button 
            disableElevation
            className={btnStyles.root}
            variant="contained"
            color="secondary"
            onClick={props.clear}
            value="C"
            name="C"
            >
                C
            </Button> 
    </Grid>

    const equalButton =            
        <Grid item xs={12}>
            <Button 
            disableElevation
            className={btnStyles.root}
            fullWidth={true}
            variant="contained"
            onClick={props.handleEqual}
            value="="
            name="="
            >
                =
            </Button> 
        </Grid>



    return(
        <div>
            <Grid container 
            spacing={0} 
            direction="row"               
            alignItems="center">

                {numButtons}
                {ceButton}
                {cButton}
                {operatorButtons}
                {equalButton}

            </Grid>
        </div>)
}

export default Keypad