---
title: "Using NodaTime in SQLite.Net"
date: 2015-12-30
draft: false
type: "post"
---

 
For a project I wanted to try out NodaTime, because of its nice handling with timezones.
In this project I have also to save the values into a SQLite database and for that I normally use SQLite.net for that.
Normally SQlite.net does not know how to handle the NodaTime types, but there are 2 places to add your own support for types.

## ExtraTypeMapping
You can specific for your types which SQLite type it should be. That could be INTEGER, REAL, TEXT or BLOB.
It’s a simply Dictionary<System.Type, String> you provide as constructor parameter, where you set the SQLite.net Type to BLOB.

## IBlobSerializer
When you save your values as Blob, you can use the BlobSerializerDelegate of SQLite.net and provide the appropriate delegates to serialize and deserialize your types.

When you combine both, you can simply save your own types as blob in your database.

The code for saving LocalDate, OffsetDateTime and Duration you can find here: <https://gist.github.com/SabotageAndi/194aa01e1c78cb614c1b.>

It is in F#, but it is understandable by C#-only developers. 😉