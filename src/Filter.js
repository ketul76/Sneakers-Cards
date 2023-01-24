import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function Filter(){
  return(
    <>
      <Box sx={{width:"100%",padding:"20px",position:"fixed"}}>
      <BottomNavigation showLabels > 
        <BottomNavigationAction label="Male"  />
        <BottomNavigationAction label="Female"  />
        <BottomNavigationAction label="All"  />
      </BottomNavigation>
      </Box>
    </>
  )
}

export default Filter;