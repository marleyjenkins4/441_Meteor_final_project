import {Mongo} from 'meteor/mongo';


//to create a collection we use a constructor function

//new Mongo.Collection('user_posts_collection');


//takes the name of the collection you create
// an object is returned from this constructor which provides us with a
//bunch of methods for inserting, fetching, updating, fetching

export const UP_Collection_Access= new Mongo.Collection('phone_numbers');
