import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { TasksCollection } from "./taskCollection";

async function insertTask(text){
    check(text, String);
    return await TasksCollection.insertAsync({
        text,
        createdAt: new Date,
    });
}

Meteor.methods({ insertTask });