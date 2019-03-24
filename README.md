# 1001-ways-to-die-inMexico

## Background 

In Mexico, there have been important changes in the epidemiological occurrence of diseases, related to environmental, demographic, economic, social, and cultural changes, which have influenced the epidemiological profile, as well as the characteristics related to the presence of disease and death in the Mexican population.

This has been described as a phenomenon of risk transition, since during the first half of the 20th century, the population was exposed to the inherent risks of a country in social development, characterized by poor hygiene and underutilization of health services, while in the second half there was a transition to health problems associated with development and urbanization. 
As a result, risks of exposure to a sedentary lifestyle, stress, tobacco and drug use, violence, as well as unhealthy eating habits have increased, resulting in high cholesterol and high blood pressure, factors responsible for much of the global burden of the disease. This transition has resulted in problems such as obesity and other chronic degenerative diseases at increasingly younger ages.

Therefore, the objective of this project was to analyze 1) the main causes of mortality in Mexico in the period 2012-2017, as well as 2) the strangest causes of death recorded.
We will analyze if and how the cause of death varies by age group and state of residency.
Beyond will determine the average age of the deceased population, and the most common time of the day to die.

## Methods

*Data

For this purpose, we will use two databases:
1)	Inegi deaths ( 2012-2017)
2)	Population by federative entities (2012-2017)

*ETL Process

We will clean, organize and upload both databases to a relational database (sqlite).
Create all views necessary for analysis and deployment.

*Data engeneering

Data will be prepared and relative death rates obtained for the population of each state by using the observed mortality divided by the total population.
Also, bins will be created to define age groups.

*Flask-sqlalchemy Endpoints

We will create at least 4 Endpoints, which will allow to query the data.

1) Home

2) Query for the most common causes of death (10) in general (whole country), by state, and by age groups.

3) Query for the weirdest causes of death, using the same criteria as above.

4) Data visualization for the most common time of day to die by year and for all the years included in this study

5) *Optional: Query time of the day to day by most common causes of death in Mexico.

*HTML and css
* Design html template to hold all the information, allowing dashboard view for general findings and individual queries

*APP.js

* Visualization with plotly.js, D3.js and chartist.js (optional: interactive map).

*Deployment

The final product will be deployed using heroku


