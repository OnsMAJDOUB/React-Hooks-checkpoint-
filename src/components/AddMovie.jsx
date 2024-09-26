
import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const addMovie = () => {
    onAddMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterUrl: "", rating: "" }); 
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={toggleForm}>{showForm ? "Hide" : "Add Movie"}</button>

      {showForm && (
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="posterUrl"
            placeholder="Poster URL"
            value={newMovie.posterUrl}
            onChange={handleChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            max={5}
            value={newMovie.rating}
            onChange={handleChange}
          />
          <button onClick={addMovie}>Add Movie</button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;

