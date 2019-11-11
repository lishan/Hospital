## sequelize auto to generate models
sequelize-auto -o "./server/models" -h localhost -d "./server/db/sqlite3.db" --dialect sqlite -C

## import data
.read db.schema
.import data.csv record
.separator ","
