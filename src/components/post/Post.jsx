import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, ut
        provident soluta voluptate in ullam deserunt impedit ipsam vel
        praesentium facilis porro culpa aliquam officia consectetur maiores
        aspernatur ducimus odio reprehenderit eum corporis suscipit iusto. Autem
        consequatur officiis quis ab consectetur omnis ex voluptate ea vitae,
        rerum illo. In fuga laboriosam, reiciendis porro rem iste officiis illum
        unde eos nesciunt! Amet officiis accusantium cupiditate ipsum ducimus
        cum, sequi nemo autem, nam quidem et obcaecati repellendus, blanditiis
        neque veniam molestias. Error, ducimus tempora. Cum nihil fugiat fugit
        tempore minima odio illo corporis, ut commodi blanditiis velit natus
        architecto atque voluptatibus odit!
      </p>
    </div>
  );
}
