# You are provided with a number, "N". Find its factorial.


num=int(input())
factorial=1
if num < 0:
   exit
elif num == 0:
   print(factorial,end='')
else:
	for i in range(1,num + 1):
		factorial = factorial*i
	print(factorial,end='')
