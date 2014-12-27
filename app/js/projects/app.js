var app = app || {};

$(function() {
    app.projects = [
        {
            "name": "Pairs game",
            "url": "/games/pairs/",
            "desc": "<p>Find the pairs of shapes in the fewest moves possible to win.</p>",
            "tags": ["game", "javascript", "phaser"],
            "date": "2014-12-15",
            "img": "/static/img/projects/pairs.png",
            "published": true
        },
        {
            "name": "Web app template",
            "url": "https://github.com/whostolemyhat/app-template",
            "desc": "<p>My boilerplate template for web apps which I use for almost all my projects. Now available as <a href=\"https://www.npmjs.org/package/generator-wsmh-app\" title=\"App template generator on NPM\" target=\"_blank\">a Yeoman generator on NPM</a>.</p>",
            "tags": ["node", "javascript"],
            "date": "2014-07-30",
            "published": true
        },
        {
            "name": "Today's Pollen Count",
            "url": "http://www.todayspollencount.uk",
            "desc": "<p>Hate hayfever? I made a site so you can quickly find out today's pollen count.</p>",
            "tags": ["node"],
            "img": "/static/img/projects/pollen/pollen.png",
            "klass": "project--dark",
            "date": "2014-06-27",
            "published": true
        },
        {
            "name": "World Cup sweepstake tracker",
            "url": "http://worldcup-sweepstake.herokuapp.com/",
            "desc": "<p>A little Node/Backbone app to keep track of the office's World Cup sweepstake.</p>",
            "tags": ["node", "javascript", "backbone"],
            "img": "/static/img/projects/world-cup.jpg",
            "klass": "project--dark",
            "date": "2014-06-16",
            "published": true
        },
        {
            "name": "Text Particles",
            "url": "http://whostolemyhat.github.io/text-particle/",
            "desc": "<p>Making a roguelike? You'll need a text-based particle system! :) Written in Javascript and uses HTML5 canvas, creates an explosion effect using only ASCII characters.</p>",
            "tags": ["javascript"],
            "img": "/static/img/projects/text-particle.jpg",
            "date": "2014-05-14",
            "published": true
        },
        {
            "name": "Check Yourself!",
            "url": "https://play.google.com/store/apps/details?id=com.whostolemyhat.checkyourself",
            "desc": "<p>An Android app which reminds you to check your blood sugar after meals.</p>",
            "tags": ["android"],
            "img" : "/static/img/checkyourself/checkyourself.png",
            "date": "2014-04-01",
            "published": true
        },
        {
            "name": "Roguelike",
            "url": "http://whostolemyhat.github.io/roguelike/",
            "desc": "<p>A simple roguelike game made for Dec's <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p>",
            "img" : "/static/img/projects/roguelike.png",
            "tags": ["game", "javascript", "phaser"],
            "date": "2013-12-30",
            "published": true
        },
        {
            "name": "Particle system",
            "url": "http://whostolemyhat.github.io/particle-system/",
            "desc": "<p>An HTML5 canvas particle system demo.</p>",
            "img": "/static/img/projects/particles.png",
            "tags": ["javascript"],
            "klass": "project--dark",
            "date": "2013-10-24",
            "published": true
        },
        {
            "name": "Tessellate",
            "url": "/games/tessellate/",
            "desc": "<p>Tessellate - a tetris clone written in Javascript. My April entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p>",
            "img": "/static/img/projects/tessellate.png",
            "tags": ["game", "javascript"],
            "date": "2013-04-30",
            "published": true
        },
        {
            "name": "Tilemap generator",
            "url": "http://whostolemyhat.github.io/level-generator",
            "desc": "<p>An implementation of <a href=\"http://gamedevelopment.tutsplus.com/tutorials/cave-levels-cellular-automata--gamedev-9664/\" target=\"_blank\">Gamedevtut's cave generator</a> I'm using in a game. Creates a random tilemap and exports as JSON.</p>",
            "img" : "/static/img/projects/map-gen.png",
            "tags": ["javascript"],
            "date": "2013-08-04",
            "published": true
        },
        {
            "name": "Copycat",
            "url": "/games/copycat/",
            "desc": "<p>A memory game - repeat the sequence! February entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p><p><a href=\"/blether/1gam-february-copycat-game\" title=\"Writeup of Copycat project\">Writeup of the Copycat project</a> on my blog.</p>",
            "tags": ["game", "javascript"],
            "date": "2013-02-28",
            "published": true
        },
        {
            "name": "Pew Pew",
            "url": "/games/pewpew/",
            "desc": "<p>An HTML5 shoot-em-up game - my January entry for <a href=\"http://www.onegameamonth.com/\" target=\"_blank\">One Game a Month</a>.</p><p><a href=\"/blether/one-game-a-month-january-pew-pew\" title=\"Writeup of PewPew project\">Writeup of the PewPew project</a> on my blog.</p>",
            "img": "/static/img/projects/pewpew-large.png",
            "tags": ["game", "javascript"],
            "date": "2013-01-30",
            "published": true
        },
        {
            "name": "Noughts and Crosses",
            "url": "noughts-and-crosses",
            "desc": "<p>A version of noughts of crosses with simple AI, using Javascript.</p>",
            "img": "/static/img/projects/noughts-and-crosses.jpg",
            "tags": ["game", "javascript"],
            "klass": "project--dark",
            "date": "2012-05-30",
            "published": true
        },
        {
            "name": "Snake",
            "url": "snake",
            "desc": "<p>A clone of the game found on old Nokia phones using Javascript and HTML canvas.</p>",
            "img": "/static/img/projects/snake.jpg",
            "tags": ["game", "javascript"],
            "klass": "project--dark",
            "date": "2012-04-30",
            "published": true
        },
        {
            "name": "Pong",
            "url": "pong",
            "desc": "<p>Pong - hit the ball past your opponent to win points.</p>",
            "img": "/static/img/projects/pong.jpg",
            "tags": ["game", "javascript"],
            "klass": "project--dark",
            "date": "2012-02-30",
            "published": true
        },
        {
            "name": "Random Team Generator",
            "url": "/projects/team-generator",
            "desc": "<p>A simple web app which generates random teams from user-submitted names. Built using the Flask framework.</p>",
            
            "tags": ["python", "flask"],
            "date": "2013-01-08",
            "published": true
        },
        {
            "name": "Bookmark application",
            "url": "https://github.com/whostolemyhat/bookmarks",
            "desc": "<p>A (work-in-progress) bookmark site which I wrote to learn about Flask (a very small Python web framework).</p>",
            
            "tags": ["python", "flask"],
            "date": "2012-09-04",
            "published": true
        },
        {
            "name": "Sort Your Life Out!",
            "url": "/projects/sort-your-life-out/",
            "desc": "<p>An Android to-do list app, designed for simplicity because I was fed up of downloading huge apps which had features I never used. Download from <a href=\"https://play.google.com/store/apps/details?id=uk.jamestease.todo\">Google Play</a>.</p>",
            "img": "/static/img/projects/sort-your-life-out/icon.png",
            "tags": ["android"],
            "date": "2012-09-04",
            "published": true
        },
        {
            "name": "Wiki app",
            "url": "http://jt-udacity.appspot.com/",
            "desc": "<p>The final of <a href=\"http://www.udacity.com/overview/Course/cs253/CourseRev/apr2012\" title=\"Udacity Web Application Engineering course\" target=\"_blank\">Udacity CS253 (Web Application Engineering)</a> was to build a wiki-like" +
                    "app using Google App Engine - this is the app I built. Pages can be created and edited " +
                    "only by logged-in users - you can " +
                    "<a href=\"http://jt-udacity.appspot.com/signup\" title=\"Sign up for an account\" target=\"_blank\">sign up here</a>." +
                "</p>",
            
            "tags": ["python"],
            "date": "2012-04-30",
            "published": true
        }
        // {
        //     "name": "Todo list",
        //     "url": "http://www.diminishedseventh.co.uk/labs/todo/",
        //     "desc": "<p>A to-do list, made to teach myself jQuery and Ajax techniques (ajax loading, drag-and-dropping and inline editing).</p>",
        //     "img": "/static/img/projects/todo.png",
        //     "tags": ["javascript", "php"],
        //     "date": "2012-04-30",
        //     "klass": "project--dark",
        //     "published": true
        // }
    ];

    new app.ProjectLibraryView(app.projects);
});
