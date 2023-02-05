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

import {faPenToSquare} from "@fortawesome/free-solid-svg-icons/faPenToSquare";

import { Link } from "react-router-dom";

import barChart from "./barChart.png";


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
            gridTemplateRows: "0.75fr 1.5fr 0.25fr 1.5fr 2fr",
            headers: {
                textAlign: "center",
                width: "60%",
                margin: "2% auto 0.5% auto",
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
                    margin: "auto 5%",
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
                        margin: "10%",
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
                    textAlign: "center",
                    img: {
                        width: "75%",
                        height: "75%"
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
                overflow: "hidden"
            }
        }

    }
}


function TrainerClients() {
    
    // let clients = useEffect(() => {
    //     fetch(`https://traininggurubackend.onrender.com/Client`)
    //         .then((response) => response.json())
    //         .then((actualData) => {return actualData});
    // }, []);

    // const [data, setData] = useState({clients});

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
                    <div>4900kcl</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faDroplet}/>
                    <div>13.5L</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faStairs}/>
                    <div>45 Floors</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faBolt}/>
                    <div>420 Min</div>
                </div>
                <div>
                    <FontAwesomeIcon style={styles.trainerClients.container.fitbitIcons.icon} icon={faRoad}/>
                    <div>27.1km</div>
                </div>
            </div>
            <div style={styles.trainerClients.container.assignWorkouts}>
                <div style={styles.trainerClients.container.assignWorkouts.name}>
                    <select id="clients">
                        <option value={"JaneMcAvoy"}>Jane McAvoy</option>
                        <option value={"RobertMcAteer"}>Robert McAteer</option>
                        <option value={"KieranMcCormack"}>Kieran McCormack</option>
                    </select>
                </div>
                <div style={styles.trainerClients.container.assignWorkouts.content}>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
                    <div>
                        <select id="workouts">
                            <option value={"Unassigned"}>Unassigned</option>
                            <option value={"Legs"}>Legs</option>
                            <option value={"Chest"}>Chest</option>
                            <option value={"Cardio"}>Cardio</option>
                        </select>
                    </div>
                    <div style={styles.trainerClients.container.assignWorkouts.content.day}>Monday</div>
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
                <div style={styles.trainerClients.container.intake.table}>
                    <div>Calories</div>
                    <div>1000/2000</div>
                    <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                    <div>Protein</div>
                    <div>80/90g</div>
                    <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                    <div>Fat</div>
                    <div>10/30g</div>
                    <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                    <div>Carbs</div>
                    <div>50/60g</div>
                    <FontAwesomeIcon style={styles.trainerClients.container.intake.table.editIcon} icon={faPenToSquare}/>
                </div>
            </div>
            <div style={{...styles.trainerClients.container.personalBests, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Personal Bests</div>
                <div style={styles.trainerClients.container.personalBests.content}>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Bench Press</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>80kg</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>100kg</div>
                        </div>
                    </div>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Low Rows</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>40kg</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.new}>45kg</div>
                        </div>
                    </div>
                    <div style={styles.trainerClients.container.personalBests.content.entry}>
                        <div style={styles.trainerClients.container.personalBests.content.entry.data}>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.exercise}>Leg Press</div>
                            <div style={styles.trainerClients.container.personalBests.content.entry.data.previous}>60kg</div>
                            <FontAwesomeIcon style={styles.trainerClients.container.personalBests.content.entry.data.icon} icon={faChevronUp}/>
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
                <div style={styles.trainerClients.container.steps.content}>
                    <div>
                        <img style={styles.trainerClients.container.steps.content.img}
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
                <div style={styles.trainerClients.container.goals.entry}>
                    Lose Weight
                </div>
                <div style={styles.trainerClients.container.goals.entry}>
                    Build Muscle
                </div>
            </div>
            <div style={{...styles.trainerClients.container.schedule, ...styles.trainerClients.container.sections}}>
                <div style={styles.trainerClients.container.headers}>Schedule</div>
                <div>Wed</div>
                <div>16th</div>
                <div>Legs Advanced</div>
                <div>notes</div>
            </div>

        </div>
    </div>
    );
}

export default TrainerClients;