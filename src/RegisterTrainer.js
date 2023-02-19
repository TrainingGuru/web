import React from 'react';
import {TextField} from "@mui/material";
import InputBox from "../../components/reusable/InputBox";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

import { Link } from "react-router-dom";

const styles = {
    registerTrainer: {
        minHeight: "100vh",
        backgroundColor: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        card: {
            width: "450px",
            backgroundColor: "white",
            padding: "4rem",
            borderRadius: "10px",
            position: "relative",
            logo: {
                marginBottom: "2rem",
                img: {
                    width: "60px"
                },
                textAlign: "center"
            },
            header: {
                textAlign: "center",
                marginBottom: "2rem",
                h1: {
                    fontSize: "2rem",
                    fontWeight: "600",
                    marginBottom: ".5rem"
                }
            },
            footer: {
                textAlign: "center",
                marginTop: "1.5rem"
            },
            a: {
                textDecoration: "none",
                color: "#35339a",
                marginLeft: ".1rem"
            },
            form: {
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                item: {
                    position: "relative",
                    top: ".82rem",
                    left: "1.4rem",
                    fontSize: "1.3rem",
                    opacity: ".4",
                    input: {
                        border: "none",
                        outline: "none",
                        background: "rgba(255, 255, 255, .3)",
                        padding: "1rem 1.5rem",
                        borderRadius: "100px",
                        width: "100%"
                    },
                    icon: {
                        position: "absolute",
                        top: ".82rem",
                        fontSize: "1.3rem",
                        opacity: ".4"
                    }
                },
                other: {
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: ".5rem"
                },
                button: {
                    background: "black",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "100px",
                    textTransform: "uppercase",
                    letterSpacing: "2px"
                }
            }
        }
    }
}


function RegisterTrainer() {

    return (<div style={styles.registerTrainer}>
        <div style={styles.registerTrainer.card.container}>
            <div style={styles.registerTrainer.card}>
                <div style={styles.registerTrainer.card.logo}>
                    <img style={styles.registerTrainer.card.logo.img} src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"} alt="logo"/>
                </div>
                <div style={styles.registerTrainer.card.header}>
                    <h1 style={styles.registerTrainer.card.header.h1}>Register</h1>
                    <div>Please fill in the below information to register an account</div>
                </div>
                <form style={styles.registerTrainer.card.form}>
                    <div style={styles.registerTrainer.card.form.item}>
                        <FontAwesomeIcon style={styles.registerTrainer.card.form.item.icon} icon={faUser}/>
                        <input style={styles.registerTrainer.card.form.item.input} type="text" placeholder="Enter Name" required autoFocus/>
                    </div>
                    <div style={styles.registerTrainer.card.form.item}>
                        <FontAwesomeIcon style={styles.registerTrainer.card.form.item.icon} icon={faEnvelope}/>
                        <input style={styles.registerTrainer.card.form.item.input} type="text" placeholder="Enter Email" required/>
                    </div>
                    <div style={styles.registerTrainer.card.form.item}>
                        <FontAwesomeIcon style={styles.registerTrainer.card.form.item.icon} icon={faLock}/>
                        <input style={styles.registerTrainer.card.form.item.input} type="password" placeholder="Enter Password" required/>
                    </div>
                    <div style={styles.registerTrainer.card.form.item}>
                        <FontAwesomeIcon style={styles.registerTrainer.card.form.item.icon} icon={faLock}/>
                        <input style={styles.registerTrainer.card.form.item.input} type="password" placeholder="Confirm Password" required/>
                    </div>
                    <div style={styles.registerTrainer.card.form.other}>
                        By clicking 'Create Account', you agree to our <a style={styles.registerTrainer.card.a} href="#">Privacy Policy</a>
                    </div>
                    <button style={styles.registerTrainer.card.form.button} type="submit">Create Account</button>
                </form>
                <div style={styles.registerTrainer.card.footer}>
                    Already have an account? <Link to="/login">Sign In</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RegisterTrainer;