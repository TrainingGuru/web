import React, {useState} from "react";


import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHouseChimney, faPeopleGroup, faUser, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const styles = {
    navStyles: {
        width: "100%",
        // height: "100vh",
        margin: "0",
        boxSizing: "0",
        nav: {
            width: "100%",
            height: "5em",
            background: "blue",
            display: "flex",
            justifyContent: "flex-start",
            padding: "1em"
        },
        burgerMenu: {
            height: "100%",
            width: "4em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            cursor: "pointer",
            // background: "red"
        },
        burgerBar: {
            width: "4em",
            height: "0.5em",
            background: "white",
            borderRadius: "0.5em",
        },
        menu: {
            width: "30%",
            height: "80vh",
            background: "aqua",
            position: "absolute",
            // top: "0",
            zIndex: "1",
            // display: "flex",
            // gap: "2rem",
            // flexDirection: "column",
            // height: "100%",
            // width: "20%",
            // float: "left",
            link: {
                // fontSize: "1.5rem",
                // position: "relative",
                // top: "8%",
                // paddingRight: "2rem",
                // paddingLeft: "2rem",
                icon: {
                    // paddingRight: "1rem"
                },
                a: {
                    // textDecoration: "none",
                    // color: "rgb(0, 0, 0)"
                }
            }
        },
        clicked: {

        },
        unclicked: {

        },
        visible: {
            display: "inherit"
        },
        hidden: {
            display: "none"
        }
    }
}

function Nav() {

    // const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
    // const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        // if(!isMenuClicked) {
        //     setBurgerClass("burgerBar clicked");
        //     setMenuClass("menu visible");
        // }
        // else {
        //     setBurgerClass("burgerBar unclicked");
        //     setMenuClass("menu hidden");
        // }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <div style={styles.navStyles}>
            <nav style={styles.navStyles.nav}>
                <div style={styles.navStyles.burgerMenu} onClick={updateMenu}>
                    <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div>
                    <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div>
                    <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div>
                </div>
            </nav>

            <div style={isMenuClicked? {...styles.navStyles.menu, ...styles.navStyles.hidden} : {...styles.navStyles.menu, ...styles.navStyles.visible}}>
                <div style={styles.navStyles.menu.link}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faHouseChimney}/>
                    <Link to="/" style={styles.navStyles.menu.link.a}>HOME</Link>
                </div>
                <div style={styles.navStyles.menu.link}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faPeopleGroup}/>
                    <Link to="/clientstrainer" style={styles.navStyles.menu.link.a}>CLIENTS</Link>
                </div>
                <div style={styles.navStyles.menu.link}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faUser}/>
                    <Link to="/profiletrainer" style={styles.navStyles.menu.link.a}>PROFILE</Link>
                </div>
            </div>
        </div>
    );

}

export default Nav;