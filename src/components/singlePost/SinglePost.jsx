import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sadan Mian</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          corporis veniam ullam quidem nobis non doloremque, eos distinctio nam!
          Voluptatem pariatur debitis deserunt quasi molestias totam mollitia
          expedita aliquam vero architecto, nam, praesentium quam tempore id
          commodi quidem. Dolores illum molestias ullam odit iusto beatae odio
          unde voluptatibus officiis? Esse, quod. Officiis rem, cum eius
          praesentium accusamus nihil saepe facere libero voluptates dolor
          inventore quidem maxime nam reprehenderit, minima magnam adipisci
          consectetur! Iure obcaecati amet est labore aliquid temporibus
          suscipit veniam quibusdam nemo sed, ratione nobis quos rerum nisi rem
          molestiae, provident blanditiis illo nulla fugiat assumenda alias
          voluptas neque. Harum in ab temporibus qui molestias, exercitationem
          nihil omnis perspiciatis illum ad. Sint veritatis odio assumenda vel,
          dolor eveniet sequi incidunt id veniam animi maiores, accusantium
          excepturi quasi nam esse? Reiciendis odit nesciunt mollitia nemo dolor
          eos architecto, alias, officia rerum nulla tempora optio repudiandae
          eum. Veritatis, modi amet aperiam deleniti temporibus iure. Cum
          repudiandae inventore tenetur maxime culpa reiciendis ex mollitia est
          commodi praesentium saepe nulla modi eveniet minus, aut unde
          necessitatibus facere natus repellat. Ipsam, voluptate? Excepturi
          corporis dolorem minus soluta reiciendis, ratione inventore ea natus,
          placeat ut fugit omnis error qui quos quis, in saepe ipsum
          repudiandae.
        </p>
      </div>
    </div>
  );
}
