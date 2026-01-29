import { Meteor } from 'meteor/meteor'
import { TasksCollection } from '../imports/api/taskCollection';
import '../imports/api/tasksPublication';
import '../imports/api/tasksMethods';

const insertTask = async text => await TasksCollection.insertAsync({text});

Meteor.startup(async () => {
  const taskCount = await TasksCollection.find().countAsync();
  if (taskCount === 0){
    await insertTask('First Task');
    await insertTask('Second Task');
    await insertTask('Third Task');
    await insertTask('Fourth Task');
    await insertTask('Fifth Task');
    await insertTask('Sixth Task');
    await insertTask('Seventh Task');
    await insertTask('Eighth Task');
  }
});
