import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { postService } from "../../_services/post.service";
import "./accueil.scss";

const Accueil = () => {
  const [posts, setPosts] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      postService
        .getAllPosts()
        .then((res) => {
          console.log(res.data);
          setPosts(res.data.data);
        })
        .catch((err) => console.log(err));
    }
    // méthode pour éviter le double appel useEffect
    return () => (flag.current = true);
  }, []);

  return (
    <>
      <div className="post-body" />
      <table>
        <thead>
          <tr>
            <th>Post</th>
            <th>Créé le</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`../edit/${post._id}`}></Link>
              </td>
              <td>{post.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Accueil;