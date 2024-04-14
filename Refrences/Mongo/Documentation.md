# Introduction to MongoDB
- MongoDB is a flexible and scalable database system that stores data as JSON-like documents. It's like a digital filing system where data is organized into folders (collections) containing documents (files) that can hold various types of information. MongoDB is known for its simplicity, flexibility, and ability to handle large amounts of data, making it popular for modern application development.

### Project:

- In MongoDB, a project typically refers to a development initiative or a specific task within a larger scope, rather than a technical term within the database itself.

### Cluster:

- A cluster in MongoDB is a group of servers (or nodes) that store your data. It provides high availability and scalability by distributing data across multiple machines.

### Database:

- MongoDB databases are similar to SQL databases. They are logical containers for collections of documents.

### Collection:

- In MongoDB, a collection is equivalent to a table in SQL. It's a group of documents that may or may not share a schema.

### Document:

- A document in MongoDB is equivalent to a row in SQL. It's a JSON-like data structure composed of field-value pairs.

### Field:

- Fields in MongoDB are similar to columns in SQL. They represent the individual pieces of data within a document.

### Key-Value Pair:

- In MongoDB, documents are composed of key-value pairs, where the key is the field name and the value is the data associated with that field.


Example Connection String:

```
mongodb://admin:password123@localhost:27017/mydatabase
```
### Username: admin
### Password: password123
### Hostname: localhost
### Port: 27017
### Database Name: mydatabase
## Initial Setup
### Starting the MongoDB Server
```
mongosh # to start the MongoDB 
```

## Database Management
### Creating and Deleting a Database
```
show dbs              # View list of databases
use db_name           # Create or switch to specified database
db.dropDatabase()     # Delete current database
```

## Collections
### Creating and Deleting a Collection
```
show collections                        # View list of collections
db.createCollection('collection_name')  # Create a named collection
db.collection_name.drop()               # Delete a specified collection
```

## Document Operations
### Inserting Documents
#### Inserting a Single Document
```
db.collection_name.insertOne({
  field1: value1,
  field2: value2
})
```

#### Inserting Multiple Documents
```
db.collection_name.insertMany([
  { field1: value1 },
  { field1: value2 }  // Note: Different value for clarity
])
```

### Reading Documents
#### Basic Queries
```
db.collection_name.find({ key: value })   
db.collection_name.findOne({ key: value })
```

## Advanced Document Insertions
### Controlling Insert Order
#### Ordered Inserts (Default)
```
# Ordered insertion is the default setting
db.collection_name.insertMany([
  { field1: value1 },
  { field1: value2 },
])
```

#### Unordered Inserts
```
db.collection_name.insertMany([
  { field1: value1 },
  { field1: value2 },
], { ordered: false })
```

## Data Import and Export
### JSON Data Operations
#### Importing JSON Data
```
mongoimport --file Path\file_name.json -d database_name -c collection_name
```
#### Exporting JSON Data
```
mongoexport --db database_name --collection collection_name --out Path\file_name.json
```

## Query Enhancements
### Comparison Operators
```
// Eight operator examples:
$eq : Equal To           // equality comparison
$ne : Not Equal To       // inequality comparison
$gt : Greater Than       // greater than
$gte : Greater Than or Equal To  // greater than or equal to
$lt : Less Than          // less than
$lte : Less Than or Equal To    // less than or equal to
$in : In                 // in an array
$nin : Not In            // not in an array
```
#### Using Comparison Operators in Queries
```
db.collection_name.find({ 'fieldname': { $operator: value } })
```

### Cursor Modifiers
```
# Cursor methods for modifying result sets:
count()      # Counts number of documents matching query
limit()      # Limits the number of documents returned
skip()       # Skips over a specified number of documents
sort()       # Sorts documents according to criteria
```
#### Applying Cursor Methods to Queries
```
db.collection_name.find({ 'fieldname': { $operator: value } }).cursor_method()
```
#### Example 
```
db.data.find({price : {$gt : 2}}).limit(3).sort({price : 1}) 
```

### Logical Operators
```
$and  // check both condition
$or   // check single condition
$not  // check not
$nor  // check not or
```
#### Applying Logical Methods to Queries
```
db.data.find({$operator : [ {condition 1} , {condition 2} , .... ]})
```

#### Example 
```
db.data.find({$and : [{price : {$gt : 1}},{name : 'Sweater'}]}) 
```

### Complex Expression 
```
db.collection_name.find({$expr : {$gt : ['field',value]}}) //  It is used to aggregation expression within a query
```

#### Example
```
 db.sales.find({$expr : {$gt : [{$multiply : ['$qty','$sale']}, '$target']}})
``` 

### Elements Operator
```
$exists : check to exist or not 
$type   : check the type of bson
$size   : check length of array
```
#### Applying Element Methods to Queries
```
db.collection_name.find({field : {$operator : }})
```
#### Example
```
db.data.find({price : {$exists : false}, price : {$gt : 100}})
```

