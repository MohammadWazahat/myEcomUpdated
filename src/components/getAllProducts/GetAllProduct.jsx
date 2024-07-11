import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SingleCardData from "./SingleCardData";

const GetAllProduct = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3010/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  console.log(myUser);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3010/users/` + id)
        .then((res) => {
          location.reload();
          //   navigate("/") // reload us to the same page
        })
        .catch((err) => console.log(err));
    }
    console.log(id);
  };

  return (
    <div>
      <div className="flex justify-center items-center text-2xl ">
        Admin product page
      </div>

      <div className=" ">
        <Link to="/addProduct">Admin Add Products</Link>
      </div>

      <div>
        {/* <div>
        <div className="h-20 text-3xl flex justify-center items-center">
          Shows & Dramas
        </div>
        <div className=" flex justify-end m-4 ">
          <Link className="border border-slate-200 p-3 " to="/form">
            Add New Show
          </Link>
        </div>
      </div> */}
        {/* <div className="flex gap-4">
      <button className="p-2 m-2" onClick={() => SortAsc()}>Sort By Name A to Z</button>
      <button className="p-2 m-2" onClick={() => SortDesc()}>Sort By Name Z to A</button>
      <button className="p-2 m-2" onClick={() => SortLowest()}>Low to High Rating</button>
      <button className="p-2 m-2" onClick={() => SortHighest()}>High to Low Rating</button>
      </div> */}
        <div>
          {myUser.map((user, index) => {
            return (
              <div
                className="flex justify-between items-center m-2 p-2 "
                key={index}
              >
                <div className="flex items-center ">
                  <div className="mx-4">{index + 1}.</div>
                  <div className=" m-2 p-2 ml-8">
                    <SingleCardData {...user} />
                  </div>
                </div>

                <div className="  m-2 p-2">
                  <Link
                    className=" border border-slate-200 p-2 m-2"
                    to={`/read/` + user.id}
                  >
                    Web Series Details
                  </Link>
                </div>
                <div className=" border border-slate-200 m-2 p-2">
                  <button
                    className="p-2 m-2"
                    onClick={(e) => handleDelete(user.id)}
                  >
                    Delete Series
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetAllProduct;
