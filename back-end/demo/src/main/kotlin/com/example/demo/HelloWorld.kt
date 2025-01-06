package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController


@RestController
class HelloWorld {
    @GetMapping("/hello")
    fun hello(): String {
        return "Hello, world! From Kotlin"
    }
}