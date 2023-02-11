import math


def bhaskara(a: int, b: int, c: int) -> (int, int):
    n = math.pow(b, 2) - 4 * a * c

    r1 = (b * -1 + (math.sqrt(n))) / (2 * a)
    r2 = (b * -1 - (math.sqrt(n))) / (2 * a)

    return (r1, r2)


# def dizima(num, amount_repete):
#     n = math.pow(10, amount_repete)
#
#     new_num = n
#     new_div = n - 1
#
#     remainder = new_num % new_div
#     while remainder != 0:
#         remainder =
#
#     return f'{new_num}/{new_div}'


print(bhaskara(1, 12, -13))
