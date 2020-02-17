# You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......


n=int(input())
if n==0:
  print("0",end="")
elif n<0:
  print("Error",end="")
else:
  print(n*n,end="")
