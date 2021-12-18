# Math 4610 Software Manual

**Routine Name:**           Bisection Method

**Author:** David Rollo

**Language:** Python

**Description/Purpose:** This routine will compute a root (if it exists) of a function between two bounds.
This process is executed by using the bisection method which has linear convergence.

**Input:** This function takes the following inputs.

| input   | type        | description |
|---------|-------------|-------------|
|       f | function |  Function for which we desire a root. Takes input x and returns y |
|   lowerBound |  float |  Lowerbound for our root search |
|   upperBound |  float |   Upperbound for our root search |
|    iterations |   integer |   Maximal number of iterations |

**Output:** This routine return the float value for x in our bounds which solves our function.

**Usage/Example:**

The routine has two arguments needed to return the values of the precision in terms of the smallest number that can be
represented. Since the code is written in terms of a Fortran subroutine, the values of the machine machine epsilon and
the power of two that gives the machine epsilon. Due to implicit Fortran typing, the first argument is a single precision
value and the second is an integer.

      call smaceps(sval, ipow)
      print *, ipow, sval

Output from the lines above:

      24   5.96046448E-08

The first value (24) is the number of binary digits that define the machine epsilon and the second is related to the
decimal version of the same value. The number of decimal digits that can be represented is roughly eight (E-08 on the
end of the second value).

**Implementation/Code:** The following is the code for smaceps()

      subroutine smaceps(seps, ipow)
    c
    c set up storage for the algorithm
    c --------------------------------
    c
          real seps, one, appone
    c
    c initialize variables to compute the machine value near 1.0
    c ----------------------------------------------------------
    c
          one = 1.0
          seps = 1.0
          appone = one + seps
    c
    c loop, dividing by 2 each time to determine when the difference between one and
    c the approximation is zero in single precision
    c --------------------------------------------- 
    c
          ipow = 0
          do 1 i=1,1000
             ipow = ipow + 1
    c
    c update the perturbation and compute the approximation to one
    c ------------------------------------------------------------
    c
            seps = seps / 2
            appone = one + seps
    c
    c do the comparison and if small enough, break out of the loop and return
    c control to the calling code
    c ---------------------------
    c
            if(abs(appone-one) .eq. 0.0) return
    c
        1 continue
    c
    c if the code gets to this point, there is a bit of trouble
    c ---------------------------------------------------------
    c
          print *,"The loop limit has been exceeded"
    c
    c done
    c ----
    c
          return
    end

**Last Modified:** December 2021