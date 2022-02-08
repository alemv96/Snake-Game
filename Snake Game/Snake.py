#01/15/2022
#Authors: Gabo & Alex
#This class will be in charge of creating the snake of the game
#User will be able to control it and direct it towards another object

class Snake: 
    #Attributes
    size = 0
    position = 0
    #Constructor
    def __init__(self, size, position):
        # It starts with a head and a tail. 
        #I will initialize this in 0 when it starts. 
        self.size = size 

        #It will always start at the same position. 
        self.position = position

        
    #Set Methods 
    def __setPosition__(self, newPos):
        self.position = newPos

    def __setSize__ (self, newSize):
        self.size = newSize
            
        #Get methods. 
    def __getPosition__ (self):
        return self.position
        
    def __getSize__(self):
        return self.size 

    
        

    


