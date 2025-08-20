import { useEffect, useState } from "react";

const animalAndID = [
  {
    name: "dog",
    id: "l3vR4Ell5crP9nYR2",
    key: crypto.randomUUID()
  },
  {
    name: "cat",
    id: "12HZukMBlutpoQ",
    key: crypto.randomUUID()
  },
  {
    name: "chimpanzee",
    id: "DohrzSCB07moM",
    key: crypto.randomUUID()
  },
  {
    name: "duck",
    id: "krewXUB6LBja",
    key: crypto.randomUUID()
  },
  {
    name: "tiger",
    id: "3oEhmDzZJjY3RnvuZG",
    key: crypto.randomUUID()
  },
  {
    name: "pink panther",
    id: "3ohs4A5Kv4d1w7UvgQ",
    key: crypto.randomUUID()
  },
  {
    name: "leopard",
    id: "TEXMQgu9LBZRe",
    key: crypto.randomUUID()
  },
  {
    name: "polar bear",
    id: "TnSWVzfO08oso",
    key: crypto.randomUUID()
  },
  {
    name: "sloth",
    id: "WA5GAr6XkMFNu",
    key: crypto.randomUUID()
  },
  {
    name: "jaguar",
    id: "biUeqtToqHzoNSdckk",
    key: crypto.randomUUID()
  },
  {
    name: "suar",
    id: "peblvaTefMzBmIJIjZ",
    key: crypto.randomUUID()
  },
  {
    name: "cheetah",
    id: "7lz6nPd56aHh6",
    key: crypto.randomUUID()
  }
];

export function CardsToPlayWith({ count, setCount }) {

    const [images, setImages] = useState([]);
    const [clicked, setClick] = useState([]);

    const API_KEY = "?api_key=3nBbd0wqG0ucbjr6r1Qxd6M1dtzGNugK";
    const url = "https://api.giphy.com/v1/gifs/";

    useEffect(() => {
        let arr = [];
        async function get_GIF () {
            for (let i=0; i<animalAndID.length; i++) {
                const id = animalAndID[i].id;
                const URL = `${url}${id}${API_KEY}`;
                const res = await fetch(URL);
                const data = await res.json();
                console.log(data);
                const gif = data.data.images.original.url;
                arr.push({
                    name : animalAndID[i].name,
                    image : gif,
                    key : animalAndID[i].key
                });
            }
            setImages(arr);
            setClick(new Array(arr.length).fill(false));
        }
        get_GIF();
    }, []);

    function reShuffle (list) {
      // let currIndex = list.length-1;
      // while (currIndex !== 0) {
      //   let randomIndex = Math.floor(Math.random() * currIndex);
      //   [list[currIndex], list[randomIndex]] = [list[randomIndex], list[currIndex]];
      //   currIndex--;
      // }
    }
    function handleEvent(index) {
      if (!clicked[index]) {
        const updated = [...clicked];
        updated[index] = true;
        setClick(updated);
        setCount(count + 1);
      } else {
        setCount(0);
        setClick(new Array(animalList.length).fill(false));
      }
    }

    let animalList = images;
    //reshuffle animalList
    reShuffle(animalList);
    // const clicked = new Array(animalList.length).fill(false);
    
    return (
        <div>
          {animalList.map((animal,index) => {
            return (
              <div key={animal.key} onClick={() => {handleEvent(index)}}>
                  <img src = {animal.image} alt={animal.name}/>
                  <div>name : {animal.name}</div>
              </div>
            )
            })}
        </div>
    );
}