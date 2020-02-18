# Given a string 'S' swap the even and odd characters starting from index 1(Assume the index starts from 0).

s=str(input())
m=''.join([ s[x:x+2][::-1] for x in range(0, len(s) ,2) ])
print(m)
