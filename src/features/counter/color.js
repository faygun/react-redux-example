import React from "react";
import {useDispatch} from "react-redux"
import {selectDefault, selectGreen, selectYellow} from "./colorSlice"

export function Color (){
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <button onClick={()=> dispatch(selectYellow())}>Yellow</button>
                <button onClick={()=> dispatch(selectGreen())}>Green</button>
                <button onClick={()=> dispatch(selectDefault())}>Default</button>
            </div>
        </div>
    )
}