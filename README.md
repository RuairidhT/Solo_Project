# QAC Solo Project
## [BILLY NO WEIGHTS](http://34.89.83.113/)

## Index
* [Brief](#brief)
  * [Solution](#solution)
* [Architecture](#arch)
  * [Entity Relationship Diagrams](#erd)
  * [UML Class Diagram](#uml)
* [Testing](#testing)
* [Deplyment](#deployment)
  * [Technologies Used](#tech)
* [Front End Design](#FE)
* [Future Improvements](#future)
* [Authors](#author)
* [Acknowledgements](#acknowledgements)

<a name="brief"></a>
## BRIEF
To create an OOP-based application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training. The individual project can be on any subject you deem fit of encapsulating all aspects of the aforementioned modules. This could be a business case, such as a library or supermarket system, or something to do with a hobby of yours – as long as the application is CRUD functional. 

<a name="solution"></a>
### Solution
I decided to create a gym application that would allow the user to view, add, update and delete the different machines and exercises that could be done at the gym. A many to many relationship between the machines and exercises has been added to allow the user to see what machines can be used for an exercise and vice versa.

<a name="arch"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagram
The ERD shows the 3 tables that have been implemented into this project, as you can see there is a many to many relationship between the machines and exercises table meaning an associative table needed to be added.
An associative (or junction) table maps two or more tables together by referencing the primary keys of each data table. In effect, it contains a number of foreign keys, each in a many-to-one relationship from the junction table to the individual data tables.
![Entity Relationship Diagram](/Documentation/ERD.png)
<a name="uml"></a>
### UML Class Diagram
![UML Class Diagram](/Documentation/UMLClassDiagram.png)

<a name="testing"></a>
## Testing
For the backend API JUnit tests were carried out making sure as much of the code was covered as possible, as for the front end selenium tests
were carried out checking the functionality of each button and input. Throughout the project codacy was used to make sure the quality of code
is up to standard.

* [JUnit Tests](https://github.com/RuairidhT/Solo_Project/blob/developer/Documentation/CodeCoverage.PNG)
* [Selenium Tests](https://github.com/RuairidhT/Solo_Project/blob/developer/Documentation/SeleniumReports.PNG)
* Codacy Tests
	* [Front end Tests](https://app.codacy.com/manual/RuairidhT/Solo_Project/dashboard)
	* [Back end Tests](https://app.codacy.com/manual/RuairidhT/Solo_Project_Backend/dashboard)
	
<a name="deployment"></a>
## Deployment
![CI](/Documentation/CI.png)

First and foremost Trello was used as a project tracking tool which allowed me to track the tasks which needed to be done and the priority of each task.
I used Github as a VCS in order to keep track of the code and manage the different features that have been added.
The front end website was created using HTML, JavaScript and CSS, and the back end was created using Java and spring boot for the API and MySQL for the database.
Jenkins was used for CI by automatically cloning from my Github and putting it on to GCP where the website was being hosted. 
JUnit was used to test the back end while Selenium was used to test the front end. 

<a name="tech"></a>
### Technologies Used

*   GCP - Live Environment
*   MySQL Database- Database
*   Java - API 
*   JavaScript - Front End 
*   HTML, CSS - Front End Design
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git](https://github.com/RuairidhT/Solo_Project) - VCS
*   [Trello](https://trello.com/b/QgtEgD3s/billy-no-weights) - Project Tracking


<a name="FE"></a>
## Front End Design
### Wireframes
###### Home Page
![Home page Wireframe](/Documentation/WFHomePage.png)
###### Exercises Page
![Exercise page Wireframe](/Documentation/WFExercisePage.png)
###### Machines Page
![Machines page Wireframe](/Documentation/WFMachinesPage.png)
###### Modify Button Popup
![Modify Button Popup Wireframe](/Documentation/WFModifyPopup.png)

### Final look
###### Home Page
![Home page](/Documentation/indexPage.png)
###### Exercises Page
![Exercise page](/Documentation/ExercisePage.png)
###### Machines Page
![Machines page](/Documentation/MachinesPage.png)
###### Modify Button Popup
![Modify Button Popup](/Documentation/Modal.png)

<a name="future"></a>
## Future Improvements
* Change "Machines" to "Equipment"
* Improve the way that machines/exercises are added to the associative table.
* Impletement Docker for the API.
* Reduce code duplication.

<a name="author"></a>
## Authors
###### Ruairidh Taylor
