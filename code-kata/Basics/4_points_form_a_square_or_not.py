# Check whether the given 4 points form a square or not.

p1=[int(x) for x in input().split()]
p2=[int(x) for x in input().split()]
p3=[int(x) for x in input().split()]
p4=[int(x) for x in input().split()]
s1=p1[0]+p2[0]+p3[0]+p4[0]
s2=p1[1]+p2[1]+p3[1]+p4[1]
if s1==s2:
  print('yes',end='')
else:
  print('no',end='')
