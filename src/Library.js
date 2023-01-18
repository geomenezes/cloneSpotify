import './assets/css/Library.css';
import Playbar from'./Playbar';
import { MdHomeFilled } from 'react-icons/md';
import { BsSearch, BsSpotify } from 'react-icons/bs';
import { BiLibrary, BiHeart } from 'react-icons/bi';
import { MdAddBox, MdBookmark } from 'react-icons/md';

function Library() {
  return (
    <div className="Library">
      <div className="Library1">
        <a>
          <BsSpotify />
          Spotify
        </a>
      </div>
      <div className="Library2">
        <a style={{ color:'#fff' }}>
          <MdHomeFilled />
          Início
        </a><br/>
        <a>
          <BsSearch />
          Buscar
        </a><br/>
        <a>
          <BiLibrary />
          Sua Biblioteca
        </a><br/>

        <br/>

        <a>
          <MdAddBox />
          Criar Playlist
        </a><br/>
        <a>
          <BiHeart />
          Músicas Curtidas
        </a><br/>
        <a>
          <MdBookmark />
          Seus Episódios
        </a>
      </div>


      <div className="Library3">
        <a>Playlist 1</a><br/>
        <a>Playlist 2</a><br/>
        <a>Playlist 3</a><br/>
        <a>Playlist 4</a><br/>
        <a>Playlist 5</a><br/>
        <a>Playlist 6</a>
      </div>
    </div>
  );
}

export default Library;
