---
title: "The Road to .NET Core support in SpecFlow"
date: 2019-01-15 15:11:06 +0100
layout: default
---

This blog post is about the history how we got .NET Core support into SpecFlow and what we learned from that.

We are in this blog post my team at TechTalk, who worked with me to achieve this.  
These are:  

- David Eiwen
- Nesli Sanli
- Balázs Epresi
- Stephen McCafferty

Around a year ago, we made an estimation how much it would cost to add .NET Core support to SpecFlow and SpecFlow+Runner.  
But the work for it began much earlier. The big PR for it (<https://github.com/techtalk/SpecFlow/pull/649>) was created on June 18th 2016.

So why the hell did we need 2 1/2 years to finish it?

First, SpecFlow is a Open Source project. We live as every other from the contributions to it. Sadly there weren't that many for it in the first 1 1/2 years.
But back to January 2018.  
After a lot of requests from the community David, Nesli and me did the estimation for it. After that TechTalk decided, that it will sponsor the development of it. So say thanks to them (or by some SpecFlow+ licenses). ;-)  
All three of us needed to finish our current projects to finally start with the .NET Core support.
And so we were at end of March.

# Some work was already done

Some work was already done in the 1 1/2 years ago. The biggest one was the migration of all projects to the sdk-style project format.  

# Let the work begin

First we had to rewrite our whole test suite. The reason was, that to test SpecFlow, we create .NET projects, compile them and let a test runner run. Integrationtests on a new level. The current implementation didn't support a lot of features (sdk-style projects was the biggest) we needed and it had no chance to be adapted for it. So we started with [SpecFlow.TestProjectGenerator](https://github.com/techtalk/SpecFlow.TestProjectGenerator). This is a reusable library (at least for us, we use it also in SpecFlow+), to create projects in different styles for different programming languages, compile them via MSBuild or `dotnet build` and then run the tests with the `vstest.console.exe`.  

At the same time, we worked on a new MSBuild task to generate the code-behind files of the feature files. As the generation of the code-behind files via Visual Studio Extension is making more and more headaches, our goal was, that you use always the MSBuild code-behind file generation if you are using .NET Core.  
Because we had at various places Assembly load problems, we wanted to go with an Out of process model. So the MSBuild task gets executed, starts an external process. The task communicates with this process, which does the whole work. At the end the external process is closed again.  
Yeah, that didn't work that great.  
We did get it to work, but it was way to fragile.  
So we moved everything back into the MSBuild task. (Which will bring us into another problem later <https://github.com/techtalk/SpecFlow/issues/1305>)
