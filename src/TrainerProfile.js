import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";


import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";

import { Link } from "react-router-dom";

import Nav from './Nav';

import { useEffect, useState } from "react";

const styles = {
    trainerProfile: {
        // margin: "2rem",
        height: "95vh",
        overflow: "hidden",
        container: {
            display: "grid",
            gap: "2rem",
            width: "90%",
            margin: "auto",
            // height: "70vh",
            overflow: "hidden",
            height: "100%",
            gridTemplateColumns: "repeat(2, 1fr)",
            // gridTemplateRows: "1fr 3fr",
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
            profile: {
                // width: "25%",
                height: "100%",
                // float: "left",
                info: {
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    pic: {
                        gridRow: "span 2",
                        img: {

                        }
                    },
                    name: {
                        margin: "2%"
                    },
                    description: {
                        gridRow: "span 2",
                        margin: "2%"
                    }
                },
                savedWorkouts: {
                    height: "40%",
                    popup: {
                        position: "absolute",
                        margin: "7.5%",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                        zIndex: "1",
                        // background: "rgba(0, 0, 0, 0.2)",
                        // color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }
            }, 
            createWorkout: {
                // width: "50%",
                height: "100%",
                // float: "left",
                card: {
                    // width: "450px",
                    backgroundColor: "white",
                    height: "100%",
                    // padding: "4rem",
                    borderRadius: "10px",
                    position: "relative",
                    header: {
                        textAlign: "center",
                        marginBottom: "2rem",
                        h1: {
                            fontSize: "3rem",
                            fontWeight: "600",
                            marginBottom: ".5rem"
                        }
                    },
                    line: {
                        borderBottom: "2px solid rgb(0 0 0 / 10%)"
                    },
                    form: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        item: {
                            position: "relative",
                            // top: ".82rem",
                            // left: "1.4rem",
                            fontSize: "1.3rem",
                            width: "100%",
                            margin: "auto",
                            padding: "5% 0",
                            display: "flex",
                            gap: "1rem",
                            // opacity: ".4",
                            label: {
                                // boxSizing: "border-box",
                                // padding: "0 1rem",
                                // minWidth: "100%"
                            },
                            input: {
                                // boxSizing: "border-box",
                                border: "none",
                                outline: "none",
                                background: "rgba(245, 245, 245)",
                                // padding: "0.5rem 1rem",
                                // borderRadius: "100px",
                                // width: "80%"
                                flexGrow: "1",
                                boxShadow: "rgb(0 0 0 / 10%) 0px 2px 1px"
                            },
                            exercises: {
                                position: "relative",
                                // top: ".82rem",
                                // left: "1.4rem",
                                fontSize: "1.3rem",
                                width: "80%",
                                margin: "auto",
                                padding: "5% 0",
                                display: "grid",
                                gap: "1rem",
                                gridTemplateColumns: "1fr 3fr",
                                label: {
                                    // boxSizing: "border-box",
                                    // padding: "0 1rem",
                                    // minWidth: "100%"
                                },
                                input: {
                                    // boxSizing: "border-box",
                                    border: "none",
                                    outline: "none",
                                    background: "rgba(245, 245, 245)",
                                    // padding: "0.5rem 1rem",
                                    // borderRadius: "100px",
                                    // width: "80%",
                                    flexGrow: "1",
                                    boxShadow: "rgb(0 0 0 / 20%) 2px 2px 1px"
                                },
                            }
                        },
                        button: {
                            display: "block",
                            background: "black",
                            color: "white",
                            padding: "0.2rem 1rem",
                            borderRadius: "100px",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textAlign: "center",
                            width: "20%",
                            margin: "auto"
                        }
                    }
                } 
            }
        },
        hidden: {
            display: "none"
        }
    }
}


function TrainerProfile() {

    const [isPopupClicked, setIsPopupClicked] = useState(false);

    const togglePopup = () => {
        setIsPopupClicked(!isPopupClicked);
    }

    return (<div style={styles.trainerProfile}>
        <Nav />
        <div style={styles.trainerProfile.container}>
            <div style={styles.trainerProfile.container.profile}>
                <div style={styles.trainerProfile.container.profile.info}>
                    <div style={styles.trainerProfile.container.profile.info.pic}>
                        <img style={styles.trainerProfile.container.profile.info.pic.img}
                            src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}
                            alt="logo"/>
                    </div>
                    <div style={styles.trainerProfile.container.profile.info.name}><b>Name:</b> Adam Hobbs</div>
                    <div style={{...styles.trainerProfile.container.profile.info.description, ...styles.trainerProfile.container.sections}}>
                        <div>1 to 1 personal trainer working out of DkIT Sport in Dundalk, County Louth. I am a certified Level 3 Personal Trainer and have a Level 7 Qualification in Nutrition.</div>
                        <div>I am currently open to taking on clients on a 1 to 1 or Online Basis.</div>
                    </div>
                    <div>
                        Edit
                        <FontAwesomeIcon style={styles.trainerProfile.container.profile.savedWorkouts.editIcon} icon={faPenToSquare}/>
                    </div>
                </div>
                <div style={{...styles.trainerProfile.container.profile.savedWorkouts, ...styles.trainerProfile.container.sections}}>
                    <div style={styles.trainerProfile.container.headers}>Saved Workouts</div>

                </div>
                <div onClick={togglePopup}>
                    Edit
                    <FontAwesomeIcon style={styles.trainerProfile.container.profile.savedWorkouts.editIcon} icon={faPenToSquare}/>
                </div>
            </div>

            <div style={styles.trainerProfile.container.createWorkout}>
                <div style={styles.trainerProfile.container.createWorkout.card}>
                    <div style={styles.trainerProfile.container.createWorkout.card.header}>
                        <h1 style={{...styles.trainerProfile.container.createWorkout.card.header.h1, ...styles.trainerProfile.container.createWorkout.card.line}}>Create Workout</h1>
                    </div>
                    <form style={styles.trainerProfile.container.createWorkout.card.form}>
                        <div>
                            <div style={{...styles.trainerProfile.container.createWorkout.card.form.item, ...styles.trainerProfile.container.createWorkout.card.line}}>
                                <label style={styles.trainerProfile.container.createWorkout.card.form.item.label}>Name:</label>
                                <input style={styles.trainerProfile.container.createWorkout.card.form.item.input} type="text" placeholder="Enter Name" required/>
                            </div>
                        </div>
                        <div style={styles.trainerProfile.container.createWorkout.card.line}>
                            <div style={styles.trainerProfile.container.createWorkout.card.form.item.exercises}>
                                <label style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.label}>Exercise:</label>
                                <input style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.input} type="text" placeholder="Enter Exercise Name" required/>
                            </div>
                            <div style={styles.trainerProfile.container.createWorkout.card.form.item.exercises}>
                                <label style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.label}>Sets:</label>
                                <input style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.input} type="text" placeholder="Enter Sets" required/>
                            </div>
                            <div style={styles.trainerProfile.container.createWorkout.card.form.item.exercises}>
                                <label style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.label}>Reps:</label>
                                <input style={styles.trainerProfile.container.createWorkout.card.form.item.exercises.input} type="text" placeholder="Enter Reps" required/>
                            </div>
                        
                            <button style={styles.trainerProfile.container.createWorkout.card.form.button} type="submit">ADD</button>
                        </div>
                        <div>
                            <p>Name: Sets: Reps:</p>
                            <p>Name: Sets: Reps:</p>
                            <p>Name: Sets: Reps:</p>

                            <button style={styles.trainerProfile.container.createWorkout.card.form.button} type="submit">DONE</button>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
        <div style={isPopupClicked ? {...styles.trainerProfile.container.profile.savedWorkouts.popup, ...styles.trainerProfile.container.sections} : styles.trainerProfile.hidden}>
            <div style={styles.trainerProfile.container.headers}>Saved Workouts</div>
            <div onClick={togglePopup}>Close</div>
        </div>
    </div>
    );
}

export default TrainerProfile;