ToDo List Challenge
====================

[![Build Status](https://travis-ci.org/Willibaur/todo_challenge.svg?branch=master)](https://travis-ci.org/makers/instagram-challenge)
--------------------------------------------------

This is a solution to a challenge given by Makers Academy on week 8, part of Learn to code in 12 weeks course.

The aim of the challenge.
-------------------------

Create a ToDo List app using AngularJS, HTML and CSS.

The application needs to be driven by TDD and BDD by using Karma and Protractor.

When the application is 100% functional, needs to be deployed to Heroku.


User stories
------------
```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```



### Optional Extra

* Deploy the app
* Create a persistance layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node
* Make it look purdy (CSS) - try a framework like Bootstrap or Foundation


Technologies used
-----------------

  * Testing
    * Karma
    * Protractor
    * Jasmine


  * Back end framework
    * JavaScript


  * Front end framework
    * AngularJS
    * jQuery
    * CSS
    * Bootstrap


Testing and running environment setup
--------------------------------------

In order to edit, view or modify the source code, you will need to clone the repo shown below, access the folder and execute the following commands to be functional.

```sh
$ git clone git@github.com:Willibaur/instagram-challenge.git
$ cd todo_challenge
$ npm install
$ bower install
```

If you want to run the app locally you need to run two services

```sh
$ http-server
```

In another terminal

```sh
$ webdriver-manager start
```


Web access application
-----------------------

You can access the app locally from console

```sh
$ open index.html
```

or by using your browser adding the underline

```
file:///Users/[USERNAME]/todo_challenge/index.html
```


Contributors
------------

* [William Bautista](https://github.com/Willibaur)
