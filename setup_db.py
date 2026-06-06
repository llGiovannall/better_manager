import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

conn = psycopg2.connect(
    host="localhost",
    port="5432",
    user="postgres",
    password="SUA_SENHA",
    dbname="postgres"  
)

conn.autocommit = True
cursor = conn.cursor()

cursor.execute("CREATE DATABASE bettermanager")
print("Banco criado!")

cursor.close()
conn.close()

conn = psycopg2.connect(
    host="localhost",
    port="5432",
    user="postgres",
    password="admin123",
    dbname="bettermanager"
)

cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    )
""")

conn.commit()
print("Tabela criada!")

cursor.close()
conn.close()