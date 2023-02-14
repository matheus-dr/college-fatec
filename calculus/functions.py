import math


def bhaskara(a: int, b: int, c: int) -> (int, int):
    n = math.pow(b, 2) - 4 * a * c

    r1 = (b * -1 + (math.sqrt(n))) / (2 * a)
    r2 = (b * -1 - (math.sqrt(n))) / (2 * a)

    return r1, r2
