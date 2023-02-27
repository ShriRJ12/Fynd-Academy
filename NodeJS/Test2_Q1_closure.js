function sum1(x)
    {
        function sum2(y)
            {
                return  x+y;
            }
        return sum2;
    }
    const add1= sum1(10);
    console.log(add1(12));
        
