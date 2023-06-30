import Box from '@mui/material/Box';
import Copyright from "../components/copyright";
import Typography from '@mui/material/Typography';

const Home = () => {
    return <>
        <div className="home_container">
            <div className="home">
                <h1>Welcome to my app</h1>
            </div>
        </div>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </Box>
        {/* End footer */}
    </>


};

export default Home;