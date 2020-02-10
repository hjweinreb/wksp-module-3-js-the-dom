// Preset values
const FROGS = 4;
const track = document.getElementById('track');

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
    // 2. Create li
    let lane = document.createElement('li');
    track.appendChild(lane);
    
    // 3. Create span and add it to the li
    let number = document.createElement('span');
    number.innerText = laneCount;
    
    // 4. Assign an id to each lane
    lane.id = ("frog-"+laneCount);

}

let racers = [];

for(let x = 0; x <= FROGS; x++){
    const newFrog = frogStable[x];
    racers.push(newFrog);
}
    console.log(racers);


for(let x = 1; x < racers.length; x++){
    const frogInLane = document.getElementById("frog-"+x)
    const frogNumber = (racers[x].number)
    // const frogName = racers[x].name
    const frog = document.createElement('span')
    frog.classList.add("frog")
    frog.innerText = frogNumber
    frogInLane.appendChild(frog)
    console.log(frog)
    frog.style.backgroundColor = racers[x].color
    racers[x].progress = 0
    racers[x].lane = `frog-${x+1}`;
    console.log(racers)
}

function racingFrog(frog) {
    var hopDistance = Math.random()*100
    
    let progress = frog.progress;

    const bounce = setInterval(function() {
        progress += hopDistance;
        document.querySelector(('.frog')).style.left = `${progress}%`;
    }, Math.random() * 1000);
}

racers.forEach(function(racer) {
    racingFrog(racer);
});