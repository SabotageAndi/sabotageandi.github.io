---
title: "Where is my presenter mode?"
date: 2018-02-23
draft: false
---

During my preparation for my latest meetup talk, I noticed that I wasn't able to switch to presenter mode in Visual Studio. The Quick launch tasks were simply not there.

What now? In the past they were part of the [productivity power tools](https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.ProductivityPowerPack2017) extension. This was installed, but no quick launch tasks for me. 🙁

After some research together with the audience, we found the reason. The presenter mode quick launch tasks were moved to a [separate extension](https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.QuickLaunchTasks) and this was not installed. The productivity power tools are now a meta extensions, that has dependencies on a lot of other extensions.

So after installing the extension and restarting VS I had the presenter mode back. So if you are searching it sometime in the future, the extension is called [Quick Launch Tasks](https://marketplace.visualstudio.com/items?itemName=VisualStudioProductTeam.QuickLaunchTasks).

PS: I am sure, that the extension was missing is due to my development setup, multiple dev machines (4 machines at 3 locations) and extension roaming. So no bad feeling against the extension developer for this.