import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

import { Link } from "react-router-dom";

const styles = {
    trainerProfile: {
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
                icon: {}
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
            gap: "1.5rem",
            width: "75%",
            // height: "70vh",
            overflow: "hidden",
            height: "100%",
            margin: "1% 5% 5% 0",
            float: "left",
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
                // float: "left",
                info: {
                    name: {
                        margin: "2%"
                    },
                    description: {
                        margin: "2%"
                    }
                },
                savedWorkouts: {
                    height: "100%"
                }
            }, 
            createWorkout: {
                // width: "50%",
                // float: "left", 
            }
        }

    }
}


function TrainerProfile() {

    return (<div style={styles.trainerProfile}>
        <div style={styles.trainerProfile.nav}>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon style={styles.trainerProfile.nav.link.icon} icon={faHouseChimney}/>
                <Link to="/" style={styles.trainerProfile.nav.link.a}>HOME</Link>
            </div>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon style={styles.trainerProfile.nav.link.icon} icon={faPeopleGroup}/>
                <Link to="/clientstrainer" style={styles.trainerProfile.nav.link.a}>CLIENTS</Link>
            </div>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon  style={styles.trainerProfile.nav.link.icon} icon={faUser}/>
                <Link to="/profiletrainer" style={styles.trainerProfile.nav.link.a}>PROFILE</Link>
            </div>
        </div>
        <div style={styles.trainerProfile.header}>
            <div style={styles.trainerProfile.header.logo}>
                <img style={styles.trainerProfile.header.logo.img} src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"} alt="logo"/>
            </div>
            {/* <div style={styles.trainerProfile.header.menu}>
                <FontAwesomeIcon style={styles.trainerProfile.header.menu.icon} icon={faBars}/>
            </div> */}
        </div>
        <div style={styles.trainerProfile.container}>
            <div style={styles.trainerProfile.container.profile}>
                <div style={styles.trainerProfile.container.profile.info}>
                    <div style={styles.trainerProfile.container.profile.info.name}><b>Name:</b> Adam Hobbs</div>
                    <div style={{...styles.trainerProfile.container.profile.info.description, ...styles.trainerProfile.container.sections}}>
                        <div>1 to 1 personal trainer working out of DkIT Sport in Dundalk, County Louth. I am a certified Level 3 Personal Trainer and have a Level 7 Qualification in Nutrition.</div>
                        <div>I am currently open to taking on clients on a 1 to 1 or Online Basis.</div>
                    </div>
                </div>
                <div style={{...styles.trainerProfile.container.profile.savedWorkouts, ...styles.trainerProfile.container.sections}}>
                    <div style={styles.trainerProfile.container.headers}>Saved Workouts</div>
                </div>
            </div>
            <div style={styles.trainerProfile.container.createWorkout}>
                <div>Create Workout</div>

            </div>
        </div>
    </div>
    );
}

export default TrainerProfile;