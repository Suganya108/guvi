# Let P represent Paper, R represent Rock and S represent Scissors.
# Given 2 out of the 3 determine which one wins. If its a draw print 'D'.

x, y = input().split()
if((x=='R' and y=='P')or(x=='P' and y=='R')):
    print('P',end="")
elif((x=='S' and y=='P') or (x=='P' and y=='S')):
	print('S',end="")
elif((x=='R' and y=='S') or (x=='S' and y=='R')):
	print('R',end="")
else:
    print('D',end="")
