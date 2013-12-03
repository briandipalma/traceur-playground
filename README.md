To run the example execute

<code>node index.js</code>

then navigate to 

<code>localhost:9966</code>.

In the debugger you should get a source map version of the ES6 classes.

To see what traceur creates...

This command will compile and save compiled output to out.js file

````bash
./node_modules/traceur/traceur --out out.js Monster.js 
````

Leave out the <code>--out out.js</code> and traceur will run the JS.

If you wish you can install <code>traceur</code> globally with

<code>npm install traceur -g</code>

To set up this project

<code>npm install</code> is required of course...
