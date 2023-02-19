import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";

import { Link } from "react-router-dom";


const styles = {
    login: {
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
                color: "#35339a"
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: ".5rem",
                    checkbox: {
                        display: "flex",
                        alignItems: "center",
                        gap: "7px"
                    }
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


function Login() {

    return (<div style={styles.login}>
        <div style={styles.login.card.container}>
            <div style={styles.login.card}>
                <div style={styles.login.card.logo}>
                    <img style={styles.login.card.logo.img} src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"} alt="logo"/>
                </div>
                <div style={styles.login.card.header}>
                    <h1 style={styles.login.card.header.h1}>Sign In</h1>
                    <div>Please login to use application</div>
                </div>
                <form style={styles.login.card.form}>
                    <div style={styles.login.card.form.item}>
                        <FontAwesomeIcon style={styles.login.card.form.item.icon} icon={faEnvelope}/>
                        <input style={styles.login.card.form.item.input} type="text" placeholder="Enter Email" required autoFocus/>
                    </div>
                    <div style={styles.login.card.form.item}>
                        <FontAwesomeIcon style={styles.login.card.form.item.icon} icon={faLock}/>
                        <input style={styles.login.card.form.item.input} type="password" placeholder="Enter Password" required/>
                    </div>
                    <div style={styles.login.card.form.other}>
                        <div style={styles.login.card.form.other.checkbox}>
                            <input type="checkbox" id="rememberMeCheckbox"/>
                            <label for="rememberMeCheckbox">Remember me</label>
                        </div>
                        <a style={styles.login.card.a} href="#">Forgot my password</a>
                    </div>
                    <button style={styles.login.card.form.button} type="submit">Sign In</button>
                </form>
                <div style={styles.login.card.footer}>
                    Don't have an account? <Link to="/registertrainer">Create an account</Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;