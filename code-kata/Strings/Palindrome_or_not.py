# Print 1 if String is palindrome or 0 if not

n=input()
s=n[::-1]
if(s==n):
	print("1",end="")
else:
	print("0",end="")
