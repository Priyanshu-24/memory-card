import React from "react";
import { useState, useEffect } from "react";

import Single from "./Single";

import beagle from "../images/beagle.jpg";
import boxer from "../images/boxer.jpg";
import dachshund from "../images/dachshund.jpg";
import dalmatian from "../images/dalmatian.jpg";
import doberman from "../images/doberman.jpg";
import german_shepherd from "../images/german-shepherd.jpg";
import golden_retriever from "../images/golden-retriever.jpg";
import great_dane from "../images/great-dane.jpg";
import labrador from "../images/labrador.jpg";
import pomeranian from "../images/pomeranian.jpg";
import pug from "../images/pug.jpg";
import rottweiler from "../images/rottweiler.jpg";


function Main({check, score, highScore}) {

    let dogs = [
      {
        name: "Labrador",
        src: labrador,
      },
      {
        name: "German shepherd",
        src: german_shepherd,
      },
      {
        name: "Golden Retriever",
        src: golden_retriever,
      },
      {
        name: "Beagle",
        src: beagle,
      },
      {
        name: "Boxer",
        src: boxer,
      },
      {
        name: "Pug",
        src: pug,
      },
      {
        name: "Rottweiler",
        src: rottweiler,
      },
      {
        name: "Doberman",
        src: doberman,
      },
      {
        name: "Great Dane",
        src: great_dane,
      },
      {
        name: "Pomeranian",
        src: pomeranian,
      },
      {
        name: "Dalmatian",
        src: dalmatian,
      },
      {
        name: "Dachshund",
        src: dachshund,
      },
    ];


    const [dog, setDog] = useState(dogs);

    useEffect(() => {

      setDog((d) => d.sort(() => Math.random() - 0.5));
      
    }, [score, highScore]);

    return (
        
         dog.map((e) => (
             <Single key = {e.name} dog = {e} check = {check}/>
         ))
         
    )
}

export default Main;
