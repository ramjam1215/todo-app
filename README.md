# TodoApp

'todo-app started 10-24-19' 
//Firebase extra credit set up tutorial, 
-used link from trello board.
-the tutorial told me to navigate to the firebase.google.com and create a new project
//new project called todo-app, as well as its nickname
then i did...
the ng new todo-app, npm install
//Adding firebase to web app, called todo-app
 npm install firebase-tools from google firebase link(later had to do an install for the other angular firebase objects)
copy pasted some firebase initializing script code from above into the bottom of my index.html body tag(eventually removed because i'm using the environment.ts and the ngModule imports 
-made changes because that also ended up having obvious firebase information that was dependent on my code base
//deploy firebase hosting steps 1-4, which made me also navigate into the my todo-app's settings and set up its storage location
threw errors until i finshied above and now firebase deploy command eexcuted

//basic code implementation worked after finishing the tutorail. i had to make some minor adjustments,
and learned how to use the gitIgnore.... i know I'm late to the party
I created a git repositry and pushed todo-app to github after i tested the app with ng serve
still need to do alot more work. But it was a good start


10-25-19
added routing to todo-app
Routes are declared in the app.module.ts and its implemented in the app.component.
My biggest issue with assignments are the CSS, so i made some pretty rudimentary adjustments, but the routing links need to be seperated better( the<a> tags )
I need to fix the two way binding to my firebase database dealing with the horribly implemented Appservice and todo-list component
I also need to review forms, because i dont think my task/todos are properly pushed to my database

10-26-2019
I had made a previous mistake of not updating my gitignore file properly, which led to my environment.ts to be uploaded to git.
I went back and deleted the old firebase project and created a new one. I then had to re-initialize the firebase connections with a new database.
I tried to work on improving my css skills, but honestly i stink. I think i want to familiarize myself with bootstrap. but i spent alot of time tryign to understand the forms, firebase, and routing. Very interesting stuff even though my css presentation is ugly.
