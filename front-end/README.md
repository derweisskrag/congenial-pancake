# Restaurant Kuuking Burger

## Description

### Introduction

### Objectives and Methods

I would like to create Kuuking Burger app to sell burgers, and make users learn about fast food industry.

Methods include:

1. NEXT.js 
2. Kotlin
3. Kuuking Bank
4. Kuuking Learn


## Kuuking Bank

Why do I have to simulate the Banking system? The answer is to simulate the payment.
Unfortunately, to make services, I have to follow the regulations law of transactions. 
This means that as a webstore, my application should not violate any rights, or laws.
Therefore, I would use Bank API to call remote payment procedures, given all the necessary
information about the request body. The Bank would require the user to log in and perform the
payment (modify their balance account, and keep track of his state in the Banking system). All
changes done are kept track of, so user cannot cancel them (non-repudiation). However, in case
the user is found eligible for refunding, they can request for the refund.

### Objective

The objective of the Kuuking Bank is to simulate the payment, allowing users to buy the items 
from the store.

### Methods

I am going to write the Kotlin bussiness logic of the Bank: 

1. Implement authorization.
2. Create the user dashboard and provide special layout.
3. Introduce profile for users: modify username, change email (with verification), change passwords, load money.
4. Use Redux tool kit to keep track of User cart and clear it once payment status is successful. Add it to User history.

## Memory game - EDUCATION

For entertainment and education, I implement memory game and prize of one free burger. This is the exam's second task.

The implementation is quite simple: TicTacToe approach.

