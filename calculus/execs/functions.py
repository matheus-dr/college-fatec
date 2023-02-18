import math


def bhaskara(a: int, b: int, c: int) -> (int, int):
    n = math.pow(b, 2) - 4 * a * c

    r1 = (b * -1 + (math.sqrt(n))) / (2 * a)
    r2 = (b * -1 - (math.sqrt(n))) / (2 * a)

    return r1, r2


def sum_and_product(a, b, c):
    s = -b / a
    p = c / a

    delta = (s / 2) ** 2 - p
    if delta >= 0:
        x1 = -s / 2 + math.sqrt(delta)
        x2 = -s / 2 - math.sqrt(delta)
        return x1, x2
    else:
        return None
