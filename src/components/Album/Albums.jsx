import {useState, useEffect} from 'react'
import Album from "./Album";
function Albums() {
    const [albums, setAlbums] = useState([]);
    const getApiData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        ).then((response) => response.json());
        setAlbums(response);
    };

    useEffect(() => {
        getApiData();
    }, []);
    
    return (
        <div className="container">
        <div className="row ">
            {
                albums.map((album) => (
                        <Album
                            key={album.id}
                            id={album.id} 
                            title={album.title} 
                            userId={album.userId}
                        />
                    )
                )
            }
        </div>
        </div>
    )
}

export default Albums