


##


10.14.217.103   stg1   tomcat/P@sswrd0!    日志路径： cd /bankapp/tomcat/logs/BRMSD-LOAN
/bankapp/tomcat/logs/BRMSD-LOAN     less pafa.log
10.14.221.115   stg2

## mongoDB

```js
show dbs
use test
db.dropDatabase()

show collections
db.createCollection(name, options)  
options = { "capped": "创建固定集合", "autoIndexId": "自动在 _id 字段创建索引", "size": "固定集合最大值字节", "max": "固定集合中文档的最大数量"}
db.collection_name.drop()

db.collection_name.insert(document)
db.collection_name.insertOne(document)
db.collection_name.insertMany(document)
db.collection_name.insert({"name" : "mongo"})
db.collection_name.save(document)

db.collection_name.remove(
   query,
   {
     justOne: boolean,
     writeConcern: document
   }
)
db.collection_name.remove({})

db.collection_name.update(
    query,
    update,
    {
        upsert: boolean,
        multi: boolean,
        writeConcern: document
    }
)
db.collection_name.save(
   document,
   {
     writeConcern: document
   }
)
db.collection_name.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})

db.collection.find(query, projection)
db.collection_name.find()
db.getCollection('PreloanResearchDraft').find({"userId": "LIXIANG232"})
db.PreloanResearchDraft.find({"userId": "LIXIANG232"})


等于    {key:value}	        db.col.find({"likes":"50"}).pretty()	    where likes = '50'
小于	{key:{$lt:value}}	db.col.find({"likes":{$lt:50}}).pretty()	where likes < 50
小于等于 {key:{$lte:value}}	 db.col.find({"likes":{$lte:50}}).pretty()	 where likes <= 50
大于    {key:{$gt:value}}	db.col.find({"likes":{$gt:50}}).pretty()	where likes > 50
大于等于 {key:{$gte:value}}	 db.col.find({"likes":{$gte:50}}).pretty()	 where likes >= 50
不等于  {key:{$ne:value}}	 db.col.find({"likes":{$ne:50}}).pretty()	where likes != 50

db.col.find({"likes": {$gt:50}, $or: [{"by": "zy"},{"title": "MongoDB"}]})
db.col.find({title:/^教$/})

Double	                1
String	                2
Object	                3
Array	                  4
Binary data	            5
Undefined	              6	已废弃
Object id	              7
Boolean	                8
Date	                  9
Null	                  10
Regular Expression	    11
JavaScript	            13 
Symbol	                14
JavaScript (with scope)	15
32-bit integer	        16
Timestamp	              17
64-bit integer	        18
Min key	                255	Query with -1
Max key	                127

db.col.find({"title" : {$type : 2}})
db.col.find({"title" : {$type : 'string'}})

db.collection_name.find().limit(NUMBER)
db.collection_name.find().limit(NUMBER).skip(NUMBER)
db.collection_name.find().sort({KEY:1}) 1: 升序 -1:降序

db.collection_name.aggregate(AGGREGATE_OPERATION)


```