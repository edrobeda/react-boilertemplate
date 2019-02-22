
##REQUIRED
[CouchDB][https://couchdb.apache.org/]  
[PouchDB][https://pouchdb.com/]  

##USING COUCHDB

>systemctl start couchdb.service  
>systemctl enable couchdb.service  
>crontab -e
>> redis-server --daemonize yes

##TO ACCESS
#####local
>http://127.0.0.1:5984/_utils  

##USEFULL HELP
#####Setting up a sistem variable
>set CDB={username}:{password}@http://127.0.0.1:5984  
#####Get views 
>curl -X GET "$CDB"/ {database} /_design/ {table} /_view/ {view_name}  
#####Generate a uuids needed to insert on database  
>curl -X GET "$CDB"/_uuids  
#####Insert into Database  
>curl -X PUT "$CDB"/{database}/{UUIDS} -d JSON_DATA  