
Do this	To see this
# Heading One
## Heading Two
### Heading Three
#### Heading Four
##### Heading Five
###### Heading Six

One or more lines of text separated by one or more blank lines.

This is another paragraph.

One or more lines of text separated by one or more blank lines.

This is another paragraph.

I am a sentence with
a line break.
I am a sentence with
a line break.

To create a line break, end a line in a paragraph with two or more spaces.

* One
* Two
   * Two and a half
* Three

1. One
2. Two
3. Three


This is some *Italic text* you might want

This is some **Bold text** you might want

This is some ***Bold AND Italic text***

This is some ~~strike through text~~ you might want

Superscript is here: x^2 + 2x + y^2 = 7

My web site is at <http://www.markdownpro.com>
My email address is: <support@markdownpro.com>

Links get auto-linked even when they are not enclosed in '<>' characters.

My web site is at http://www.markdownpro.com
My email address is: support@markdownpro.com
------
(horizontal line)

Paragraph with a quote

> This is some interesting quote
> Another blockquote paragraph
Paragraph with a quote:
This is some interesting quote
Another blockquote paragraph
![My cool picture](http://markdownpro.com/assets/html5_logo.png).

Important annotations that needs attention:

    This is important paragraph
    Another important paragraph of text

Or you can do this ``` Simple text goes here ```
Important annotations that needs attention:

This is important paragraph
Another important paragraph of text
Just indent your text with 4 spaces or 1 tab

Or you can do this Simple text goes here


First Header  | Second Header
------------- | -------------
Row1 Cell1    | Row1 Cell2
Row2 Cell1    | Row2 Cell2

Pretty Linking

    [1]: http://google.com/        "Google"
    [2]: http://search.yahoo.com/  "Yahoo Search"
    [3]: http://search.msn.com/    "MSN Search"

Will give you a properly formatted and friendlier links:
      I get 10 times more traffic from Google than from Yahoo or MSN.


# Case Study

Setup and folder structure


Setting up a React project based on components takes a little bit of time to map out what components you need and where.

Home Page Mock ![Home Page](./assets/wireframes/home-page.png "Home Page")

Add Profile Page Mock ![Add Profile Page](assets/wireframes/add-profile-page.png "Add Profile Page")

Guide Page Mock ![Guide Page](assets/wireframes/guide-page.png "Guide Page")

Individual Project Page Mock ![Individual Project Page](assets/wireframes/individual-project-page.png "Individual Project Page")

Recent Projects Page ![Recent Projects Page](assets/wireframes/recent-projects-page.png "Recent Projects Page")

View Profile Page Mock ![View Profile Page](assets/wireframes/view-profile-page.png "View Profile Page")

Search Page Mock![Search Page](assets/wireframes/search-page.png "Search Page")

Based on the wireframes above we decided we need the following components for our React App

- Header
  - LoginStatus
- HomeHero
- FinishedProjects
- Footer
- Profile
- UserData
  - Form
- UserInfo
  - UserProjects
- RecentProjects
- IndividualProjects
  - UserReports
- Guide
  - HowTo
  - Resources
- SearchForm
  - SearchResults
  - Users

During the setup phase we realized we needed to modify the gulp file to also concatenate, minify rename and reroute our css from front and back end stylesheets, including our custom styles to the client folder. To do this we had to add the following node modules

* gulp-concat (concatenates all files passed to it)
* gulp-minify (minify function that when called will do just that)
* gulp-rename (to take all output css and rename it 'we used styles.min.css' as it was the most descriptive and standard)

After setup was complete we ran into an issue with the navigation re: React Router and our App being an SPA. We successfully created our React components and pass them with front end routes to mount inbetween our Header and Footer components. One issue we ran into was the way Router and Link work to ensure the active page is highlighted. Initially we set it up so that when you first visit the site it sets the initial state of the Header component to be active on '/'.

We ran into one major flaw of this implentation though, when you type a path or refresh a page thats not on home the 'Home' navigation button becomes active. To make this work properly we set the initial state of the Header component to the following `{active: window.location.pathname}` and this will set the initial state to based on the current url. We also use a ternary statement in the path's set to the following `{this.state.active === '/' ? 'active' : ''}` so it will setState active to whichever url you are on.
