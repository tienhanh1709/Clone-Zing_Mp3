import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {Home,Login,Public, Allbum,SectionWeek,Searchs,SearchSong , SearchAll,Singer,SearchPlaylist,ArtistSinger} from './pages/public/index';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import path from './ultil/path';
import { useEffect } from 'react';
import * as actions from './store/action';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
//
import "react-alice-carousel/lib/alice-carousel.css";
// import "react-alice-carousel/lib/scss/alice-carousel.scss";



function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getHome())
  },[]);
  
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Allbum />} />
          <Route path={path.PLAYLIST_TITLE_PID} element={<Allbum />} />
          <Route path={path.WEEKCHART_TITLE_PID} element={<SectionWeek />} />
          <Route path={path.HOME__SINGER} element={<Singer />} />
          <Route path={path.HOME_ARTIST} element={<Singer />} />

          <Route path={path.SEARCH} element={<Searchs />} >
            <Route path={path.ALL} element={<SearchAll />} />
            <Route path={path.SONG} element={<SearchSong />} />
            <Route path={path.PALYLIST_SEARCH} element={<SearchPlaylist />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
