var Collection = Collection || {};

Collection.TodoList = {

  todosCallbackHandler: function(todos){
    var todosHTML = "",
    newTodo;

    this.count = todos.length;

    todos.forEach(function(todo){
      newTodo = new Collection.Todo(todo.id, todo.content, todo.complete);
      todosHTML += newTodo.showView();
    });

    this.todosListElem.empty();
    this.todosListElem.append(todosHTML);
  },

  getTodos: function(){
    this.count = 0;

    $.ajax({
      url: 'http://localhost:3000/todos',
    })
    .done(this.todosCallbackHandler.bind(this))
    .done(function(){
    this.todoCountElem.html("<p>" + this.count + " Todos</p>");
    }.bind(this));
  },
  addTodoToList: function(todo){
    var newTodo = new Collection.Todo(todo.id, todo.content, todo.complete),
    todoHTML = newTodo.showView();
    this.todosListElem.append(todoHTML);
    this.count = this.count + 1;
  },
  createTodo: function(event){
    var $form = $(event.currentTarget),
      $content = $form.find("input[name='content']"),
      $complete = $form.find("input[name='complete']"),
      requestObj = {todo: {content: $content.val(), complete: $complete.val()}};

      $content.val("");
      $complete.val("");

    event.preventDefault();

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/todos',
      data: requestObj,
      dataType: 'json'
    })
    .done(this.addTodoToList.bind(this))
    .done(function(){
      this.todoCountElem.html("<p>" + this.count + " Todos</p>");
    }.bind(this));
  },
  init: function(getTodosID, todosListID, todoCountID){
    this.getTodosButton = $(getTodosID);
    this.todosListElem = $(todosListID);

    this.todoCountElem = $(todoCountID);

    this.count = 0;

    $('#new-todo').on('submit', this.createTodo.bind(this));

    this.getTodosButton.on('click', this.getTodos.bind(this));

    this.getTodosButton.trigger('click');


  }
};
