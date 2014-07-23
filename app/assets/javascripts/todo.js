var Collection = Collection || {};

// ToDo Constructor Function
Collection.ToDo = function(id, content, complete){
  this.id = id;
  this.content = content;
  this.complete = complete;
};

// method to generate HTML for one ToDo
Collection.ToDo.prototype = {
  showView: function(){
    var todoHTML = '<li id=todo_' + this.id + '>' + this.content;
    todoHTML += '<div>' + this.complete + '</div>';
    todoHTML += '</li>';

    return todoHTML;
  }
};
