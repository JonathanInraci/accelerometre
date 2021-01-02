x_var = 2  #  position variable de l'axe x
y_var = 2  #  position variable de l'axe y
x = input.acceleration(Dimension.X)
y = input.acceleration(Dimension.Y)
def on_forever():
    global x, y, x_var, y_var
#  calcul position x et y
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
#  mise à jour des lumières
    led.plot(x_var, y_var)
#  lumière qui ne doivent pas être allumé de l'axe x et y
    unplot()
#  l'inclinaison x qui influence la led allumé sur l'axe x
    X_var()
#  l'inclinaison y qui influence la led allumé sur l'axe y
    Y_var()
basic.forever(on_forever)

def unplot():  # fonction pour éteindre les led limitrophe par rapport à x_var et y_var
    led.unplot(x_var -1, y_var)
    led.unplot(x_var +1, y_var)
    led.unplot(x_var, y_var -1)
    led.unplot(x_var, y_var +1)
    led.unplot(x_var -1, y_var +1)
    led.unplot(x_var -1, y_var -1)
    led.unplot(x_var +1, y_var +1)
    led.unplot(x_var +1, y_var -1)

def X_var():  # condition de la led en fonction de l'inclinaison
    global x_var
    if 500 < x < 1023 and x_var < 4:  # x4
        x_var += 1
    elif 233 <= x <= 356 and x_var == 4:  # x3
        x_var -= 1

    if 233 < x < 356 and x_var < 3:  # x3
        x_var += 1

    if -70 < x < 64 and x_var > 2:  # x2
        x_var -= 1
    elif -70 < x < 64 and x_var == 1:  # x2
        x_var +=1

    if -331 < x < -216 and x_var > 1:  # x1
        x_var -= 1

    if -1023 < x < -493 and x_var > 0:  # x0
        x_var -= 1
    elif -331 <= x <= -216 and x_var == 0:  # x1
        x_var +=1

def Y_var():
    global y_var
    if 615 < y < 1023 and y_var < 4:  # y4
        y_var += 1
    elif 278 <= y <= 492 and y_var == 4:  # y3
        y_var -=1
    
    if 278 < y < 492 and y_var < 3:  # y3
        y_var += 1
    elif -51 <= y <= 152 and y_var == 3:  # y2
        y_var -=1
    
    if -51 < y < 152 and y_var > 2:  # y2
        y_var -= 1 

    if -362 < y < -183 and y_var > 1:  # y1
        y_var -= 1
    elif -51 <= y <= 152 and y_var == 1:  # y2
        y_var += 1
    
    if -1023 < y < -501 and y_var > 0:  # y0
        y_var -= 1
    elif -362 <= y <= -183 and y_var == 0:  # y1
        y_var += 1