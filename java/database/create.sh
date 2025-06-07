#!/bin/bash
# This script creates a PostgreSQL database for the final capstone project in Linux environment.
BASEDIR=$(dirname $0)
DATABASE=final_capstone

sudo -u postgres psql -f "$BASEDIR/dropdb.sql" &&
sudo -u postgres createdb $DATABASE &&
sudo -u postgres psql -d $DATABASE -f "$BASEDIR/schema.sql" &&
sudo -u postgres psql -d $DATABASE -f "$BASEDIR/user.sql" &&
sudo -u postgres psql -d $DATABASE -f "$BASEDIR/data.sql"

# The following commented-out code is for creating the database in a Windows environment.

##!/bin/bash
# BASEDIR=$(dirname $0)
# DATABASE=final_capstone

# psql -U postgres -f "$BASEDIR/dropdb.sql" &&
# createdb -U postgres $DATABASE &&
# psql -U postgres -d $DATABASE -f "$BASEDIR/schema.sql" &&
# psql -U postgres -d $DATABASE -f "$BASEDIR/user.sql" &&
# psql -U postgres -d $DATABASE -f "$BASEDIR/data.sql"