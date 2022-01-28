import "animate.css/animate.min.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function Roadmap() {
  return (
    <div className="">
      {/* <div className="section"></div> */}
      <Controller>
        <div className=" h-full w-full">
          <Scene
            duration={1400}
            indicators
            pin={false}
            reverse={true}
            offset={50}
          >
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
                      strokeWidth="8"
                      fill="none"
                      points="377.54 351.86 1498.93 354.27 1498.93 477.51 950.57 477.94 950.57 751.94 599.92 871.76 1258.23 871.76 950.57 986.8 950.55 1272.04 599.9 1391.86 1393.21 1391.86 950.55 1506.9 950.55 1950.53"
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
                  progress={progress}
                  paused
                  target={
                    <polyline
                      stroke="#f9b700"
                      strokeWidth="8"
                      fill="none"
                      points="950.55 1948.53 927.23 1990.23 974.76 1990.59 950.55 1948.53 950.57 1976.14 974.76 1990.59"
                    />
                  }
                >
                  <Tween
                    delay="2.65"
                    from={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000
                    }}
                    to={{
                      strokeDashoffset: 0
                    }}
                  />
                </Timeline>

                <Timeline
                  progress={progress}
                  paused
                  target={
                    <line
                      x1="927.23"
                      y1="1990.23"
                      x2="950.57"
                      y2="1976.14"
                      stroke="#f9b700"
                      strokeWidth="8"
                      fill="none"
                    />
                  }
                >
                  <Tween
                    delay="2.6"
                    animation-direction="reverse"
                    reverse="true"
                    from={{
                      strokeDasharray: 100,
                      strokeDashoffset: 100
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
                    <a href="/tokens/anthropos">
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
                    </a>
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
                    <a href="/tokens/hymns">
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
                    </a>
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
                          {"The Fool Auction!"}
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
                    delay="0.47"
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
                        x={409.66}
                        y={1328.67}
                        width={380.51}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M778.16 1330.67a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10h-356.5a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h356.5m0-4h-356.5a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h356.5a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={417.17}
                        y={1336.55}
                        width={365.47}
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
                        d="M448.19 1368.41a24.25 24.25 0 1 1-24.19 24.25 24.25 24.25 0 0 1 24.24-24.25m0-4a28.25 28.25 0 1 0 28.25 28.25 28.28 28.28 0 0 0-28.25-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(482.84 1410.39)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"MDX Beta Testing"}
                      </text>
                      <text
                        transform="translate(482.84 1373.78)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.032989501953125em"
                          }}
                        >
                          {"FALL 2022"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.58"
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
                        y={1304.94}
                        width={402.16}
                        height={175.43}
                        rx={12}
                      />
                      <path
                        d="M1481.53 1306.94a10 10 0 0 1 10 10v151.43a10 10 0 0 1-10 10h-378.16a10 10 0 0 1-10-10v-151.43a10 10 0 0 1 10-10h378.16m0-4h-378.16a14 14 0 0 0-14 14v151.43a14 14 0 0 0 14 14h378.16a14 14 0 0 0 14-14v-151.43a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={1098.89}
                        y={1312.82}
                        width={387.13}
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
                        d="M1129.91 1368.41a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1164.56 1375.97)"
                        style={{
                          fontSize: 24,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Anth"}
                        <tspan
                          x={50.74}
                          y={0}
                          style={{
                            letterSpacing: "-.014994303385416666em"
                          }}
                        >
                          {"r"}
                        </tspan>
                        <tspan x={59.59} y={0}>
                          {"omancer"}
                        </tspan>
                        <tspan
                          style={{
                            fontSize: 40
                          }}
                        >
                          <tspan x={0} y={34}>
                            {"Game "}
                          </tspan>
                          <tspan
                            x={119.52}
                            y={34}
                            style={{
                              letterSpacing: "-.00999755859375em"
                            }}
                          >
                            {"E"}
                          </tspan>
                          <tspan x={139.2} y={34}>
                            {"xpa"}
                          </tspan>
                          <tspan
                            x={211.84}
                            y={34}
                            style={{
                              letterSpacing: "-.010986328125em"
                            }}
                          >
                            {"n"}
                          </tspan>
                          <tspan x={234.08} y={34}>
                            {"sion"}
                          </tspan>
                          <tspan x={0} y={74}>
                            {"THE "}
                          </tspan>
                          <tspan
                            x={76.6}
                            y={74}
                            style={{
                              letterSpacing: "-.02099609375em"
                            }}
                          >
                            {"L"}
                          </tspan>
                          <tspan x={93.68} y={74}>
                            {"ORDS DICE"}
                          </tspan>
                        </tspan>
                      </text>
                      <text
                        transform="translate(1164.56 1348.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"WINTER "}
                        <tspan
                          x={57.81}
                          y={0}
                          style={{
                            letterSpacing: "-.024993896484375em"
                          }}
                        >
                          {"2"}
                        </tspan>
                        <tspan x={66.49} y={0}>
                          {"0"}
                        </tspan>
                        <tspan
                          x={75.58}
                          y={0}
                          style={{
                            letterSpacing: "-.037994384765625em"
                          }}
                        >
                          {"2"}
                        </tspan>
                        <tspan x={84.06} y={0}>
                          {"2"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.87"
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
                        x={721.11}
                        y={1576.42}
                        width={477.78}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1186.89 1578.42a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H733.11a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h453.78m0-4H733.11a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h453.78a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={728.63}
                        y={1584.3}
                        width={462.74}
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
                        d="M759.65 1616.16a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(794.29 1658.14)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"MDX Formally Launched"}
                      </text>
                      <text
                        transform="translate(794.29 1621.53)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"EARLY 2023"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="1.75"
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
                        x={759.66}
                        y={1766.85}
                        width={400.67}
                        height={131.41}
                        rx={12}
                      />
                      <path
                        d="M1148.34 1768.85a10 10 0 0 1 10 10v107.41a10 10 0 0 1-10 10H771.66a10 10 0 0 1-10-10v-107.41a10 10 0 0 1 10-10h376.68m0-4H771.66a14 14 0 0 0-14 14v107.41a14 14 0 0 0 14 14h376.68a14 14 0 0 0 14-14v-107.41a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={767.18}
                        y={1774.73}
                        width={385.64}
                        height={115.65}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M798.2 1809.54a24.25 24.25 0 1 1-24.2 24.25 24.25 24.25 0 0 1 24.24-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(832.85 1845.89)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.039990234375em"
                          }}
                        >
                          {"Web3 Tea House"}
                        </tspan>

                        <tspan
                          style={{
                            fontSize: 24
                          }}
                        >
                          <tspan x={0} y={24}>
                            {"Mercenarium Arcade"}
                          </tspan>
                        </tspan>
                      </text>
                      <text
                        transform="translate(832.85 1806.36)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.024993896484375em"
                          }}
                        >
                          {"2023"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="2.2"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={413.55}
                        y={2097.57}
                        width={257.1}
                        height={107.56}
                        rx={11.14}
                      />
                      <path
                        d="M659.51 2099.57a9.14 9.14 0 0 1 9.14 9.14V2194a9.14 9.14 0 0 1-9.14 9.14H424.69a9.14 9.14 0 0 1-9.14-9.14v-85.27a9.14 9.14 0 0 1 9.14-9.14h234.82m0-4H424.69a13.16 13.16 0 0 0-13.14 13.14V2194a13.16 13.16 0 0 0 13.14 13.14h234.82a13.15 13.15 0 0 0 13.14-13.14v-85.27a13.15 13.15 0 0 0-13.14-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={420.59}
                        y={2103.58}
                        width={243.03}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <text
                        transform="translate(460.59 2160.86)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Solarium"}
                      </text>
                      <path d="M542.13 2227.58a26.25 26.25 0 1 1 26.25-26.25 26.28 26.28 0 0 1-26.25 26.25Z" />
                      <path
                        d="M542.13 2177.09a24.25 24.25 0 1 1-24.24 24.24 24.24 24.24 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.27 28.27 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={812.15}
                        y={2102.69}
                        width={276.67}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />

                      <path
                        d="M1084.72,2098.67a9.14,9.14,0,0,1,9.13,9.14v85.28a9.14,9.14,0,0,1-9.13,9.14H816.26a9.14,9.14,0,0,1-9.14-9.14v-85.28a9.14,9.14,0,0,1,9.14-9.14h268.46m0-4H816.26a13.16,13.16,0,0,0-13.14,13.14v85.28a13.16,13.16,0,0,0,13.14,13.14h268.46a13.15,13.15,0,0,0,13.13-13.14v-85.28a13.15,13.15,0,0,0-13.13-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(864.21 2160.09)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Holodeck"}
                      </text>
                      <path d="M950.49 2228.47a26.25 26.25 0 1 1 26.24-26.24 26.27 26.27 0 0 1-26.24 26.24Z" />
                      <path
                        d="M950.49 2178a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1237.36}
                        y={2103.58}
                        width={243.03}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M1476.28,2099.57a9.14,9.14,0,0,1,9.14,9.14V2194a9.14,9.14,0,0,1-9.14,9.14H1241.46a9.14,9.14,0,0,1-9.14-9.14v-85.27a9.14,9.14,0,0,1,9.14-9.14h234.82m0-4H1241.46a13.16,13.16,0,0,0-13.14,13.14V2194a13.16,13.16,0,0,0,13.14,13.14h234.82a13.15,13.15,0,0,0,13.14-13.14v-85.27a13.15,13.15,0,0,0-13.14-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1289.74 2160.86)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.03099365234375em"
                          }}
                        >
                          {"T"}
                        </tspan>
                        <tspan
                          x={17.16}
                          y={0}
                          style={{
                            letterSpacing: "-.02099609375em"
                          }}
                        >
                          {"h"}
                        </tspan>
                        <tspan x={39.16} y={0}>
                          {"e Gi"}
                        </tspan>
                        <tspan
                          x={112.08}
                          y={0}
                          style={{
                            letterSpacing: ".03099365234375em"
                          }}
                        >
                          {"f"}
                        </tspan>
                        <tspan x={126.36} y={0}>
                          {"t"}
                        </tspan>
                      </text>
                      <path d="M1358.9 2227.58a26.25 26.25 0 1 1 26.25-26.25 26.28 26.28 0 0 1-26.25 26.25Z" />
                      <path
                        d="M1358.9 2177.09a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.25 28.24 28.27 28.27 0 0 0-28.25-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="5.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <text
                        xmlns="http://www.w3.org/2000/svg"
                        transform="translate(825.72 2059.6)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        MOON SHOTS
                      </text>

                      <text
                        xmlns="http://www.w3.org/2000/svg"
                        transform="translate(890.02 2020.07)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",

                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan>2023 AND BEYOND</tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="3.5"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <path
                  style={{
                    fill: "none",
                    stroke: "#f9b700",
                    strokeMiterlimit: 10,
                    strokeWidth: 8
                  }}
                  d="M334.24 2078.59v158.07M1555.14 2078.59v158.07M334.24 2127.61a42.29 42.29 0 1 0 0 62.86"
                />
              </svg>
            )}
          </Scene>
        </div>
      </Controller>
      <div className="section" />
    </div>
  );
}
