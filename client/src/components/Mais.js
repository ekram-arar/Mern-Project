import './styles/movies.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import BuyTicketsComponent from './components/BuyTicketsComponent'
import AdminAdd from './components/AdminAdd'
import Home from './views/Home';
import Movies from './components/Movies'
import './styles/movie.css';
import React, { useState, useEffect } from 'react';
import React from 'react'


const APIURL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// const SEARCHAPI =
//     "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Mais = () =>{
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(APIURL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results)
			});
	}, []);

	return (
		<div className='movie-container'>
			{movies.length > 0 &&
				movies.map((movie) => <Movies key={movie.id} {...movie} />)}
		</div>
	);
}

export default App;