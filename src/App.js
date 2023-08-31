
import { Card,CardContent } from '@mui/material';
import React from 'react';
import { Animals } from './Component/Animal';

function App() {
  return (
      <Card>
        <h1>Animals</h1>
        <CardContent>
            <Animals/>
        </CardContent>
      </Card>
  );
}

export default App;
