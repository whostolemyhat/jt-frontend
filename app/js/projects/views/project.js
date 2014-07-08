var app = app || {};

app.ProjectView = Backbone.View.extend({
    tagName: 'article',
    className: 'project',
    template: _.template( $('#projectTemplate').html() ),

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );

        return this;
    }
});