import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function TextArea({transaction}) {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  var id = Math.floor(Math.random() * 100);


  const addItem = () =>{
    console.log("Clicked");
    setItems([...items, {id: id, key: title, value: desc}])
    // console.log(items);
    setTitle('');
    setDesc('');
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleTitleChange = (event) =>{
    setTitle(event.target.value);
  }

  const handleDescChange = (event) =>{
    setDesc(event.target.value);
  }

  function handleDelete (id){
    console.log("deleted!!");
    const updatedItem = items.filter(item => item.id !== id);
    setItems(updatedItem);
  }

  const styles={
    btn:{
      padding:'20px'
    },
    header:{
      backgroundColor:'bisque'
    }
  }
  return (
    <div>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={handleTitleChange}  style={{backgroundColor:'white'}} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Description" variant="outlined" value={desc} onChange={handleDescChange}  style={{backgroundColor:'white'}} />
          </Grid>
        </Grid>
          <div style={styles.btn}>
            <Button onClick={addItem} xs={6} variant="contained">Add</Button>
          </div>

          <div>
            {items.map((item,index)=>(
              <Stack direction="row" spacing={1}>
                <Card key={index} style={{marginBottom:'10px'}} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.dark" gutterBottom>
                      {item.key}: {item.value}
                  </Typography>
                  <Chip label="Delete" onClick={()=>handleDelete(id)} color="error" />
              </CardContent>

            </Card>
            </Stack>
            
            ))}
            <br/>
          
          </div>

    </div>
  )
}

export default TextArea
