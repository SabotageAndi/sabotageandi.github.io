---
title: "Using SpecFlow+Runners Parallelization Features"
date: 2016-04-08 00:00:00 +0100
layout: default
---

To start a parallel test run, you simply need to change the testThreadCount property in your srProfile to a number higher than 1. How your tests are executed then depends on the testThreadIsolation property.

The upcoming release of SpecFlow+Runner 1.4 adds an additional mode (SharedAppDomain), so I thought it time to explain this new option and the two existing ones (this option is already available in the pre-release version of 1.4 on GitHub).

The three supported modes are now:

- AppDomain
- Process
- SharedAppDomain (new)

## AppDomain
This is the default mode. Each test thread is executed in a separate AppDomain. These AppDomains are created at the beginning of the test run, and are reused for the rest of the test run.

### Pros

Executed tests are isolated by the AppDomain border, so you do not have problems with static data.

### Cons

Limited when you have shared data on a process level (e.g. SQLite in-memory dbs)

## Process

This mode has been supported since at least version 1.2 (I don’t know the exact version). A separate executor process is created for each test thread and is used to execute the tests. This is necessary if your application contains entities that exists once per process, e.g.  SQLite’s in-memory database. These processes are started at the beginning of the test run, and are reused for the rest of the test run.

This mode is also used if you run your tests using the .NET 2.0 framework or for a different processor architecture.

To keep your test run short, I would recommend settings testThreadCount to (CPU Cores – 1). The remaining core is then kept free for the actual test runner process to manage the other executor processes.

### Pros

Completely process-based separation of executed tests

### Cons

Slower due to the additional cost of starting the test execution processes and inter-process communication

## SharedAppDomain

This new mode takes advantage of the new parallelization support in SpecFlow 2.0, and executes all tests in the same AppDomain. This makes it very fast, but the trade-off is that you lose the isolation between the currently executed tests. However if you have tests that do not require isolation, this is the fastest way to execute them.

When using this mode, you can set testThreadCount to really high numbers and still have fast test runs.

### Pros

Very fast

### Cons

No isolation between currently executed tests