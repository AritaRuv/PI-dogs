import React from "react";
import '././style-sheets/loading.css'

export default function Loading(){
    return(
        <div className="dot-wave">
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        </div>
    )
}