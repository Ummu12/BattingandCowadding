import React, {useState} from "react";
import {Grid, TextField, Button} from "@mui/material";

export const Animals=()=>{
    const [data, setData] = useState(["Cow", "Cat", "Dog"])
    const[txt,setTxt]=useState(""); 
return(
        <Grid container spacing={3}>
           <Grid item xs={8}>
            <TextField onChange={(e)=>setTxt(e.target.value)}
   fullWidth variant="outlined" label="Add Animal" />
           </Grid>
            <Grid item xs={4}>
            <Button onClick={()=> setData([...data, txt])} sx={{height:55}} variant="contained" fullWidth>Add</Button>
          </Grid>
          {
            data.map(item=>
              <Grid item xs={12}>
                {item}   
              </Grid>
              )
          }

    
        </Grid>
    )
}