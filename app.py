import os

import pandas as pd
from pandas.io import sql
from pandas import DataFrame

import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.orm import sessionmaker

import sqlite3 as lite


app = Flask(__name__)


path = 'db/'
db_name = 'deaths_inegi.sqlite'

conn = 'sqlite:///' + path + db_name

print(conn)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def index_data():
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select * from vw_muertes_estado where data_year=2016;"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")

    print(result_df)
    
    df = result_df.to_dict(orient='records')
    print(df)
    return jsonify(df)


@app.route("/years")
def years_ep():
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select distinct data_year from vw_muertes_estado;"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")



    update_list = []

    for i in range((len(result_df))):
        update_data = {
            'data_year': int(result_df['data_year'].iloc[i])
        }
        
        update_list.append(update_data)

    print(update_list)

    return jsonify(update_list)


@app.route("/data_map/<year_to_process>")
def data_map(year_to_process):
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select * from vw_muertes_estado where data_year = "+ str(year_to_process) + ";"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")

    print(result_df)
    
    df = result_df.to_dict(orient='records')
    print(df)
    return jsonify(df)


@app.route("/data_top_10/<year_to_process>")
def data_top_10(year_to_process):
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select * from vw_data_top_10 where data_year = "+ str(year_to_process) + " order by muertes desc limit 10;"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")

    print(result_df)
    
    df = result_df.to_dict(orient='records')
    print(df)
    return jsonify(df)


@app.route("/death_by_gender/<year_to_process>")
def death_by_gender(year_to_process):
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select * from vw_deaths_by_gender where data_year = "+ str(year_to_process) + " order by muertes desc;"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")

    print(result_df)
    
    df = result_df.to_dict(orient='records')
    print(df)
    return jsonify(df)

@app.route("/derechohabientes_by_year/<year_to_process>")
def derechohabientes_by_year(year_to_process):
    
    try:
        print("[#########] Reading table")
        
        print(path + db_name)
        conn = lite.connect(path + db_name)

        cursor = conn.cursor()

        sql_select_Query = "select * from vw_derecho_habiencia where data_year = "+ str(year_to_process) + " order by cantidad_derecho asc;"
        print(sql_select_Query)

        cursor.execute(sql_select_Query)

        result_df = DataFrame(cursor.fetchall())
        table_desc = cursor.description

        headers = []
        for header in table_desc:
            headers.append(header[0])

        result_df.columns = headers

        cursor.close()
        
        print("[#########] Table saved to dataframe")

    except Exception as e:
        print(f'Error detected in file', str(e))
    finally:
        #closing database connection.
        conn.close()
        print("[#########] SQLite connection is closed")

    print(result_df)
    
    df = result_df.to_dict(orient='records')
    print(df)
    return jsonify(df)

if __name__ == "__main__":
    app.run()
