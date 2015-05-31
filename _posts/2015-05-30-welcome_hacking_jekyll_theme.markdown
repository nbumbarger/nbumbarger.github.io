---
layout: post
title:  "Welcome (or, hacking the basic jekyll theme)"
date:   2015-05-30 14:13:59
categories: [svg]
---

Hello, and thanks for visiting my new site! I’ve written an official introduction in the [About]({{ site.url }}/about/) section, so here I’d just like to focus on the first little hack I made to the basic jekyll configuration while I was moving in.

This site user a content publishing system called [jekyll](http://jekyllrb.com), which came highly recommended as a lightweight and flexible platform for getting content online *fast*. So far, I really like what I see. There’s an entire ecosystem of complete makeover themes for jekyll, but for now I think I’ll start with the basic functionality and build it up to meet my needs.

One of the first things I noticed was that jekyll automatically takes some variables from a file called _config.yml, and uses them to populate fields used throughout the site. ![Default _config.yml settings]({{ site.url }}/assets/images/jekyll-social-media-icons.png)

The file contains variables for a Twitter and GitHub username, but I wanted to include LinkedIn as well.To accomplish this, I had a look around and discovered that the variables were being accessed inside the _includes/footer.html file, which is the template partial used whenever a footer is required in the generated pages. The social media link items are inside the `<div class="footer-col  footer-col-2"><ul class="social-media-list">` list, and follow the form of:

{% highlight ruby %}
{% if site.github_username %}
<li>
<a href="https://github.com/{{ site.github_username }}">
  <span class="icon  icon--github">
    <svg viewBox="0 0 16 16">
      <path fill="#828282" d= "<!—long string of inline svg data -->" />
    </svg>
  </span>
  <span class="username">{{ site.github_username }}</span>
</a>
</li>
{% endif %}
{% endhighlight %}

To add a LinkedIn entry, I simply copied this pattern, and replaced the references to github with linkedin.

The logos themselves are inline Scalable Vector Graphics (SVG) code, and I was able to find an SVG version of the LinkedIn branding at [this site](https://www.iconfinder.com). Simply find a suitable icon, download it as SVG, open the file in a text editor, and use the contents to replace the existing SVG. Specifically, look for the `d=` attribute inside the `<svg>` tag, which mathematically defines the paths used to draw the graphic, and the `svg viewBox=` attribute, which is a coordinate rectangle that defines the part of the SVG to display. Replace these values in the social media item you are using as a template with the values you find in the downloaded SVG, and you’re good to go! Now you can add a `linkedin_username` (or whatever other services you choose to add) variable to your _config.yml file, and it will be called whenever it is referenced in the code. [Here’s the snippet](https://gist.github.com/nbumbarger/8a909f5d8e2d2526ade7) to add to _include/footer.htm, if you’d like to be able to define your LinkedIn profile name in _config.

Welcome to jekyll modification, and welcome to my site. I know that I’ll personally be doing a whole lot more modifcation very soon, after I get some initial content up on this site and need a fun way to cool down. 