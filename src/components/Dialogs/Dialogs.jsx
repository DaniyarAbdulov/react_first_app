import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = (props) =>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/id=1'>Michael</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/id=2'>Trevor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/id=3'>Lester</NavLink>
                </div>
             </div>
           <div className={classes.messages}>
                <div className={classes.dialog}>Hello Kid</div>
                <div className={classes.dialog}>Where am I?</div>
                <div className={classes.dialog}>Did you do it?</div>
            </div>
        
        </div>
        
    )
}
export default Dialogs; 