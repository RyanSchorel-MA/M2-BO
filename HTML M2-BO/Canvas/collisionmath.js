import { Gamelogic } from "./gamelogic.js";
export function overlap(rect1,rect2){

    if (rect1.x < (rect2.x + rect2.w) && (rect1.x + rect1.w) > rect2.x && rect1.y < (rect2.y + rect2.h) && (rect1.y +rect1.h) > rect1.y){

        return true;
    }
    return false;


}