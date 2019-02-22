import React from 'react'

export const inputHandleChange = (value, selfClass, sub = null) => {
	console.log("v",value,'s', selfClass,'sub', sub)
    // let objInsert = {}
    // if(sub){
    //     objInsert[sub] = Object.assign(selfClass.state[sub], { ...value})
    // }else{
    //     objInsert = Object.assign(objInsert, { ...value })
    // }

    // selfClass.setState(objInsert)
}

export const loading = <div> <center> Carregando </center> </div>

