import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLoaderData } from 'react-router-dom';
import { StarBorder } from '@mui/icons-material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import Rating from 'react-rating';
import StarRatings from 'react-star-ratings';
import { FacebookIcon, FacebookShareButton, FacebookShareCount, TwitterIcon, TwitterShareButton } from 'react-share';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




const FilmDetails = () => {
    const [expanded, setExpanded] = React.useState(false);
    const fbShareUrl = "https://www.facebook.com/";
    const twitterShareUrl = "https://twitter.com/";
    const pinterestShareUrl = "https://www.pinterest.com/";
 

    const loadedFilm = useLoaderData();
    console.log(loadedFilm);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    return (
      <div className='lg:flex justify-between items-center'>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={loadedFilm?.picture} alt="" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={loadedFilm?.title}
          subheader={loadedFilm?.year}
        />
        <CardMedia
        className='h-48'
          component="img"
          height="194"
          image={loadedFilm?.picture}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {loadedFilm?.details}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton  aria-label="add to favorites">
            <FavoriteIcon className='text-red-600'/>
          </IconButton>
        
         
          <IconButton aria-label="share">
          <div>
      <Button onClick={handleOpen}> <StarBorder /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Give Ratings
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <StarRatings
          numberOfStars={10}
          starHoverColor='yellow'
          starRatedColor='orange'
        rating={loadedFilm?.rating}
        starDimension="20px"
        starSpacing="6px"
      />
          </Typography>
        </Box>
      </Modal>
    </div>
           
          </IconButton>

         <div>
         <IconButton  className=' flex justify-center  gap-4' aria-label="share">
          <FacebookShareButton url={fbShareUrl}>
      <FacebookIcon size={32} round={true}  />
      </FacebookShareButton>
      <TwitterShareButton url={twitterShareUrl}>
      <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
            <ShareIcon />
          </IconButton>
         </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
             
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <div class='lg:w-[70%] pt-10'>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/qtRKdVHc-cE" frameborder="0" allowfullscreen></iframe>
</div>

      </div>
    );
};

export default FilmDetails;