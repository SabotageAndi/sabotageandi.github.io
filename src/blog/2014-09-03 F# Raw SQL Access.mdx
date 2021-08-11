---
title: "F# Raw SQL Access"
date: 2014-09-03T19:53:26+01:00
draft: false
type: "post"
---
 
With my start in working with F#, I came to the point to access a database. When you read my last post, you know that an ORM was out of question. What me really surprised at the end, was that the code is much less than every other DB access I wrote.

So how does it look?

The general idea was, to first create a record that holds the SQL statement and the parameters, that gets then executed.

The record enables you to write tests for your database access.

For accessing the ADO.Net functions, I use FsSql.

So beginn with the entity with represents one row of the table:

```fsharp
type Weather() =
    member val Id = 0 with get,set
 
    member val LocationId = Guid.Empty with get,set
    member val DataFrom = DateTimeOffset.MinValue with get,set
    member val DataTo = DateTimeOffset.MinValue with get,set
    member val Temperature = 0.0m with get,set
    member val Humidity = 0.0m with get,set
    member val Rain = 0.0m with get,set
    member val WindSpeed = 0.0m with get,set
    member val WindDirection = 0.0m with get,set
    member val Clouds = 0.0m with get,set
    member val Pressure = 0.0m with get,set
```

It’s a simple store for weather data for a location.

To insert an entry to the table, we need a function to get the wrapper record:

```fsharp
let private insert (weather : Weather ) =
{
    query = "INSERT INTO \"intersect\".\"Weather\"(
                         locationid, datafrom, datato, temperature, humidity, rain,
                         windspeed, winddirection, clouds, pressure)
             VALUES (@locationid, @datafrom, @datato, @temperature, @humidity, @rain,
                     @windspeed, @winddirection, @clouds, @pressure);
             RETURNING id;";
    parameters = [
                 P("@locationid", weather.LocationId);
                 P("@datafrom", weather.DataFrom);
                 P("@datato", weather.DataTo);
                 P("@temperature", weather.Temperature);
                 P("@humidity", weather.Humidity);
                 P("@rain", weather.Rain);
                 P("@windspeed", weather.WindSpeed);
                 P("@winddirection", weather.WindDirection);
                 P("@clouds", weather.Clouds);
                 P("@pressure", weather.Pressure);
             ]
}
```

The wrapper has the query as string and a list of SqlParameters.

```fsharp
type changeQueryObject =
{
    query : string;
    parameters : Sql.Parameter list;
}
```

The P- function is a shortcut for the FsSql Sql.Parameter.make.

To execute the insert statement, we pass the changeQueryObject to following function:

```fsharp
let executeScalar (queryObj : changeQueryObject) =
    sql.ExecScalar queryObj.query queryObj.parameters
```

With the “RETURNING id” at the end of the SQL statement and executing it with ExecScalar, we get the primary key of the new entry. Everything we want after the insert.

The same works for updates:

```fsharp
let private update (weather : Weather ) =
{
    query = "UPDATE \"intersect\".\"Weather\"
             SET locationid=@locationid, datafrom=@datafrom, datato=@datato, temperature=@temperature, humidity=@humidity,
             rain=@rain, windspeed=@windspeed, winddirection=@winddirection, clouds=@clouds, pressure=@pressure
             WHERE id=@id;
             SELECT @id;
             ";
    parameters = [
                    P("@id", weather.Id);
                    P("@locationid", weather.LocationId);
                    P("@datafrom", weather.DataFrom);
                    P("@datato", weather.DataTo);
                    P("@temperature", weather.Temperature);
                    P("@humidity", weather.Humidity);
                    P("@rain", weather.Rain);
                    P("@windspeed", weather.WindSpeed);
                    P("@winddirection", weather.WindDirection);
                    P("@clouds", weather.Clouds);
                    P("@pressure", weather.Pressure);
                 ]
}
```

And with some little pattern matching, we get a nice save function:

```fsharp
let save (weather : Weather) =
    match weather.Id with
    | 0 -> insert weather
    | _ -> update weather
```

But what is with querying and some filtering? Now F# plays it’s strength.

For that we need an little changed query wrapper:

```fsharp
type selectQueryObject<'T> =
{
    query : string;
    parameters : Sql.Parameter list;
    deserialisation : (IDataRecord -> 'T) option;
}
```

The new field “deserialisation” holds an function to get an instance of the entity from a datarecord. This is the one for the weather entity.

```fsharp
let asWeather (r: IDataRecord) =
    new Weather(Id = (r?id).Value, LocationId = (r?LocationId).Value, DataFrom = (r?DataFrom).Value,
    DataTo = (r?DataTo).Value, Temperature = (r?Temperature).Value,
    Humidity = (r?Humidity).Value, Rain = (r?Rain).Value, WindSpeed = (r?WindSpeed).Value,
    WindDirection = (r?WindDirection).Value, Clouds = (r?Clouds).Value, Pressure = (r?Pressure).Value)
```

How looks the querying function?

