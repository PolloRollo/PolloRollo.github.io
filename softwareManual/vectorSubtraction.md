# Math 4610 Software Manual

**Routine Name:**           vectorSubtraction

**Author:** David Rollo

**Language:** Python

**Description/Purpose:** This routine will compute the difference of two vector lengths.
This function creates a new list object. The original list objects are unaffected.

**Input:** This function requires two vector inputs of equal length.

**Output:** This routine returns a single vector (python list).

**Usage/Example:**

      v1 = [1, 2, 3]
      v2 = [4, 5, 6]
      print(vectorSubtraction(v1, v2))


Output from the lines above:

      [-3, -3, -3]


**Implementation/Code:** The following is the code for smaceps()

    def vectorSubtraction(u, v):
        # Returns u - v
        if len(u) != len(v):
            return None
        return [u[i] - v[i] for i in range(len(u))]

**Last Modified:** December 2021