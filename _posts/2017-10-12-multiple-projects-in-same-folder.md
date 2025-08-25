---
title: "Multiple projects in the same folder"
date: 2017-10-12 00:00:00 +0100
layout: default
---

In SpecFlow+ we are supporting multiple different versions of SpecFlow (currently 1.9, 2.1 and 2.2) and so we have to test each version with the full set of our test suite.
As we don't want to copy a lot of code and then change some references/package version, I was looking if it is without much pain possible, that you have multiple projects/csprojs in one folder and produce so multiple assemblies.
We are already having a solution with the old project system, but it involves a lot of  linked files and manual editing of the project files. So with the new project system it was time to look at this again.

And after some work I had a solution to achieve this with the new csproj format. Here it is:

``` xml
<Project>
    <PropertyGroup>
        <BaseIntermediateOutputPath>obj\$(MSBuildProjectName)</BaseIntermediateOutputPath>
    </PropertyGroup>
    
    <Import Project="Sdk.props" Sdk="Microsoft.NET.Sdk"/>

    <PropertyGroup>
        <TargetFramework>netstandard2.0</TargetFramework>
        <OutputPath>bin\$(Configuration)\$(TargetFramework)\$(MSBuildProjectName)</OutputPath>
    </PropertyGroup>

    <Import Project="Sdk.targets" Sdk="Microsoft.NET.Sdk"/>

    <ItemGroup>
        <Compile Remove="obj\\**\*"/>
        <Compile Include="obj\$(MSBuildProjectName)\**\$(MSBuildProjectName).AssemblyInfo.cs"/>
    </ItemGroup>
</Project>
```

So what does it in detail?

``` xml
<Project>
```
Yes, there is no Sdk attribute defined. How does this work?

``` xml
<PropertyGroup>
    <BaseIntermediateOutputPath>obj\$(MSBuildProjectName)</BaseIntermediateOutputPath>
</PropertyGroup>
```

We are adjusting the BaseIntermediateOutputPath, so that each project has it's own and don't replace each others file. This is also the reason, why we have no Sdk attribute set. This property has to be set before the Sdk.props file is evaluated.

``` xml
<Import Project="Sdk.props" Sdk="Microsoft.NET.Sdk"/>
```

So, finally import the first part of the Sdk.

``` xml
<PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
    <OutputPath>bin\$(Configuration)\$(TargetFramework)\$(MSBuildProjectName)</OutputPath>
</PropertyGroup>
```

The TargetFramework property is well known. Nothing to add about this here.
The OutputPath property is the location where the finished assemblies are copied. As BaseIntermediateOutputPath it has to be adjusted, so that each project has it's own folder.

``` xml
<Import Project="Sdk.targets" Sdk="Microsoft.NET.Sdk"/>
```

And now the second and last part of the Sdk is imported.

``` xml
<ItemGroup>
    <Compile Remove="obj\\**\*"/>
    <Compile Include="obj\$(MSBuildProjectName)\**\$(MSBuildProjectName).AssemblyInfo.cs"/>
</ItemGroup>
```

This is one of the stranges parts of the file. The reason for this is, that during build the version infos from the csproj are written to an *.AssemblyInfo.cs file in the obj folder. Combined with the globbing in the new format, MSBuild now finds multiple *.AssemblyInfo.cs files (one for each project).
So we have to remove the whole obj subtree from the compiler and readd the AssemblyInfo.cs for our project to get the version infos into the assembly.

Everything clear now? 😉
And the best, Visual Studio 2017 can handle this files without problems.

You can find a complete example with two projects here: <https://github.com/SabotageAndi/MultipleProjecsInSameFolder>

Conclusion: I have to say, I am very happy with the new project system. Something like this wouldn't be possible with the old one (or it would be a lot more painful).
Let's see what nice hacks are also possible in the future.