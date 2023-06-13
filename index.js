// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let hq = 42;
    let distance;
    if(someValue >= 42){ 
        distance = someValue - hq;
        return distance;
    }
    else{
        distance = hq - someValue;
        return distance;
    }
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    let feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let blocks;
    if(start >= destination){ 
        blocks = start - destination;
    }
    else{
        blocks = destination - start;
    }
    return (blocks * 264);
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    let fare;
    if(feet <= 400){
        fare = feet*0;
    }
    else if(feet > 400 && feet <= 2000){
        fare = ((feet-400)*2)/100;
    }
    else if(feet > 2000 && feet < 2500){
        fare = 25;
    }
    else{
        fare = "cannot travel that far";
    }
return fare;
}