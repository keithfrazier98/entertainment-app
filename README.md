# Entertainment Web Application

This is a [frontendmentor challenge](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X) project for demonstrating of front-end skills. It is basically a Netflix or Hulu type application complete with a login page but login is not needed to enter and preview the application. The application root URL is the main page displaying a trending section and a grid of all tv series and movies. The data is local, but is mutable and changes made persist for one session. Considering this, bookmarking movies works and will reflect in the bookmarked content page, but will reset once the session is closed.

> Using the search bar on any page will filter data only available to that page, show being on the home page you will filter all the data, and being on the movies page will filter only the movies data. 

[Live Deployment ↗️](https://entertainment-app-one.vercel.app/) -
[GitHub Repository ↗️](https://github.com/keithfrazier98/entertainment-app)

## Stack used
||
|-|
|TypeScript| 
|React|
|TailwindUI / TailwindCSS|
|HTML|
|CSS|


## Pages


URL: `/`
> This is the home page of the application showing trending titles, and listing all the titles below. 

![home](/src/assets/home.png)

URL: `/movies`
> This page shows only movies.

![movies](/src/assets/movies.png)

URL: `/series`
> This page only shows tv series. 

![series](/src/assets/search.png)

URL: `/bookmarked`
> This page shows the moves that user has bookmarked. 

![bookemarked](/src/assets/bookmarked.png)

URL: All URLs feature the search bar 
> The search bar will filter content available to the current page. Searching on the `/movies` page will filter movies, etc.

![search](/src/assets/search.png)

URL: `/login`
> This is the login or sign up page. You can simply press login without any credentials since its not a production app. 

![signup](/src/assets/signup.png)
