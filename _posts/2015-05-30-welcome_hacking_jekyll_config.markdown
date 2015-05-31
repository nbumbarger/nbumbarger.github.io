---
layout: post
title:  "Welcome (or, hacking the Jekyll config)"
date:   2015-05-30 14:13:59
categories: [html]
---

Hello, and thanks for visiting my new site! I've written an official introduction in the [About]({{ site.url }}about/) section, so here I'd just like to focus on the first modification I made to the basic Jekyll configuration while I was moving in.

<h1>A tiny introduction to Jekyll</h1>
This site uses a content publishing system called [Jekyll](http://jekyllrb.com), which came highly recommended as a lightweight and flexible platform for getting content online **fast**. So far, I really like what I see. There's an entire ecosystem of complete makeover themes for Jekyll, but for now I think I'll start with the basic functionality and build it up to meet my needs.

Jekyll is organized as a modular collection of infinitely customizable HTML templates, which fit together along with data produced by various helper methods to form each page. For example, the default home page is composed of references to a header, footer, and content partial. The content partial employs a method to find metadata for every article in a directory, which is used to populate the list-item template that represents each entry in the index. What separates this from heavy-duty blogging platforms is that there is no database; the site is generated at runtime based on these relationships, which necessities a certain simplicity of design by forcing you to adhere to strict conventions.

I won't go into much more detail than that, because I've only just started using Jekyll and that's about all I've picked up on so far. What I would like to share is the first modification I made to this site's configuration, because my desire to add a small feature was precisely how I learned enough about Jekyll's system to be able to summarize it as such.

<h1>Adding a social media platform to the Jekyll configuration</h1>

One of the first things I noticed after initializing a new site was that Jekyll automatically takes a few global variables from a file called *_config.yml*, and uses them to populate fields used throughout the site.

![Default _config.yml settings]({{ site.url }}assets/images/jekyll-social-media-icons.png)

The file contains variables for a Twitter and GitHub username, but I wanted to include LinkedIn as well. To accomplish this, I had a look around and discovered that the variables were being accessed inside the *_includes/footer*HTML file, which I quickly surmised was the partial used whenever a footer is required in the generated pages. The social media link items are inside the `<div class="footer-col  footer-col-2"><ul class="social-media-list">` list of the footer, and follow the form of:

{% highlight html %}
{% raw %}{% if site.github_username %}
<li>
<a href="https://github.com/{{ site.github_username }}">
  <span class="icon  icon--github">
    <svg viewBox="0 0 16 16">
      <path fill="#828282"
        d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761
        0.184-0.... <!-- long string of svg data) -->"
      />
    </svg>
  </span>
  <span class="username">{{ site.github_username }}</span>
</a>
</li>
{% endif %}
{% endraw %}
{% endhighlight %}

To add a LinkedIn entry, you can start by simply duplicating this pattern and replacing the references to github with linkedin.

The logos themselves are inline Scalable Vector Graphics (SVG) code, and I was able to find an SVG version of the LinkedIn branding at [this site](https://www.iconfinder.com). If you're following along, simply find a suitable icon, download it as SVG, open the file in a text editor, and use its contents to replace the existing SVG in the template. Specifically, replace the `d=` attribute inside the `<svg>` tag, which mathematically defines the paths used to draw the graphic, as well as the `svg viewBox=` attribute, which is a coordinate rectangle that defines which part of the SVG to display.

And that's all there is to it! Now you can add a `linkedin_username` (or whatever other services you choose to add) variable to your *_config.yml* file, and it will be called whenever it is referenced in the footer code. [Here's the full snippet](https://gist.github.com/nbumbarger/8a909f5d8e2d2526ade7) you would add to *_include/footer.html* to enable the LinkedIn network badge.

This is a very simple example, but it forced me to look through the platform's source code and gain an understanding of how its pieces fit together, which was really the point of the exercise. Instead of feeling like I'm using someone else's finicky software to manage a site, I feel like I have ownership over the code and that I can change anything about it at will (which is the truth). If you decide to publish using Jekyll or any other platform, I recommend that you start off by finding one little thing you want to change, and figuring out how to do it in a way that adheres to the system's conventions. In my experience, this is one of the best ways to learn. Welcome to Jekyll modification, and welcome to my site.