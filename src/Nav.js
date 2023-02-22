import React, {useState} from "react";


import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHouseChimney, faPeopleGroup, faUser, faX, faClipboardList, faChartSimple} from "@fortawesome/free-solid-svg-icons";

const styles = {
    navStyles: {
        width: "100%",
        // height: "100vh",
        margin: "0",
        marginBottom: "2%",
        boxSizing: "0",
        boxShadow: "rgb(0 0 0 / 10%) 0px 2px 1px",
        nav: {
            width: "100%",
            height: "2.5em",
            // background: "blue",
            display: "flex",
            justifyContent: "flex-start",
            padding: "1em",
            logo: {
                display: "block",
                position: "relative",
                margin: "auto",
                top: "-0.75em",
                img: {
                    height: "4em"
                }
            }
        },
        burgerMenu: {
            height: "100%",
            width: "3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            cursor: "pointer",
            // background: "red",
            icon: {
                height: "100%",
                width: "100%"
            }
        },
        burgerBar: {
            width: "3em",
            height: "0.25em",
            background: "black",
            borderRadius: "0.5em",
        },
        menu: {
            // width: "30%",
            height: "90%",
            background: "white",
            position: "absolute",
            // borderRight: "1px solid rgb(245, 245, 245)",
            boxShadow: "rgb(0 0 0 / 10%) 0px 0px 2px",
            // top: "0",
            zIndex: "1",
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            // height: "100%",
            width: "20%",
            // float: "left",
            link: {
                fontSize: "1.5rem",
                position: "relative",
                top: "8%",
                padding: "1rem 2rem",
                icon: {
                    paddingRight: "1rem"
                },
                a: {
                    textDecoration: "none",
                    color: "rgb(0, 0, 0)"
                }
            },
            submenu: {
                link: {
                    fontSize: "1.2rem",
                    position: "relative",
                    top: "8%",
                    padding: "0.5rem 2rem",
                    icon: {
                        paddingRight: "1rem"
                    },
                    a: {
                        textDecoration: "none",
                        color: "grey",
                    }
                }
            }
        },
        button: {
            boxShadow: "rgb(0 0 0 / 10%) 2px 2px 2px",
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
                    {/* <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div>
                    <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div>
                    <div style={isMenuClicked? {...styles.navStyles.burgerBar, ...styles.navStyles.unclicked} : {...styles.navStyles.burgerBar, ...styles.navStyles.clicked}}></div> */}
                    
                {isMenuClicked ? <FontAwesomeIcon style={styles.navStyles.burgerMenu.icon} icon={faX}/> : <FontAwesomeIcon style={styles.navStyles.burgerMenu.icon} icon={faBars}/>}
                </div>
                <div style={styles.navStyles.nav.logo}>
                    <img style={styles.navStyles.nav.logo.img}
                         src={"https://assets.api.uizard.io/api/cdn/stream/9789bb7f-8141-48f9-87dd-f2ebdadcbec6.png"}
                         alt="logo"/>
                </div>
                
            </nav>

            <div style={isMenuClicked? {...styles.navStyles.menu, ...styles.navStyles.visible} : {...styles.navStyles.menu, ...styles.navStyles.hidden}}>
                <div style={{...styles.navStyles.menu.link, ...styles.navStyles.button}}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faHouseChimney}/>
                    <Link to="/" style={styles.navStyles.menu.link.a} onClick={updateMenu}>HOME</Link>
                </div>
                <div style={styles.navStyles.menu.link}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faPeopleGroup}/>
                    <Link to="/clientscatchup" style={styles.navStyles.menu.link.a} onClick={updateMenu}>CLIENTS</Link>
                    <div style={styles.navStyles.menu.submenu}>
                        <div style={{...styles.navStyles.menu.submenu.link, ...styles.navStyles.button}}>
                            <FontAwesomeIcon style={styles.navStyles.menu.submenu.link.icon} icon={faClipboardList}/>
                            <Link to="/manageclients" style={styles.navStyles.menu.submenu.link.a} onClick={updateMenu}>MANAGE</Link>
                        </div>
                        <div style={{...styles.navStyles.menu.submenu.link, ...styles.navStyles.button}}>
                            <FontAwesomeIcon style={styles.navStyles.menu.submenu.link.icon} icon={faChartSimple}/>
                            <Link to="/clientscatchup" style={styles.navStyles.menu.submenu.link.a} onClick={updateMenu}>CATCH UP</Link>
                        </div>
                    </div>
                </div>
                <div style={{...styles.navStyles.menu.link, ...styles.navStyles.button}}>
                    <FontAwesomeIcon style={styles.navStyles.menu.link.icon} icon={faUser}/>
                    <Link to="/profile" style={styles.navStyles.menu.link.a} onClick={updateMenu}>PROFILE</Link>
                </div>
            </div>
        </div>
    );

}

export default Nav;