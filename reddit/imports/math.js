console.log('log from /imports/math.js');

// import './../imports/utils.js'
export let add= function(x,y) {
return x+y;

}

export let multiply= function(x,y) {
return x*y;

}

let squared= function(y) {
return y*y;

}

export default squared;
