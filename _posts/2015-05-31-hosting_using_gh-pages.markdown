---
layout: post
title:  "Hosting a project page on GitHub using gh-pages"
date:   2015-05-31 15:37:00
categories:
---

In my [previous post]({% post_url 2015-05-31-spatial_data_production %}), I described an [introductory lecture](http://nbumbarger.github.io/everything_conf/) I gave regarding spatial data production, the presentation files for which I decided to host as a *gh-pages* branch within the project's repository on GitHub.

## Why use gh-pages?
What better place to house the HTML-based information about your project than right inside its repository? When you save an *index.html* file inside a special branch of your repo named *gh-pages,* that file will be rendered as a webpage when accessed at *http(s)://\<username>.github.io/\<projectname>*.

Note that there is a trick where you can prepend "https://htmlpreview.github.io/?" to the address of an HTML file in your repository, which also causes the HTML to be rendered as a webpage. However, the *gh-pages* method is in a different league, because it separates the project page (metadata, essentially) from the rest of the project's source code (where it probably doesn't belong). With *gh-pages*, you also get a slick URL with a clear relationship to the project.

## Enabling the gh-pages branch
To enable this feature, it is safest to clone a copy of your old repository first. Then, make a new orphan branch called *gh-pages*, empty it out completely, and add the HTML you wish to display when someone visits your project page. Finally, commit the changes and push the *gh-pages* branch up to GitHub. You'll now be able to access the page by going to *http(s)://\<username>.github.io/\<projectname>*.

{% highlight sh %}
# Clone repository
git clone github.com/user/repository.git
# Create a new branch without any parents (an orphan), called gh-pages
cd repository
git checkout --orphan gh-pages
# Remove all files from the old working tree
git rm -rf .
rm '.gitignore'
# Add a fake index.html (here, you would add your own)
echo "My Page" > index.html
# Commit changes
git add index.html
git commit -a -m "First pages commit"
# Push to GitHub
git push origin gh-pages
{% endhighlight %}

# Including assets
The only drawback to this method is that GitHub is not set up to manage static assets for pages. For example, if your project page included a directory of images, you will find that the links are now broken. GitHub assumes that you will use a Content Delivery Network (CDN) to host assets, if you include them at all.

The solution is in a hack introduced at [this site](http://solutionoptimist.com/2013/12/28/awesome-github-tricks/). You can upload images or other content to GitHub's cloud by raising an issue and attaching them to it, and they will be given static URL identifiers that you can reference inside your project page's HTML. The benefit to uploading images in this manner rather than, say, uploading them to Dropbox or even a CDN, is that the issue is directly associated with your page and can serve as a sort of rudimentary asset manager.

##Let's make this a thing
With these techniques, GitHub can be an excellent choice for hosting static content associated with a project, whether that means extra documentation or a preview of an application's functionality. The branch implementation is a great way to keep this metadata separate from the main project repository, while simultaneously keeping it more closely-associated with the project than if it were hosted externally. I, for one, would really appreciate a convention where larger projects could be expected to have a mini-site attached directly to their repositories, and in the future I'm going to try to support this feature whenever I publish something for public consumption.