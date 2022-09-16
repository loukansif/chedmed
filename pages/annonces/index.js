import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsGeoAltFill } from "react-icons/bs";
import { TbRoad } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { TbDimensions } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import { BsFillCalendarRangeFill } from "react-icons/bs";

export default function Index({posts}) {
  // const maDate = new Date();
  // maDate.toLocaleDateString("fr")


  return (
    <>
      <Head>
        <title>Les annonces</title>
      </Head>
      <div className="container">
        <div
          className="row my-4 d-flex justify-content-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: "0",
          }}
        >
          <div
            className="col-11 col-md-10 col-xl-6 py-3 rounded-top position-relative"
            style={{
              backgroundColor: "#0070f3",
              minHeight: "118px",
            }}
          >
            <div className="input-group">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                <BsGeoAltFill className="" style={{ color: "black" }} />
              </label>
              <select
                className="form-select"
                style={{ maxWidth: "100px" }}
                id="inputGroupSelect01"
              >
                <option defaultValue="1">Départ</option>
                <option value="2">Arrivée</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <button
              className="btn btn-warning position-absolute"
              style={{ bottom: "12px", right: "12px" }}
            >
              Filtrer
            </button>
          </div>
          <div className="col-11 col-md-10 col-xl-6 p-0">
            {posts.map((post) => {
              console.log(post);
              return (
                <Link href={`/annonces/${encodeURIComponent(post._id)}`} key={uuidv4()}>
                  <div
                    className="annonce border-start border-bottom border-end p-2"                    
                  >
                    <h6>{post.title}</h6>
                    <div className="d-flex align-items-center">
                      <TbRoad className="m-1" style={{ color: "#6363ea" }} />
                      <p className="mb-0">
                        De {post.start} à {post.arrival}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <BsFillCalendarRangeFill
                        className="m-1"
                        style={{ color: "#6363ea" }}
                      />
                      <p className="mb-0">
                        À livrer entre le {post.deliver[0]} et {post.deliver[1]}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <TbDimensions
                        className="m-1"
                        style={{ color: "#6363ea" }}
                      />
                      <p className="mb-0">
                        {post.dimension[0]} x {post.dimension[1]} x{" "}
                        {post.dimension[2]} {post.dimension[3]}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <GiWeight className="m-1" style={{ color: "#6363ea" }} />
                      <p className="mb-0">
                        {post.weight[0]} {post.weight[1]}
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <GiCash className="m-1" style={{ color: "#6363ea" }} />
                      <p className="mb-0">{post.price} DA</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:5000/annonces`)
//   const posts = await res.json()

//   // Pass data to the page via props
//   return { props: { posts } }
// }


export async function getStaticProps() {
  const data = await fetch("http://localhost:5000/annonces");
  const posts = await data.json();
  
  return {
    props: {
      posts
    },
  };
}