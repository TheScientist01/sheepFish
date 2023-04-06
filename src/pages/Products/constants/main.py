def palindromeChecker(s, startIndex, endIndex, subs):
    result = ''
    for i in range(len(startIndex)):
        start = startIndex[i]
        end = endIndex[i]
        sub = subs[i]
        substring = s[start:end+1]
        counter = 0
        for j in range(len(substring)//2):
            if substring[j] != substring[-j-1]:
                counter += 1
        if counter > sub:
            result += '0'
        else:
            result += '1'
    return result


s = 'bcba'
startIndex = [1, 2, 1]
endIndex = [3, 3, 1]
subs = [2, 0, 0]
print(palindromeChecker(s, startIndex, endIndex, subs))  # Output: '101'