```fsharp
let search (fc : WeatherSearchRequest) =
    let query = "SELECT id, locationid, datafrom, datato, temperature, humidity, rain, windspeed, winddirection, clouds, pressure FROM \"intersect\".\"Weather\""
 
    let locationIdPara = w "locationid" "@locationid" "=" fc.LocationId
    let fomPara = w "datafrom" "@datafrom" ">=" fc.From
    let toPara = w "datato" "@datato" "<=" fc.To
    let datetimeFromPara = w "datafrom" "@datafrom" ">=" fc.DateTime
    let datetimeToPara = w "datato" "@datato" "<=" fc.DateTime
 
    Some asWeather
    |> emptyQueryPart
    |> combineAnd locationIdPara
    |> combineAnd fomPara
    |> combineAnd toPara
    |> combineAnd datetimeFromPara
    |> combineAnd datetimeToPara
    |> combineQueryParts query
```

The WeatherSearchRequest is a POCO which holds the various filter values.

Every possible part of the where- Statement is wrapped in an queryPart record.

```fsharp
type queryPart =
{
    where : string;
    parameter : Sql.Parameter option
}
```

The w- function (for Where) creates such a record:

```fsharp
let private w<'a when 'a : (new : unit -> 'a) and 'a : struct and 'a :> System.ValueType> column parametername operator (value : System.Nullable<'a>) =
    match value.HasValue with
    | true -> { where = sprintf "%s %s %s" column operator parametername; parameter = Some <| P(parametername, value.Value)}
    | false -> {where = ""; parameter = Option<Sql.Parameter>.None}
```

When the filter value is set, it create a filled queryPart, else we get an empty one.

But what do we do with it now? Let’s look at the next code block.

```fsharp
Some asWeather
|> emptyQueryPart
...
```

This is to create a selectQueryObject with setted deserialisation function. The selectQueryObject is then piped to multiple combineAnd functions.

```fsharp
...
|> combineAnd locationIdPara
|> combineAnd fomPara
|> combineAnd toPara
|> combineAnd datetimeFromPara
|> combineAnd datetimeToPara
...

let private combineAnd<'T> (x : queryPart) (qo : selectQueryObject<'T>) =
    match (x.parameter, qo.query) with
    | (Some xpart, "") -> { query = x.where; parameters = [x.parameter.Value]; deserialisation = qo.deserialisation}
    | (Some xpart, _) -> {query = qo.query + " AND " + x.where; parameters = x.parameter.Value :: qo.parameters; deserialisation = qo.deserialisation}
    | (None, _) -> { query = qo.query; parameters = qo.parameters; deserialisation = qo.deserialisation}

```

Once again, we use some pattern matching.

The first case is hit, when we have a filled queryPart but an empty selectQueryObject. So when the first filter criteria is hit.

The second case is hit, when we add the other filter criteria to the selectQueryObject.

The last one is hit, when we have already some data in the selectQueryObject, but the queryPart is empty. So when we have already some filter criteria added, but the current one is not set.

At the end, we pipe the selectQueryObject to the combineQueryParts function.

```fsharp
...
|> combineQueryParts query
...
 
let private combineQueryParts<'T> (query :string) (qo :selectQueryObject<'T>) =
    let mutable q = query
    if (qo.query.Length > 0) then
        q <- query + " WHERE " + qo.query
 
    { query = q; parameters = qo.parameters; deserialisation = qo.deserialisation; }

```

This function simply combines the select- Query with the where- Statement if needed.

At the end, we get a nice filled selectQueryObject which is then passed to a general function.

```fsharp
let executeReader<'T> (queryObj : selectQueryObject<'T> )=
    sql.ExecReader queryObj.query queryObj.parameters
    |> Seq.ofDataReader
    |> Seq.map queryObj.deserialisation.Value
```

Nice, or?

The complete code at once can be found here.

So what about the testing? With the query wrapped into a record, we simply can tests the data in the record.

```fsharp
let checkSqlParameter (name : string) (value : obj) (parameter : Sql.Parameter) =
    obj.Equals(parameter.ParameterName,name) && obj.Equals(parameter.Value,value)
 
let checkForSqlParameter (name : string) (value : obj) parameters =
    parameters |> Seq.exists (fun i -> checkSqlParameter name value i) |> should equal true
 
let nullableFromPara = new Nullable<DateTimeOffset>(fromPara)
let nullableToPara = new Nullable<DateTimeOffset>(toPara)
let locationIdPara = new Nullable<Guid>(Guid.NewGuid())
 
[<Fact>]
let ``Check query with LocationId, From and To parameter``() =
    let fc = new WeatherSearchRequest()
    fc.LocationId <- locationIdPara
    fc.From <- nullableFromPara
    fc.To <- nullableToPara
 
    let queryObj = weather.search fc
    queryObj.parameters |> Seq.length |> should equal 3
    queryObj.parameters |> checkForSqlParameter "@datafrom" fc.From
    queryObj.parameters |> checkForSqlParameter "@datato" fc.To
    queryObj.parameters |> checkForSqlParameter "@locationid" fc.LocationId
 
    queryObj.query |> should equal "SELECT id, locationid, datafrom, datato, temperature, humidity, rain, windspeed, winddirection, clouds, pressure FROM \"intersect\".\"Weather\" WHERE locationid = @locationid AND datafrom >= @datafrom AND datato <= @datato"

```

When was the last time, you could test which SQL- query gets executed against your DBS? 😉