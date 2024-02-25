import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import imageSrc from "./imagee.png";
import imageSrcc from "./imagess.png";
function App() {
  return (
    <div className="bg-fifth">
      <All />
    </div>
  );
}

function All() {
  const [Users, setUsers] = useState([]);
  const [posts, setposts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [showdetail, setshowdetail] = useState(false);

  const handledetail = (e) => {
    setshowdetail((showdetail) => !showdetail);
    e.stopPropagation();
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/Users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setposts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setcomments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="m-4 container mx-auto text-siventh    bg-fifth  font-normal box-border  max-w-screen-lg pt-10 ">
      {posts.map((post) => {
        return (
          <div className="mb-8 bg-last pl-4 pr-4 pt-3 pb-3 rounded-md shadow-xl">
            {Users.map((user, e) => {
              return (
                <div>
                  {user.id === post.userId ? (
                    <div>
                      <div className="text-3xl mb-4 pt-10 bg-last p-10 rounded shadow-4xl">
                        <h2 className="mr-2 align-bottom text-sixth capitalize">
                          <div className=" flex ">
                            <img src={imageSrc} alt="" className="w-9 h-9" />
                            <h2> &nbsp;{user.name}</h2>
                          </div>
                        </h2>
                        <button
                          onClick={handledetail}
                          className="bg-blue-500 text-white px-2 py-1 rounded text-sixth"
                        >
                          &nbsp;&nbsp;&nbsp; @{user.username}
                        </button>
                        {showdetail && (
                          <div className=" rounded-xl grid  grid-cols-3 text-xl p-4 mt-4 shadow-5xl capitalize  ">
                            <h2>Email : {user.email}</h2>
                            <h2>Adress street : {user.address.street}</h2>
                            <h2>City : {user.address.city}</h2>
                            <h2>Zipcode : {user.address.zipcode}</h2>
                            <h2>Geo lat : {user.address.geo.lat}</h2>
                            <h2>Geo lng : {user.address.geo.lng}</h2>
                            <h2>Geo Phone : {user.phone}</h2>
                            <h2>website : {user.website}</h2>
                            <h2>Company name : {user.company.name}</h2>
                            <h2>Catchpharse : {user.company.catchPhrase}</h2>
                            <h2>Bs : {user.company.bs}</h2>
                          </div>
                        )}
                        <div className="text-2xl  mt-2 ">
                          <div className=" opacity-15 px-px py-px bg-siventh w-50 "></div>
                          <div>{post.title}</div>
                          <div>{post.body}</div>
                        </div>
                      </div>
                      <div>
                        <p className=" text-2xl text-sixth">comments :</p>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}

            {comments.map((comment) => {
              return (
                <div>
                  {comment.postId === post.id ? (
                    <div className="text-xl mb-4 border-4 rounded-md bg-last    border-thelast border-l-siventh border-r-siventh border-solid pl-6 pt-4 pb-4 shadow-4xl    ">
                      <div className="flex">
                        <img src={imageSrcc} alt="" className="w-7 h-7" />
                        <h2 className=" text-sixth capitalize">
                          &nbsp;{comment.name}
                        </h2>
                      </div>
                      <h2 className="mb-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{comment.email}
                      </h2>
                      <div className=" opacity-15 py-px bg-siventh w-45  mb-2 "></div>
                      <h2>{comment.body}</h2>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}

      <hr />
    </div>
  );
}
export default App;
