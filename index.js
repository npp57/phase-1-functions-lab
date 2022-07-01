function distanceFromHqInBlocks(block) {
if (block < 42) {
    return 42 - block ;
}
return block - 42
};
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(block) {
    let numberOfBlocks = distanceFromHqInBlocks(block);
    return numberOfBlocks * 264
};

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(blockStart, blockEnd) {
    if (blockEnd < blockStart) {
        return (blockStart - blockEnd) * 264;
    }

    return (blockEnd - blockStart) * 264;
};
distanceTravelledInFeet(43, 48);

function calculatesFarePrice(blockStart, blockEnd) {
 let distance = distanceTravelledInFeet(blockStart, blockEnd)
 
 if (distance < 400) {
    return 0;
 } else if (distance > 2000 && distance <= 2500) {
    return 25
 } else if (distance > 2500) { 
    return 'cannot travel that far'
 } else{
 return (distance - 400) * 0.02
 } 
};

calculatesFarePrice(43, 44);
calculatesFarePrice(34,24);