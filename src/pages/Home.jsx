
import p1 from "../images/Tesselated Terrain.gif";
import p2 from "../images/RC7.gif"
import { Box, Grid, Slide, Typography } from "@mui/material";

export const Home = () =>
{
    const items = [
        {   
            name: 'project 1',
            description: 'description',
            imgSrc: p1,
        },
        {
            name: "project 2",
            description: "description",
            imgSrc: p2,
        }
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Box
                component="img"
                sx={{
                    maxWidth:"100%"
                }}
                alt="The house from the offer."
                src={p1}
                />
            </Grid>
            <Grid item xs={6}>
            <Box
                component="img"
                sx={{
                    maxWidth:"100%"
                }}
                alt="The house from the offer."
                src={p1}
                />
            </Grid>
        </Grid>
    )
}