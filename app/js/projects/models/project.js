var app = app || {};

app.Project = Backbone.Model.extend({
    defaults: {
        name: 'New Project',
        url: '#',
        desc: '',
        img: '/static/img/backgrounds/project-placeholder.jpg',
        tags: 'None',
        date: '2014-01-24',
        klass: ''
    }
});
