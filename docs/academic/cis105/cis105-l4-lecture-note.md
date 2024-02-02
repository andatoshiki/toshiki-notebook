# CIS105: Computer Applications & Information Systems Lect. 4

## Chapter 4: Formulas and Functions

### 4.1: References and Calculations

-   Calculations
    -   **Add (`+`), Subtract (`-`), Multiply (`*`), Divide (`/`)**
    -   Add: `A1+A2`
    -   Subtract: `A1-A2`
    -   Multiply: `A1*A2`
    -   Divide: `A1/A2`
-   **Always end typing by pressing <kbd>Enter</kbd>**
-   Al formulas start with an equals (`=`) sign

### 4.2: References and Calculations

-   References: When we perform calculations in Excel, we often reference the value stored in other cells in our worksheet
-   Three ays to reference a cell:
    -   Relative reference - `A1`
    -   Mixed reference - `$A1` or `A$1`
    -   Absolute reference - `$A$1`
-   **Relative Reference**: An address or pointer that changes when the target item is moved or the relationship to it has changed.
    -   **RELATIVE REFERENCE IS THE DEFALT REFERENCE IN EXCEL**.
    -   The reference changes when the formula is copied elsewhere.
    -   Excel sees the location of the cells relative to the location of the formula.
    -   Click <kbd>Fn</kbd> + <kbd>F4</kbd> as hotkeys to construct value as relative value
-   **Absolute Reference**: Will make either the row or column "constant" in other words, the ABSOLUTE cell location is LOCKED

    -   To create an absolute cell reference, put a dollar sign ``$` symbol in front of the part of the reference that you want to remain constant.

-   | Reference | Comments                                                                                                                                                                                                                  |
    | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `A1`      | Both the column and row references are "relative" and will change when the reference is copied and pasted to other cell.                                                                                                  |
    | `$A1`     | The column reference is "**absolute**" and will remain constant when copied and pasted to other cells. The row reference is "relative" and will change when copied and pasted to cells in other rows of the worksheet     |
    | `A$1`     | The column reference is "relative" and will change when copied and pasted to cells in other columns in the worksheet. The row reference is "**absolute**" and will remain constant when copied and pasted to other cells. |
    | `$A$1`    | Both the column and row references are "**absolute**" and will remain constant when the reference is copied and pated to other cells.                                                                                     |

### 4.3: Summary Statistics Functions

-   Formula vs. Function
    -   Formula: Any calculation in excel
    -   Function: A pre-defined calculation
-   To perform calculations in Excel, we often reference the values stored in other cells in our worksheets. **We reference the cell location, not the value in the cell**.
-   `COUNT(value1, [value2]), ...)`: Counts the number of cells in that contain numbers.
-   `COUNTA(value1, [value2], ...)`: Counts the number of cells in a range of cells that are not blank.
-   `AVERAGE(number1, [number2], ...)`: Calculates the simple average of a set of numbers.
-   `MAX(number1, [number2], ...)`: Returns the largest value in a set of numbers.
-   `MIN(number1, [number2], ...)`: Returns the smallest value in a set of numbers.

### 4.4: Financial Function

-   `RATE(nper, pmt, pv, [fv], [type], [guess])` : calculates the interest rate earned for an investment given the number of payments made as part of the investment, the payment amount, and the current value of the investment.
-   `EFFECT(nominal _rate, pery)`: calculates the annual percentage rate for an interest rate given the
    number of times per year that interest is charged.
-   `NPER(rate, pmt, pv, [fv], [type])`: calculates the number of payments that will be made to pay off a loan given the interest rate, payment amount, and original loan amount.
-   `PMT(rate, per, pv, [fv], [type])`: calculates the payment amount for a loan given the interest rate, number of payments to be made to pay off the loan, and the original loan amount.
-   `PV(rate, per, pmt, [fv], (type))`: calculates the current value (accounting for compounding interest) of an investment given the interest rate, number of payments to be made, and the amount of the payment.
-   `FV(rate, per, pmt, [pv], [type])`: calculates the future value of an investment given the interest rate, number of payments to be made, and the amount of the payment.
