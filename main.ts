let x_var = 2
//   position variable de l'axe x
let y_var = 2
//   position variable de l'axe y
let x = input.acceleration(Dimension.X)
let y = input.acceleration(Dimension.Y)
basic.forever(function on_forever() {
    
    //   calcul position x et y
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    //   mise à jour des lumières
    led.plot(x_var, y_var)
    //   lumière qui ne doivent pas être allumé de l'axe x et y
    unplot()
    //   l'inclinaison x qui influence la led allumé sur l'axe x
    X_var()
    //   l'inclinaison y qui influence la led allumé sur l'axe y
    Y_var()
})
function unplot() {
    //  fonction pour éteindre les led limitrophes par rapport à x_var et y_var
    led.unplot(x_var - 1, y_var)
    led.unplot(x_var + 1, y_var)
    led.unplot(x_var, y_var - 1)
    led.unplot(x_var, y_var + 1)
    led.unplot(x_var - 1, y_var + 1)
    led.unplot(x_var - 1, y_var - 1)
    led.unplot(x_var + 1, y_var + 1)
    led.unplot(x_var + 1, y_var - 1)
}

function X_var() {
    //  condition de la led en fonction de l'inclinaison
    
    if (500 < x && x < 1023 && x_var < 4) {
        //  x4
        x_var += 1
    } else if (233 <= x && x <= 356 && x_var == 4) {
        //  x3
        x_var -= 1
    }
    
    if (233 < x && x < 356 && x_var < 3) {
        //  x3
        x_var += 1
    }
    
    if (-70 < x && x < 64 && x_var > 2) {
        //  x2
        x_var -= 1
    } else if (-70 < x && x < 64 && x_var == 1) {
        //  x2
        x_var += 1
    }
    
    if (-331 < x && x < -216 && x_var > 1) {
        //  x1
        x_var -= 1
    }
    
    if (-1023 < x && x < -493 && x_var > 0) {
        //  x0
        x_var -= 1
    } else if (-331 <= x && x <= -216 && x_var == 0) {
        //  x1
        x_var += 1
    }
    
}

function Y_var() {
    
    if (615 < y && y < 1023 && y_var < 4) {
        //  y4
        y_var += 1
    } else if (278 <= y && y <= 492 && y_var == 4) {
        //  y3
        y_var -= 1
    }
    
    if (278 < y && y < 492 && y_var < 3) {
        //  y3
        y_var += 1
    } else if (-51 <= y && y <= 152 && y_var == 3) {
        //  y2
        y_var -= 1
    }
    
    if (-51 < y && y < 152 && y_var > 2) {
        //  y2
        y_var -= 1
    }
    
    if (-362 < y && y < -183 && y_var > 1) {
        //  y1
        y_var -= 1
    } else if (-51 <= y && y <= 152 && y_var == 1) {
        //  y2
        y_var += 1
    }
    
    if (-1023 < y && y < -501 && y_var > 0) {
        //  y0
        y_var -= 1
    } else if (-362 <= y && y <= -183 && y_var == 0) {
        //  y1
        y_var += 1
    }
    
}

