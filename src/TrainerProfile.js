import React from 'react';
import {formHelperTextClasses, Grid, grid2Classes, TextField} from "@mui/material";

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons/faHouseChimney";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import menu from "native-base/src/theme/components/menu";

import { Link } from "react-router-dom";

const styles = {
    trainerProfile: {
        margin: "2rem",
        header: {
            display: "flex",
            width: "80%",
            float: "left",
            justifyContent: "space-evenly",
            logo: {
                img: {
                    width: "5em",
                    height: "5em"
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
                }
            }
            
        }

    }
}


function TrainerProfile() {

    return <div style={styles.trainerProfile}>
        <div style={styles.trainerProfile.nav}>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon style={styles.trainerProfile.nav.link.icon} icon={faHouseChimney}/>
                <Link to="/hometrainer">HOME</Link>
            </div>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon style={styles.trainerProfile.nav.link.icon} icon={faPeopleGroup}/>
                <Link to="/clientstrainer">CLIENTS</Link>
            </div>
            <div style={styles.trainerProfile.nav.link}>
                <FontAwesomeIcon  style={styles.trainerProfile.nav.link.icon} icon={faUser}/>
                <Link to="/profiletrainer">PROFILE</Link>
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
    </div>
}

export default TrainerProfile;