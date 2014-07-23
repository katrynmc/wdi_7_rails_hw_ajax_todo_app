var Collection = Collection || {};

Collection.ToDoList = {

  todosCallbackHandler: function(todos){
    var todosHTML = "",
    newTodo;

    this.count = todos.length;

    todos.forEach(function(todo){
      newToDo = new Collection.ToDo(todo.id, todo.content, todo.complete);
      todosHTML += newToDo.showView();
    });

    this.todosListElem.empty();
    this.todosListElem.append(articlesHTML);
  },
};
