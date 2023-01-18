import React, { useState } from 'react';
import './assets/css/Gallery.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Gallery() {
  return (
    <div className="Gallery">

      <div className="Gallery1">
        <div className="buttons">
          <button className="iconButton">
            <IoIosArrowBack className="icon" />
          </button>
          <button className="iconButton">
            <IoIosArrowForward className="icon" />
          </button>

          <button className="choice2">
            <ul>.</ul>
            Nome
          </button>
          <button className="choice1">
            Faça Upgrade
          </button>
        </div>

        <h3>Bom dia</h3>
      </div>

      <div className="Gallery2">
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
      </div>
      <div className="Gallery3">
        <h4>Suas músicas estão com saudade</h4>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
        <ul>.</ul>
      </div>
    </div>
  );
}

export default Gallery;
