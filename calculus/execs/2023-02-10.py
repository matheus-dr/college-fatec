import math
from fractions import Fraction

print(Fraction(
    ((4 / 5) * ((7 / 3) - 1))
    /
    ((2 / 9) - 3)
).limit_denominator())

print(Fraction(
    (1 / 5) + (4 / 9 / ((1 / 2) * (2 / 4) - (1 / 9)))
).limit_denominator())

# Print interval of ]1; 2] from 0.1 to 0.1
print(
    [x / 10 for x in range(1 * 10 + 1, 2 * 10 + 1, 1)]
)

print(
    Fraction(math.pow(2 + (1 / 4), -3)).limit_denominator()
)


def calc(x):
    return Fraction(
        math.pow((
                (math.pow(x, 3) * math.pow(x, 2) * math.pow(x, 5))
                /
                (math.pow(x, 5) * math.pow(x, 10))
        ), 2)
    ).limit_denominator()


print(
    calc(3)
)


def calc2(x, y):
    return Fraction(
        math.pow((
                48 * math.pow(x, 4) * math.pow(y, 6)
        ), 1 / 3)
    ).limit_denominator()


print(
    calc2(1, 1)
)

print(Fraction(
    math.pow((
            (math.pow(2, 28) + math.pow(2, 30))
            /
            10
    ), 1 / 3)
).limit_denominator())
