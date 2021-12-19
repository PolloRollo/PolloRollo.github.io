# Math 4610 Software Manual

**Routine Name:**           printMatrix

**Author:** David Rollo

**Language:** Python

**Description/Purpose:** This routine will print a matrix row by row.
This is a pretty print feature when testing the code.

**Input:** The input is a matrix (python list of lists).

**Output:** This routine prints each row of the matrix and will return nothing.

**Usage/Example:**

      printMatrix(m1)

Output from the lines above:

      [1, 2, 3]
      [4, 5, 6]
      [7, 8, 9]

**Implementation/Code:** The following is the code for printMatrix()

    def printMatrix(matrix):
    for row in matrix:
        print(row)
    return


**Last Modified:** December 2021