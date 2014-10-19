// When app matches '/' render the todos template
Todos.Router.map(function() {
    this.resource('todos', { path: '/'}, function () {
        // additional child routes
        this.route('active');
    });
});

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('todos');
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo) {
            return !todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller: controller});
    }
});

// Connect Fixture with template
Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});
