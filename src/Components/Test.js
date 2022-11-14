import React, { useEffect, useState } from "react";
import Progbar from "./Layouts/Progbar";
import arrowLeft from "../assets/images/back-icon.svg";
import Loader, { Oval } from "react-loader-spinner";
import mainicon from "../assets/images/shop-icon.png";

import { database } from "./firebase";

import {
  ref,
  onValue,
  query,
  get,
  child,
  equalTo,
  orderByKey,
} from "firebase/database";
import { useParams } from "react-router-dom";
import { async } from "@firebase/util";

export default function Test() {
  const params = useParams();

  const src =
    "https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=";

  const [profilepic, setprofilepic] = useState(null);
  const [name, setname] = useState(null);
  const [username, setusername] = useState(null);
  const [galleryids, setgalleryids] = useState(null);
  const [todisplaygallerys, settodisplaygallerys] = useState([]);

  const [loaderstate, setloaderstate] = useState(true);

  const [dummy, setdummy] = useState(null);

  useEffect(() => {
    getData(params.userId);
    // getgallaries();
  }, []);

  function getData(id) {
    const starCountRef = ref(database, "/users/" + id);
    onValue(
      starCountRef,
      (snapshot) => {
        const data2 = snapshot.val();
        // console.log("data api", data2);
        // console.log("new code test", Object.keys(data2.public.showcasing) );
        if (data2.public["profile-data"].downloadURL) {
          setprofilepic(data2.public["profile-data"].downloadURL);
        }
        setname(data2.public["profile-data"].name);
        setusername(data2.public["profile-data"].username);
        if (data2.public.showcasing) {
          // getgallaries(Object.keys(data2.public.showcasing));
          // setgalleryids(Object.keys(data2.public.showcasing));
          getgallery2(Object.keys(data2.public.showcasing));
        } else {
          setloaderstate(false);
        }
      },
      {
        onlyOnce: true,
      }
    );
  }

  function getgallaries(gallids) {
    const dbRef = ref(database);
    get(child(dbRef, "/galleries/" + "4D681AF5-6BF3-42C8-BB8F-C6522EA3D440"))
      .then((snapshot) => {
        console.log("response", snapshot.val());
        if (snapshot.exists()) {
          let arr = [];
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            const equal = (element) => element === childKey;
            if (gallids.some(equal)) {
              arr.push(childSnapshot.val());
            }
          });
          console.log("array ret", arr);
          settodisplaygallerys(arr);
          if (arr.length > 0) {
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getgallery2(gallids) {
    const recentPostsRef = ref(database, "galleries/" + gallids[0]);
    const recentPostsRef2 = ref(database, "galleries/" + gallids[1]);

    // get(recentPostsRef).then((snapshot) => {
    //   let data = snapshot.val();
    //   console.log("filtered data", data);
    // });
    let promisearr = [];
    gallids.map((ent) => {
      const dum = get(ref(database, "galleries/" + ent));
      promisearr.push(dum);
    });

    console.log("promise arr", promisearr);
    // [get(recentPostsRef), get(recentPostsRef2)]
    Promise.all(promisearr).then((snapshot) => {
      setloaderstate(false);
      console.log("promise all", snapshot);
      let resultarr = [];
      snapshot.map((ent) => {
        resultarr.push(ent.val());
      });
      settodisplaygallerys(resultarr);
    });
  }

  const getData2 = (ref) => {
    return new Promise((resolve, reject) => {
      const onError = (error) => reject(error);
      const onData = (snap) => resolve(snap.val());

      ref.on("value", onData, onError);
    });
  };

  useEffect(() => {
    console.log("to dispaly gall useeffect", todisplaygallerys);
  }, [todisplaygallerys]);

  return (
    <div
      className="profile-container why-finja-main"
      style={{ "overflow-x": "hidden" }}
    >
      {loaderstate ? (
        <>
          <div>
            {/* <Loader
              type="TailSpin"
              color="#00BFFF"
              className="full-page-loader"
              height={35}
              width={35}
            /> */}
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              className="full-page-loader"
              wrapperClass="full-page-loader"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        </>
      ) : (
        <>
          <div className="top-bar">
            <span
              className="back-arrow"
              //onClick={backbbtn}
            >
              {" "}
              {/* <img src={arrowLeft} alt="Arrow pointing left" />{" "} */}
            </span>
            <div className="progress-container">
              {username && (
                <Progbar
                  first={100}
                  second={0}
                  third={0}
                  fourth={0}
                  user={username}
                />
              )}
            </div>
          </div>
          <div className="profilebodyinsta">
            <div className="instaimgholder-main">
              {profilepic && (
                <img
                  src={profilepic}
                  alt="Arrow pointing left"
                  className="instaimgholder"
                />
              )}
            </div>

            <div>
              <h2 className="name">{name && name}</h2>

              {/* <p>test</p>

          <button className="btnprimaryinsta">follow</button> */}
            </div>

            {/* <nav className="navclassinsta">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active "
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </div>
        </nav> */}
            {/* <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
            <img src="https://d2d3qesrx8xj6s.cloudfront.net/img/screenshots/66397c193930f4689f67722f54f7b929bd12e48f.png" />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            this is profile
          </div>
        </div> */}
          </div>
          <div>
            <h2 className="text">Public Albums</h2>
          </div>

          <div class="row">
            {/* <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div> */}
            {todisplaygallerys &&
              todisplaygallerys.map((ent, key, index) => (
                <>
                  {ent.public.galleryInfo.postImgURL && (
                    <div class="col-6 myclass" key={index}>
                      <img
                        className="imgholdergrid"
                        src={ent.public.galleryInfo.postImgURL}
                      />
                    </div>
                  )}
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
