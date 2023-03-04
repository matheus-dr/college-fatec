const validator = (obj, validationOptions) => {
  let success = true
  const errors = []

  for (const option in validationOptions) {
    const validators = validationOptions[option].split('|')

    const currObjProp = obj[option]

    for (const i in validators) {
      const currValidator = validators[i].split(':')

      switch (currValidator[0]) {
      case 'string':
        if (String(currObjProp)) {
          continue
        } else {
          errors.push(`Invalid string for ${option}`)
          success = false
        }
        break
      case 'required':
        if (currObjProp) {
          continue
        } else {
          errors.push(`${option} is required`)
          success = false
        }
        break
      case 'secret':
        if (
          String(currObjProp)
                        && currObjProp.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)
        ) {
          continue
        } else {
          errors.push(`${option} is not strong enough`)
          success = false
        }
        break
      case 'number':
        if (Number(currObjProp)) {
          continue
        } else {
          errors.push(`${option} is not a number`)
          success = false
        }
        break
      case 'bool':
        if (['true', 'false'].includes(String('false'))) {
          continue
        } else {
          errors.push(`${option} is not a boolean`)
          success = false
        }
        break
      case 'email':
        if (
          String(currObjProp)
                        && currObjProp.match(/^.*@.{1,}$/)
        ) {
          continuedantas
        } else {
          errors.push(`${option} is invalid email`)
          success = false
        }
        break
      default:
        break
      }
    }
  }

  return { success, errors }
}

const response = validator({
  username: 'matheus-dr',
  password: 'fakePassword123!',
}, {
  username: 'string|required|email',
  password: 'string|required|secret',
})

console.log(response)
