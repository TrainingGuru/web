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

    const clientId = '2395P3';
    const clientSecret = '9a7b2ea21730dc04d115cb52c799ecf1';
    const redirectUri = 'http://localhost:3000/fitbit-callback';
    const authorizationUri = 'https://www.fitbit.com/oauth2/authorize';
    const tokenUri = 'https://api.fitbit.com/oauth2/token';
    const getAccessToken = async (authorizationCode) => {
        const fullCode = authorizationCode.split('#')[0];
        const response = await  fetch("https://api.fitbit.com/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:
                "client_id=2395P3" +
                "&grant_type=authorization_code" +
                "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffitbit-callback" +
                "&code="+fullCode +
                "&code_verifier=3e6g5o593s1u506n314c6j710x5d726r5p3k730x6r4i1j1t521h042g5y4r4u3z6c4w3q6v2f4z2k5m4k586y140r2s48362i4w5i0k5j5k2m670c4n0c1t3v1o4u25"
        })

        if(response.status === 200){
            const json =  await response.json();
            console.log(json)
            return json["access_token"]
        }

    };

    // workout dates for last 7 days 
    function Last7Days () {
        var result = [];
        for (var i=0; i<7; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push( d.formatDate("YYYY-MM-DD") )
        }

        return(result.join(','));
    }

    var result = Last7Days();

    const getFitbitData = async (authorizationCode) => {
        let accessToken = await getAccessToken(authorizationCode);
        // const date =  new Date(2023, 0, 29);
        // const today = date.toISOString().substring(0, 10);			// may need
        
        
        // Steps data 
        const stepsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/steps/date/${result[6]}/${result[0]}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
            
        })
        // calories
        const calorieResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/calories/date/${result[6]}/${result[0]}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // water
        const waterResponse = await fetch(`https://api.fitbit.com/1/user/-/foods/log/water/date/2023-02-03.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // floors 
        const floorsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/floors/date/${result[6]}/${result[0]}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        // active mintues 
        const activeminsResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/minutesLightlyActive/date/${result[6]}/${result[0]}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            
        // distance travelled
        const distanceResponse = await fetch(`https://api.fitbit.com/1/user/-/activities/distance/date/${result[6]}/${result[0]}.json`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        
        
        
        // Wait for all responses to finish
        const [stepsData, calorieData, waterData,floorsData, activeminsData, distanceData] = await Promise.all([stepsResponse.json(), calorieResponse.json(), waterResponse.json(),floorsResponse.json(), activeminsResponse.json(),distanceResponse.json()]);
        if (stepsResponse.status === 200 && calorieResponse.status === 200 && waterResponse.status === 200 && floorsResponse.status === 200 && activeminsResponse.status === 200 && distanceResponse.status === 200) {
            
            
            // Get the avg calories
            var avgCals = 0;
            for (var i=0; i<7; i++) {
                avgCals += calorieData["activities-calories"][i].value;
            }
            avgCals = avgCals/7.0;
            
            // Get the avg floors climbed
            var avgFloors = 0;
            for (var i=0; i<7; i++) {
                avgFloors += floorsData["activities-floors"][i].value;
            }
            avgFloors = avgFloors/7.0;
            
            // Get the avg active minutes
            var avgMins = 0;
            for (var i=0; i<7; i++) {
                avgMins += activeminsData["activities-minutesLightlyActive"][i].value;
            }
            avgMins = avgMins/7.0;
            
            // Get the avg distance
            var avgDist = 0;
            for (var i=0; i<7; i++) {
                avgDist += distanceData["activities-distance"][i].value;
            }
            avgDist = avgDist/7.0;
            
            // Get water data
            var water = waterData.summary.water;
            
            // Get Steps Data
            // will return an array of data and value pairs
            
            console.log("avgCals=" + avgCals + ", avgDist="+avgDist+",avgFloors=" +avgFloors+", avgMins="+ avgMins+", water="+ water);

            return avgCals, avgDist, avgFloors, avgMins, water, stepsData;
        } else {
            return {value: false};
        }
    };

    const data = getFitbitData();


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
            <div style={{...styles.trainerManageClients.container.clientDescription, ...styles.trainerManageClients.container.sections}}>
                <div style={styles.trainerManageClients.container.headers}>Client Description</div>
            </div>
            <div>
                Intake - Goals edit
            </div>
            <div>
                Steps Goal - Edit
            </div>
            <div style={{...styles.trainerManageClients.container.catchUpNotes, ...styles.trainerManageClients.container.sections}}>
                <div style={styles.trainerManageClients.container.headers}>CatchUp Notes</div>
                <div style={styles.trainerManageClients.container.catchUpNotes.textBox}>
                    <textarea></textarea>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default TrainerManageClients;