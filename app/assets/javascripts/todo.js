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
    var todoHTML = '<h2 id=todo_' + this.id + '>' + this.content + '</h2>';
    return todoHTML;
} else {
    var todoHTMLcomplete = '<h2 id=todo_' + this.id + '>' + this.content;
    todoHTMLcomplete += '<div>' + this.complete + '</div>';
    todoHTMLcomplete += '</h2>';
    return todoHTMLcomplete;
}

  }
};
