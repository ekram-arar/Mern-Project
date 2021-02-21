import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/movies.css';
import { Button } from '@material-ui/core';



const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const Movies = ({ poster_path, title, vote_average, overview, video, release_date }) => {

  return (


    <div className="movie" >
      <img src={IMGPATH + poster_path} alt={title} />
      <div class="movie-info">
        <h4>{title}</h4>
        <h6>{"category"}</h6>

      </div>
      <div className="overview">
        <Button color="primary">Buy Now!</Button>
        <p>{overview}</p>
        {/* {video} */}
      </div>
    </div>

  );
};

export default Movies;