---
title: "Xamarin.Forms + F# + Paket"
date: 2018-06-03 00:00:00 +0100
layout: default
---

Yesterday I started a new Xamarin.Forms project in F# on my Mac. Because the NuGet experience isn’t the best in Visual Studio for Mac, I always use Paket for managing my dependencies.

Normally I am always following the steps [here](https://fsprojects.github.io/Paket/paket-and-dotnet-cli.html) and [here](https://fsprojects.github.io/Paket/convert-from-nuget-tutorial.html). But this time, after I have done everything, the project didn’t compile anymore.

After some time of fiddling with Paket (I am not the expert user of it) I found the solution. You have to add a framework restriction to the Xamarin.Forms and Xamarin.Android.FSharp.ResourceProvider entry.

The reason is, that if you not add it, on Android Paket is using MonoAndroid1.0 as target framework and so the dependencies are resolved not correctly. I found this GitHub issue for this behaviour: <https://github.com/fsprojects/Paket/issues/2762>

The complete paket.dependencies file looks like this:

```
source https://www.nuget.org/api/v2
nuget FSharp.Core
nuget Xamarin.Forms framework: MonoAndroid8.1,netstandard2.0,xamarinios
nuget Xamarin.Android.FSharp.ResourceProvider framework:monoandroid8.1
```