#01/15/2022
#Authors: Gabo & Alex
#This class will be the main class where the snake and 
#the other object will be interacting. 

from Apple import Apple
from Snake import Snake

class Enviroment: 
    #Attributes 
    CONSTANT = 50 #this number is the size of the canvas. 
    snake
    apple 
    #size will be setup by the constructor. 
    size
    row 
    column
    canvas[[None]]
        #Constructor
        def __init__(self, snake, apple, size):
            #first we need to create the snake 
            #and the apple. 
            self.snake = Snake(0, 0)
            #the first number has to be generated randomly
            self.apple = Apple(5 , "Green")




    

