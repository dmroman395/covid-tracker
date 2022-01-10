import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import flag from '../../public/us-flag.png'


function StatsCard(props) {

    return (
        <Card>
            {/* <CardMedia
                component="img"
                height="140"
                image={flag}
                alt="united states flag"
            /> */}
            <CardContent>
                <Typography variant='h6'>Country Name</Typography>
                <Typography variant='p'>Cases: 120,000</Typography>
                <Typography variant='p'>Deaths: 20,000</Typography>
            </CardContent>
        </Card>
    )
}

export default StatsCard