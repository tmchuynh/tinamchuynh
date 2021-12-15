const { useState } = React;
const rootElement = document.getElementById("root");

const Flight = [{
        src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
        style: {
            height: "51px",
            margin: "22px 12px",
        },

        label: "rgb(13, 28, 83)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
        style: {
            height: "26px",
            margin: "34px 16px",
        },

        label: "rgb(90, 5, 49)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
        style: {
            height: "23px",
            margin: "41px 12px",
        },

        label: "rgb(230, 26, 56)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
        style: {
            height: "46px",
            margin: "22px 15px",
        },

        label: "rgb(252, 178, 50)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2018/12/Lufthansa-Logo.jpg",
        style: {
            height: "51px",
            margin: "22px 12px",
        },

        label: "rgb(13, 28, 83)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-qatar-e1424574584611.png",
        style: {
            height: "26px",
            margin: "34px 16px",
        },

        label: "rgb(90, 5, 49)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2015/02/airline-logos-swiss.png",
        style: {
            height: "23px",
            margin: "41px 12px",
        },

        label: "rgb(230, 26, 56)",
    },

    {
        src: "https://beebom.com/wp-content/uploads/2018/12/Singapore-Airlines-logo.jpg",
        style: {
            height: "46px",
            margin: "22px 15px",
        },

        label: "rgb(252, 178, 50)",
    },
];

