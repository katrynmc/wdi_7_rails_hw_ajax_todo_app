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

if (this.complete === false) {
    var todoHTML = '<h2 id=todo_' + this.id + '>' + this.content;
    todoHTML += '<span class="glyphicon glyphicon-remove pull-right"></span></h2>';
    return todoHTML;
} else {
    var todoHTMLcomplete = '<h2 id=todo_' + this.id + '>' + this.content + '<div class="pull-right"><span class="glyphicon glyphicon-ok"></span></div>';
    todoHTMLcomplete += '</h2>';
    return todoHTMLcomplete;
}

  }
};
