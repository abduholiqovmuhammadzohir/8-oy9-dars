import React from 'react';
import styles from './index.module.css'
import left from "../../assets/left.svg"
import right from "../../assets/right.png"
import cloud from "../../assets/cloud.png"
import poper from "../../assets/poper.png"
import giphy from "../../assets/giphy.png"
import calendar from "../../assets/calendar.png"
import drive from "../../assets/drive.png"
import notion from "../../assets/notion.png"
import trello from "../../assets/trello.png"
import inter from "../../assets/inter.png"
import tag from "../../assets/tag.png"
import menu from "../../assets/menu.png"
import plus from "../../assets/plus.png"


function Medium() {



    return (

        <>
            <div className={styles.medium}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <img src={left} alt="" />
                        <h1>Yangi loyiha ochish</h1>
                    </div>
                    <div className={styles.right}>
                        <button style={{ backgroundColor: "rgba(226, 226, 234, 1)" }}><span style={{ color: "rgba(146, 146, 157, 1)" }}>Ortga</span></button>
                        <button><span>Davom etish</span> <img src={right} /></button>
                    </div>
                </div>
                <hr />

                <div className={styles.footer}>
                    <img src={cloud} alt="" />
                    <img src={poper} alt="" />
                    <img src={giphy} alt="" />
                    <img src={calendar} alt="" />
                    <img src={drive} alt="" />
                    <img src={notion} alt="" />
                    <img src={trello} alt="" />
                    <img src={inter} alt="" />
                    <img src={tag} alt="" />
                </div>
                <div className={styles.footer1}>
                    <h1>Loyiha  ketma-ketligi</h1>
                    <div className={styles.input}>
                        <div>
                            <label style={{marginLeft:"38px"}}>Ustun nomi</label><br />

                           <img src={menu}/> <input type="text" placeholder='Ustun nomi' />
                        </div>
                        <div>
                            <label>Key</label><br />
                            <input type="text" placeholder='Key' />
                        </div>
                    </div>
                    <div className={styles.input}>
                        <div>
                            <label style={{marginLeft:"38px"}}>Ustun nomi</label><br />
                            <img src={menu}/><input type="text" placeholder='Ustun nomi' />
                        </div>
                        <div>
                            <label>Key</label><br />
                            <input type="text" placeholder='Key' />
                        </div>
                    </div>
                    <img style={{marginTop:"24px", cursor:"pointer" }} src={plus} alt="" />
                </div>
            </div>

        </>
    )
}

export default Medium