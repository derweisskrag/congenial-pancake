package com.example.demo.factories

import com.example.demo.controllers.UserController
import com.example.demo.services.UserService

class UserFactory {
    fun createUserController(): UserController {
        // Create a UserService instance
        val userService = UserService()

        // Pass UserService into the UserController
        return UserController(userService)
    }
}