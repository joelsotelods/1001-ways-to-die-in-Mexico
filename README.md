# 1001 Ways to Die in Mexico

![Landing page](static/images/mexicraneos.png)

## Project background 

In Mexico, there have been important changes in the **epidemiological occurrence of diseases**, related to: Environmental, demographic, economic, social, and cultural changes, which have influenced the epidemiological profile, as well as the characteristics related to the **presence of disease and death in the Mexican population**.

This has been described as a _phenomenon of risk transition_, since during the first half of the 20th century, the population was exposed to the inherent risks of a country in social development, characterized by poor hygiene and underutilization of health services, while in the second half there was a transition to health problems associated with development and urbanization.

As a result, risks of exposure to a sedentary lifestyle, stress, tobacco and drug use, violence, as well as unhealthy eating habits have increased, resulting in high cholesterol and high blood pressure, **factors responsible for much of the global burden of the disease.** This transition has resulted in problems such as obesity and other chronic degenerative diseases at increasingly younger ages.

Therefore, the main objective of this project is to analyze the mortality and defunctions indicators that the Mexican population has been presenting in the period 2012-2017.

## Methods

*Data*

For this purpose, we used the following databases:
1)	[Inegi deaths ( 2012-2017)](https://www.inegi.org.mx/programas/mortalidad/)

*ETL Process*

We [cleaned, organized and upload the databases to a relational database (sqlite)](https://github.com/JoannePeel/1001-ways-to-die-in-Mexico/tree/master/etl_process).
Then we created all views necessary for analysis and deployment.


*Flask-sqlalchemy Endpoints*

We created at 6 endpoints, which allow to queries from the previously created views in the database.

Check out the code [here](https://github.com/JoannePeel/1001-ways-to-die-in-Mexico/blob/master/app.py).

*HTML and css*
* Design [html template](https://github.com/JoannePeel/1001-ways-to-die-in-Mexico/tree/master/templates) to hold all the information, allowing dashboard view for general findings and individual queries

*APP.js*

* Visualization with plotly.js, D3.js, chart.js and leaflet.js.
Check out the code [here](https://github.com/JoannePeel/1001-ways-to-die-in-Mexico/tree/master/static/js).

## Result

The result was an interactive webpage with 4 different graphs, which can be updated for 6 different years, as well as an relational database which may be filtered easily to extract interesting information about death, causes of death and other related information.

![Landing page](static/images/screencapture.png)

