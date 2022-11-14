import React, { useEffect, useMemo, useState } from "react";

export default function Memo() {
  const [state, setstate] = useState(0);
  const [name, setname] = useState(null);

  function toinc(params) {
    console.log("in the incr");
    setstate(state + 1);
  }

  useEffect(() => {
    // console.log("in the use effect");
    // somepowerhungryop();
    // var4();
  }, []);

  function somepowerhungryop() {
    console.log("in the power hungry");
    // for (let index = 0; index < 10000000000; index++) {}
  }

  // console.log("var4 function invokation", var4);
  var4();

  // const var3 = () => {
  //   console.log("in the var3");
  // };

  console.log("var n let", cc);
  var cc = "test";
  let ll = "new";
  function var4() {
    console.log("in the var4 function");
  }

  function aa() {
    var b = "b in aa";
    bb();
  }

  function bb() {}

  return (
    <div>
      Memo Count : {state}
      <div>
        <button
          onClick={() => {
            toinc();
          }}
        >
          Increment
        </button>
      </div>
      {/* <div>
        <button
          onClick={() => {
            toinc();
          }}
        >
          Name
        </button>
      </div> */}
    </div>
  );
}
