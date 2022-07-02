import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    if (search !== null) fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    alert("Salvando cancion en Favoritos");
    let currentSong = {
      search,
      lyric,
      bio,
    };
    setMySongs((mySongs) => [...mySongs, currentSong]);
    setSearch(null);
  };

  const handleDeleteSong = (id) => {
    alert(`Eliminando canción con el id: ${id}`);
  };

  return (
    <div>
      <HashRouter>
        <header>
          <h2>SongSearch</h2>
          <Link to="/canciones">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/canciones"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route path="/canciones/:id" element={<h2>Página de canción</h2>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
