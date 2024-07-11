import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateData = () => {
  const { id } = useParams();
  // Create api
  const users = {
    image: "",
    title: "",
    description: "",
    genre: "",
    origin: "",
    starting_date: "",
    isRunning: "",
    ending_date: "",
    no_of_seasons: "",
    no_of_episodes: "",
    runtime: "",
    date_i_watched: "",
    my_rating: "",
    imdb_rating: "",
    my_review: "",
  };

  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3030/users/` + id, user);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/users/` + id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  return (
    <div>
       <div className="h-20 text-3xl flex justify-center items-center">
        Edit Yours Show Details
      </div>
      <div className=" flex justify-end m-4 ">
        <Link className="border border-slate-200 p-3 " to="/">Shows List</Link>
      </div>
      
      <div>
        <form onSubmit={submitForm}>
          <div>
            <div>
              <label htmlFor="image">Enter image</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="image"
                name="image"
                value={user.image}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="title">Enter title</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="title"
                name="title"
                value={user.title}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="description">Enter description</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="description"
                name="description"
                value={user.description}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="genre">Enter genre</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="genre"
                name="genre"
                value={user.genre}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="origin">Enter origin</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="origin"
                name="origin"
                value={user.origin}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="starting_date">Enter starting_date</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="starting_date"
                name="starting_date"
                value={user.starting_date}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="isRunning">Enter isRunning</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="isRunning"
                name="isRunning"
                value={user.isRunning}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="ending_date">Enter ending_date </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="ending_date"
                name="ending_date"
                value={user.ending_date}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="no_of_seasons">Enter no_of_seasons</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="no_of_seasons"
                name="no_of_seasons"
                value={user.no_of_seasons}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="no_of_episodes">Enter no_of_episodes</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="no_of_episodes"
                name="no_of_episodes"
                value={user.no_of_episodes}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="runtime">Enter runtime</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="runtime"
                name="runtime"
                value={user.runtime}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="date_i_watched">Enter date_i_watched</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="date_i_watched"
                name="date_i_watched"
                value={user.date_i_watched}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="my_rating">Enter my_rating</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="my_rating"
                name="my_rating"
                value={user.my_rating}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="imdb_rating">Enter imdb_rating</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="imdb_rating"
                name="imdb_rating"
                value={user.imdb_rating}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="my_review">Enter my_review</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="my_review"
                name="my_review"
                value={user.my_review}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
