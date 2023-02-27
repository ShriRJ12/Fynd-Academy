
function CI(p,t,r,n)
{
    let amount= p * (Math.pow((1 + (r / n)), (n * t)));
    C_I=amount-p;
    console.log("Compount_Interest is: "+C_I);
    
}
CI(2000,5,0.08,12);