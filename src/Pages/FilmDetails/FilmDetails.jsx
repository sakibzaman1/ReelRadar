import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLoaderData } from "react-router-dom";
import { QueueOutlined, StarBorder } from "@mui/icons-material";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";
import "./card.css";

// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
// import Rating from "react-rating";
import StarRatings from "react-star-ratings";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcFilm, FcFilmReel } from "react-icons/fc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FilmDetails = () => {
  const [expanded, setExpanded] = React.useState(false);
  const fbShareUrl = "https://www.facebook.com/";
  const twitterShareUrl = "https://twitter.com/";
  const pinterestShareUrl = "https://www.pinterest.com/";

  const { user } = useContext(AuthContext);

  const loadedFilm = useLoaderData();
  console.log(loadedFilm);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleAddToWatchlist = () => {
    const myAddedFilm = {
      id: loadedFilm?._id,
      title: loadedFilm?.title,
      year: loadedFilm?.year,
      picture: loadedFilm?.picture,
      rating: loadedFilm?.rating,
      duration: loadedFilm?.duration,
      genre: loadedFilm?.genre,
      email: user?.email,
      cast: loadedFilm?.cast,
      type: loadedFilm?.type
    };

    fetch("https://reel-radar-server.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myAddedFilm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          position: "top-center",
          icon: "success",
          title: "Film Added",
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="lg:flex justify-between  mb-20">
      <Card className="mt-6 p-2 bg-transparent" sx={{ maxWidth: 345 }}>
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
          className="h-48"
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className="" />
          </IconButton>
          <IconButton
            onClick={handleAddToWatchlist}
            aria-label="add to favorites"
          >
            <QueueOutlined></QueueOutlined>
          </IconButton>

          <div className="ml-20">
            <IconButton
              className=" flex justify-center  gap-6"
              aria-label="share"
            >
              <FacebookShareButton url={fbShareUrl}>
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={twitterShareUrl}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <ShareIcon />
            </IconButton>
          </div>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse> */}

        <div className="mt-8 ml-4 justify-start items-center flex gap-4">
          <FcFilmReel></FcFilmReel>
          <h2>{loadedFilm?.type}</h2>
        </div>

        <div className="mt-8 ml-4 justify-start items-center flex gap-4">
          <FcFilm></FcFilm>
          {loadedFilm?.genre?.map((genre) => (
            <h2>{genre}</h2>
          ))}
        </div>
      </Card>
      <div class="lg:w-[70%] pt-10">
        <div className="lg:flex justify-between">
          <iframe
            width="560"
            height="315"
            src={loadedFilm?.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div>
            <img
              className="w-60 h-60"
              src="https://i.ibb.co/dP6N7N4/Reel-Radar-Logo.png"
              alt=""
            />
            <div className="flex items-center">
              <h1 className="text-3xl">Rate This Film</h1>
              <IconButton aria-label="share">
                <div>
                  <Button onClick={handleOpen}>
                    {" "}
                    <StarBorder fontSize="large" color="error" />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Give Ratings
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                          sx={{
                            width: 300,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          {value !== null && (
                            <Box sx={{ ml: 2 }}>
                              {labels[hover !== -1 ? hover : value]}
                            </Box>
                          )}
                        </Box>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="lg:flex items-center justify-between">
          <small className="-ml-[40px] rotate-90 text-xl px-2 py-2 bg-gradient-to-r from-transparent via-sky-300 to-transparent text-black text-center w-60">Cast & Crew</small>

          <div className="mt-6 lg:grid lg:grid-cols-4 text-center items-center gap-10">
            {loadedFilm?.cast?.map((actor) => (
              <div className=" flex flex-col items-center">
                <img
                  className="w-28 h-28 rounded-full btn btn-ghost btn-circle avatar"
                  src={actor?.picture}
                  alt=""
                />
                <button className="btn btn-ghost">
                  <h1 className="font-bold text-lg w-60 flex justify-center mx-auto items-center text-center mt-2">
                    {actor?.name}
                  </h1>
                </button>
              </div>
            ))}
            <MdKeyboardDoubleArrowRight size={80} />
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
