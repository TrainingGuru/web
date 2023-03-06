import React, { Component } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons/faChevronUp";


import {faFire} from "@fortawesome/free-solid-svg-icons/faFire";
import {faDroplet} from "@fortawesome/free-solid-svg-icons/faDroplet";
import {faStairs} from "@fortawesome/free-solid-svg-icons/faStairs";
import {faBolt} from "@fortawesome/free-solid-svg-icons/faBolt";
import {faRoad} from "@fortawesome/free-solid-svg-icons/faRoad";

import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";

import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

import barChart from "./barChart.png";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useRef } from 'react';

import Nav from './Nav';
import moment from 'moment';

const styles = {
    trainerClients: {
        height: "95vh",
        overflow: "hidden",
        container: {
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "0.5fr 0.7fr 0.3fr 0.2fr 0.8fr",
            width: "95%",
            margin: "auto",
            overflow: "hidden",
            // height: "100%",
            height: "100%", 
            // margin: "1% 5% 5% 0",
            // float: "left",
            headers: {
                textAlign: "center",
                width: "60%",
                margin: "1% auto 0.5% auto",
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(255, 255, 255)",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "10px",
                letterSpacing: "1.3px",
                textTransform: "Uppercase",
                lineHeight: "18px",
                border: "0px",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 3px 1px",
                padding: "1%"
            },
            sections: {
                background: "rgb(245, 245, 245)",
                border: "1px solid rgb(236, 239, 241)",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 2px 1px"
            },
            fitbitIcons: {
                height: "100%",
                gridColumn: "span 5",
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                icon: {
                    height: "4em",
                    width: "100%",
                    calBurnt: {
                        color: "rgb(196, 97, 3)"
                    },
                    waterIntake: {
                        color: "rgb(2, 148, 186)"
                    },
                    floorsClimbed: {
                        color: "rgb(141, 113, 1)"
                    },
                    activeMins: {
                        color: "rgb(174, 234, 95)"
                    },
                    distTravelled: {
                        color: "rgb(201, 99, 248)"
                    }
                }
            },
            steps: {
                height: "100%",
                overflow: "hidden",
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    textAlign: "center",
                    width: "80%",
                    height: "80%",
                    margin: "auto",
                    imgContainer: {
                        height: "100%",
                        width: "100%",
                        img: {
                            height: "100%",
                            width: "100%"
                        }
                    },
                    text: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        label: {},
                        data: {},
                        editIcon: {}
                    }
                    
                }
            },
            intake: {
                gridRow: "span 2",
                gridColumn: "span 2",
                height: "100%",
                overflow: "hidden",
                heading: {
                    textAlign: "center",
                    fontSize: "2em",
                    borderBottom: "1px solid black",
                    // marginBottom: "2%"
                },
                table: {
                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "1.25fr 1.25fr 0.5fr",
                    marginLeft: "2%"
                }
            },
            progressChart: {
                gridRow: "span 3",
                gridColumn: "span 2"
            },
            goals: {
                gridRow: "span 2",
                height: "100%",
                overflow: "hidden",
                entry: {
                    textAlign: "center",
                    margin: "5%",
                    fontSize: "20px"
                }
            },
            calorieSummary: {
                gridColumn: "span 2",
                display: "grid",
                // gap: "1rem",
                gridTemplateColumns: "repeat(7, 1fr)",
                height: "100%",
                // overflow: "hidden",
                icon: {
                    check: {
                        color: "green"
                    },
                    xmark: {
                        color: "red"
                    },
                    dash: {
                        color: "grey"
                    }
                }
            },
            catchUpNotes: {
                textBox: {
                    width: "100%",
                    height: "75%"
                }
            },
            schedule: {
                gridColumn: "span 3",
                height: "100%",
                overflow: "hidden",
                content: {
                    // display: "flex",
                    // justifyContent: "space-evenly",
                    // textAlign: "center",
                    // width: "300%",
                    // height: "40%",
                    // margin: "5%, auto",
                    carousel: {
                        position: "relative",
                        height: "50%",
                        width: "80%",
                        margin: "0 auto",
                        button: {
                            left: {
                                background: "transparent",
                                border: "0",
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                left: "-25px"
                            },
                            right: {
                                background: "transparent",
                                border: "0",
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                right: "-25px"
                            }
                        },
                        trackContainer: {
                            background: "lightgreen",
                            // padding: "10px",
                            height: "80%",
                            position: "relative",
                            track: {
                                padding: "0",
                                margin: "0",
                                slide: {
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    textAlign: "center",
                                    position: "absolute",
                                    top: "0",
                                    bottom: "0",
                                    width: "100%",
                                    content: {
                                        height: "80%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-evenly"
                                    }
                                }
                            }
                        },
                        nav: {
                            // background: "red",
                            display: "flex",
                            justifyContent: "center",
                            padding: "0",
                            margin: "0 10px",
                            indicator: {
                                border: "0",
                                borderRadius: "50%",
                                width: "15px",
                                height: "15px",
                                background: "rgba(0, 0, 0, 0.3)",
                                margin: "0 12px",
                                currentSlide: {
                                    background: "rgba(0, 0, 0, 0.75)"
                                }
                            }
                        }
                    },
                    popup: {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: "1",
                        background: "rgba(0, 0, 0, 0.2)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    hidden: {
                        display: "none"
                    }
                }
            },
            personalBests: {
                height: "100%",
                overflow: "hidden",
                content: {
                    entry: {
                        margin: "7.5%",
                        data: {
                            display: "flex",
                            margin: "5%",
                            justifyContent: "space-evenly",
                            icon: {
                                color: "green"
                            },
                            previous: {
                                fontWeight: "700"
                            },
                            new: {
                                fontWeight: "700"
                            }
                        }
                    }
                }
            }
        }

    },
    trainerClientsMobile: {
        // height: "95vh",
        // overflow: "hidden",
        container: {
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "1fr",
            // gridTemplateRows: "0.5fr 0.7fr 0.3fr 0.2fr 0.8fr",
            width: "95%",
            margin: "auto",
            overflow: "hidden",
            // height: "100%",
            height: "100%", 
            // margin: "1% 5% 5% 0",
            // float: "left",
            headers: {
                textAlign: "center",
                width: "60%",
                margin: "1% auto 0.5% auto",
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(255, 255, 255)",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "10px",
                letterSpacing: "1.3px",
                textTransform: "Uppercase",
                lineHeight: "18px",
                border: "0px",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 3px 1px",
                padding: "1%"
            },
            sections: {
                background: "rgb(245, 245, 245)",
                border: "1px solid rgb(236, 239, 241)",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 2px 1px"
            },
            fitbitIcons: {
                height: "100%",
                // gridColumn: "span 5",
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                icon: {
                    height: "4em",
                    width: "100%",
                    calBurnt: {
                        color: "rgb(196, 97, 3)"
                    },
                    waterIntake: {
                        color: "rgb(2, 148, 186)"
                    },
                    floorsClimbed: {
                        color: "rgb(141, 113, 1)"
                    },
                    activeMins: {
                        color: "rgb(174, 234, 95)"
                    },
                    distTravelled: {
                        color: "rgb(201, 99, 248)"
                    }
                }
            },
            steps: {
                height: "100%",
                overflow: "hidden",
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    textAlign: "center",
                    width: "80%",
                    height: "80%",
                    margin: "auto",
                    imgContainer: {
                        height: "100%",
                        width: "100%",
                        img: {
                            height: "100%",
                            width: "100%"
                        }
                    },
                    text: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        label: {},
                        data: {},
                        editIcon: {}
                    }
                    
                }
            },
            intake: {
                // gridRow: "span 2",
                // gridColumn: "span 2",
                height: "100%",
                overflow: "hidden",
                heading: {
                    textAlign: "center",
                    fontSize: "2em",
                    borderBottom: "1px solid black",
                    // marginBottom: "2%"
                },
                table: {
                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "1.25fr 1.25fr 0.5fr",
                    marginLeft: "2%"
                }
            },
            progressChart: {
                // gridRow: "span 3",
                // gridColumn: "span 2"
            },
            goals: {
                // gridRow: "span 2",
                height: "100%",
                overflow: "hidden",
                entry: {
                    textAlign: "center",
                    margin: "5%",
                    fontSize: "20px"
                }
            },
            calorieSummary: {
                // gridColumn: "span 2",
                display: "grid",
                // gap: "1rem",
                gridTemplateColumns: "repeat(7, 1fr)",
                height: "100%",
                // overflow: "hidden",
                icon: {
                    check: {
                        color: "green"
                    },
                    xmark: {
                        color: "red"
                    },
                    dash: {
                        color: "grey"
                    }
                }
            },
            catchUpNotes: {
                textBox: {
                    width: "100%",
                    height: "75%"
                }
            },
            schedule: {
                // gridColumn: "span 3",
                height: "100%",
                overflow: "hidden",
                content: {
                    // display: "flex",
                    // justifyContent: "space-evenly",
                    // textAlign: "center",
                    // width: "300%",
                    // height: "40%",
                    // margin: "5%, auto",
                    carousel: {
                        position: "relative",
                        height: "50%",
                        width: "80%",
                        margin: "0 auto",
                        button: {
                            left: {
                                background: "transparent",
                                border: "0",
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                left: "-25px"
                            },
                            right: {
                                background: "transparent",
                                border: "0",
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                right: "-25px"
                            }
                        },
                        trackContainer: {
                            background: "lightgreen",
                            // padding: "10px",
                            height: "80%",
                            position: "relative",
                            track: {
                                padding: "0",
                                margin: "0",
                                slide: {
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    textAlign: "center",
                                    position: "absolute",
                                    top: "0",
                                    bottom: "0",
                                    width: "100%",
                                    content: {
                                        height: "80%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-evenly"
                                    }
                                }
                            }
                        },
                        nav: {
                            // background: "red",
                            display: "flex",
                            justifyContent: "center",
                            padding: "0",
                            margin: "0 10px",
                            indicator: {
                                border: "0",
                                borderRadius: "50%",
                                width: "15px",
                                height: "15px",
                                background: "rgba(0, 0, 0, 0.3)",
                                margin: "0 12px",
                                currentSlide: {
                                    background: "rgba(0, 0, 0, 0.75)"
                                }
                            }
                        }
                    },
                    popup: {
                        position: "absolute",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: "1",
                        background: "rgba(0, 0, 0, 0.2)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    hidden: {
                        display: "none"
                    }
                }
            },
            personalBests: {
                height: "100%",
                overflow: "hidden",
                content: {
                    entry: {
                        margin: "7.5%",
                        data: {
                            display: "flex",
                            margin: "5%",
                            justifyContent: "space-evenly",
                            icon: {
                                color: "green"
                            },
                            previous: {
                                fontWeight: "700"
                            },
                            new: {
                                fontWeight: "700"
                            }
                        }
                    }
                }
            }
        }
    }
}
// var called = false;
// function getFitBitData() {
//     if(!called) {
//         var myHeaders = new Headers();
//         myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5NEwiLCJzdWIiOiI5VDNRVkQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBycHJvIHJudXQgcnNsZSByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc1NzIzNDgzLCJpYXQiOjE2NzU2OTQ2ODN9.mDxpRhMeapdCvCDaFKFVNNOqZXR6tpmnd26xz89HG2U");
//         myHeaders.append("Cookie", "JSESSIONID=24FC41C2A5AFA76FFD3B2F8450EDCFD2.fitbit1; fct=6729e7eb6dd2457991ac1358ea327403");

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };

