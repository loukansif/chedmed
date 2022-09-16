import React from "react";
import { TbRoad } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { TbDimensions } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";

export default function Annonce(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="border-start border-bottom border-end p-2">
        <h6>{props.post.title}</h6>
        <div className="d-flex align-items-center">
          <TbRoad className="m-1" style={{ color: "#6363ea" }} />
          <p className="mb-0">
            De {props.post.start} à {props.post.arrival}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <BsFillCalendarRangeFill
            className="m-1"
            style={{ color: "#6363ea" }}
          />
          <p className="mb-0">
            À livrer entre le {props.post.deliver[0]} et {props.post.deliver[1]}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <TbDimensions className="m-1" style={{ color: "#6363ea" }} />
          <p className="mb-0">
            {props.post.dimension[0]} x {props.post.dimension[1]} x {props.post.dimension[2]}{" "}
            {props.post.dimension[3]}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <GiWeight className="m-1" style={{ color: "#6363ea" }} />
          <p className="mb-0">
            {props.post.weight[0]} {props.post.weight[1]}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <GiCash className="m-1" style={{ color: "#6363ea" }} />
          <p className="mb-0">{props.post.price} DA</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.annonce;

  const data = await fetch(`http://localhost:5000/annonces/${id}`);
  const post = await data.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:5000/annonces");
  const posts = await data.json();

  const paths = posts.map((item) => ({
    params: { annonce: item._id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