const Cell = (props) => {
    const { index } = props;
    const [active, handleActive] = useState(false);

    return /*#__PURE__*/ React.createElement(
        "div", {
            id: "cardContainer",
            style: {
                height: active ? `300px` : `100px`,
                transition: "0.9s",
            },

            onClick: () => {
                handleActive(!active);
            },
        } /*#__PURE__*/ ,

        React.createElement(
            "div", { id: "firstDisplay" } /*#__PURE__*/ ,
            React.createElement(
                "div", { id: "flightDetail" } /*#__PURE__*/ ,
                React.createElement(
                    "div", {
                        id: "detailLabel",
                        style: { fontWeight: "bold", color: Flight[index].label },
                    },
                    "From"
                ),
                "BLR" /*#__PURE__*/ ,

                React.createElement("div", { id: "detailLabel" }, "Kempegowda International")
            ) /*#__PURE__*/ ,

            React.createElement(
                "div", {
                    id: "flightDetail",
                    style: {
                        marginTop: "15px",
                    },
                } /*#__PURE__*/ ,

                React.createElement(
                    "div", { id: "animContainer" } /*#__PURE__*/ ,
                    React.createElement(
                        "div", { id: "anim" } /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" }) /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" }) /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" })
                    )
                ) /*#__PURE__*/ ,

                React.createElement(
                    "div", { id: "animContainer", style: { left: "62px" } } /*#__PURE__*/ ,
                    React.createElement(
                        "div", { id: "anim" } /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" }) /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" }) /*#__PURE__*/ ,
                        React.createElement("div", { id: "circle" })
                    )
                ) /*#__PURE__*/ ,

                React.createElement("img", {
                    style: { width: "30px" },
                    src: "https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true",
                })
            ) /*#__PURE__*/ ,

            React.createElement(
                "div", { id: "flightDetail" } /*#__PURE__*/ ,
                React.createElement(
                    "div", {
                        id: "detailLabel",
                        style: { fontWeight: "bold", color: Flight[index].label },
                    },
                    "To"
                ),
                "DEL" /*#__PURE__*/ ,

                React.createElement("div", { id: "detailLabel" }, "Indira Gandhi International")
            )
        ) /*#__PURE__*/ ,

        React.createElement(
            "div", {
                id: "first",
                style: {
                    transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`,
                    transitionDelay: active ? "0s" : "0.3s",
                },
            } /*#__PURE__*/ ,

            React.createElement(
                "div", { id: "firstTop" } /*#__PURE__*/ ,
                React.createElement("img", { style: Flight[index].style, src: Flight[index].src }) /*#__PURE__*/ ,
                React.createElement(
                    "div", { id: "timecontainer" } /*#__PURE__*/ ,
                    React.createElement(
                        "div", { id: "detailDate" },
                        "Bengaluru" /*#__PURE__*/ ,

                        React.createElement("div", { id: "detailTime" }, "6:20"),
                        "June 12"
                    ) /*#__PURE__*/ ,

                    React.createElement("img", {
                        style: {
                            width: "30px",
                            height: "26px",
                            marginTop: "22px",
                            marginLeft: "16px",
                            marginRight: "16px",
                        },

                        src: "https://github.com/pizza3/asset/blob/master/airplane2.png?raw=true",
                    }) /*#__PURE__*/ ,

                    React.createElement(
                        "div", { id: "detailDate" },
                        "New Delhi" /*#__PURE__*/ ,

                        React.createElement("div", { id: "detailTime" }, "8:45"),
                        "June 12"
                    )
                )
            ) /*#__PURE__*/ ,

            React.createElement(
                "div", { id: "firstBehind" } /*#__PURE__*/ ,
                React.createElement(
                    "div", { id: "firstBehindDisplay" } /*#__PURE__*/ ,
                    React.createElement(
                        "div", { id: "firstBehindRow" } /*#__PURE__*/ ,
                        React.createElement(
                            "div", { id: "detail" },
                            "6:20 - 8:45" /*#__PURE__*/ ,

                            React.createElement("div", { id: "detailLabel" }, "Flight Time")
                        ) /*#__PURE__*/ ,

                        React.createElement(
                            "div", { id: "detail" },
                            "No" /*#__PURE__*/ ,

                            React.createElement("div", { id: "detailLabel" }, "Transfer")
                        )
                    ) /*#__PURE__*/ ,

                    React.createElement(
                        "div", { id: "firstBehindRow" } /*#__PURE__*/ ,
                        React.createElement(
                            "div", { id: "detail" },
                            "2h 25 min" /*#__PURE__*/ ,

                            React.createElement("div", { id: "detailLabel" }, "Duration")
                        ) /*#__PURE__*/ ,

                        React.createElement("div", { id: "detail" }, "8" /*#__PURE__*/ , React.createElement("div", { id: "detailLabel" }, "Gate"))
                    ) /*#__PURE__*/ ,

                    React.createElement(
                        "div", { id: "firstBehindRow" } /*#__PURE__*/ ,
                        React.createElement(
                            "div", { id: "detail" },
                            "5:35" /*#__PURE__*/ ,

                            React.createElement("div", { id: "detailLabel" }, "Boarding")
                        ) /*#__PURE__*/ ,

                        React.createElement(
                            "div", { id: "detail" },
                            "20A" /*#__PURE__*/ ,

                            React.createElement("div", { id: "detailLabel" }, "Seat")
                        )
                    )
                ) /*#__PURE__*/ ,

                React.createElement(
                    "div", {
                        id: "second",
                        style: {
                            transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`,
                            transitionDelay: active ? "0.2s" : "0.2s",
                        },
                    } /*#__PURE__*/ ,

                    React.createElement("div", { id: "secondTop" }) /*#__PURE__*/ ,
                    React.createElement(
                        "div", { id: "secondBehind" } /*#__PURE__*/ ,
                        React.createElement(
                            "div", { id: "secondBehindDisplay" } /*#__PURE__*/ ,
                            React.createElement(
                                "div", { id: "price" },
                                "$100" /*#__PURE__*/ ,

                                React.createElement("div", { id: "priceLabel" }, "Price")
                            ) /*#__PURE__*/ ,

                            React.createElement(
                                "div", { id: "price" },
                                "Economy" /*#__PURE__*/ ,

                                React.createElement("div", { id: "priceLabel" }, "Class")
                            ),

                            React.createElement("img", {
                                id: "barCode",
                                src: "https://github.com/pizza3/asset/blob/master/barcode.png?raw=true",
                            })
                        ),

                        React.createElement(
                            "div", {
                                id: "third",
                                style: {
                                    transform: active ? `rotate3d(1, 0, 0, -180deg)` : `rotate3d(1, 0, 0, 0deg)`,
                                    transitionDelay: active ? "0.4s" : "0s",
                                },
                            },

                            React.createElement("div", { id: "thirdTop" }),
                            React.createElement(
                                "div", { id: "secondBehindBottom" },
                                React.createElement(
                                    "button", {
                                        id: "button",
                                        style: {
                                            color: Flight[index].label,
                                            border: `1px solid ${Flight[index].label}`,
                                        },
                                    },
                                    "Pay"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

const Header = React.createElement(
    "div",
    null,
    React.createElement(
        "svg", {
            id: "back",
            xmlns: "http://www.w3.org/2000/svg",
            width: "512",
            height: "512",
            viewBox: "0 0 512 512",
        },

        React.createElement("polyline", {
            points: "244 400 100 256 244 112",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
            },
        }),

        React.createElement("line", {
            x1: "120",
            y1: "256",
            x2: "412",
            y2: "256",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
            },
        })
    ),

    React.createElement("div", { id: "headerText" }, "Select Flight"),
    React.createElement(
        "div", { id: "tripDetail" },
        "Your Trip",

        React.createElement("div", { id: "tripDest" }, "BLR - DEL", React.createElement("div", { id: "oneWay" }, "One Way"), React.createElement("div", null)),
        "12th June, 2020"
    ),

    React.createElement(
        "svg", {
            id: "settings",
            xmlns: "http://www.w3.org/2000/svg",
            width: "512",
            height: "512",
            viewBox: "0 0 512 512",
        },

        React.createElement("line", {
            x1: "368",
            y1: "128",
            x2: "448",
            y2: "128",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("line", {
            x1: "64",
            y1: "128",
            x2: "304",
            y2: "128",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("line", {
            x1: "368",
            y1: "384",
            x2: "448",
            y2: "384",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("line", {
            x1: "64",
            y1: "384",
            x2: "304",
            y2: "384",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("line", {
            x1: "208",
            y1: "256",
            x2: "448",
            y2: "256",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("line", {
            x1: "64",
            y1: "256",
            x2: "144",
            y2: "256",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("circle", {
            cx: "336",
            cy: "128",
            r: "32",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("circle", {
            cx: "176",
            cy: "256",
            r: "32",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        }),

        React.createElement("circle", {
            cx: "336",
            cy: "384",
            r: "32",
            style: {
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
            },
        })
    )
);

const DataArr = Array(8).fill(0).map(Number.call, Number);
const App = () => {
    return React.createElement(
        "div", { className: "App" },
        Header,
        DataArr.map((val, i /*#__PURE__*/ ) => React.createElement(Cell, { key: i, index: i }))
    );
};

ReactDOM.render(React.createElement("div", null, React.createElement(App, null)), rootElement);