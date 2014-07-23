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
  createToDo: function(event){
    var $form = $(event.target),
      $content = $form.find("input[name='content']"),
      $complete = $form.find("input[name='complete']"),
      requestObj = {todo: {content: $content.val(), complete: $complete.val()}};

      $content.val("");
      $body.val("");

    event.preventDefault();
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/todos',
      data: requestObj,
      dataType: 'json'
    })
    .done(this.addToDoToList.bind(this))
    .done(function(){
      this.todoCountElem.html("<p>" + this.count + " ToDos</p>");
    }.bind(this));
  },
  init: function(getToDosID, todosListID, todoCountID){
    this.getToDosButton = $(getToDosID);
    this.todosListElem = $(todosListID);

    this.todoCountElem = $(todoCountID);

    this.count = 0;

    $('#new-todo').on('submit', this.createToDo.bind(this));

    this.getToDosButton.on('click', this.getToDos.bind(this));

    this.getToDosButton.trigger('click');


  }
};
