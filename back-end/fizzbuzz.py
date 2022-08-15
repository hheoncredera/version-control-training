#Divide by 3 = fizz
#Divide 5 = buzz
#Both = fizzbuzz
value = input("This program will evalue numbers from 1 to x. What you would like x to be? Please only put in a numerical value. \n")

if not value.isnumeric():
    print("That's not a numerical value!")
else:
    value = int(value)
    print("")
    for x in range(1, value + 1):
        if x % 3 == 0 and x % 5 == 0:
            print("FizzBuzz!")
        elif x % 3 == 0:
            print("Fizz")
        elif x % 5 == 0:
            print("Buzz")
        else:
            print(x)
