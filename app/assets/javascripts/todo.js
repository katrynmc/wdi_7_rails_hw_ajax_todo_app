var Collection = Collection || {};

// Todo Constructor Function
Collection.Todo = function(id, content, complete){
  this.id = id;
  this.content = content;
  this.complete = complete;
};

// method to generate HTML for one Todo
Collection.Todo.prototype = {
  showView: function(){
    var todoHTML = '<h2 id=todo_' + this.id + '>' + this.content;
    todoHTML += '<div>' + this.complete + '</div>';
    todoHTML += '</h2>';

    return todoHTML;
  }
};
