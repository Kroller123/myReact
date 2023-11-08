import React, {useEffect, useState} from 'react';

import {Album} from "./Album";
import {albumsService} from "../../services/albumsService";

const Albums = () => {
    let [albums, setAlbums] = useState([])


    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, [])
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};