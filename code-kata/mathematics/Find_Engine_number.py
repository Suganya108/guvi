# Engine no is sum of all the integers present on car’s Number plate.
# Develop an algorithm which takes input as in form of string(Number plate) and gives back
import math
s=input()
n = [int(i) for i in s if i.isdigit()]
print(sum(n),end="")
