package com.example.demo.controllers

import com.example.demo.services.UserService
import com.example.demo.types.UserData
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(private val userService: UserService) {

    @PostMapping("/signup")
    fun signUp(@RequestParam name: String,
               @RequestParam email: String,
               @RequestParam country: String,
               @RequestParam password: String): String {
        return userService.SignUp(name, email, country, password)
    }
}
