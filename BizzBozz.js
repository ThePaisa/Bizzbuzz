//Un numero es multiplo de otro, si el resultado de hacer % es == a 0

//imprimir los numeros del 1 al 100 de forma vertical 
// escribir bizz bozz o bizzbozz en los multiplos de 3,5.


var num= 100;

for(var i=1; i<=num; i++)
{
    

    if(i%3==0)
    {
        
        document.write("bizz");

    }

    if (i%5==0)
    {
        document.write("Buzz" )

    }
    
    if (i%3!=0 && i%5!=0)
        {
            document.write(i )
        }
    document.write("<br>")
}   