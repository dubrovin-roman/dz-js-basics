const toDoList = {
  tasks: [{title: 'Помыть посуду', id: 1, priority: 1}],
  addTask: function (task) {
    if (!task?.id 
      || typeof task.id !== 'number' 
      || task.id <= 0 
      || this.getTaskById(task.id)
      || !task?.priority 
      || typeof task.priority !== 'number'
      || !task?.title
      || typeof task.title !== 'string') {
        return false;
      }
      this.tasks.push(task);
      return true;
  },
  getTaskById: function (id) {
    if (typeof id !== 'number' 
      || id <= 0 
      || this.tasks.length === 0) {
      return false;
    }
    for (let task of this.tasks) {
      if (task.id === id) {
        return task;
      }
    }
    return false;
  },
  deleteTaskById: function (id) {
    if (typeof id !== 'number' 
      || id <= 0 
      || this.tasks.length === 0
      || !this.getTaskById(id)) {
      return false;
    }
    const index = this.tasks.findIndex(el => el.id === id);
    return this.tasks.splice(index, 1);
  },
  sortByPriority: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
  updateNameById: function (id, title) {
    if (typeof id !== 'number'
      || typeof title !== 'string'
      || !this.getTaskById(id)
    ) {
      return false;
    }
    const index = this.tasks.findIndex(el => el.id === id);
    this.tasks[index].title = title;
    return this.tasks[index];
  },
  updatePriorityById: function (id, priority) {
    if (typeof id !== 'number'
      || typeof priority !== 'number'
      || !this.getTaskById(id)
    ) {
      return false;
    }
    const index = this.tasks.findIndex(el => el.id === id);
    this.tasks[index].priority = priority;
    return this.tasks[index];
  }
}
/*
console.log(toDoList.addTask({title: 'Почистить картошку', id: 1, priority: 2}));
console.log(toDoList.addTask({title: 'Почистить картошку', id: 2, priority: 5}));
console.log(toDoList.addTask({title: 'Вынести мусор', id: 3, priority: 3}));
console.log(toDoList.addTask({title: 'Пропылесосить', id: 4, priority: 4}));
console.log(toDoList.addTask({title: 'Приготовить еду', id: 5, priority: 3}));
console.log(toDoList.getTaskById(1));
console.log(toDoList.deleteTaskById(3));
console.log(toDoList.deleteTaskById(123));
console.log(toDoList.updateNameById(5, 'Приготовить еду update'));
console.log(toDoList.updateNameById(123, 'Приготовить еду update1'));
console.log(toDoList.updatePriorityById(5, 10));
console.log(toDoList.updatePriorityById(123, 10));
toDoList.sortByPriority();
console.log(toDoList.tasks);
*/
const newTasks = {
    tasks: [{ id: 1, title: 'тест', priority: 0}],
    getTaskById: function (id) {
    if (typeof id !== 'number' 
      || id <= 0 
      || this.tasks.length === 0) {
      return false;
    }
    for (let task of this.tasks) {
      if (task.id === id) {
        return task;
      }
    }
    return false;
  }
};

console.log(toDoList.addTask.call(newTasks, {title: 'Почистить картошку', id: 2, priority: 5}));
console.log(toDoList.addTask.call(newTasks, {title: 'Вынести мусор', id: 3, priority: 3}));
console.log(toDoList.addTask.call(newTasks, {title: 'Пропылесосить', id: 4, priority: 4}));
console.log(toDoList.addTask.call(newTasks, {title: 'Приготовить еду', id: 5, priority: 3}));
console.log(toDoList.deleteTaskById.call(newTasks, 1));
toDoList.sortByPriority.call(newTasks);
console.log(newTasks.tasks);
console.log(toDoList.updateNameById.call(newTasks, 5, 'Приготовить еду update'));
console.log(newTasks.tasks);
console.log(toDoList.updatePriorityById.call(newTasks, 5, 10));
console.log(newTasks.tasks);