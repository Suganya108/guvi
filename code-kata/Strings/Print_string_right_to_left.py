# Print the string from characters right to left.

s=input()
l=s[len(s)-1]
print(l.upper(),end="")
print(s[-2::-1],end="")
