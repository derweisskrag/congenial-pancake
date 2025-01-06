# Client Server

## Details

Student: Sergei Ivanov

Instructor: Andre Sääsk 

Subject: Scripting languages 

Deadline: 06.01.2025

## Table of Contents

- [Details](#details)
- [Description](#description)
    - [Tools](#tools)
- [Objective](#objective)
    - [Extra objectives](#extra-objectives)
    - [Explanation](#explanation)
        - [Another problem](#another-problem)
- [Why Kotlin](#why-kotlin)
- [QR-Code?](#qr-code)
- [How to run?](#how-to-run)

## Description

I have to create a full-stack application to showcase client-server knowledge.

### Tools

- Next.js for client side
- Kotlin for server side

## Objective

My goal will be abstract from tutorials and implement the authorization based on my understanding. This will be my 
attempt to code something without tutorials. 

- Implement Client-Side using NextUI and Uiverse.io
- Implement Server-Side using Kotlin, Ktor, SpringBoot
- Use SQLite for Database 

### Extra objectives

These ones I cannot do due to time constraint. What I wanted to consider:

- MySQL daemon (Have to download)
- Rust gRCP services grouping my RESTful API into manageable gRCP service (microservices)
- Desktop/Android app (given C# world, yes, I would use only C# - pretty easy) - But: I do know about Flutter
- Unity and Unreal Engine (can be integrated into the website given iframe)

### Explanation

- Next.js is used because it is simple. It has Next-Auth, NextUI, and even Clerk.js to work with React 19. It is amazing and simple. Today I will dive into API folder and create my own routes to send requests to Kotlin back-end.

- SQLite is because it is much simpler. Why it is bad? It is bad because if you wanna use Rust or C# .NET additionally to the back-end, 
you would end up looking into C# directory (if C# is the main language) or `../SQLite` where I imply that `../` goes out of the back-end module domain. In C#, when you `dotnet build` and `dotnet run`, you are located into `debug/bin/...`, which means if you have your database at the root of the application: `../../../../mydb`. You can configure your own app to use one path for testing (the one with lots of `..` is the testing one in my C# app), and another for actual db service - exactly what I did. However, what if you need Rust/C++ to access your Database file? 

One way would be to create API in C# - Daemon that can respond to C++/Rust. Complexity is Rust while higly interoperated with C and C++ will involve lots of `unsafe` because C/C++ use `wchar_t, char`, etc - which Rust may not immediately process. Such a small details but already makes us write boilerplate code. Given SQL query language and MySQL daemon, problem immediately solved.

#### Another problem

If you wanna use C# with Rust and C++ services, you might use DLL logic. I tried it in C#-Rust application. Yes, Rust was blazingly fast, yet C# wasn't that slow. The main issue was Rust accepts something called `CStr` as argument to a function call, rather typical `&'a str`. In C#, when we call it, we also use Allocator to allocate memory and create raw bytes for the string. Then we pass it to Rust in C manner (both language understand C types), and this exactly spawned the boilerplate code. 

That day, I learnt that Rust should speed up C#, not provide SQLite service, because C# can directly use it. If I were to have huge SQLite database served by Rust, I would approach my problem with API logic. 

```rs
const extern "C" fn add(a: f64, b: f64) -> f64 {
    a + b
}
```

is a simple function that just works for C#. You use `add(10.5f, 11.5f)` in C# side. However, you can also serialize and deserialize (JSON) and send REQUEST to Rust and get it again (You might get slower in SPEED).


Thus, Please, know that Mongod and MySQL daemons are exactly for this purpose. They give you more bricks to build C# house using C++ and Rust furniture.

#### Why Kotlin

I just wanted to try Kotlin, not NodeJS and C++ Addons (just for fun). I have Kotlin again, so I will use it. I will use AI to generate me boilerplate code. I will have simple code and logic to avoid complexity

## QR-Code?

I am unlikely to do it, but QR code extends JWT logic that I am going to try. I have no clue how to use it, but Kotlin has libraries to generate QR code and then based on JWT, you can log using QR code. Quite simple yet complicated.

## How to run?

- First you have to clone my GitHub.
- Second, you have to config each folder: front-end and back-end. NextJS uses NodeJS that uses NPM for package management, and Kotlin uses Maven, Graddle. You will have to install all depedencies. 
- After all depedencies installed (for Nextjs and Kotlin app), you open up two terminals. One goes into NextJS and runs `npm run dev`, another goes to Kotlin and invokes `web-starter`. You will have to have IntelliJ IDEA Community Edition for simplicity and it will run you the spring boot starter web package. 

> NOTICE! If you do NOT INCLUDE OR HAVE `web-starter` depedency, SpringBoot would run and shut down. I experienced that before, so installing `web-starter` works.

I used SpringBoot initializer and graddle on my machine installed. The command is `graddle bootRun`. To make sure all dependencies are installed, we can use `graddle -U` and `graddle depedencies`

### Hello Route

Navigate to "localhost:8080/hello"