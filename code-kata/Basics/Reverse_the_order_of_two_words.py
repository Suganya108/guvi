# Given a string S consisting of 2 words reverse the order of two words .

S = input().split()
S[0], S[1] = S[1], S[0]
print(S[0],S[1],end="")
