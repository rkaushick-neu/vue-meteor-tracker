import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./taskCollection";

Meteor.publish('tasks', function publishTasks() {
    return TasksCollection.find();
});