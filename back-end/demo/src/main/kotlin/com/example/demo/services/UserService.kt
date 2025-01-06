package com.example.demo.services

import com.example.demo.types.UserData
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import java.sql.*
import java.security.MessageDigest

@Service
class UserService {
    // secret data
    // in real world we use .env.local for this exact purpose
    // for the exam, I go straightforward
    private val dbUrl = "jdbc:sqlite:burgers.db"
    private val dbUser = "root"
    private val dbPassword = "password"

    private fun hashPassword(password: String): String {
        val md = MessageDigest.getInstance("SHA-256")
        val hashedBytes = md.digest(password.toByteArray())
        return hashedBytes.joinToString("") { "%02x".format(it) }
    }

    fun SignUp(@RequestParam name: String,
               @RequestParam email: String,
               @RequestParam country: String,
               @RequestParam password: String): String{

        val hashedPassword = hashPassword(password)
        var connection: Connection? = null
        var preparedStatement: PreparedStatement? = null



        return try {
            connection = DriverManager.getConnection(dbUrl, dbUser, dbPassword)

            val checkEmailSQL = "SELECT COUNT(*) FROM users WHERE email = ?"
            preparedStatement = connection.prepareStatement(checkEmailSQL)
            preparedStatement.setString(1, email)
            val resultSet: ResultSet = preparedStatement.executeQuery()

            if (resultSet.next() && resultSet.getInt(1) > 0) {
                return "Error: User with this email already exists!"
            }

            val createTableSQL = """
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    email TEXT NOT NULL UNIQUE,
                    country TEXT NOT NULL,
                    password TEXT NOT NULL
                )
            """

            connection.createStatement().use { statement ->
                statement.execute(createTableSQL)
            }

            val sql = "INSERT INTO users (name, email, country, password) VALUES (?, ?, ?, ?)"
            preparedStatement = connection.prepareStatement(sql)
            preparedStatement.setString(1, name)
            preparedStatement.setString(2, email)
            preparedStatement.setString(3, country)
            preparedStatement.setString(4, hashedPassword)

            val rowsInserted = preparedStatement.executeUpdate()
            if (rowsInserted > 0) {
                "User registered successfully!"
            } else {
                "Failed to register user."
            }
        } catch (e: SQLException) {
            e.printStackTrace()
            "Error during SignUp: ${e.message}"
        } finally {
            preparedStatement?.close()
            connection?.close()
        }
    }
}