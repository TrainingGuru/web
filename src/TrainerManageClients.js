import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

import { Link } from "react-router-dom";

import Nav from './Nav';

const styles = {
    trainerManageClients: {
        height: "95vh",
        overflow: "hidden",
        container: {
            display: "grid",
            gap: "1.5rem",
            width: "95%",
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
                    gap: "1rem",
                    fontSize: "2em",
                    height: "65%",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    width: "75%",
                    margin: "2.5% auto",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Poppins",
                    // fontWeight: "500",
                    // fontSize: "14px",
                    letterSpacing: "0px",
                    // lineHeight: "26px",
                    // textAlign: "center", 
                    textTransform: "none",
                    day: {

                    },
                    dropdown: {
                        
                    }
                }
            },
            catchUpNotes: {
                textBox: {
                    width: "100%",
                    height: "75%"
                }
            },
            clientDescription: {

            }
        }

    }
}


function TrainerManageClients() {

    return (<div style={styles.trainerManageClients}>
        <Nav />
        <div style={styles.trainerManageClients.container}>
            <div style={styles.trainerManageClients.container.assignWorkouts}>
                <div style={styles.trainerManageClients.container.assignWorkouts.name}>
                    <select id="clients">
                        {/* { clients?.map((client) => {
                                return <option value={`${client.ClientID}`}>{client.Name}</option>
                            })
                        } */}
                    </select>
                </div>
                <div style={styles.trainerManageClients.container.assignWorkouts.content}>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs Advanced</option>
                            <option value={"Chest"}>Chest Beginner</option>
                            <option value={"Cardio"}>Cardio Beginner</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Tuesday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Wednesday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Thursday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Friday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Saturday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerManageClients.container.assignWorkouts.content.day}>Sunday</div>
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
            <div style={{...styles.trainerManageClients.container.catchUpNotes, ...styles.trainerManageClients.container.sections}}>
                <div style={styles.trainerManageClients.container.headers}>CatchUp Notes</div>
                <div style={styles.trainerManageClients.container.catchUpNotes.textBox}>
                    <textarea></textarea>
                </div>
            </div>
            <div style={{...styles.trainerManageClients.container.clientDescription, ...styles.trainerManageClients.container.sections}}>
                <div style={styles.trainerManageClients.container.headers}>Client Description</div>
            </div>
        </div>
    </div>
    );
}

export default TrainerManageClients;