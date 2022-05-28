 # Tendrás que crear un programa que simule la tirada de dados. 
 # Cada vez que ejecutamos el programa, este elegirá dos números aleatorios entre el 1 y el 6.
 # El programa deberá imprimirlos en pantalla, imprimir su suma y preguntarle al usuario si quiere tirar los dados otra vez.

import random
respuesta = input("Quiere tirar los dados? S/N ")
while (respuesta == 'S'):         
    dado1 = int ((random.random()*10)%6+1)
    dado2 = int ((random.random()*10)%6+1)
    sumadados = (dado1) + (dado2)
    print ("Dado1=", dado1)
    print ("Dado2=", dado2)
    print ("La suma de sus dados es", sumadados)   
    respuesta = input("Quiere tirar los dados? S/N ")


