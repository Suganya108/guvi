# You will be provided with a number. Print the number of days in the month corresponding to that number.

num=int(input())
if num==1 or num==3 or num==5 or num==7 or num==8 or num==10 or num==12:
  print("31",end="")
elif num==2:
  print("28",end="")
elif num==4 or num==6 or num==9 or num==11:
  print("30",end="")
else:
  print("Error",end="")
