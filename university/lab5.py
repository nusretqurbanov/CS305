# Nusret




import numpy as np

I = np.matrix([[0.3, 0.2, 0.5]])

T = np.matrix([[0.1, 0.4, 0.5],
               [0.2, 0.6, 0.2],
               [0.3, 0.6, 0.1]])
T1 = I * T
print (T1)
T2 = T1 * T
print (T2)
T3 = T2 * T
print(T3)


import numpy as np
#Current state
I = np.matrix([[1, 0]])
#Transition Matrix
T = np.matrix([[.7, 0.3],
               [.6, 0.4]])
T1 = I * T
# After 1 hours
print (T1)
T2 = T1 * T
# After 2 hours
print (T2)
T3 = T2 * T
# After 3 hours
print (T3)


import numpy as np
#Current state
I = np.matrix([[0.5, 0.5]])
#Transition Matrix
T = np.matrix([[.7, 0.3],
               [.6, 0.4]])
T1 = I * T
# After 1 hours
print (T1)
T2 = T1 * T
# After 2 hours
print (T2)
T3 = T2 * T
# After 3 hours
print (T3)

