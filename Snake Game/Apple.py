#01/15/2022
#Authors: Gabo & Alex
#This class will generate an apple inside of the enviroment
#At some point, this will not be an apple. It could be a rat. 
#or something different. It could be a special game mode. 

class Apple:
    #Attributes
    position = 0
    color = " "
    #Constructor
    def __init__(self, position, color, ):
        #position will start randomly inside
        #canvas
        self.position = position
        self.color = color

    #set methods.
    def __setColor__ (self, color):
        self.color = color

    def __setPosition__ (self, position):
        self.position = position

    #Get methods 
    def __getPosition__ (self):
        return self.position 

    def __getColor__ (self):
        return self.color
        
    