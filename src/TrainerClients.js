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

import { Link } from "react-router-dom";

import barChart from "./barChart.png";

import { useEffect, useState } from "react";


const styles = {
    trainerClients: {
        margin: "2rem",
        height: "90vh",
        overflow: "hidden",
        header: {
            display: "flex",
            width: "80%",
            height: "10%",
            float: "left",
            justifyContent: "space-evenly",
            logo: {
                img: {
                    width: "100%",
                    height: "100%"
                }
            },
            menu: {
                icon: {
                    
                }
            }
        },
        nav: {
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            height: "100%",
            width: "20%",
            float: "left",
            link: {
                fontSize: "1.5rem",
                position: "relative",
                top: "8%",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                icon: {
                    paddingRight: "1rem"
                },
                a: {
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)"
                }
            }
            
        },
        container: {
            display: "grid",
            gap: "1rem",
            width: "75%",
            overflow: "hidden",
            height: "100%",
            // height: "100%",
            margin: "1% 5% 5% 0",
            float: "left",
            gridTemplateColumns: "1.5fr 1fr 1.5fr",
            gridTemplateRows: "0.8fr 1.5fr 0.25fr 1.5fr 2fr",
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
                gridColumnStart: "1",
                gridColumnEnd: "4",
                height: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                icon: {
                    height: "4em",
                    width: "4em"
                }
            },
            assignWorkouts: {
                gridRow: "span 3",
                height: "100%",
                overflow: "hidden",
                name: {
                    textAlign: "center",
                    fontSize: "2em",
                    borderBottom: "1px solid black"
                },
                content: {
                    display: "grid",
                    gap: "1.5rem",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    width: "75%",
                    margin: "5% auto",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Poppins",
                    // fontWeight: "500",
                    fontSize: "14px",
                    letterSpacing: "0px",
                    lineHeight: "26px",
                    // textAlign: "center", 
                    textTransform: "none",
                    day: {

                    },
                    dropdown: {
                        
                    }
                }
            },
            intake: {
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
            personalBests: {
                gridRow: "span 2",
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
            },
            calorieSummary: {
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
            goals: {
                height: "100%",
                overflow: "hidden",
                entry: {
                    textAlign: "center",
                    margin: "5%",
                    fontSize: "20px"
                }
            },
            schedule: {
                gridColumnStart: "1",
                gridColumnEnd: "4",
                height: "100%",
                overflow: "hidden",
                content: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    textAlign: "center",
                    // margin: "5%, auto",
                    entry: {
                        day: {
                            fontWeight: "700"
                        }
                    }
                }
            }
        }

    }
}
var called = false;
function getFitBitData() {
    if(!called) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk5NEwiLCJzdWIiOiI5VDNRVkQiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBycHJvIHJudXQgcnNsZSByYWN0IHJsb2MgcnJlcyByd2VpIHJociBydGVtIiwiZXhwIjoxNjc1NzIzNDgzLCJpYXQiOjE2NzU2OTQ2ODN9.mDxpRhMeapdCvCDaFKFVNNOqZXR6tpmnd26xz89HG2U");
        myHeaders.append("Cookie", "JSESSIONID=24FC41C2A5AFA76FFD3B2F8450EDCFD2.fitbit1; fct=6729e7eb6dd2457991ac1358ea327403");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.fitbit.com/1/user/-/activities/steps/date/2023-01-27/2023-02-03.json", requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));

        called = true;
    }
    
}



