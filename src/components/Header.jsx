import React from 'react';
import Container from '@mui/material/Container';
import TextArea from './TextArea';

function Header() {
  const styles ={
    container:{
      height:'100vh',
      textAlign: 'center',
      backgroundColor:'bisque'
    },
    header:{
      backgroundColor:'burlywood'
    }
  }
  return (
    <div>
      <Container maxWidth="sm" style={styles.container}>
          <h1 style={styles.header} >ToDo</h1>
          <TextArea/>
      </Container>
    </div>
  )
}

export default Header
