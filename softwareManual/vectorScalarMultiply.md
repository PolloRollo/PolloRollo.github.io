# Math 4610 Software Manual

**Routine Name:**           vectorScalarMulitpy

**Author:** David Rollo

**Language:** Python

**Description/Purpose:** This routine will compute a vector scaled by some constant.
This function creates a new list object. The original list object is unaffected.

**Input:** This function requires a numeric value (int, float) and a vector of any length.

**Output:** This routine returns a single vector (python list).

**Usage/Example:**

      v1 = [1, 2, 3]
      print(vectorSubtraction(3, v1))

Output from the lines above:

      [3, 6, 9]

**Implementation/Code:** The following is the code for smaceps()

    def scalarVectorMultiplication(c, v):
        # Constant c times vector v
        return [c * i for i in v]

**Last Modified:** December 2021