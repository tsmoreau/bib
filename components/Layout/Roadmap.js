import "animate.css/animate.min.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function Roadmap() {
  return (
    <div className="mb-16 ">
      {/* <div className="section"></div> */}
      <Controller>
        <div className=" h-full w-full">
          <Scene duration={1500} pin={false} reverse={true} offset={0}>
            {(progress) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2600">
                <rect
                  width="1920"
                  height="2600"
                  fill="th-background"
                  fill-opacity="0.0"
                />
                <Timeline
                  progress={progress}
                  paused
                  target={
                    <polyline
                      stroke="#f9b700"
                      strokeWidth="5"
                      fill="none"
                      points="377.54 351.86 1498.93 354.27 1498.93 477.51 950.57 477.94 950.57 751.94 599.92 871.76 1258.23 871.76 950.57 986.8 950.55 1272.04 599.9 1391.86 1393.21 1391.86 950.55 1506.9 950.55 1950.53 892.68 2047.19 1008.13 2047.19 950.55 1950.53 950.49 2014.46 1008.13 2047.19"
                    />
                  }
                >
                  <Tween
                    from={{
                      strokeDasharray: 6245.26,
                      strokeDashoffset: 6245.26
                    }}
                    to={{
                      strokeDashoffset: 0
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <a href="/tokens/yggdrasil">
                      <g xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width="475.39"
                          height="123.97"
                          x="164.7"
                          y="289.44"
                          fill="#eddec3"
                          rx="10"
                        ></rect>
                        <rect
                          width="464.35"
                          height="112.22"
                          x="170.21"
                          y="295.32"
                          fill="none"
                          stroke="#000"
                          strokeMiterlimit="10"
                          rx="4"
                        ></rect>
                        <circle
                          cx="201.23"
                          cy="351.64"
                          r="24.24"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          opacity="0.31"
                        ></circle>
                        <path
                          fill="none"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M218.37 368.79L184.09 334.5"
                        ></path>
                        <path
                          fill="none"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M184.09 368.79L218.37 334.5"
                        ></path>
                        <text
                          fontFamily="FuturaPT-Medium, Futura PT"
                          fontSize="40"
                          fontWeight="300"
                          transform="translate(235.88 372.3)"
                        >
                          <tspan>Yggdrasil Token Drop</tspan>
                        </text>
                        <text
                          className="font-futurapt font-thin border"
                          fontSize="18"
                          transform="translate(235.88 332.77)"
                        >
                          JANUARY 28th 2022
                        </text>
                      </g>
                    </a>
                  }
                >
                  <Tween
                    delay=".005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  progress={progress}
                  paused
                  duration="0.01"
                  target={
                    <g>
                      <rect
                        x={706.25}
                        y={287.66}
                        width={493.82}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1188.07 289.66a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H718.25a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h469.82m0-4H718.25a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h469.82a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={713.76}
                        y={295.54}
                        width={478.79}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M744.78 327.62a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4A28.25 28.25 0 1 0 773 351.86a28.27 28.27 0 0 0-28.25-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(779.43 372.51)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Anthropos Token Drop"}
                      </text>
                      <text
                        transform="translate(779.43 332.99)"
                        style={{
                          fontSize: 18,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"FEBRUARY 14th 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1257.02}
                        y={287.44}
                        width={493.82}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1738.84 289.44a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H1269a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h469.82m0-4H1269a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h469.82a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={1264.53}
                        y={295.32}
                        width={478.79}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M1295.55 327.4a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.25 28.24 28.27 28.27 0 0 0-28.25-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1330.2 369.38)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Hymnal Collection Drop"}
                      </text>
                      <text
                        transform="translate(1330.2 332.77)"
                        style={{
                          fontSize: 18,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"MARCH 15th 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={758.43}
                        y={577.5}
                        width={386.68}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1133.11 579.5a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H770.43a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h362.68m0-4H770.43a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h362.68a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={765.95}
                        y={585.37}
                        width={371.64}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M797 617.45a24.25 24.25 0 1 1-24.25 24.25A24.25 24.25 0 0 1 797 617.45m0-4a28.25 28.25 0 1 0 28.24 28.25A28.28 28.28 0 0 0 797 613.45Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(831.61 662.35)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.03099365234375em"
                          }}
                        >
                          {"The Fool Auction"}
                        </tspan>
                      </text>
                      <text
                        transform="translate(831.61 622.82)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"APRIL FOOLS DAY 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.12"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={242.31}
                        y={807.78}
                        width={547.85}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M778.16 809.78a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H254.31a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h523.85m0-4H254.31a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h523.85a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(315.5 911.85)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"Innerspace Gallery, Los Angeles CA"}
                      </text>
                      <rect
                        x={249.83}
                        y={815.66}
                        width={532.81}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M280.85 847.74A24.25 24.25 0 1 1 256.6 872a24.24 24.24 0 0 1 24.25-24.24m0-4A28.25 28.25 0 1 0 309.09 872a28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(315.5 889.72)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Anthromancer Launch Party"}
                      </text>
                      <text
                        transform="translate(315.5 853.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"APRIL FOOLS DAY"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.2"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1091.37}
                        y={807.78}
                        width={547.85}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1627.22 809.78a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10h-523.85a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h523.85m0-4h-523.85a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h523.85a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={1098.89}
                        y={815.66}
                        width={532.81}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M1129.91 847.74a24.25 24.25 0 1 1-24.25 24.26 24.24 24.24 0 0 1 24.25-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1164.56 889.72)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Anthromancer Launch Party"}
                      </text>
                      <text
                        transform="translate(1164.56 853.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        APRIL 3rd 2022
                      </text>
                      <text
                        transform="translate(1164.56 911.89)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        (POTENTIALLY) The Post Commons in Alton, MO
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.3"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={694.76}
                        y={1033.96}
                        width={530.48}
                        height={175.43}
                        rx={12}
                      />
                      <path
                        d="M1213.24 1036a10 10 0 0 1 10 10v151.42a10 10 0 0 1-10 10H706.76a10 10 0 0 1-10-10V1046a10 10 0 0 1 10-10h506.48m0-4H706.76a14 14 0 0 0-14 14v151.42a14 14 0 0 0 14 14h506.48a14 14 0 0 0 14-14V1046a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={702.28}
                        y={1041.83}
                        width={515.44}
                        height={159.67}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M733.3 1097.43a24.25 24.25 0 1 1-24.25 24.24 24.24 24.24 0 0 1 24.25-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(767.95 1102.93)"
                        style={{
                          fontSize: 24,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        Anthromancer
                        <tspan
                          style={{
                            fontSize: 40
                          }}
                        >
                          <tspan x={0} y={34}>
                            {"Marketing Push"}
                          </tspan>

                          <tspan x={0} y={74}>
                            {"+Community Expansion"}
                          </tspan>
                        </tspan>
                      </text>

                      <text
                        transform="translate(767.95 1075.07)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"SPRING - SUMMER 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.4"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>
              </svg>
            )}
          </Scene>
        </div>
      </Controller>
      <div className="section" />
    </div>
  );
}
