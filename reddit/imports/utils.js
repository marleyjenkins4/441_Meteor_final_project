console.log('log from /imports/utils.js');

// import './../imports/utils.js'
export let say_hello = function() {
  return 'hello from imports/utils.js';

}
export let name ='michael whitney'; // multiple named imports


//export default 'this is a default from import/utils.js';


let some_default = 'this is a default val from ./../imports/utils.js';
export default some_default;
