---
title: "Blog post to my talk “MSBuild 101 – Was passiert wenn ich auf „Build“ klicke”"
date: 2018-02-04 00:00:00 +0100
layout: default
---

Last Monday (30. January) a colleague and I gave a talk about the basics of MSBuild. So that also others can enjoy my explanations, I wrote this post.

All examples can be found here: 

# Classic Hello World

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <Target Name="HelloWorld">
        <Message Text="Hello World!" />
    </Target>

</Project>
```

Command: msbuild %Filename%.csproj /t:HelloWorld

That's the classic "Hello World" as for every programming language. And yes, MSBuild looks like XML, but it's a programming language. "Target" defines a "method", which can call other targets and tasks. Tasks are functions that are defined in assemblies.

With the /t parameter, you specific which target is executed. When you don't specify it, a default target is executed, but in this case, we want that the "HelloWorld" target is executed and print "Hello World!".


# Variables
As functions/methods there are also variables in MSBuild. You define them in PropertyGroups.

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <HelloText>World</HelloText>
    </PropertyGroup>

    <Target Name="HelloWorld">
        <Message Text="Hello $(HelloText)!" />
    </Target>

</Project>
```

You can access them with $(%VariableName%).

# Parameters
To get some data from outside into your MSBuild script, you can pass parameters with /p and access them as other variables.

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <Target Name="HelloWorld">
        <Message Text="Hello $(HelloText)!" />
    </Target>

</Project>
```

Command: msbuild HelloParameter.csproj /t:HelloWorld /p:HelloText=Internet


# Ifs aka Conditions
And as in other languages, there are also Ifs available. Here are they called Conditions and 

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <HelloText Condition="$(HelloText)==''">World</HelloText>
    </PropertyGroup>


    <Target Name="HelloWorld">
        <Message Text="Hello $(HelloText)!" />
    </Target>

</Project>
```

You can add the Condition element on nearly everything. It could be variables, whole property groups, targets or tasks.

This example uses conditions to set the variable "HelloText" to a default value if it wasn't defined via parameter.

# multiple Targets
Who wants to write everything in a single method? Nobody. But nothing stops you to write more targets.

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <Target Name="HelloWorld">
        <CallTarget Targets="PrintHello"/>
        <CallTarget Targets="PrintWorld"/>
        <CallTarget Targets="PrintExclamationMark"/>        
    </Target>

    <Target Name="PrintHello">
        <Message Text="Hello" />
    </Target>

    <Target Name="PrintWorld">
        <Message Text="World" />
    </Target>

    <Target Name="PrintExclamationMark">
        <Message Text="!" />
    </Target>

</Project>
```

With the "CallTarget" task you can execute other targets.

# "Events"
Sometimes you can not add a "CallTarget" to get your own code executed in MSBuild. For that there is a feature, that you can also trigger your targets before or after another target.

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <Target Name="HelloWorld">
        <Message Text="Hello World!" />
    </Target>


    <Target Name="Before" BeforeTargets="HelloWorld">
        <Message Text="BeforeHelloWorld" />        
    </Target>

    <Target Name="After" AfterTargets="HelloWorld">
        <Message Text="AfterHelloWorld" />        
    </Target>

</Project>
```

With setting the Before/After- Targets elements you register your target to be executed before or after the target. Real nice feature to hang your targets into the existing lifecycle of compiling a project.

# Files
Sometimes you need to execute a target for a list of files. This is possible with ItemGroups.

``` xml
<Project Sdk="Microsoft.NET.Sdk">

    <ItemGroup>
        <Files Include="*.*" />
    </ItemGroup>

    <Target Name="HelloWorld"
            Inputs="@(Files)"
            Outputs="%(Identity).Dummy">
        <Message Text="@(Files)" />
    </Target>
   
</Project>
```

With ItemGroups you can define a variable that holds a list of files. You can include and exclude to this variable with additional entries in the ItemGroup.

To get a target executed per entry in a file variable, you have to use the Inputs and Outputs attributes. In difference to variables, you have to use @(…) and not $(…).
You have to set the Outputs attribute if you set the Inputs attribute. In this case, we can set it to %(Identity).Dummy, because we generate no output files.

# The end of my part
So that was my part of the talk. My colleague Raoul Holzer continued with a little bit more advanced stuff. His examples can be found here: https://github.com/RaoulHolzer/MSBuild201 
And as soon he has written his blog post, I will link it here.