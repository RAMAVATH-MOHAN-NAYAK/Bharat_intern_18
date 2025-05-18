import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post('http://localhost:3001/events/image', formData);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ? <p>Drop the image here ...</p> : <p>Drag 'n' drop an image here, or click to select an image</p>
        }
      </div>
      <button type="submit">Upload Image</button>
    </form>
  );
}
export default ImageUpload;