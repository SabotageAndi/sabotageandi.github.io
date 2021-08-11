---
title: "Impressions of using F# (with a little bit of Xamarin.Forms)"
date: 2016-01-06 
draft: false
type: "post"
---

In the last days I completed the first version of FFRAB-Mobile (see here). I used F# and Xamarin.Forms to gain more experience in a bigger project than a simple example app. You can find the sources here: https://github.com/SabotageAndi/ffrab-mobile

Here are my impressions:

## Writing stateless could be hard, but it is worth the trouble
Coming from a C# background, now writing code that is near complete stateless is new and unusual. So the first code I wrote was a lot of object oriented stuff with too much access to shared state. Especially the access to the database connection was at the beginning a little bit painful.

But after some refactoring it got more and more in a functional style. At least I hope so.

Before refactoring:

https://github.com/SabotageAndi/ffrab-mobile/blob/0e72e26e83f5112e6c95cc99959baa9a55eb9882/ffrab.common/model.fs Line 52 – 140

After refactoring:

https://github.com/SabotageAndi/ffrab-mobile/blob/master/ffrab.common/database.fs
https://github.com/SabotageAndi/ffrab-mobile/blob/master/ffrab.common/queries.fs

At the end it was worth the trouble. It is more readable and simpler code.

## If it looks ugly, make a function
When you have pure F# code and libraries, it is complete in your hands to write nice code. But when you are using C# libraries, i can quickly get ugly because of the library. This is because the parameters of the C# methods are represented as tuples. With them, you have a lot of brackets and can not use the forward pipe operator ‘|>’.

But simply wrap the C# method call in a small function and voila.

Here is an example when using NodaTime (the “let startTime”- line is the important one):
Direct call to C#:

```fsharp
let dateTimeFormat = OffsetDateTimePattern.CreateWithInvariantCulture("yyyy'-'MM'-'dd'T'HH':'mm':'sso<G>")
let startTime = common.Formatting.dateTimeFormat.Parse(dayNode.["day_start"].Value<string>()).Value
```

With F# wrapper function:

```fsharp
let parseNodaTime<'T> (pattern : NodaTime.Text.IPattern<'T>) rawValue =
        let result = pattern.Parse(rawValue)
        result.Value

let dateTimeFormat = OffsetDateTimePattern.CreateWithInvariantCulture("yyyy'-'MM'-'dd'T'HH':'mm':'sso<G>")
let startTime = (json.GetProperty "day_start").AsString() |> parseNodaTime common.Formatting.dateTimeFormat
``` 


For one usage it might be not that bad, but when you have multiple calls, it is more readable. Particularly you get the nice left- to- right readability back!

## Left- to- right readability combined with railway oriented programming (ROP) rocks!
Look at this example:

```fsharp
let synchronizeData conference =
            match conference with
            | Some conference ->
                conference 
                |> checkForTimeout
                |> getDataLocation
                |> fetchJson 
                |> Parser.parseJson conference
                |> Synchronization.sync conference
            | _ ->
                ignore()
            conference
```

All parts of the synchronization are nice one after one step easy readable and extendable. So adding the additional timeout check was easy to add to this pipeline.

## MVVM is more fun with FSharp.ViewModule than with C#
With FSharp.ViewModule and F# you have so much less boilerplate code in your viewmodels. Without the curly brackets of C# you can reduce the line count again.

So the 8 viewmodels are about 260 lines (with empty lines and boilder plate functions/type). In C# 3 of the viewmodels would have this code size.

## Tooling? Enough, but some rough edges
When you code in Visual Studio, you need the Visual F# Power Tools. And the first thing you have to do is to enable Folder organization. You do not need the folders for your F# code, but to organize other files like images or json-Files. No idea why it is disabled by default.

On the Xamarin side there is sadly one bug, that prevents to use Xamarin.Forms on Android with F#. It looks like the F# CodeDom does not escape F# keywords.
For details is here the Bugzilla entry: https://bugzilla.xamarin.com/show_bug.cgi?id=24709
Hopefully the bug is fixed soon.

For the C# developers with Resharper: First you think you will miss it, but you do not need it. The Power Tools have a Rename function. Other refactoring features like extracting or adding namespaces I didn’t miss.

So for me is F# a really fun and productive language. Not everything is easy and clear when you are using it the first time, but the fog will lift with the time. When you are working some days concentrated with F#, you will learn and understand a lot. And it will be awesome. 😉