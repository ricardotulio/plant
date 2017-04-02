#/bin/bash

mongo --eval "db.version()" > /dev/null 2>&1
while [ $? -ne 0 ]; do
  mongo --eval "db.version()" > /dev/null 2>&1
done

COMMAND=$(printf "db.createUser({user:\"%s\",pwd:\"%s\",roles:[{role:\"readWrite\",db:\"%s\"}]})" "$MONGO_USER" "$MONGO_PASS" "$MONGO_DBNAME")
mongo $MONGO_DBNAME --eval $COMMAND
