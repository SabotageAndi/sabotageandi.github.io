---
title: "No More ORM"
date: 2014-08-28 20:00:53 +0100
layout: default
---

After working some years with different OR- Mappers (NHibernate, Entity Framework, proprietary ones, …) to build a lot of line of business applications, I came to the conclusion to trash them.

So how did I come to this conclusion? Yes, ORMs make it on the first look easy to access your database and query them. That is it all what you get. But you also get some problems, that were not there before.

Some of them are here:

## Generated Queries and Performance

The ORM generates the SQL Query for you. But you will never get the best sql query to get your data. You do not want to fetch all columns of an table? Have fun!
Transactions
Every ORM has his own idea how to represent a transaction. Why? Plain db transactions are really easy to understand. Why add another complication to your application? When you want a stable and predictable LoB- Application, you want to know exactly when which changes are commited to the database.

## Predictability

Do you know, when which query is executed against your database? How often did you looked for bugs where data not returned by a query, that are caused, because you forget to flush somewhere a session?

## Additional Query language

Most ORM have their own query language or uses LINQ for the queries. LINQ is very nice to query your objects, but when you create more complicated queries, it gets really quick ugly. Group by- Queries? Outer Joins? Hurray!
Why add another abstraction when you have already a Structured Query Language?
How often did you fix code of some unexperienced developers that had performance issues, because the queries are done in memory or results in hundred small queries against the db? Simply because the code looks the same and they did not think about it.

## Support for different DBS, but no one to 100%

When did you the last time tried to access a DBS specific feature? You want to use PostGIS? Filestreams on MS SQL? Or much simplier, use timestamptz on PostgreSQL?  No chance.
Why is this? Simply because the ORM have to provide an API over all supported DBS.
And when did you wrote a LoB application that have to run on different DBS? I haven’t?

## Additional problems that you did not see coming

This week I was talking with a collegue about some problems with our used ORM and the build queue. WTF? What does the ORM have to do with the build queue?
This post should not be a rant about ORM or dictate to everyone to not use them anymore. I recognized in the last weeks, that the people do not think anymore about the question, if they want to use an ORM. They simply say, “Yeah, let’s use X as ORM”, but did not think if they can achieve their requirements with it. So see this post as an starting point to rethink your technology choices.

ORM are a part of your toolchain, you do not have to fix every problem with your beloved tool. Use the right tool for the job.