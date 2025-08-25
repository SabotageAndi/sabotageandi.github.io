---
title: "On the Bleeding Edge – Akka.Net + Suave"
date: 2015-07-03 00:00:00 +0100
layout: default
---

So after playing with Suave.io, I wanted to add some new bleeding edge stuff to it. 😉 And run it on a beta environment, the DNX 🙂

First, the complete source of it is here: <https://github.com/SabotageAndi/SuaveAkkaCore>

Thanks to Alxandr there is F# support for the DNX: <https://github.com/YoloDev/YoloDev.Dnx.FSharp>

So here is a quick go through of the code to get the stuff working:

## 1. Add needed NuGet feeds

YoloDev: <https://www.myget.org/F/yolodev/api/v2″>
AspNetVNext: <https://www.myget.org/F/aspnetvnext/api/v2″>

## 2. Adapt project.json for F# Support

``` json
{
    “version”: “1.0.0-beta-*”,
    “dependencies”: {
    “YoloDev.Dnx.FSharp”: { “type”: “build”, “version”: “1.0.0-beta-*” },
    “Suave”: “0.29.1”,
            “Akka”: “1.0.3”,
            “Akka.FSharp”: “1.0.3”
    },
    “frameworks”: {
        “dnx451”: {
            “frameworkAssemblies”: {
                “System.Runtime”: “”,
                “System.Threading.Tasks”: “”
                }
            }
        },
    “compiler”: {
        “name”: “F#”,
            “compilerAssembly”: “YoloDev.Dnx.FSharp”,
            “compilerType”: “YoloDev.Dnx.FSharp.FSharpProjectCompiler”
    }
}
```

The bold text are the changes needed for the F# support, the italic one are the needed changes for Akka.net and Suave.io.

## 3. initialize Akka.net & Suave.io

```fsharp
member x.Main () =
   use akkaSystem = System.create "SuaveAkkaCore" (Configuration.defaultConfig()) //1
  
   spawn akkaSystem "root" (actorOf2 handleRequest) |> ignore //2
  
   let cts = new CancellationTokenSource()
    
   let startingServer, shutdownServer = startWebServerAsync defaultConfig (app akkaSystem) //3
   Async.Start(shutdownServer, cts.Token)
    
   startingServer |> Async.RunSynchronously |> printfn "started: %A"
 
   printfn "Press Enter to stop"
   Console.Read() |> ignore
 
    
   cts.Cancel()

```

on //1 the Akka System is created with a standard configuration. It is named “SuaveAkkaCore”. This is later important to find the actor again.
The only one actor (named root) in this example is spawnd on //2. When the actor gets a message, the handleRequest function is called.
Last part on initializing the system is on //3 the start of suave. Here is only one webpart involved.

## 4. Suave webpart

```fsharp
let app system : WebPart = 
     fun (httpContext : HttpContext) ->
         async {
             let response = sendRequestToActor system httpContext
             return! response
         }
```

It’s a simple web part that reacts on every request and calls the sendRequestToActor method with the current Akka system and HttpContext (there is the request, response stuff in Suave).

## 5. sending message to actor

```fsharp
let sendRequestToActor system (httpContext : HttpContext) =
     
    let callActor = async { 
      let actor = select "akka://SuaveAkkaCore/user/root" system
      let! resp = actor <? httpContext
      return Some resp
    }
    
    let response = callActor |> Async.RunSynchronously
    response httpContext   
```

In the first part, the root- Actor is selected. Here is the system name and actor name needed.
With the <? operator, the actor is asked with the HttpContext.
After that, we run the async workflow and return the response.

## 6. the actor function itself

```fsharp
let handleRequest (mailbox : Actor<'a>) (msg : HttpContext) =
   let url = msg.request.url.ToString()                                     
   mailbox.Sender() <! (OK url)
```

In the actor function, we get the mailbox and the message as parameters. Here I simply take the request url and return it as OK response.

To run the stuff, you need the DNX runtime installed.
Switch to the mono runtime for dnx with “dnvm use 1.0.0-beta6-12120 -p -r mono”
With a “dnu restore” you get the needed packages.
After that, a “dnx . run” starts the program.

Now browse to <http://localhost:8083> and you see as response the browsed url.

Have fun!