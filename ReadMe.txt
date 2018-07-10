Common Angular Commands:

Create New Project: ng new project-name
Play/Run/Open Website: ng serve --open


To remove the red swiggly TS Experimental Decorator's.
1). In your IDE close the folder .
2). Open the folder but at a higher level so that the tsconfig.json is included into your project by default.  Within that file there is an option for experimental decorators.  
Your IDE just needs to see it, so no changes from you.  Simply by re-opening the now much larger folder/file will be default allow it to be seen.

