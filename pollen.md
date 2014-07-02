Having suffered from hayfever for a long time, none of the pollen count sites I came across were much use. I decided to create my own - just a site with today's pollen count and as little else as possible, and that's what we'll be creating in this tutorial.

Here's the final result:
<a href="http://www.todayspollencount.uk" title="Today's Pollen Count site" target="_blank">
<img src="/static/images/projects/pollen/pollen.jpg" alt="Today's Pollen Count site">
</a>

The site's setup is incredibly simple - there's one HTML page which displays data, and a backend API which generates the pollen count data. We'll be using the following technologies to make the site:

- [Node](http://nodejs.org)
- [Express](http://expressjs.com/)
- [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/)

Make sure you install these before we start! 

##Setup
To begin with (after installing the above dependencies), we need to set up an Express project. In a new folder, create `package.json` and add the following:

	// package.json
	{
	  "name": "pollencountsite",
	  "version": "1.0.0",
	  "private": "true",
	  "description": "Scrape current pollen count",
	  "main": "server.js",
	  "author": "[ you ]",
	  "dependencies": {
	    "express": "latest",
	    "request": "latest",
	    "cheerio": "latest",
	  }
	}

Save this file, then open the terminal and run `npm install` in this folder to install all your dependencies.

##Backend

The backend needs to have two functions: generate the pollen count data and serve our frontend files. Step one is to generate the data: the [Met Office has an API here](http://www.metoffice.gov.uk/datapoint) but this doesn't have pollen count data - for that you need to [contact them](http://www.metoffice.gov.uk/datapoint/product/uk-daily-site-specific-forecast). The simplest option to get this data is by scraping the [BBC weather site for a certain location](http://www.bbc.co.uk/weather/2643743) :). 

Obviously, scraping sites is a bit of a grey area, so if the site owner asks you not to, then stop! However, we only need to visit the site once a day
Node scrape
BBC
Met Office API
Save to AWS
Cache, headers

##Deploying
Heroku

For hosting we'll use the following (no need to install anything at the moment):

- [Heroku](https://www.heroku.com/)
- [Amazon S3](http://aws.amazon.com/s3/)

##Performance
Page Insights
Gzip (node)
CSS in body
Minify +  concat (grunt)

##Resources
http://scotch.io/tutorials/javascript/scraping-the-web-with-node-js
