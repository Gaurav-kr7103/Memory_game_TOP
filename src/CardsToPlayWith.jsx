import { useEffect, useState } from "react";

const animalAndID = [
    ["dog", "l3vR4Ell5crP9nYR2"],
    ["cat", "12HZukMBlutpoQ"],
    ["chimpanzee", "DohrzSCB07moM"],
    ["duck", "krewXUB6LBja"],
    ["tiger", "3oEhmDzZJjY3RnvuZG"],
    ["pink panther", "3ohs4A5Kv4d1w7UvgQ"],
    ["leopard", "TEXMQgu9LBZRe"],
    ["polar bear", "TnSWVzfO08oso"],
    ["sloth", "WA5GAr6XkMFNu"],
    ["jaguar", "biUeqtToqHzoNSdckk"],
    ["suar", "peblvaTefMzBmIJIjZ"],
    ["cheetah", "7lz6nPd56aHh6"],
];

export function CardsToPlayWith({ count, setCount }) {

    const [images, setImages] = useState([]);

    const API_KEY = "?api_key=3nBbd0wqG0ucbjr6r1Qxd6M1dtzGNugK";
    const url = "https://api.giphy.com/v1/gifs/";

    useEffect(() => {
        let arr = [];
        async function get_GIF () {
            for (let i=0; i<animalAndID.length; i++) {
                const id = animalAndID[i][1];
                const URL = `${url}${id}${API_KEY}`;
                const res = await fetch(URL);
                const data = await res.json();
                const gif = data.data.images.original.url;
                arr.push([animalAndID[i][0],gif]);
            }
            setImages(arr);
        }
        get_GIF();
    }, []);

    return (
        <div>
            {images.map((image) => {
                return (
                    <div>
                        <img src = {image[1]} alt={image[0]}/> 
                    </div>
                )
            })};
        </div>
    )
}