---
layout: post
title:  "Introducing PlacemarkStory.com!"
date:   2015-05-31 22:29:00
categories:
---

##Pause for reflection
I recently completed my first solo project for General Assembly, which was intended to let us demonstrate the skills we learned over the previous 8 weeks of the program. Looking back, it's been quite a journey to compress into such a short period of time: from "Hello World" in Ruby, through version control, object-oriented programming, unit tests, classic SQL database management, the ActiveRecord database interface, Sinatra sites, RESTful routes, Ruby on Rails development, JSON, web-based APIs, JavaScript, the DOM, jQuery, object-oriented JavaScript, and AJAX techniques among many other topics. We've been learning so many advanced techniques that there was barely a day or two leftover to mention HTML or CSS.

##PlacemarkStory.com
As I write this project description, the reason I'm able to reflect on the first 8 weeks of General Assembly with a bit of distance is because it's actually closer to week 11 at this point (and, spoiler alert: <span style="color:pink">GA kept getting better and better</span>). After spending the project week getting the application up and running, I spent the next 1.5 weeks or so finding extra time that I never would have guessed I had, and using it to refine the project to a point that I'm now comfortable sharing online.

My intention was to develop a spatially-enabled application that had real value, and which solved a problem that was currently unaddressed in the marketplace; in other words, something that people would use, rather than just a demonstration of my abilities. The application I came up with leverages [Mapbox.js](https://www.mapbox.com/mapbox.js/api/) to support the production of shareable story maps. Users simply create a story and begin to define spatial events within it, using what I consider to be an exceptionally intuitive interface. The events are used to generate an interactive slippy map, which can be saved and shared.

![PlacemarkStory example]({{ site.url }}assets/images/placemark-story-illustration.png)

The project is described in detail at [its repository](https://github.com/nbumbarger/placemark_story), which also includes some example use cases that I hope will prove to be inspiring.

#Secondary features
I'd like to draw attention to a few features that aren't explicitly described in the repository's readme, which I'm especially proud of:

- The site is responsive. In addition to using relatively-sized elements, it 
switches to a vertical orientation in the absence or sufficient horizontal space.
- The guest user experience is really something special, in my opinion. Visitors can make a complete map without logging in, and it will be saved transparently to a guest section of the database. Guest users are able to return to the map or share it by keeping track of its URL, with the only disabled feature being access to a gallery of their accumulated work. If they *do* decide to create an account after having already created a map, ownership of all the work that was generated during the guest session is transferred to the new account. This eliminates a significant barrier to discovery, and I hope it will be exactly what's necessary to encourage curious individuals to give the application a try.
- The features are served as GeoJSON, and streamed asynchronously into the maps.
- There are custom validations all over the place. If the user misunderstands a necessary input, they will be clearly directed to the specific error, even when the input in question is not a standard field recognized by Ruby on Rails.
- I'm just very pleased with the user-interface for inputting location data. I believe the project achieves my goal of being the most user-friendly way to create placemark-based story maps currently in existence.

#What's next for the project?
I'm not done with this project by any means. It is impossible to look through the full list of [Mapbox.js usage examples](https://www.mapbox.com/mapbox.js/example/v1.0.0/) without feeling intensely inspired to keep adding feature-after feature to the application. For example, how cool would it be to allow users to save and share their specific view, by building [location information into the URL](https://www.mapbox.com/mapbox.js/example/v1.0.0/leaflet-hash/). Or even to use their view to control what is seen by third-parties in real-time, by updating or listening to an instanced viewport attribute using AJAX? How about using the [Mapillary API](https://www.mapbox.com/mapbox.js/example/v1.0.0/images-from-mapillary/) to include crowd-sourced streetview imagery? The possibilities seem endless, and just looking through the examples for inspiration has proven to be an enormous time-sink.

My current priority is to add some customizability features so that users can really make maps their own. This will include basemap selection and the optional abilities to set a zoom-level and marker design on a per-event basis. I also plan to add some deep customization options for the table of contents and pop-up balloon design and behavior in finished maps. For example, an option to update the active placemark in response to the user's position in a block of text, as seen in [this example](https://www.mapbox.com/mapbox.js/example/v1.0.0/scroll-driven-navigation/), would really help to emphasize the story theme of the application.

##Go check it out!
Now that you've read about it, I encourage you to give the project a try at [www.PlacemarkStory.com](http://www.placemarkstory.com/). Just keep in mind that the application is in active development, and that the database may be purged relatively frequently at this early stage. I'm very interested in feedback and bug reports, so if you notice anything amiss or would like to suggest a feature,  head over to the [project's repository](https://github.com/nbumbarger/placemark_story) and submit an issue. If you'd like, you could even close the bug yourself and submit a pull request. 

##A note on posts this week (June 1-7)
As much as I've enjoyed setting up a personal site this weekend, it's time to remind myself that I'm nearing the end of an extremely demanding web-development program, and to focus completely on my other work. Due to my eagerness to get this project description online, there are many topics that I wanted to post about that would have added some context to its development, but I'm afraid I'll need to add them retroactively. Stay tuned for tutorials regarding some of the techniques that went into creating this application, such as the use of Mapbox APIs, the guest user model, and setting up a GeoJSON server to enable asynchronous feature streaming.