function TrainerClients() {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        fetch(`https://traininggurubackend.onrender.com/Trainer/1/Clients`)
            .then((response) => response.json())
            // .then((actualData) => console.log(actualData[0]))
            .then((actualData) => setClients(actualData));
    }, []);
    

    // var clientData = Array.from(clients);

    // var currentClientID = 1;
    const clientSelect = document?.getElementById("clients");
    clientSelect?.addEventListener('change', function handleChange(event) {
        // console.log("Select Value (ID): " + event.target.value);
        setCurrentClientID(event.target.value);
        setGoals(clientGoals);
        setIntake(clientIntake);
        // setWorkouts(clientWorkouts);
        // TrainerClients();
    })

    const [clientGoals, setGoals] = useState(null);
    const [currentClientID, setCurrentClientID] = useState(1);

    useEffect(() => {
        fetch(`https://traininggurubackend.onrender.com/Goals/${currentClientID}`)
            .then((response) => response.json())
            // .then((actualData) => console.log(actualData))
            .then((actualData) => setGoals(actualData));
    }, [clientGoals]);

    const [clientIntake, setIntake] = useState(null);

    useEffect(() => {
        fetch(`https://traininggurubackend.onrender.com/Client/${currentClientID}/NutritionValue`)
            .then((response) => response.json())
            // .then((actualData) => console.log(actualData))
            .then((actualData) => setIntake(actualData));
    }, [clientIntake]);

    const [clientPBs, setPBs] = useState(null);

    useEffect(() => {
        fetch(`https://traininggurubackend.onrender.com/PB/Client/${currentClientID}`)
            .then((response) => response.json())
            // .then((actualData) => console.log(actualData))
            .then((actualData) => setPBs(actualData));
    }, [clientPBs]);

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
    getFitBitData();

    return (<div style={styles.trainerClients}>
        <div style={styles.trainerClients.nav}>
            <div style={styles.trainerClients.nav.link}>
                <FontAwesomeIcon style={styles.trainerClients.nav.link.icon} icon={faHouseChimney}/>
                <Link to="/" style={styles.trainerClients.nav.link.a}>HOME</Link>
            </div>
            <div style={styles.trainerClients.nav.link}>
                <FontAwesomeIcon style={styles.trainerClients.nav.link.icon} icon={faPeopleGroup}/>
                <Link to="/clientstrainer" style={styles.trainerClients.nav.link.a}>CLIENTS</Link>
            </div>
            <div style={styles.trainerClients.nav.link}>
                <FontAwesomeIcon  style={styles.trainerClients.nav.link.icon} icon={faUser}/>
                <Link to="/profiletrainer" style={styles.trainerClients.nav.link.a}>PROFILE</Link>
            </div>
        </div>
        <div style={styles.trainerClients.header}>
            <div style={styles.trainerClients.header.logo}>
                <img style={styles.trainerClients.header.logo.img} src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"} alt="logo"/>
            </div>
            {/* <div style={styles.trainerClients.header.menu}>
                <FontAwesomeIcon style={styles.trainerClients.header.menu.icon} icon={faBars}/>
            </div> */}
        </div>

        <div style={styles.trainerClients.container}>
            <div style={styles.trainerClients.container.fitbitIcons}>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faFire}/>
                    <div>Calories Burnt</div>
                    <div>4900kcl</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faDroplet}/>
                    <div>Water Intake</div>
                    <div>13.5L</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faStairs}/>
                    <div>Floors Climbed</div>
                    <div>45 Floors</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faBolt}/>
                    <div>Active Minutes</div>
                    <div>420 Min</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faRoad}/>
                    <div>Distance Travelled</div>
                    <div>27.1km</div>
                </div>
            </div>
            <div style={styles.trainerClients.container.assignWorkouts}>
                <div style={styles.trainerClients.container.assignWorkouts.name}>
                    <select id="clients">
                        { clients?.map((client) => {
                                return <option value={`${client.ClientID}`}>{client.Name}</option>
                            })
                        }
                    </select>
                </div>
                <div style={styles.trainerClients.container.assignWorkouts.content}>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs Advanced</option>
                            <option value={"Chest"}>Chest Beginner</option>
                            <option value={"Cardio"}>Cardio Beginner</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Tuesday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Wednesday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Thursday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Friday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Saturday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Sunday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                </div>
                <div>
                    <select id="weeks">
                        <option value={"Mon30Jan"}>w/c Mon 30 Jan</option>
                        <option value={"Mon06Feb"}>w/c Mon 06 Feb</option>
                        <option value={"Mon13Feb"}>w/c Mon 13 Feb</option>
                        <option value={"Mon20Feb"}>w/c Mon 20 Feb</option>
                        <option value={"Mon27Feb"}>w/c Mon 27 Feb</option>
                        <option value={"Mon06Mar"}>w/c Mon 06 Mar</option>
                    </select>
                </div>
            </div>
            <div style={styles.trainerClients.container.intake}>
                <div style={styles.trainerClients.container.intake.heading}>Intake</div>
                { <div style={styles.trainerClients.container.intake.table}>
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
                        
                    }
            </div>
        
            <div style={{...styles.trainerClients.container.personalBests, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Personal Bests</div>
                <div style={styles.trainerClients.container.personalBests.content}>
                    {   clientPBs?.map((PB) => {
                            return <div style={styles.trainerClients.container.personalBests.content.entry}>
                                <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>{PB.Exercise.Name}</div>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>{PB.LastPB}</div>
                                    <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                                    <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>{PB.PersonalBest}</div>
                                </div>
                            </div>
                        })
                    }
                </div>
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
            <div style={{...styles.trainerClients.container.goals, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Goals</div>
                    { clientGoals?.map((goal) => {
                        return <div style={styles.trainerClients.container.goals.entry}>
                                    {goal.Goal}
                                </div>
                        }) 
                    }
            </div>
            <div style={{...styles.trainerClients.container.schedule, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Schedule</div>
                <div style={styles.trainerClients.container.schedule.content}>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Mon</div>
                        <div>6th</div>
                        <div>Chest Beginner</div>
                        <div>notes</div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Tues</div>
                        <div>7th</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Wed</div>
                        <div>8th</div>
                        <div>Legs Advanced</div>
                        <div>notes</div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Thurs</div>
                        <div>9th</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Fri</div>
                        <div>10th</div>
                        <div>Cardio Beginner</div>
                        <div>notes</div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Sat</div>
                        <div>11th</div>
                        <div></div>
                        <div></div>
                    </div>
                    <div style={styles.trainerClients.container.schedule.content.entry}>
                        <div style={styles.trainerClients.container.schedule.content.entry.day}>Sun</div>
                        <div>12th</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    );
}

export default TrainerClients;