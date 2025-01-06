package com.example.demo

import com.example.demo.controllers.UserController
import com.example.demo.factories.UserFactory
import com.example.demo.types.UserData
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class UserAPI {
    private val userFactory = UserFactory()
    private val userController: UserController = userFactory.createUserController()

    @PostMapping("/create-user")
    fun createUser(@RequestParam name: String,
                   @RequestParam email: String,
                   @RequestParam country: String,
                   @RequestParam password: String){
        userController.signUp(name, email, country, password)
    }
}