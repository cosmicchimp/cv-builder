import { useState } from "react";
export function Header() {
  return (
    <div
      className="headerBox"
      style={{
        letterSpacing: ".1rem",
      }}
    >
      <h1>Resume Builder</h1>
      <div className="buttonContainer">
        <svg
          className="headerButton"
          id="newResumeButton"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>plus-square</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke=""
              stroke-width="1"
              fill=""
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set-Filled"
                sketch:type="MSLayerGroup"
                transform="translate(-102.000000, -1037.000000)"
                fill="#ffffff"
              >
                {" "}
                <path
                  d="M124,1054 L119,1054 L119,1059 C119,1059.55 118.552,1060 118,1060 C117.448,1060 117,1059.55 117,1059 L117,1054 L112,1054 C111.448,1054 111,1053.55 111,1053 C111,1052.45 111.448,1052 112,1052 L117,1052 L117,1047 C117,1046.45 117.448,1046 118,1046 C118.552,1046 119,1046.45 119,1047 L119,1052 L124,1052 C124.552,1052 125,1052.45 125,1053 C125,1053.55 124.552,1054 124,1054 L124,1054 Z M130,1037 L106,1037 C103.791,1037 102,1038.79 102,1041 L102,1065 C102,1067.21 103.791,1069 106,1069 L130,1069 C132.209,1069 134,1067.21 134,1065 L134,1041 C134,1038.79 132.209,1037 130,1037 L130,1037 Z"
                  id="plus-square"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <svg
          className="headerButton"
          id="saveButton"
          viewBox="-2 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>arrow-bottom</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="#ffffff"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              {" "}
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-519.000000, -931.000000)"
                fill="#ffffff"
              >
                {" "}
                <path
                  d="M543,935 L540,935 L540,937 L543,937 C544.104,937 545,937.896 545,939 L545,959 C545,960.104 544.104,961 543,961 L523,961 C521.896,961 521,960.104 521,959 L521,939 C521,937.896 521.896,937 523,937 L526,937 L526,935 L523,935 C520.791,935 519,936.791 519,939 L519,959 C519,961.209 520.791,963 523,963 L543,963 C545.209,963 547,961.209 547,959 L547,939 C547,936.791 545.209,935 543,935 L543,935 Z M525.343,949.758 L532.242,956.657 C532.451,956.865 532.728,956.954 533,956.939 C533.272,956.954 533.549,956.865 533.758,956.657 L540.657,949.758 C541.048,949.367 541.048,948.733 540.657,948.343 C540.267,947.953 539.633,947.953 539.242,948.343 L534,953.586 L534,932 C534,931.447 533.553,931 533,931 C532.448,931 532,931.447 532,932 L532,953.586 L526.757,948.343 C526.367,947.953 525.733,947.953 525.343,948.343 C524.952,948.733 524.952,949.367 525.343,949.758 L525.343,949.758 Z"
                  id="arrow-bottom"
                  sketch:type="MSShapeGroup"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
