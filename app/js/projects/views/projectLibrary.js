/* global _ */
/* global Backbone */

var app = app || {};

app.ProjectLibraryView = Backbone.View.extend({
    el: '#projects',

    initialize: function(initialProjects) {
        this.collection = new app.ProjectLibrary(initialProjects);
        this.render();
        this.$el.prepend(this.createNav());
        // this.listenTo(this.collection, 'add', this.renderProject);
        this.listenTo(this.collection, 'reset', this.render);
        this.on('change:filterType', function() {
            this.filterByTag();
        }, this);

    },

    render: function() {
        this.$el.find('.project').remove();
        this.$el.find('.spinner').show();

        this.collection.each(function(item) {
            this.renderProject(item);
        }, this);
        this.$el.find('.spinner').hide();
    },

    renderProject: function(item) {
        var projectView = new app.ProjectView({
            model: item
        });

        this.$el.find('.project__container').append(projectView.render().el);
    },

    events: {
        'click .navWrapper a': 'setFilter'
    },

    // addProject: function(e) {
    //     e.preventDefault();

    //     var formData = {};
    //     $('#addProject').children('input, textarea').each(function(i, el) {
    //         if($(el).val() !== '') {
    //             formData[el.id] = $(el).val();
    //         }
    //     });

    //     console.log(formData);

    //     this.collection.add(new app.Project(formData));
    // },

    setFilter: function(e) {
        e.preventDefault();
        var selected = $(e.currentTarget);

        this.filterType = selected.text();
        $('.navWrapper .selected').removeClass('selected');
        selected.addClass('selected');
        this.trigger('change:filterType');
    },

    filterByTag: function() {
        this.collection.reset(app.projects);

        var tag = this.filterType;
        if(tag !== 'All') {
            var filtered = _.filter(this.collection.models, function(project) {
                return _.contains(project.get('tags'), tag);
            });
            this.collection.reset(filtered);
        }
    },

    createNav: function() {
        var navWrapper = $('<ul class="navWrapper" />');
        navWrapper.append('<li><a href="#" class="selected">All</a></li>');

        _.each(_.uniq(_.flatten(this.collection.pluck('tags'))), function(tag) {
            var link = $('<li><a href="#' + tag + '">' + tag + '</a>').appendTo(navWrapper);
        });
        return navWrapper;
    }
});
