#CS 22A - JavaScript for Programmers

I completed [JavaScript for Programmers](http://www.foothill.edu/schedule/outlines.php?act=1&rec_id=5825&Quarter=2016S) (5 units) at Foothill College in Fall '15. The class assumed you had "a solid programming background and was not intended for firsttime programmers". This online course provided two weekly lectures, a forum moderated by professor Rula Khayrallah along with weekly coding assignments which she both graded and reviewed.

In this course, we focused on the implemented features in **ECMAScript 6** and on **ECMAScript 5** and learned the differences where applicable. Since we were programming using ECMAScript 6, she had us use the Firebug console, since its already supports it.

Some of the projects I created from this course:
* **Memory**: [http://klammertime.github.io/Memory/](http://klammertime.github.io/Memory/)
* **Snowed In** - Guessing Game: [http://klammertime.github.io/Snowed-In/](http://klammertime.github.io/Snowed-In/)
* **Node/AJAX Demo**: [http://klammertime.github.io/businessReviewJSAJAX/](http://klammertime.github.io/businessReviewJSAJAX/)
* And files included in this repo.

###Some of the topics covered include:

* **JavaScript Basics & Best Practices** 
  * Primitives types vs objects and the introduction of primitive type **symbol** in ECMAScript 6. Operators, numbers including **Number.isNaN (ES6)**, the math library, falsy and truthy values, logical operators, strings and string methods (**new ES6 string methods such as includes, endsWith, startWith, and repeat**), character access, concatenation, and explicit type conversion. Best practices such as using strict mode, the strict equality operator, declaring variables, and using semicolons. 
  
* **JavaScript Control Structures**
  * The conditional operator, switch statements, how to avoid infinite loops, increment and decrement operators, shorthand operators, do ... while ... statements, for loops, and the introduction of the **let statement** in ES6.
  
* **Functions**
  * **Default parameters** for arguments introduced in ES6, function definition expressions vs function declarations, **arrow functions** in ES6, local vs global variables, nested functions and scope, declaring variables with a **let statement** in ES6 allowing block scope, variable and function **hoisting**, **recursion** and **closures**.
  
* **Objects & Properties**
  * Methods, prototypes, creating objects with constructors, 'this', inheritance, and hasOwnProperty(). New in ES6: symbols as property keys, shorthand notation for object literals where you emit the key, computed property keys, destructuring of objects, and classes which doesn't actually introduce a new object-oriented inheritance model but instead is built on top of existing prototype based inheritance.
  
* **Arrays**
  * Nested and sparse arrays, rearranging arrays using the reverse and sort methods, splice methods, push, pop, shift, unshift, forEach & map methods, for ... in & for ... loops, filter, join, slice, indexOf, lastIndexOf, concat, and **destructuring array assignments** in ES6.

* **Sets and Maps**
  * We briefly covered this, but if I'm honest, I still don't fully understand it and it's on my TODO list to learn and create a project with so I can cement that understanding. 

* **JavaScript in the Browser**
  * When the browser encounters a `<script>` tag, it will be read or downloaded by the browser and the code executed by the JS interpreter, then the parsing and rendering of HTML continues until the end of document is reached. Therefore, if you place your `<script>` tag at the top of your document, use the *defer* attribute so the browser will defer execution until after the document has been loaded and parsed. If you have several, they run in the order they appear. Using the HTML5 *async* attribute makes the browser run the script as soon as possible but doesn't block document parsing while its being downloaded. If you have several async scripts, they run as they load so they might execute out of order. 
  * The `<script>` tag can go in the `<head>` or at the end of the `<body>` elements, but if you place it in the `<head>`, make sure to use the *defer* or *async* attribute. 
  
* **Document Object Model**
  * DOM tree containing document (entire document), element (HTML tags) and text nodes (content inside the tags) with parents, children, siblings, ancestors and descendants. Different browsers deal with white space inside HTML source inconsistently, this makes the node traversal of the DOM tree unpredictable. In contrast to node traversal which is unpredictable due to browser inconsistencies in handling white space inside HTML, element traversal ignores text nodes and can be used instead. 
  * Still, different browsers use different layout engines, each of which implements the DOM standards to different levels of compliance. jQuery is a good solution to that problem. Still, most engines support the following features: getElementById, getElementsByTagName, getElementsByClassName. The following are used for element based traversal: firstElementChild, lastElementChild, previousElementSibling, nextElementSibling, and childElementCount.

* **Event Driven Programming**
  * The event type, event target, event handler or listener, registering event listeners using addEventListener, and event bubbling.

* **Scripting Style**
  * CSS: transition, transform, and animation.

* **Namespace Considerations**
  * Declaring variables outside of any function makes it become a property of the global object, and in client side JavaScript the global object is window. Not only is there a long list of properties already defined on window, but often web pages use JS code from several different sources and external files. Two solutions that add only one name to the global namespace are: use an object as a namespace or use a function as a temporary namespace. If we don't want to add a name to the global namespace, we can define an anonymous function, enclose our code in the parentheses and immediately invoke it.

* **Libraries & Frameworks**
  * jQuery: selecting elements with jQuery (by HTML tag, id, or class name), specifying multiple selectors, combining selectors, the jQuery object, getter and setter methods, methods such as text, html, val, addClass, removeClass, toggleClass, hide, show, and fadeOut. Event handling using click, on, and off and the document ready event. 

* **Client Server Architecture**
  * Finally we move from the client side to the server side, browser acting as the client, and the web server which responds with what is requested, such as HTML, JS, images, style sheets etc. Clients and servers communicate using the HTTP protocol, with the HTTP request including a POST or GET, URL being requested, optional headers and request body. The HTTP response includes a status code such as 200 'ok' or 404 'Not Found', headers passing extra info about the response such as content type, and the response body. The HTTP protocol relies on TCP/IP to send and receive sequences of bytes.

* **Server-Side JavaScript**
  * Node.js, Node asynchronous programming, user authentication, and database access using SQLite.

* **JSON** 
  * How to perform **object serialization** using **JSON.stringify** to convert an object, array or a primitive value to a JSON formatted string, with the option of adding a **replacer** argument. 
  * How to parse JSON using **JSON.parse** in order to return an object, array or primitive value from a JSON string, with the option of using a **reviver** argument, transforming the parsed value before it is returned. 
  * How to make a **deep copy** of an array or any object by converting it to JSON then parsing it back. 

* **AJAX**
  * Sending requests to the server, XMLHttpRequest object, handling asynchronous responses, retrieving the responses, combining with Node.js, AJAX with JSON, AJAX with jQuery.

* **Promises**
  * ES6 introduction of a new way to perform asynchronous programming with the promise - an object representing a still unknown result. 
  
* **Client-Side Storage**
  * Web storage API including localStorage and sessionStorage objects.

* **HTML5 APIs**
  * History management(history.pushState, history.popstate, history.state), Geolocation API, web workers and web sockets.

* **The Model-View-Controller Design Pattern**
  * Introduction of an organizational paradigm with many advantages: easier maintenance, reuse, testing, complexity tamed, specialization and parallel development.

* **Web Application Design Considerations**
  * 3-tier architecture, the web stack and scalability.

* **Testing**
  * Test Driven Development (TDD): we used Selenium, a browser automation tool commonly used for automating the testing of web applications. 

* **Mobile Platforms**






