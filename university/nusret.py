# import random
# print(random.randint(0,9))
import random
num = random.random()
print(num)


import random
 # prints a random value from the list
list1 = [43, 83, 46, 972]
print(random.choice(list1))
 # prints a random item from the string
string = "butterfly"
print(random.choice(string))
import random
 # prints a random value from the list
list1 = [65,23,8,95,33]
print(random.choice(list1))

import random

random_number = random.randint(57, 78)
print(random_number)

import random

# Generate a random number between 0 and 99
random_number = random.randint(0, 99)

print("Random number mapped to 99:", random_number)

import random

# Original sequence
sequence = [68, 46, 55, 37]

# Shuffle the sequence
random.shuffle(sequence)

print("Shuffled sequence:", sequence)

import random

# Generate a random float between 3 and 62
random_float = random.uniform(3, 62)

print("Random float between 3 and 62:", random_float)

import random

# Generate 5 random numbers from a normal distribution
normal_numbers = [random.normalvariate(0, 1) for _ in range(5)]

print("Random numbers from normal distribution:", normal_numbers)

import random

# Generate 7 random numbers from a normal distribution with loc=7, scale=12
normal_numbers = [random.normalvariate(7, 12) for _ in range(7)]

print("Random numbers from normal distribution (loc=7, scale=12):", normal_numbers)

import random
import string

# Define the characters to use (letters, digits, punctuation)
characters = string.ascii_letters + string.digits + string.punctuation

# Generate a random password with 12 characters
password_length = 12
random_password = ''.join(random.choice(characters) for _ in range(password_length))

print("Randomly generated password:", random_password)

# Parameters for the LCG
m = 48883  # Modulus
a = 48     # Multiplier
b = 50974  # Increment

# Initial seed
X_n = 1  # You can change the seed value

# Number of pseudorandom numbers to generate
num_values = 10

# Generate pseudorandom numbers
random_numbers = []
for _ in range(num_values):
    X_n = (a * X_n + b) % m
    random_numbers.append(X_n)

print("Generated pseudorandom numbers:", random_numbers)