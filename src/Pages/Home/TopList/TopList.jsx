import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const TopList = () => {

    const [topList, setTopList] = useState();

    useEffect(()=> {
        fetch(`https://reel-radar-server.vercel.app/towatch`)
        .then(res=> res.json())
        .then(data=> setTopList(data))
    },[]);


    return (
       <div className='lg:flex'>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'none' }}>
       {
        topList?.slice(0,6).map(top=> 
            <ListItem key={top?._id} top={top} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={top?.picture} />
            </ListItemAvatar>
            <ListItemText
              primary={top?.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="white"
                  >
                    {top?.year}
                  </Typography>
                  {" —"}
                </React.Fragment>
              }
            />
          </ListItem>
        )
       }
        <Divider variant="inset" component="li" />
        
     
      </List>
      <div className='w-[60%] flex justify-center mx-auto items-center'>
        <img src="https://i.ibb.co/dP6N7N4/Reel-Radar-Logo.png" alt="" />
      </div>
       </div>
    );
};

export default TopList;