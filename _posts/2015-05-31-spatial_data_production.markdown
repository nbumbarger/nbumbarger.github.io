---
layout: post
title:  "Spatial Data Production presentation (Everything Conference)"
date:   2015-05-31 12:19:00
categories:
---

##General Assembly Everything Conference
Last week at General Assembly, we took a pause from our coursework to participate in event they were calling the “General Assembly Everything Conference." The goal may have been to give us some public-speaking experience, but the day was actually a lot of fun. We all gave a 12-minute lecture on absolutely anything we had some experience with and wanted to share about.

There was a talk about programming Arduino boards, one about [web-scraping using Mechanize](https://github.com/nhashmi/everything-conf), and another concerning Amazon Web Services. I would say that the majority of presentations didn't concern programming topics at all, but were still either very interesting or a lot of fun. There was a [presentation about elves](https://github.com/julia-rose/everything_conf), a [presentation on Import Parity Pricing](https://github.com/mugshepherd/everything_conf) by someone who was a market analyst for Fintrac, and one about making money by trading diamonds (yes, you; not a big cartel), which included an aside about the scarcity myth propagated by DeBeers. I'll fill out some more links if I find the associated presentation online.

##Spatial data production presentation
I have a reputation as a person who brings up maps whenever the rest of the class is trying to focus on software development challenges, so my contribution was a lecture on spatial data production using Ruby. Lately I've been focusing on GeoJSON for storage and [Mapbox.js](https://www.mapbox.com/mapbox.js/api/) for presentation, but for this 12-minute demonstration I dialed the complexity all the way down and used KML as a format, since it can be opened right in Google Earth with no need for HTML scaffolding.

I began by describing the structure of a basic KML document, then live-coded a simple Ruby script that generated valid KML from a list of coordinates. I then conceded that most spatial data doesn't start out as coordinates, and demonstrated a script that turned addresses into coordinates using an online geocoding API. Finally, I combined the scripts into one ~15-line (clear, but completely unoptimized) snippet of Ruby code, which ingested addresses to produce a point-based KML map.

#Goals
The goal of the presentation was to demystify programmatic map production, and demonstrate exactly how simple spatial data can be. At the beginner level, I think there is sometimes a tendency to download support libraries and abstract one's interactions with an unknown data format, before examining how that format is really structured. This is the exact opposite of the correct approach, in my opinion. Support software can help you save time if you already know what you're doing, but I think that beginners should get a feeling for the data they are working with using simple examples, then graduate to support libraries for more complex and tedious work.

#Links
You can view my [spatial data production presentation here](http://nbumbarger.github.io/everything_conf/), or view [the source](https://github.com/nbumbarger/everything_conf) on GitHub. The presentation scratches the surface of a JavaScript tool called [remark](https://github.com/gnab/remark), which generates slides based on a special kind of markdown syntax and is a blast to use.

As a followup to this article, I wrote a piece about [adding Project Pages]({% post_url 2015-05-31-hosting_using_gh-pages %}) (including assets) to GitHub repositories using the *gh-pages* branch technique, which is the way I decided to host this presentation.
