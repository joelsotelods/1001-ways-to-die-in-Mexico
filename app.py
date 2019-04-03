import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.orm import sessionmaker


# Dependencies declaration

import pandas as pd
from pandas.io import sql
from pandas import DataFrame

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

import os

import sqlite3 as lite


app = Flask(__name__)


#################################################
# Database Setup
#################################################

path = 'db/'
db_name = 'deaths_inegi.sqlite'

conn = 'sqlite:///' + path + db_name

print(conn)

try:
    print("[#########] Reading table")
    
    print(path + db_name)
    conn = lite.connect(path + db_name)

    cursor = conn.cursor()

    sql_select_Query = "select * from vw_derecho_habiencia;"

    cursor.execute(sql_select_Query)

    result_df = DataFrame(cursor.fetchall())
    table_desc = cursor.description

    headers = []
    for header in table_desc:
        headers.append(header[0])

    result_df.columns = headers

    #for row in records:
    #    print(row)

    cursor.close()
    
    print("[#########] Table saved to dataframe")

except Exception as e:
    print(f'Error detected in file', str(e))
finally:
    #closing database connection.
    conn.close()
    print("[#########] SQLite connection is closed")



@app.route("/")
def index():
    """Return the homepage."""
    print(result_df)
    
    return render_template("index.html")

@app.route("/data")
def index_data():
    """Return the homepage."""
    print(result_df)
    
    df = result_df.to_json(orient='records')
    print(df)
    return jsonify(df)


if __name__ == "__main__":
    app.run()
