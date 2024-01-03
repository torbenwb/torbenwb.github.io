import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

export const SiteNav = () =>
{
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Button href="/">Name</Button>
      <Button href="/">Home</Button>
      <Button href="/#about">About</Button>
      <Button href="/#projects">Projects</Button>
    </Box>
  );
};