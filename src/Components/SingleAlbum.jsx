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
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { async } from "@firebase/util";

export default function SingleAlbum() {
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const src =
    "https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=";

  const [profilepic, setprofilepic] = useState(null);
  const [name, setname] = useState(null);
  const [username, setusername] = useState(null);
  const [galleryids, setgalleryids] = useState(null);
  const [todisplaygallerys, settodisplaygallerys] = useState(null);

  const [loaderstate, setloaderstate] = useState(true);

  const [dummy, setdummy] = useState(null);

  useEffect(() => {
    // getData(params.userId);
    // getgallaries();
    console.log("this is the state", state);

    setname(state.name);
    setprofilepic(state.profilepic);
    setusername(state.username);
    settodisplaygallerys(Object.values(state.ent.public.posts));
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
      <>
        <div className="top-bar">
          <span
            className="back-arrow"
            //onClick={backbbtn}
          >
            {" "}
            <img
              src={arrowLeft}
              alt="Arrow pointing left"
              onClick={() => {
                navigate("/profile/" + state.userid);
              }}
            />{" "}
          </span>
          <div className="progress-container">
            {username && <Progbar user={username} />}
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
        </div>
        <div>
          <h2 className="text"> {state.ent.public.galleryInfo.name}</h2>
        </div>

        <div class="row">
          {/* <div class="col-6 myclass">
          <img className="imgholdergrid" src={src} />
        </div> */}
          {todisplaygallerys &&
            todisplaygallerys.map((ent, key, index) => (
              <>
                {
                  <div class="col-6 myclasssinglealbum" key={index}>
                    <img className="imgholdergrid" src={ent.imgURL} />
                  </div>
                }
              </>
            ))}
        </div>
      </>
    </div>
  );
}
