# aourbanek.github.io
## "aourbanekMDB"
This is the web page I've developed for the final project in Bradley University's CIS 393: Web Technologies & Systems course.
The project's broad goal was to make a website using HTML, CSS, JS, and implementing a database through either MySQL or MongoDB. The actual subject of the site could be chosen freely as long as implementation met the criteria.

However, the option was also given to host the website in github.io by creating a GitHub Page (like this!), which only supports static files and thus cannot support implementation of a traditional database.
As a workaround, I used JavaScript more heavily to implement the following database operations:
- Item insertion
- Updating an item
- Deleting an item
- Searching for items
- Displaying all items (the default behavior)

and instead of a database file, the items are saved in a browser's local storage, with the option to export all the items currently saved to a JSON file.

As a result, the project had to deviate somewhat from my original version of an online site with a collection of movies that *multiple* users could leave reviews for, and instead is simply a local collection of personal movie reviews. That said, I am still quite proud of how it's turned out!
## Site Access / Files Description
- The site can be visited at https://aourbanek.github.io/ on any common browser.
- index.html contains the main content displayed on the page.
  - script.js adds the dynamic elements/is the page's backend.
  - styles.css is, of course, the page's styling.
