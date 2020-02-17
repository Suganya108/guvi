# You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

p, t, r = [float(x) for x in input().split()] 
s=p*t*r/100
print("%.2f" %s,end="")
