import React from 'react';

import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHouseChimney, faPeopleGroup, faUser, faChevronUp} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import pieChart from "./pieChart.png";
import barChart from "./barChart.png";

import Nav from './Nav';

const styles = {
    trainerHome: {
        // margin: "2rem",
        height: "95vh",
        overflow: "hidden",
        // header: {
        //     display: "flex",
        //     width: "100%",
        //     height: "10%",
        //     float: "left",
        //     justifyContent: "space-evenly",
        //     logo: {
        //         img: {
        //             width: "100%",
        //             height: "100%"
        //         }
        //     },
        //     menu: {
        //         icon: {}
        //     }
        // },
        // nav: {
        //     display: "flex",
        //     gap: "2rem",
        //     flexDirection: "column",
        //     height: "100%",
        //     width: "20%",
        //     float: "left",
        //     link: {
        //         fontSize: "1.5rem",
        //         position: "relative",
        //         top: "8%",
        //         paddingRight: "2rem",
        //         paddingLeft: "2rem",
        //         icon: {
        //             paddingRight: "1rem"
        //         },
        //         a: {
        //             textDecoration: "none",
        //             color: "rgb(0, 0, 0)"
        //         }
        //     }

        // },
        container: {
            display: "grid",
            gap: "1.5rem",
            width: "95%",
            margin: "auto",
            // height: "70vh",
            overflow: "hidden",
            height: "100%",
            // margin: "1% 5% 5% 0",
            // float: "left",
            // gridTemplateColumns: "repeat(3, 1fr)", ------- means that the columns aren't of equal width but works better for the steps graph
            gridTemplateRows: "1fr 1fr 3fr",
            headers: {
                textAlign: "center",
                width: "60%",
                margin: "2% auto",
                backgroundColor: "rgb(0, 0, 0)",
                color: "rgb(255, 255, 255)",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "14px",
                letterSpacing: "1.3px",
                textTransform: "Uppercase",
                lineHeight: "18px",
                border: "0px",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 3px 1px",
                padding: "0.5rem"
            },
            sections: {
                background: "rgb(245, 245, 245)",
                border: "1px solid rgb(236, 239, 241)",
                borderRadius: "4px",
                boxShadow: "rgb(0 0 0 / 10%) 0px 2px 1px"
            },
            clients: {
                gridRow: "span 3",
                height: "100%",
                overflow: "scroll",
                color: "rgb(0, 0, 0)",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "23px",
                letterSpacing: "0px",
                lineHeight: "30px",
                textAlign: "center",
                textTransform: "none",
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    entry: {
                        margin: "10% 5%",
                        name: {
                            margin: "5%",
                            fontWeight: "700"
                        }

                    }
                }
            },
            activity: {
                gridRow: "span 2",
                height: "100%",
                overflow: "hidden",
                textAlign: "center",
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    img: {
                        margin: "1% auto"
                    },
                    dropdown: {
                        
                    }
                }
            },
            intake: {
                gridColumn: "2",
                height: "100%",
                overflow: "scroll",
                overflowX: "hidden",
                content: {
                    // margin: "10%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    textAlign: "center",
                    entry: {
                        display: "grid",
                        gap: "0.5rem",
                        gridTemplateColumns: "1.5fr 0.5fr",
                        margin: "5%",
                        name: {
                            color: "rgb(0, 0, 0)",
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            fontSize: "20px",
                            letterSpacing: "0px",
                            lineHeight: "26px",
                            textAlign: "left",
                            textTransform: "none"
                        },
                        data: {
                            display: "flex",
                            color: "rgb(0, 0, 0)",
                            fontFamily: "Roboto",
                            // fontWeight: "500",
                            fontSize: "14px",
                            letterSpacing: "0px",
                            lineHeight: "26px",
                            // textAlign: "center", 
                            textTransform: "none",
                            currentIntake: {},
                            targetIntake: {}
                        }

                    }
                }
            },
            upcomingWorkouts: {
                gridColumnStart: "2",
                gridColumnEnd: "4",
                height: "100%",
                overflow: "hidden",
                content: {
                    textAlign: "center",
                    display: "flex",
                    height: "60%",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    entry: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1rem",
                        // margin: "7.5%",
                        name: {
                            fontWeight: "700"
                        },
                        workout: {
                            fontWeight: "700"
                        }
                    }
                }
            },
            activeToday: {
                height: "100%",
                display: "flex",
                overflow: "hidden",
                color: "rgb(0, 0, 0)",
                fontFamily: "Roboto",
                // fontWeight: "500",
                fontSize: "16px",
                letterSpacing: "0px",
                lineHeight: "21px",
                textAlign: "center",
                textTransform: "none",
                text: {
                    width: "50%",
                    // float: "left",
                    margin: "20% auto",
                    label: {
                        margin: "5%"
                    },
                    data: {}
                },
                imgContainer: {
                    width: "50%",
                    margin: "0",
                    // float: "right",
                    img: {
                        width: "100%",
                        height: "100%"
                    }
                }
            },


        }

    }
}


