//Sets up the counter (1-100 right now)
for (var counter = 1; counter <= 100; counter++)

//Creates a variable called not_prime and automatically sets it to false for each of the counter numbers 
{
    var not_prime = false;

//Creates a for loop with a variable called div. The loop increases by one each time until it gets to one less than the counter.
    for (var div = 2; div <= (counter - 1); div++) 

//If the current number divided by the "div"ider number has a remainder of 0, then it's not a prime number and not_prime is set to true.    
    {
        if (counter % div === 0) 
        {not_prime = true;}
    }

//If after going through all the numbers between 2 and one less than the number and none of them were evenly divided (no remainder) not_prime will still be false and the console will print the number.
    if (not_prime === false) 
    {console.log(counter);}
}
