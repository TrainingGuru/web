import React from 'react';

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

import { Link } from "react-router-dom";



const styles = {
    trainerClients: {
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
            // height: "100%",
            margin: "2.5% 5% 5% 0",
            float: "left",
            gridTemplateColumns: "repeat(3, 1fr)",
            headers: {
                textAlign: "center",
                width: "60%",
                margin: "25px auto",
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
            fitbitIcons: {
                gridColumnStart: "1",
                gridColumnEnd: "4",
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
                name: {
                    textAlign: "center",
                    fontSize: "2em",
                    borderBottom: "1px solid black"
                }
            },
            intake: {
                heading: {
                    textAlign: "center",
                    fontSize: "2em",
                    borderBottom: "1px solid black"
                }
            },
            personalBests: {
                gridRow: "span 2",
                content: {
                    entry: {
                        margin: "10% 5%",
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
                gap: "1.5rem",
                gridTemplateColumns: "repeat(7, 1fr)",
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
                
            },
            goals: {
                
                entry: {
                    textAlign: "center",
                    margin: "0 0 5% 0"
                }
            },
            schedule: {
                gridColumnStart: "1",
                gridColumnEnd: "4"
            }
        }

    }
}


function TrainerClients() {

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
                    <div>700kcl</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faDroplet}/>
                    <div>2.0L</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faStairs}/>
                    <div>2 Floors</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faBolt}/>
                    <div>70 Min</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faRoad}/>
                    <div>2.1km</div>
                </div>
            </div>
            <div style={styles.trainerClients.container.assignWorkouts}>
                <div style={styles.trainerClients.container.assignWorkouts.name}>Jane McAvoy</div>
            </div>
            <div style={styles.trainerClients.container.intake}>
                <div style={styles.trainerClients.container.intake.heading}>Intake</div>
                <div>Calories</div>
                <div>Protein</div>
                <div>Fat</div>
                <div>Carbs</div>
            </div>
            <div style={{...styles.trainerClients.container.personalBests, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Personal Bests</div>
                <div style={styles.trainerClients.container.personalBests.content}>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>80kg</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Bench Press</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>100kg</div>
                        </div>
                    </div>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>40kg</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Low Rows</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>45kg</div>
                        </div>
                    </div>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>60kg</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Leg Press</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>65kg</div>
                        </div>
                    </div>
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
                <div>Barchart</div>
                <div>Goal: 10,000</div>
            </div>
            <div style={{...styles.trainerClients.container.goals, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Goals</div>
                <div style={styles.trainerClients.container.goals.entry}>
                    Lose Weight
                </div>
                <div style={styles.trainerClients.container.goals.entry}>
                    Build Muscle
                </div>
            </div>
            <div style={{...styles.trainerClients.container.schedule, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Schedule</div>
            </div>

        </div>
    </div>
    );
}

export default TrainerClients;