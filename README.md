El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número".
El juego consiste en que el programa genera un número al azar entre 1 y 100, y la jugadora tiene queadivinarlo. El juego da pistas sobre si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final la jugadora acierta el número.
En la parte superior, la jugadora introduce un número y da al botón de Prueba.
Debajo, en el apartado de Pista aparecen los siguientes textos:
Al arrancar la página: Escribe un número y dale a Prueba.
Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba:
Demasiado alto.
Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba:
Demasiado bajo.
Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: Has ganado campeona!!!
Cuando la jugadora no introduzca un número válido y pulse en Prueba: El número debe estar
entre 1 y 100.
En la parte inferior debe aparecer el número de veces que se ha pulsado el bóton Prueba.

Tenemos que generar un número --> función
Las usuarias rellena el input con un número --> necesito saber que número es
Aprieta el botón --> escuchar el botón --> evento
Condicionales ¿es el número el aleatorio? Si No
Si es que No
Es el número del input más alto
Es el número del input más bajo

CORRECCIÓN DEL EJERCICIO

FLUJOGRAMA
Arrancar página Generar y guardar en una constante un número aleatorio e iniciar el contador a 0
Escuchar el botón Probar -- Prevenir el envío del formulario -- Leer el número del input, comparar con el número aleatorio y actualizar la pist --incrementar el contador

PASOS
[] DIAGRAMA DE FLUJO
[]HTML/CSS
[] Generar y guardar número aleatorio
[]Pistas:

-[]Leer el input
-[] Comparar con el número aleatorio
-[] Actualizar la pista

[] Inicializar el contador

- [] Incrmentar el contador cuando hago click en Prueba
- [] Pintar el contador