function TrainerHome() {

    const [clients, setClients] = useState(null);

    useEffect(() => {
        fetch(`https://traininggurubackend.onrender.com/Trainer/1/Clients`)
            .then((response) => response.json())
            // .then((actualData) => console.log(actualData[0]))
            .then((actualData) => setClients(actualData));
    }, []);

    // const [clientIntakes, setIntakeData] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Client/Trainer/1/NutritionValues`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData[0]))
    //         .then((actualData) => setIntakeData(actualData));
    // }, []);

    // const [clientWorkouts, setWorkoutData] = useState(null);

    // useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Trainer/1/UpComingWorkouts`)
    //         .then((response) => response.json())
    //         // .then((actualData) => console.log(actualData[0]))
    //         .then((actualData) => setWorkoutData(actualData));
    // }, []);


    return (<div style={styles.trainerHome}>
            {/* 
            <div style={styles.trainerHome.nav}>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faHouseChimney}/>
                    <Link to="/" style={styles.trainerHome.nav.link.a}>HOME</Link>
                </div>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faPeopleGroup}/>
                    <Link to="/clientstrainer" style={styles.trainerHome.nav.link.a}>CLIENTS</Link>
                </div>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faUser}/>
                    <Link to="/profiletrainer" style={styles.trainerHome.nav.link.a}>PROFILE</Link>
                </div>
            </div> */}
            <Nav />
            {/* <div style={styles.trainerHome.header}>
                <div style={styles.trainerHome.header.logo}>
                    <img style={styles.trainerHome.header.logo.img}
                         src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}
                         alt="logo"/>
                </div>
            </div> */}

            <div style={styles.trainerHome.container}>
                <div style={{...styles.trainerHome.container.clients, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Clients</div>
                    <div style={styles.trainerHome.container.clients.content}>
                        { clients?.map((client) => {
                            return <div style={styles.trainerHome.container.clients.content.entry}>
                                <div style={styles.trainerHome.container.clients.content.entry.name}>{client.Name}</div>
                                <Link to="/clientscatchup">{client.Name}</Link>
                            </div>
                        }) }
                    </div>
                </div>
                <div style={styles.trainerHome.container.activeToday}>
                    <div style={styles.trainerHome.container.activeToday.text}>
                        <div style={styles.trainerHome.container.activeToday.text.label}>Active Today:</div>
                        <div style={styles.trainerHome.container.activeToday.text.data}>85%</div>
                    </div>
                    
                    <div style={styles.trainerHome.container.activeToday.imgContainer}>
                        <img style={styles.trainerHome.container.activeToday.imgContainer.img}
                            src={pieChart}
                            alt="Pie Chart"/>
                    </div>
                </div>
                <div style={{...styles.trainerHome.container.activity, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Activity</div>
                    <div style={styles.trainerHome.container.activity.content}>
                        <img style={styles.trainerHome.container.activity.content.img}
                            src={barChart}
                            alt="Bar Chart"/>
                    
                        <div style={styles.trainerHome.container.activity.content.dropdown}>
                            <select id="clients">
                                {/* { clients?.map((client) => {
                                    return <option value={"${client.ClientID}"}>{client.Name}</option>
                                }) } */}
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{...styles.trainerHome.container.intake, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Intake</div>
                    <div style={styles.trainerHome.container.intake.content}>
                        {/* { clientIntakes?.map((clientIntake) => {
                            return <div style={styles.trainerHome.container.intake.content.entry}>
                            <div style={styles.trainerHome.container.intake.content.entry.name}>{clientIntake.Name}</div>
                            <div style={styles.trainerHome.container.intake.content.entry.data}>
                                <div style={styles.trainerHome.container.intake.content.entry.data.currentIntake}>{clientIntake.Nutrition?.CaloriesIntake}</div>
                                <div style={styles.trainerHome.container.intake.content.entry.data.icon}>/</div>
                                <div style={styles.trainerHome.container.intake.content.entry.data.targetIntake}>{clientIntake.Nutrition?.TotalCalories}</div>
                            </div>
                        </div>
                        }) } */}
                        
                    </div>
                </div>

                <div style={{...styles.trainerHome.container.upcomingWorkouts, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Upcoming Workouts</div>
                    <div style={styles.trainerHome.container.upcomingWorkouts.content}>
                        {/* { clientWorkouts?.map((clientWorkout) => {
                            return <div style={styles.trainerHome.container.upcomingWorkouts.content.entry}>
                                <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.name}>{clientWorkout.Client.Name}</div>
                                <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.date}>{clientWorkout.Date}</div>
                                <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.workout}>{clientWorkout.TrainerWorkout.WorkoutName}</div>
                            </div>
                        }) } */}
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TrainerHome;

