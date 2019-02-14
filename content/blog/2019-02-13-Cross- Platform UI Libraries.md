---
title: "Comparision of Cross- Platform UI Libraries for .NET"
date: "2019-02-13 14:33:00"
draft: true
---

For an upcoming spare time project I need a UI library that work cross- plattform (Windows, Mac OS and Linux). So I began to research research what possibilities are currently available.

I found following libraries:

- [Xamarin.Forms](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/)
- [Uno Platform](https://platform.uno/)
- [Avalonia UI](http://avaloniaui.net/)

Let's have a look at some general data of them.

|                    | Xamarin.Forms                        | Uno Platform | Avalonia UI |
|---|---|---|---|
| __Supported platforms__ | Androis, iOS, Windows, Mac OS, Linux | Android, iOS, Windows, WebAssembly | Windows, Mac OS, Linux |
| __UI Definition__ | XAML | XAML | XAML |
| __XAML Dialect__ | Xamarin.Forms | UWP | Avalonia UI |
| __Data Binding__ | yes | yes | yes |
| __Used UI Controls__ | native Controls | native Controls | self- drawn |
| __License__ | MIT | Apache 2 | MIT |
| __Source__ | https://github.com/xamarin/Xamarin.Forms | https://github.com/nventive/Uno | https://github.com/AvaloniaUI/Avalonia |

# Xamarin.Forms

Xamarin.Forms began as library for mobile applications. In the meantime additional platforms were added. But as it is designed for mobile applications, some controls that you would use in rich desktop applications are not available. So there is no datagrid control out of the box. But as most of the time, somebody did already the work for it (<https://github.com/akgulebubekir/Xamarin.Forms.DataGrid>).

Interessting is, that on Windows, you have two backends. You can use the UWP backend or the WPF backend. Be aware that the WPF backend is still in preview.

# Uno Platforms

I heard the first time about Uno in a .NET Rocks Podcast (<https://www.dotnetrocks.com/?show=1552>) and I was quite fascinated about their approach. You develop a UWP application and with Uno

# Avalonia UI