//         fetch("https://api.fitbit.com/1/user/-/activities/steps/date/2023-01-27/2023-02-03.json", requestOptions)
//             .then(response => response.text())
//             // .then(result => console.log(result))
//             .catch(error => console.log('error', error));

//         called = true;
//     }
    
// }



function TrainerClients() {
    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    // ---------------------------- Use THIS!!!!!!!!!!!!!!!!! ---------------------------
    // on refresh
    // the initialising value on line 352 doesn't allow the resize function to overrite it therefore only works on refresh

    const [width, setWidth] = useState(windowSize.current[0]);

    useEffect(() => {
        function handleResize() {
            setWidth(windowSize.current[0])
            // console.log("width: " + width)
        }
        
        window.addEventListener('resize', handleResize);
    });

    // in html
    // { width > 700px ?}

    // console.log("Width: " + windowSize.current[0] + ", Height: " + windowSize.current[1]);

    // console.log("Width: " + width);

    // const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(null);

    // useEffect(() => {
    //     setIsDesktopOrLaptop({
    //         useMediaQuery({
    //                 minWidth: 1224
    //             });
    //         })
    // }, []);


    // ------------------------ FitBit Code -------------------------------------------------------
    // const clientId = '2395P3';
    // const clientSecret = '9a7b2ea21730dc04d115cb52c799ecf1';
    // const redirectUri = 'http://localhost:3000/fitbit-callback';
    // const authorizationUri = 'https://www.fitbit.com/oauth2/authorize';
    // const tokenUri = 'https://api.fitbit.com/oauth2/token';
    // const authorizationCode = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5NEwiLCJzdWIiOiI5VDNRVkQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBybnV0IHJwcm8gcnNsZSByYWN0IHJyZXMgcmxvYyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc3NjIyMTM0LCJpYXQiOjE2Nzc1OTMzMzR9.YXBePKdARU9RTgZcLPl17cJ4tGk2PUhTbu6a1Hw75NY";
    // const getAccessToken = async (authorizationCode) => {
    //     // console.log("authCode: " + authorizationCode);
    //     const fullCode = authorizationCode.split('#')[0];
    //     const response = await  fetch("https://api.fitbit.com/oauth2/token", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         body:
    //             "client_id=2395P3" +
    //             "&grant_type=authorization_code" +
    //             "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffitbit-callback" +
    //             "&code="+fullCode +
    //             "&code_verifier=3e6g5o593s1u506n314c6j710x5d726r5p3k730x6r4i1j1t521h042g5y4r4u3z6c4w3q6v2f4z2k5m4k586y140r2s48362i4w5i0k5j5k2m670c4n0c1t3v1o4u25"
    //     })

    //     if(response.status === 200){
    //         const json =  await response.json();
    //         console.log(json)
    //         return json["access_token"]
    //     }

    // };

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic MjM5OTRMOjhjNGJiZjE1M2M4OTRiMjIyM2ZmODBmMGRiZmI3YmEy");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "JSESSIONID=0E7DFB9921C5414C1BFE58216ED818AD.fitbit1; fct=9db8e060df1748829e7113b43979bf81");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    
    // const [fitbitResult, setResult] = useState(null);

    // const [accessToken, setAccessToken] = useState(null);
    // const [refreshToken, setRefreshToken] = useState("1916ed6ab1c9f415ef76ecc1c8ef5cf44563416b6f510f0e7fc3b56b0a650126");

    // fetch(`https://api.fitbit.com/oauth2/token?grant_type=refresh_token&refresh_token=`+refreshToken, requestOptions)
    //     .then(response => response.json())
    //     // .then(result => console.log(result))
    //     .then(result => {
    //         setAccessToken(result["access_token"]);
    //         setRefreshToken(result["refresh_token"]);
    //     })
    //     // .then(result => )
    //     .catch(error => console.log('error', error));

    let accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5NEwiLCJzdWIiOiI5VDNRVkQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBybnV0IHJwcm8gcnNsZSByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc4MTMzNzg2LCJpYXQiOjE2NzgxMDQ5ODZ9.jfuJ552hipqZMBRt7z7u6GmSDdBU2QMHvLAtAqnXANw";

    // console.log("Access: " + accessToken);
    // console.log("Refresh: " + refreshToken);

    // workout dates for last 7 days 
    // function Last7Days () {
    //     var result = [];
    //     for (var i=0; i<7; i++) {
    //         var d = new Date();
    //         d.setDate(d.getDate() - i);
    //         result.push( d ); //.formatDate("YYYY-MM-DD")
    //     }

    //     // console.log(result)

    //     return(result.join(','));
    // }

    // var result = Last7Days();

    var sevenDaysAgo = moment().subtract(7, 'days').format();
    sevenDaysAgo = sevenDaysAgo.substring(0, 10);
    var today1 = moment().format();
    today1 = today1.substring(0, 10);

    // console.log("7:" + sevenDaysAgo)

    const getFitbitData = async () => {
    //     let accessToken = await getAccessToken(authorizationCode);
    //     // const date =  new Date(2023, 0, 29);
    //     // const today = date.toISOString().substring(0, 10);			// may need
        
        
        // Steps data 
        const stepsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/steps/date/${sevenDaysAgo}/${today1}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
            
        })
        // calories
        const calorieResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/calories/date/${sevenDaysAgo}/${today1}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // water
        const waterResponse = await fetch(`https://api.fitbit.com/1/user/-/foods/log/water/date/2023-02-03.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // floors 
        const floorsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/floors/date/${sevenDaysAgo}/${today1}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // active mintues 
        const activeminsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/minutesLightlyActive/date/${sevenDaysAgo}/${today1}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            
        // distance travelled
        const distanceResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/distance/date/${sevenDaysAgo}/${today1}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        
        
        
        // Wait for all responses to finish
        const [stepsData, calorieData, waterData,floorsData, activeminsData, distanceData] = await Promise.all([stepsResponse.json(), calorieResponse.json(), waterResponse.json(),floorsResponse.json(), activeminsResponse.json(),distanceResponse.json()]);
        if (stepsResponse.status === 200 && calorieResponse.status === 200 && waterResponse.status === 200 && floorsResponse.status === 200 && activeminsResponse.status === 200 && distanceResponse.status === 200) {
            
            // console.log("Cal first value: " +JSON.stringify(calorieData["activities-calories"][0].value))
            
            // Get the avg calories
            var avgCals = 0;
            for (var i=0; i<7; i++) {
                // console.log(i+":" + calorieData["activities-calories"][i].value);
                avgCals = avgCals + parseFloat(calorieData["activities-calories"][i].value);
            }
            // console.log("totCals: " + avgCals)
            avgCals = avgCals/7.0;
            
            // Get the avg floors climbed
            var avgFloors = 0;
            for (var i=0; i<7; i++) {
                avgFloors += parseFloat(floorsData["activities-floors"][i].value);
            }
            avgFloors = avgFloors/7.0;
            
            // Get the avg active minutes
            var avgMins = 0;
            for (var i=0; i<7; i++) {
                avgMins += parseFloat(activeminsData["activities-minutesLightlyActive"][i].value);
            }
            avgMins = avgMins/7.0;
            
            // Get the avg distance
            var avgDist = 0;
            for (var i=0; i<7; i++) {
                avgDist += parseFloat(distanceData["activities-distance"][i].value);
            }
            avgDist = avgDist/7.0;
            
            // Get water data
            var water = waterData.summary.water;
            
            // Get Steps Data
            // will return an array of data and value pairs
            
            // console.log("avgCals=" + avgCals.toFixed(2) + ", avgDist="+avgDist.toFixed(2)+",avgFloors=" +avgFloors.toFixed(2)+", avgMins="+ avgMins.toFixed(2)+", water="+ water.toFixed(2));

            return avgCals, avgDist, avgFloors, avgMins, water, stepsData;
        } else {
            // console.log(stepsResponse.status+", "+ calorieResponse.status+", "+ waterResponse.status +", "+ floorsResponse.status+", "+activeminsResponse.status +", "+ distanceResponse.status)
            // console.log("HEELOO")
            return {value: false};
        }
    };

    
    // const data = getFitbitData();



    // console.log("After fitbit call");
    // console.log(data);

    // ------------------------ FitBit Code - End -------------------------------------------------------

    // const [clients, setClients] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Trainer/1/Clients`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData[0]))
    //         .then((actualData) => setClients(actualData));
    // }, []);
    

    
    // const clientSelect = document?.getElementById("clients");
    // clientSelect?.addEventListener('change', function handleChange(event) {
    //     // console.log("Select Value (ID): " + event.target.value);
    //     setCurrentClientID(event.target.value);
    //     setGoals(clientGoals);
    //     setIntake(clientIntake);
    //     // setWorkouts(clientWorkouts);
    //     // TrainerClients();
    // })

    // const [clientGoals, setGoals] = useState(null);
    // const [currentClientID, setCurrentClientID] = useState(1);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Goals/${currentClientID}`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData))
    //         .then((actualData) => setGoals(actualData));
    // }, [clientGoals]);

    // const [clientIntake, setIntake] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Client/${currentClientID}/NutritionValue`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData))
    //         .then((actualData) => setIntake(actualData));
    // }, [clientIntake]);

    // const [clientPBs, setPBs] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/PB/Client/${currentClientID}`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData))
    //         .then((actualData) => setPBs(actualData));
    // }, [clientPBs]);

    // --------------------- end of work commented for offline db ------------------------------
    // ---------------------     work below hasnt been tested     --------------------------------------

    // const [clientWorkouts, setWorkouts] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Client/${currentClientID}/AllWorkouts`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData))
    //         .then((actualData) => setWorkouts(actualData));
    // }, [clientWorkouts]);

    // var workoutsThisWeek = [];
    // var todaysDate = new Date();

    // for(var i = 0; i < Object.keys(clientWorkouts).length; i++) {
    //     if(clientWorkouts[i].Date > todaysDate) {
    //         workoutsThisWeek.push(clientWorkouts[i]);
    //     }
    // }

    // console.log(workoutsThisWeek);


    // getFitBitData();

   
    const today = moment().format('llll');
    const beginningOfCurrentWeek = moment().startOf('isoweek').format('llll');
    const beginningOfLastWeek = moment().startOf('isoweek').subtract(7, 'days').format('llll');
    const beginningOfNextWeek = moment().startOf('isoweek').add(7, 'days').format('llll');

    // console.log("Today: " + today.substring(0,3) + " " + today.substring(9,11));
    // console.log("beginningOfCurrentWeek: " + beginningOfCurrentWeek.substring(0,3) + " " + beginningOfCurrentWeek.substring(9,11));
    // console.log("beginningOfLastWeek: " + beginningOfLastWeek.substring(0,3) + " " + beginningOfLastWeek.substring(9,11));
    // console.log("beginningOfNextWeek: " + beginningOfNextWeek.substring(0,3) + " " + beginningOfNextWeek.substring(9,11));
    
    // console.log(moment().startOf('isoweek').add(12, 'days').format('llll'));

    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // console.log("-------------------------------------");
    var date = "";
    var dateNum = "";
    var day = "";
    
    var scheduleDays = '{ "days" : [';
    // console.log("------------- Last Week ------------");         0-6
    for(var i = 7; i > 0; i--){
        date = moment().startOf('isoweek').subtract(i, 'days').format('llll');
        day = date.substring(0,3);
        scheduleDays += '{ "day" : "' + day + '",';
        if(date.substring(9,11).includes(",")){
            dateNum = date.substring(9,10);
            if(dateNum.localeCompare("1") === 0){
                dateNum = dateNum.concat("st");
            } else if(dateNum.localeCompare("2") === 0) {
                dateNum = dateNum.concat("nd");
            } else if(dateNum.localeCompare("3") === 0) {
                dateNum = dateNum.concat("rd");
            } else {
                dateNum = dateNum.concat("th");
            }
        } else {
            dateNum = date.substring(9,11);
            if(dateNum.startsWith("1")){
                dateNum = dateNum.concat("th");
            } else {
                if(dateNum.endsWith("1")){
                    dateNum = dateNum.concat("st");
                } else if(dateNum.endsWith("2")) {
                    dateNum = dateNum.concat("nd");
                } else if(dateNum.endsWith("3")) {
                    dateNum = dateNum.concat("rd");
                } else {
                    dateNum = dateNum.concat("th");
                }
            }
        }
        scheduleDays += ' "date" : "' + dateNum + '"},';
        
        // console.log(day + " " + dateNum);
    }
    // console.log("------------- This Week ------------");         7-13
    for(var i = 0; i < 7; i++){
        date = moment().startOf('isoweek').add(i, 'days').format('llll');
        day = date.substring(0,3);
        scheduleDays += '{ "day" : "' + day + '",';
        if(date.substring(9,11).includes(",")){
            dateNum = date.substring(9,10);
            if(dateNum.localeCompare("1") === 0){
                dateNum = dateNum.concat("st");
            } else if(dateNum.localeCompare("2") === 0) {
                dateNum = dateNum.concat("nd");
            } else if(dateNum.localeCompare("3") === 0) {
                dateNum = dateNum.concat("rd");
            } else {
                dateNum = dateNum.concat("th");
            }
        } else {
            dateNum = date.substring(9,11);
            if(dateNum.startsWith("1")){
                dateNum = dateNum.concat("th");
            } else {
                if(dateNum.endsWith("1")){
                    dateNum = dateNum.concat("st");
                } else if(dateNum.endsWith("2")) {
                    dateNum = dateNum.concat("nd");
                } else if(dateNum.endsWith("3")) {
                    dateNum = dateNum.concat("rd");
                } else {
                    dateNum = dateNum.concat("th");
                }
            }
            
        }
        scheduleDays += ' "date" : "' + dateNum + '"},';
        
        // console.log(day + " " + dateNum);
    }
    // console.log("------------- Next Week ------------");         14-20
    for(var i = 7; i < 14; i++){
        date = moment().startOf('isoweek').add(i, 'days').format('llll');
        day = date.substring(0,3);
        scheduleDays += '{ "day" : "' + day + '",';
        if(date.substring(9,11).includes(",")){
            dateNum = date.substring(9,10);
            if(dateNum.localeCompare("1") === 0){
                dateNum = dateNum.concat("st");
            } else if(dateNum.localeCompare("2") === 0) {
                dateNum = dateNum.concat("nd");
            } else if(dateNum.localeCompare("3") === 0) {
                dateNum = dateNum.concat("rd");
            } else {
                dateNum = dateNum.concat("th");
            }
        } else {
            dateNum = date.substring(9,11);
            if(dateNum.startsWith("1")){
                dateNum = dateNum.concat("th");
            } else {
                if(dateNum.endsWith("1")){
                    dateNum = dateNum.concat("st");
                } else if(dateNum.endsWith("2")) {
                    dateNum = dateNum.concat("nd");
                } else if(dateNum.endsWith("3")) {
                    dateNum = dateNum.concat("rd");
                } else {
                    dateNum = dateNum.concat("th");
                }
            }
        }
        scheduleDays += ' "date" : "' + dateNum + '"}';
        if(i!=13){
            scheduleDays += ',';
        }
        
        // console.log(day + " " + dateNum);
    }
    
    scheduleDays += ']}';
    // console.log("-------------------------------------");
    // console.log(JSON.parse(scheduleDays));
    var schedule = JSON.parse(scheduleDays);


    // const track = document.querySelector('.trackContainer.track');
    // const slides = Array.from(track.children);

    // console.log(track);

    const [isPopupClicked, setIsPopupClicked] = useState(false);

    const togglePopup = () => {
        setIsPopupClicked(!isPopupClicked);
    }


    return (
    <div style={styles.trainerClients}>
        <Nav />
        { width > 700 ? <div style={styles.trainerClients.container}>
            <div style={styles.trainerClients.container.fitbitIcons}>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClients.container.fitbitIcons.icon, ...styles.trainerClients.container.fitbitIcons.icon.calBurnt}} icon={faFire}/>
                    <div>Calories Burnt</div>
                    <div>4900kcl</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClients.container.fitbitIcons.icon, ...styles.trainerClients.container.fitbitIcons.icon.waterIntake}} icon={faDroplet}/>
                    <div>Water Intake</div>
                    <div>13.5L</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClients.container.fitbitIcons.icon, ...styles.trainerClients.container.fitbitIcons.icon.floorsClimbed}} icon={faStairs}/>
                    <div>Floors Climbed</div>
                    <div>45 Floors</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClients.container.fitbitIcons.icon, ...styles.trainerClients.container.fitbitIcons.icon.activeMins}} icon={faBolt}/>
                    <div>Active Minutes</div>
                    <div>420 Min</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClients.container.fitbitIcons.icon, ...styles.trainerClients.container.fitbitIcons.icon.distTravelled}} icon={faRoad}/>
                    <div>Distance Travelled</div>
                    <div>27.1km</div>
                </div>
            </div>
            <div style={{...styles.trainerClients.container.steps, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Steps</div>
                <div style={styles.trainerClients.container.steps.content}>
                    <div style={styles.trainerClients.container.steps.content.imgContainer}>
                        <img style={styles.trainerClients.container.steps.content.imgContainer.img}
                            src={barChart}
                            alt="Bar Chart"/>
                    </div>
                    <div style={styles.trainerClients.container.steps.content.text}>
                        <div style={styles.trainerClients.container.steps.content.text.label}>Goal:</div>
                        <div style={styles.trainerClients.container.steps.content.text.data}>10,000</div>
                        <div><FontAwesomeIcon style={styles.trainerClients.container.steps.content.text.editIcon} icon={faPenToSquare}/></div>
                    </div>
                </div>
            </div>
            <div style={styles.trainerClients.container.intake}>
                <div style={styles.trainerClients.container.intake.heading}>Intake</div>
                {/* { <div style={styles.trainerClients.container.intake.table}>
                            <div>Calories</div>
                            <div>{clientIntake?.CaloriesIntake}/{clientIntake?.TotalCalories}cal</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Protein</div>
                            <div>{clientIntake?.ProteinIntake}/{clientIntake?.TotalProtein}g</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Fat</div>
                            <div>{clientIntake?.FatsIntake}/{clientIntake?.TotalFats}g</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Carbs</div>
                            <div>{clientIntake?.CarbohydratesIntake}/{clientIntake?.TotalCarbohydrates}g</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                        </div>
                        
                    } */}
            </div>
            <div style={styles.trainerClients.container.progressChart}>
                Weight Progress Graph
            </div>
            <div style={{...styles.trainerClients.container.goals, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Goals</div>
                    {/* { clientGoals?.map((goal) => {
                        return <div style={styles.trainerClients.container.goals.entry}>
                                    {goal.Goal}
                                </div>
                        }) 
                    } */}
            </div>
            <div style={styles.trainerClients.container.calorieSummary}>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>

                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.xmark} icon={faCircleXmark}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClients.container.calorieSummary.icon.dash} icon={faMinus}/>

            </div>
            <div style={{...styles.trainerClients.container.catchUpNotes, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>CatchUp Notes</div>
                <div style={styles.trainerClients.container.catchUpNotes.textBox}>
                    <textarea></textarea>
                </div>
            </div>
            <div style={{...styles.trainerClients.container.schedule, ...styles.trainerClients.container.sections}}>
                {/* <FontAwesomeIcon icon={faLessThan}/> */}
                <div style={styles.trainerClients.container.headers}>Schedule</div>
                {/* <FontAwesomeIcon icon={faGreaterThan}/> */}
                <div style={styles.trainerClients.container.schedule.content.carousel}>
                    <div style={styles.trainerClients.container.schedule.content.carousel.button.left}>
                        <FontAwesomeIcon icon={faLessThan}/>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer}>
                        <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track}>
                            <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(0,7).map((day) => {
                                        return <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                            <div style={isPopupClicked ? styles.trainerClients.container.schedule.content.popup : styles.trainerClients.container.schedule.content.hidden}>
                                                This is the notes popup!
                                                <div onClick={togglePopup}>Close</div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(7,14).map((day) => {
                                        return <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                        </div>
                                    })
                                }
                            </div>
                            <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(14,21).map((day) => {
                                        return <div style={styles.trainerClients.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.carousel.button.right}>
                        <FontAwesomeIcon icon={faGreaterThan}/>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.carousel.nav}>
                        <div style={styles.trainerClients.container.schedule.content.carousel.nav.indicator}></div>
                        <div style={styles.trainerClients.container.schedule.content.carousel.nav.indicator}></div>
                        <div style={styles.trainerClients.container.schedule.content.carousel.nav.indicator}></div>
                    </div>
                </div>
                
            </div>
            <div style={{...styles.trainerClients.container.personalBests, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Personal Bests</div>
                <div style={styles.trainerClients.container.personalBests.content}>
                    {/* {   clientPBs?.map((PB) => {
                            return <div style={styles.trainerClients.container.personalBests.content.entry}>
                                <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>{PB.Exercise.Name}</div>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>{PB.LastPB}</div>
                                    <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>{PB.PersonalBest}</div>
                                </div>
                            </div>
                        })
                    } */}
                </div>
            </div>
            
        </div> : <div style={styles.trainerClientsMobile.container}>
            <div style={styles.trainerClientsMobile.container.fitbitIcons}>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClientsMobile.container.fitbitIcons.icon, ...styles.trainerClientsMobile.container.fitbitIcons.icon.calBurnt}} icon={faFire}/>
                    <div>Calories Burnt</div>
                    <div>4900kcl</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClientsMobile.container.fitbitIcons.icon, ...styles.trainerClientsMobile.container.fitbitIcons.icon.waterIntake}} icon={faDroplet}/>
                    <div>Water Intake</div>
                    <div>13.5L</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClientsMobile.container.fitbitIcons.icon, ...styles.trainerClientsMobile.container.fitbitIcons.icon.floorsClimbed}} icon={faStairs}/>
                    <div>Floors Climbed</div>
                    <div>45 Floors</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClientsMobile.container.fitbitIcons.icon, ...styles.trainerClientsMobile.container.fitbitIcons.icon.activeMins}} icon={faBolt}/>
                    <div>Active Minutes</div>
                    <div>420 Min</div>
                </div>
                <div>
                    <FontAwesomeIcon style={{...styles.trainerClientsMobile.container.fitbitIcons.icon, ...styles.trainerClientsMobile.container.fitbitIcons.icon.distTravelled}} icon={faRoad}/>
                    <div>Distance Travelled</div>
                    <div>27.1km</div>
                </div>
            </div>
            <div style={{...styles.trainerClientsMobile.container.steps, ...styles.trainerClientsMobile.container.sections}}>
                <div style={styles.trainerClientsMobile.container.headers}>Steps</div>
                <div style={styles.trainerClientsMobile.container.steps.content}>
                    <div style={styles.trainerClientsMobile.container.steps.content.imgContainer}>
                        <img style={styles.trainerClientsMobile.container.steps.content.imgContainer.img}
                            src={barChart}
                            alt="Bar Chart"/>
                    </div>
                    <div style={styles.trainerClientsMobile.container.steps.content.text}>
                        <div style={styles.trainerClientsMobile.container.steps.content.text.label}>Goal:</div>
                        <div style={styles.trainerClientsMobile.container.steps.content.text.data}>10,000</div>
                        <div><FontAwesomeIcon style={styles.trainerClientsMobile.container.steps.content.text.editIcon} icon={faPenToSquare}/></div>
                    </div>
                </div>
            </div>
            <div style={styles.trainerClientsMobile.container.intake}>
                <div style={styles.trainerClientsMobile.container.intake.heading}>Intake</div>
                {/* { <div style={styles.trainerClientsMobile.container.intake.table}>
                            <div>Calories</div>
                            <div>{clientIntake?.CaloriesIntake}/{clientIntake?.TotalCalories}cal</div>
                            <FontAwesomeIcon style={styles.trainerClientsMobile.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Protein</div>
                            <div>{clientIntake?.ProteinIntake}/{clientIntake?.TotalProtein}g</div>
                            <FontAwesomeIcon style={styles.trainerClientsMobile.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Fat</div>
                            <div>{clientIntake?.FatsIntake}/{clientIntake?.TotalFats}g</div>
                            <FontAwesomeIcon style={styles.trainerClientsMobile.container.intake.table.editIcon} icon={faPenToSquare}/>
                            <div>Carbs</div>
                            <div>{clientIntake?.CarbohydratesIntake}/{clientIntake?.TotalCarbohydrates}g</div>
                            <FontAwesomeIcon style={styles.trainerClientsMobile.container.intake.table.editIcon} icon={faPenToSquare}/>
                        </div>
                        
                    } */}
            </div>
            <div style={styles.trainerClientsMobile.container.progressChart}>
                Weight Progress Graph
            </div>
            <div style={{...styles.trainerClientsMobile.container.goals, ...styles.trainerClientsMobile.container.sections}}>
                <div style={styles.trainerClientsMobile.container.headers}>Goals</div>
                    {/* { clientGoals?.map((goal) => {
                        return <div style={styles.trainerClientsMobile.container.goals.entry}>
                                    {goal.Goal}
                                </div>
                        }) 
                    } */}
            </div>
            <div style={styles.trainerClientsMobile.container.calorieSummary}>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>

                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.xmark} icon={faCircleXmark}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.check} icon={faCircleCheck}/>
                <FontAwesomeIcon style={styles.trainerClientsMobile.container.calorieSummary.icon.dash} icon={faMinus}/>

            </div>
            <div style={{...styles.trainerClientsMobile.container.catchUpNotes, ...styles.trainerClientsMobile.container.sections}}>
                <div style={styles.trainerClientsMobile.container.headers}>CatchUp Notes</div>
                <div style={styles.trainerClientsMobile.container.catchUpNotes.textBox}>
                    <textarea></textarea>
                </div>
            </div>
            <div style={{...styles.trainerClientsMobile.container.schedule, ...styles.trainerClientsMobile.container.sections}}>
                {/* <FontAwesomeIcon icon={faLessThan}/> */}
                <div style={styles.trainerClientsMobile.container.headers}>Schedule</div>
                {/* <FontAwesomeIcon icon={faGreaterThan}/> */}
                <div style={styles.trainerClientsMobile.container.schedule.content.carousel}>
                    <div style={styles.trainerClientsMobile.container.schedule.content.carousel.button.left}>
                        <FontAwesomeIcon icon={faLessThan}/>
                    </div>
                    <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer}>
                        <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track}>
                            <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(0,7).map((day) => {
                                        return <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                            <div style={isPopupClicked ? styles.trainerClientsMobile.container.schedule.content.popup : styles.trainerClientsMobile.container.schedule.content.hidden}>
                                                This is the notes popup!
                                                <div onClick={togglePopup}>Close</div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(7,14).map((day) => {
                                        return <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                        </div>
                                    })
                                }
                            </div>
                            <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide}>
                                {   schedule.days?.slice(14,21).map((day) => {
                                        return <div style={styles.trainerClientsMobile.container.schedule.content.carousel.trackContainer.track.slide.content}>
                                            <div>{day.day}</div>
                                            <div>{day.date}</div>
                                            <div>Chest Beginner</div>
                                            <div onClick={togglePopup}>notes</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={styles.trainerClientsMobile.container.schedule.content.carousel.button.right}>
                        <FontAwesomeIcon icon={faGreaterThan}/>
                    </div>
                    <div style={styles.trainerClientsMobile.container.schedule.content.carousel.nav}>
                        <div style={styles.trainerClientsMobile.container.schedule.content.carousel.nav.indicator}></div>
                        <div style={styles.trainerClientsMobile.container.schedule.content.carousel.nav.indicator}></div>
                        <div style={styles.trainerClientsMobile.container.schedule.content.carousel.nav.indicator}></div>
                    </div>
                </div>
                
            </div>
            <div style={{...styles.trainerClientsMobile.container.personalBests, ...styles.trainerClientsMobile.container.sections}}>
                <div style={styles.trainerClientsMobile.container.headers}>Personal Bests</div>
                <div style={styles.trainerClientsMobile.container.personalBests.content}>
                    {/* {   clientPBs?.map((PB) => {
                            return <div style={styles.trainerClientsMobile.container.personalBests.content.entry}>
                                <div style={styles.trainerClientsMobile.container.personalBests.content.entry.data}>
                                    <div style={styles.trainerClientsMobile.container.personalBests.content.entry.data.exercise}>{PB.Exercise.Name}</div>
                                    <div style={styles.trainerClientsMobile.container.personalBests.content.entry.data.previous}>{PB.LastPB}</div>
                                    <FontAwesomeIcon style={styles.trainerClientsMobile.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                                    <div style={styles.trainerClientsMobile.container.personalBests.content.entry.data.new}>{PB.PersonalBest}</div>
                                </div>
                            </div>
                        })
                    } */}
                </div>
            </div>
            
        </div> }
    </div>
    );
}

export default TrainerClients;