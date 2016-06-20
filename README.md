## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.
### Description
This project is an exercise to optimize a provided website with a number of optimiztaions and performance-related issues so that it achieves a target PageSpeed score of 90 and the website runs at 60 frames per second.
### Getting started

##### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:
1. Check out the repository
1. To inspect the site, you have to setup & run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 80
  ```
3. Open a browser and visit localhost:80
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.
5. The following steps has to be performed in a new terminal:
  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 80
  ```

6. Copy the public URL ngrok gives you and try running it on the PageSpeed Insights link: https://developers.google.com/speed/pagespeed/insights/
7. Paste the public URL provided by ngrok and analyze the site to check if the target PageSpeed has been achieved.
8. The path of the index.html: Veena0803/Website-Optimization/index.html. This html file has the target PageSpeed achieved.

Good luck!

##### Part 2: Optimize Frames per Second in pizza.html
* Changed function updatePositions() by preforming calculations outside the for loop.
* Used transform and translateX to optimize instead of style.left in for loop for background pizzas.
* Changed from querySelectorAll to faster selectors when accessing DOM elements, such as getElementById and getElementsByClassName to speed up functions.

### Optimization Tips and Tricks
* Iterates through pizza elements on the page and changes their widths
* Changed document selector to getElementsbyClassName to optimize the loop and speed up the the selection of elements
* Store randomPizzaContainer in a global variable . This would save from looking up each iteration of the loop
* Loop over each item contained in randomPizzaContainer and update its style.width property to a % width
``` bash
        for (var i = 0; i < pizzaChangeLength; i++) {
            pizzaSizeChange[i].style.width = changedWidth + '%';
         }
  ```
### Other Tools
The tool I used to automate my development process - Grunt. You will find my gruntfile.js for the project is located in the main directory and also in the views sub-directory.

If you like to run my gruntfile
``` bash
cd /to my project directory/
$ grunt
```

### Other Optimizations
* I used the webfont loader to offload the google web font and prevent it from render blocking.
* The print.css was given a media attribute of print so that it will only be used when printing the page.
* Images included in the project was compressed and resized.
* HTML, CSS & JS minification was done to achieve the PageSpeed of 90 & above.

### Contributors:
The project is based on Website Optimization, the website is developed by Udacity instructors.

##### Other Sources Used:
* WebFont Loader: https://www.sitepoint.com/improve-page-performance-font-loader/
* Grunt installation: http://gruntjs.com/installing-grunt