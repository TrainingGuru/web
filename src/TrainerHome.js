import React from 'react';

import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHouseChimney, faPeopleGroup, faUser, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const styles = {
    trainerHome: {
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
                }
            }

        },
        container: {
            display: "grid",
            gap: "1.5rem",
            width: "75%",
            // height: "100%",
            margin: "5% 5% 5% 0",
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
            clients: {
                gridRow: "span 3",
                content: {
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
                gridRow: "span 2"
            },
            intake: {
                gridColumn: "2",
                content: {
                    entry: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "10% 5%",
                        name: {
                            fontWeight: "700"
                        },
                        data: {
                            currentIntake: {},
                            targetIntake: {}
                        }

                    }
                }
            },
            upcomingWorkouts: {
                gridColumnStart: "2",
                gridColumnEnd: "4",
                content: {
                    entry: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "5% 2.5%",
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
                textAlign: "center",
            },


        }

    }
}

function TrainerHome() {


    return (<div style={styles.trainerHome}>
            <div style={styles.trainerHome.nav}>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faHouseChimney}/>
                    <Link to="/">HOME</Link>
                </div>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faPeopleGroup}/>
                    <Link to="/clientstrainer">CLIENTS</Link>
                </div>
                <div style={styles.trainerHome.nav.link}>
                    <FontAwesomeIcon style={styles.trainerHome.nav.link.icon} icon={faUser}/>
                    <Link to="/profiletrainer">PROFILE</Link>
                </div>
            </div>
            <div style={styles.trainerHome.header}>
                <div style={styles.trainerHome.header.logo}>
                    <img style={styles.trainerHome.header.logo.img}
                         src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}
                         alt="logo"/>
                </div>
                {/* <div style={styles.trainerHome.header.menu}>
                <FontAwesomeIcon style={styles.trainerHome.header.menu.icon} icon={faBars}/>
            </div> */}
            </div>

            <div style={styles.trainerHome.container}>
                <div style={{...styles.trainerHome.container.clients, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Clients</div>
                    <div style={styles.trainerHome.container.clients.content}>
                        <div style={styles.trainerHome.container.clients.content.entry}>
                            <div style={styles.trainerHome.container.clients.content.entry.name}>Adam Hobbs</div>
                        </div>
                        <div style={styles.trainerHome.container.clients.content.entry}>
                            <div style={styles.trainerHome.container.clients.content.entry.name}>James Martin</div>
                        </div>
                        <div style={styles.trainerHome.container.clients.content.entry}>
                            <div style={styles.trainerHome.container.clients.content.entry.name}>Katie Maguire</div>
                        </div>
                        <div style={styles.trainerHome.container.clients.content.entry}>
                            <div style={styles.trainerHome.container.clients.content.entry.name}>John Doe</div>
                        </div>
                        <div style={styles.trainerHome.container.clients.content.entry}>
                            <div style={styles.trainerHome.container.clients.content.entry.name}>Patrick McCann</div>
                        </div>
                    </div>
                </div>
                <div style={styles.trainerHome.container.activeToday}>
                    <div>Active Today: 6</div>
                </div>
                <div style={{...styles.trainerHome.container.activity, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Activity</div>
                    <div>
                        Barchart
                    </div>
                    <div>
                        dropdown
                    </div>
                </div>
                <div style={{...styles.trainerHome.container.intake, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Intake</div>
                    <div style={styles.trainerHome.container.intake.content}>
                        <div style={styles.trainerHome.container.intake.content.entry}>
                            <div style={styles.trainerHome.container.intake.content.entry.name}>Adam Hobbs</div>
                            <div style={styles.trainerHome.container.intake.content.entry.currentIntake}>2500</div>
                            <div style={styles.trainerHome.container.intake.content.entry.icon}>/</div>
                            <div style={styles.trainerHome.container.intake.content.entry.targetIntake}>3000</div>
                        </div>
                        <div style={styles.trainerHome.container.intake.content.entry}>
                            <div style={styles.trainerHome.container.intake.content.entry.name}>John Doe</div>
                            <div style={styles.trainerHome.container.intake.content.entry.currentIntake}>1400</div>
                            <div style={styles.trainerHome.container.intake.content.entry.icon}>/</div>
                            <div style={styles.trainerHome.container.intake.content.entry.targetIntake}>1700</div>
                        </div>
                    </div>
                </div>

                <div style={{...styles.trainerHome.container.upcomingWorkouts, ...styles.trainerHome.container.sections}}>
                    <div style={styles.trainerHome.container.headers}>Upcoming Workouts</div>
                    <div style={styles.trainerHome.container.upcomingWorkouts.content}>
                        <div style={styles.trainerHome.container.upcomingWorkouts.content.entry}>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.name}>Adam Hobbs
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.date}>26/01/2023
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.workout}>Chest</div>
                        </div>
                        <div style={styles.trainerHome.container.upcomingWorkouts.content.entry}>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.name}>James Martin
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.date}>28/01/2023
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.workout}>Legs</div>
                        </div>
                        <div style={styles.trainerHome.container.upcomingWorkouts.content.entry}>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.name}>Katie
                                Maguire
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.date}>30/01/2023
                            </div>
                            <div style={styles.trainerHome.container.upcomingWorkouts.content.entry.workout}>Back</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TrainerHome;

