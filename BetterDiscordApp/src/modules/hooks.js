import BDV2 from "./v2"
const {useState} = BDV2.react


export function useForceUpdate(){
    return useState()[1];
}