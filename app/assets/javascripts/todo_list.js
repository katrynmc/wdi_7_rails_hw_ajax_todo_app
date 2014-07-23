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

  getToDos: function(){
    this.count = 0;

    $.ajax({
      url: 'http://localhost:3000/todos',
    })
    .done(this.todosCallbackHandler.bind(this))
    .done(function(){
this.todoCountElem.html("<p>" + this.count + " ToDos</p>");
    }.bind(this));
  },
  addToDoToList: function(article){
    var newToDo = new Collection.ToDo(todo.id, todo.content, todo.complete),
    todoHTML = newToDo.showView();
    this.todosListElem.append(todoHTML);
    this.count = this.count + 1;
  },
};
