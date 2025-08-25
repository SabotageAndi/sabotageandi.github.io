---
title: "Playing With AngularJS and Suave"
date: 2015-05-31 00:00:00 +0100
layout: default
---

After I found Suave.IO (lightweight HTTP Server in F#) I wanted to try it out. As I also wanted to play with AngularJS (I know I am a little bit late, but normally I get out of the way of web development). So why not combine both and create a small webserver that hosts the web app and the webservices.

As example for the AngularJS app, I used the PhoneCat Tutorial App from AngularJS.

You find the complete source on GitHub here: AngularSuave Repository

Explanation step-by-step:

```fsharp
let mimeTypes =
    defaultMimeTypesMap
        >=> (function | ".json" -> mkMimeType "application/json" true | _ -> None)

```

In the default mime types from Suave is no entry for json- Files. So I simply add it.

```fsharp
let rootPath = Path.GetFullPath "../../../Web"
```

The source files for the AngularJS are located in a separate project.

```fsharp
let webConfig = 
    { 
        defaultConfig with 
            homeFolder = Some rootPath
            mimeTypesMap = mimeTypes
    }
```

I use the default server config that is shipped with Suave and only adjust the needed parts.

```fsharp
let getPhone phoneName =
    printfn "getting data for phone: %s" phoneName

    let phoneFolder = Path.Combine(rootPath, "app", "phones")
    browseFile phoneFolder phoneName
```

Function to return the data for the phones. It is stored as json- Files.

```fsharp
let api =
    choose
        [
            GET >>= choose 
                [
                    pathScan "/api/phones/%s" (fun s -> getPhone s)
                ]
        ]
```

In Suave you have WebParts which can react on the different urls. Here I react on all calls to /api/phones/ and call the function to get the phone data.

```fsharp
let getFile name =
    let rootPath = webConfig.homeFolder.Value
    browseFile rootPath name
```

Function to return the file content of the requested file.

```fsharp
let angularApp =
    choose
        [ GET >>= choose
            [
                path "/" >>=  redirect "app/index.html"
                pathScan "/%s" (fun s -> getFile s)                
            ]
        ]
```

The AngularJS app is still located under /app/*. So I make a redirect, when you simple browse to the root page.
For all other request to /*, I simple return the requested file.

````
let app =
    choose
        [
            api
            angularApp
        ]
````

The choose web part executes every web part in the list and only stops if someone is successful.
In this case, the correct order is important, because the /%s in the angularApp WebPart will eat every request.
If the order is changed, no call is ever made to the api Webpart.

```fsharp
[<EntryPoint>]
let main argv = 
     
    let cts = new CancellationTokenSource()
    let startingServer, shutdownServer = startWebServerAsync webConfig app
 
    Async.Start(shutdownServer, cts.Token)
 
    startingServer |> Async.RunSynchronously |> printfn "started: %A"
 
    printfn "Press Enter to stop"
    Console.Read() |> ignore
 
    cts.Cancel()
 
    0
```

At the end, I simply start the the webserver with the individual web config and the app WebPart.

When you start the programm and open <http://localhost:8083/> you can see the PhoneCat Tutorial App hosted by Suave.IO.

So have fun with it. 😉