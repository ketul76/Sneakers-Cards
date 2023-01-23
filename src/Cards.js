import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


function Cards({data}){
return(
  <>
    <Container sx={{width:"100%",minHeight:"100vh",padding:"100px 0"}}>
      <Grid container spacing={{md: 10, xs: 2  }}  justifyContent="center" columnSpacing={4} rowSpacing={4}>
       {data.map((item) => (
        <Grid item md='4' lg='3' >
          <Card sx={{width:"100%" ,padding:"10px",borderRadius:"7px"}}>
          <CardMedia 
          sx={{width:"300px",height:"150px"}}
            image={item.imgLink}
          />
          <CardContent>
            <Typography variant="h6" >{item.title}</Typography>
            <Typography variant="h5" >{item.dots}</Typography>
            <Typography variant="body1" >{item.price}</Typography>
          </CardContent>
          <Button className="card_btn" variant="outlined">{item.buttonText}</Button>
       </Card>
       </Grid>
       ))}
       </Grid>
       
    </Container>
  </>
)
}

export default Cards;