import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { MusicNote } from '@mui/icons-material';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <MusicNote sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Melo - Advanced Music Creator
          </Typography>
          <Button color="inherit">Record</Button>
          <Button color="inherit">Compose</Button>
          <Button color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Welcome to Melo
              </Typography>
              <Typography variant="body1">
                Start recording or composing music. This is the foundation – add advanced features like audio tracks, effects, and MIDI support next.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Start New Project
              </Button>
            </Paper>
          </Grid>
          {/* Placeholder for future sections, e.g., waveform viewer or instrument panel */}
        </Grid>
      </Container>
    </>
  );
}

export default App;
