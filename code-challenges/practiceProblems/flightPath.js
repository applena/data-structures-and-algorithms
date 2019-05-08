// Source: given as an interview question for interns at Google circa 2012

// You are given a stack that contains PlaneTicket instances; each ticket has an Origin and a Destination. This stack represents a single multi-city itinerary flown by a single person. Reconstruct that person's flight path, and return to me the cities they visited, in the order they visited them.

// Example input/output (do not give unless explicitly asked)
// Input: [ JFK->IAD, SFO->JFK, IAD->ORD, SEA->SFO ] Output: [ SEA, SFO, JFK, IAD, ORD ]

// Notes
// This question uses a "stack" of plane tickets only for fun; the stack has no inherent meaning.

// Each city appears at most twice in the stack of tickets: once as a destination, and once as an origin.

// Every ticket will be used exactly once in creating the correct itinerary.

// You can assume that the origin and destination are airport codes, or cities, or whatever... but you're guaranteed that they'll be unique.

// Output type should be a List, but could be an array if they're struggling with a List.

function flightPath(arr){
  let flightPath = [];

  flightPath.push(arr[0].origin);
  flightPath.push(arr[0].destination);
  let current = arr[0].destination;

  function _findFlightPath(){
    console.log('arr.length = ', arr.length);
    
    let isPresent = false;
    
    if(arr.length === 1){
      if(current === arr[0].origin){
        flightPath.push(arr[0].destination);
        return flightPath;
      } else {
        flightPath.unshift(arr[0].origin);
        return flightPath;
      }  
    }

    for(let j = 1; j<arr.length; j++){
      if(arr[j].origin === current){
        flightPath.push(arr[j].destination);
        current = arr[j].destination;
        arr.splice(j, 1);
        isPresent = true;
      }
    }

    if(!isPresent){
      current = flightPath[0];
      
      for(let i = 0; i < arr.length; i++){
        if(arr[i].destination === current){
          flightPath.unshift(arr[i].origin);
          current = arr[i].origin;
        }
      }
    }
    _findFlightPath();
  }

  _findFlightPath();
  console.log(flightPath);
  return flightPath;
}

let arr = [ {origin:'JFK', destination:'IAD'}, {origin:'SFO', destination:'JFK'}, {origin:'IAD', destination:'ORD'}, {origin:'SEA', destination:'SFO'} ];

flightPath(arr);

