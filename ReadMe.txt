Common Angular Commands:

Create New Project: ng new project-name
Play/Run/Open Website: ng serve --open
ng new generate component some-component-name


To remove the red swiggly TS Experimental Decorator's.
1). In your IDE close the folder .
2). Open the folder but at a higher level so that the tsconfig.json is included into your project by default.  Within that file there is an option for experimental decorators.  
Your IDE just needs to see it, so no changes from you.  Simply by re-opening the now much larger folder/file will be default allow it to be seen.


To Install Bootstrap: ((Confirmed this does work 100% -- if it does not, try re-creating your project))
The following is an understandable consolidation of various tutorials that I have gone through. Please remember that it depends on the versions you are using.

1. Install the angular cli
npm install -g @angular/cli
2. Create na Angular project using angular cli
ng new my-awesome-project
3. Install dependencies
Next, cd in your new project and install requiered dependencies:

npm install bootstrap --save
npm install jquery --save
npm install popper.js --save
Whatch out about popper.js. This lib is used by Bootstrap. However, you have to precisely run npm install popper.js --save because popper is another js lib distributed by npm.

Here is my current configuration:

angular cli: 1.6.8
angular: ^5.2.0
bootstrap: ^4.0.0
jquery: ^3.3.1
popper.js: ^1.12.9

4. Integrate the dependencies to your project
Now that you have all your dependencies, you'll have to "plug" bootstrap into your project.

Open .angular-cli.json file and update script section as follows:

"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
Finally, open src\styles.css and add:

@import "~bootstrap/dist/css/bootstrap.css";
The last operation to be necessary when running angular project in production mode.