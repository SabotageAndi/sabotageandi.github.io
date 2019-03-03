---
title: "How SpecFlow works – Overview"
date: 2018-03-07
draft: false
type: "post"
---

In preparation of continuing the work on .NET Core/Standard support for SpecFlow and recognising in talks at the MVP Summit, that it is not that simple to explain how SpecFlow works, I thought it would be good to start writing it done.

So as starting ponts, let's have a look at the normal workflow, when you write a new Scenario?

1. The user opens or creates a feature file, writes it Scenario in Gherkin and saves.
2. A code-behind file is generated, which contains code for a test class of the configured unit test provider. This could be SpecFlow+Runner, xUnit, NUnit, MsTest or MbUnit.
3. The user selects the line and presses F12.
4. A dialog opens, which contains a skeleton for a binding method for this sentence.
5. The user adds the skeleton binding code to a new or existing binding class
6. The user implements the binding. Probably with some helper methods from the TechTalk.SpecFlow.Assists namespace.
7. The user compiles its project
8. The user runs the tests
9. The tests are hopefully green.

That's a lot of steps to get from a scenario to a executed tests.

And these are the parts that are involved in this:

- Generator
  - Code- Behind File generation
  - Plugins
- Runtime
  - Binding lookup
  - Assists
  - Plugins
- Visual Studio Extension
  - Syntax Highlighting/IntelliSense
  - Navigation
  - Code- Behind Generation
  - Skeleton Generation
  - ItemTemplates

More than you would think, or?

Additionally SpecFlow has also a console application (specflow.exe), which also contains crucial functionality:

- SpecFlow.exe
  - generateAll Command
  - MSBuild tasks
  - Reports

To make it easier to read for you (and to write for me), every major part will get it's own blog posts. So you don't have to wait until I am completely finished with everything. I will add links to the individual posts when they are ready.