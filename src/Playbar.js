import React, { useState } from 'react';
import './assets/css/Playbar.css';
import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdPictureInPictureAlt } from 'react-icons/md';
import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { TbArrowsShuffle, TbMicrophone2, TbDevices2 } from 'react-icons/tb';
import { BiRepeat } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import { BsVolumeUp } from 'react-icons/bs';
import { CgLoadbar } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io';

function Playbar() {

  const [play, setPlay] = useState(true);
  const [like, setLike] = useState(false);

  return (
    <div className="Playbar">

      <div className="Playbar1">
        <ul>.</ul>
        {// <IoIosArrowUp />
        }
        <div className="Playbar1 text">
          <h5>Música</h5>
          <h6>Artista</h6>
        </div>
        <button onClick={() => setLike(!like)} className="fav">
          {like ?
            <MdOutlineFavorite className="greenIcon" />
          :
            <MdOutlineFavoriteBorder className="icon" />
          }
        </button>
        <MdPictureInPictureAlt className="icon"/>
      </div>

        <div className="Playbar2">
            <TbArrowsShuffle className="icon"/>
            <AiFillStepBackward className="icon"/>
            <button onClick={() => setPlay(!play)}>
            {play ?
              <AiFillPlayCircle className="Playbar2 play"/>
            :
              <AiFillPauseCircle className="Playbar2 play"/>
            }
            </button>
            <AiFillStepForward className="icon"/>
            <BiRepeat className="icon"/>
            <CgLoadbar className="bar"/>
        </div>

        <div className="Playbar3">
          <TbMicrophone2 className="icon"/>
          <GoThreeBars className="icon"/>
          <TbDevices2 className="icon"/>
          <BsVolumeUp className="icon"/>
          <CgLoadbar className="bar"/>
        </div>
    </div>
  );
}

export default Playbar;
