"""
The following is an answer to Exercise 4.
@author: Atharva Shirke
"""
import turtle
import json

def defineCommands(file):
    """
    Given a JSON file with (cmdAbbreviation, turtleMethod)
    pairs, instantiate a dictionary that maps abbreviations
    to turtle method.
    @param file: relative file path
    @returns: a dictionary object with (abbrev, method) pairs
    """
    f = open(file)
    data = json.load(f)
    cmds = {}
    for key, value in data["commands"].items():
        if type(value) != int:
            value = getattr(turtle, value)
        cmds[key] = value
    return cmds

def executeCommandFromLine(inputString, commands):
    """
    Given a string repressenting a line of a command, and
    a dictionary of (cmdAbbreviation, turtleMethod) pairs,
    execute the command (move the turtle).
    @param inputString: string representing one line of a command
    @param commands: dictionary of command abbreviation and turtle method
    """
    argList = inputString.split(" ")
    abbrev, dist = argList[0], argList[1]
    method = commands[abbrev]
    print(abbrev + ' ' + dist)
    print(method)
    if method is not None:
        if type(method) == int:
            turtle.setheading(method)
            turtle.forward(int(dist))
        else:
            method()
    else:
        raise ValueError(f"{abbrev} not a valid command")

def executeCommandsFromFile(file, commands):
    """
    Given a txt file with lines of commands, and a dictionary of
    (cmdAbbreviation, turtleMethod) pairs, parse and execute
    the commands (move the turtle).
    @param file: string path of file
    @param commands: dictionary mapping command abbreviation and
    turtle methods
    """
    f = open(file, "r")
    for line in f:
        executeCommandFromLine(line, commands)

def main():
    commands = defineCommands('commands.json')
    executeCommandsFromFile('input.txt', commands)
    print("Completed your turtle commands!")
if __name__ == "__main__":
    main()
