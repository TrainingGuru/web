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
            profile: {
                width: "25%",
                float: "left",
                info: {
                    name: {
                        margin: "2%"
                    },
                    description: {
                        margin: "2%"
                    }
                },
                workouts: {

                }
            }, 
            createWorkout: {
                width: "50%",
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
                    <div style={styles.trainerProfile.container.profile.info.name}>Name: Adam Hobbs</div>
                    <div style={styles.trainerProfile.container.profile.info.description}>
                        <div>1 to 1 personal trainer working out of DkIT Sport in Dundalk, County Louth. I am a certified Level 3 Personal Trainer and have a Level 7 Qualification in Nutrition.</div>
                        <div>I am currently open to taking on clients on a 1 to 1 or Online Basis.</div>
                    </div>
                </div>
                <div style={styles.trainerProfile.container.profile.workouts}>

                </div>
            </div>
            <div style={styles.trainerProfile.container.createWorkout}>
                {/* <div>Create Workout</div> */}

            </div>
        </div>
    </div>
    );
}

export default TrainerProfile;