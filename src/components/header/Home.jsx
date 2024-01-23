import React, { useState } from 'react';

// Import your images
import myImage from './../../assets/img/10006.jpg';
import myImage2 from './../../assets/img/10001.jpg';
import myImage3 from './../../assets/img/10002.jpg';
import myImage4 from './../../assets/img/10003.jpg';
import myImage5 from './../../assets/img/10004.jpg';
// ... other imports ...

function ImageWithButtons({ src, onDelete, onAdd }) {
  return (
    <div className="image-container">
      <img className="hover:bg-red-200 cursor-pointer w-[24rem] h-[20rem] hover:animate-pulse" src={src} alt="" />
      <div className='justify-between gap-5'>
        <button className='bg-green-700 hover:bg-slate-300 p-2 mb-4 mt-3 rounded-lg w-36 ml-3 ' onClick={() => onAdd(src)}>Add</button>
        <button className='bg-red-700 hover:bg-slate-300 p-2 mb-4 mt-3 rounded-lg w-36 ml-3 ' onClick={() => onDelete(src)}>Delete</button>
      </div>
    </div>
  );
}

export default function Home() {
  const initialImages = [myImage, myImage2, myImage3, myImage4, myImage5, /* ... other images ... */];
  const [images, setImages] = useState(initialImages);

  const handleDelete = (imageSrc) => {
    setImages(images.filter(src => src !== imageSrc));
  };

  const handleAddImage = (imageSrc) => {
    // This will add a duplicate of the existing image. Adjust this logic as needed.
    setImages([...images, imageSrc]);
  };

  return (
    <div>
      <div className='text-4xl ml-[9rem] hover:text-green-700 p-12'>Fashion is the armor to survive the reality of everyday life</div>
      <div className=' flex flex-wrap p-6 bg-slate-200 justify-between'>
        {images.map((src, index) => (
          <ImageWithButtons className="bg-blue-500" key={index} src={src} onDelete={handleDelete} onAdd={handleAddImage} />
        ))}
      </div>
    </div>
  );
}
