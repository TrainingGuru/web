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

    // const windowSize = useRef([window.innerWidth, window.innerHeight]);

    // ---------------------------- Use THIS!!!!!!!!!!!!!!!!! ---------------------------
    // on refresh

    // const [width, setWidth] = useState();

    // useEffect(() => {
    //     function handleResize() {
    //         setWidth(windowSize.current[0])
    //     }
        
    //     window.addEventListener('resize', handleResize);
    // });

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


    return (
    <div style={styles.trainerClients}>
        <Nav />
        <div style={styles.trainerClients.container}>
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
                                            <div>notes</div>
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
                                            <div>notes</div>
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
                                            <div>notes</div>
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
            
        </div>
    </div>
    );
}

export default TrainerClients;