# How many possible ways are to shuffle given number of playing cards?.

n=int(input())
f=1
for i  in range(1,n+1):
	f=f*i
print(f,end="")
