var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');


//module.exports = export (or "expose") the internally scoped functions
module.exports = {
    all: function(req, res){
        console.log('show ALL the stuffff')
        Todo.find({}, function(err, todos){
            console.log('in the callback')
            res.render('todos', { todos: todos });
        });
    },
    create: function(req, res){
        var todoContent = req.body.content;
        // create todo
        Todo.create({ content: todoContent }, function(err, todo){
            // reload collection
            res.redirect('/todos');
        });
    },
    destroy: function(req, res){
        var id = req.params.id;

        Todo.findByIdAndRemove(id, function(err, todo){
            res.redirect('/todos');
        });
    },
};