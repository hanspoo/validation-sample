
const required = value => value
  ? undefined
  : 'Requerido'
const maxLength = max => value => value && value.length > max
  ? `Debe tener como máximo ${max} caracteres`
  : undefined
const maxLength15 = maxLength(15)
const isNumeric = value => {
    console.log("validando numero ", value)
    return value && isNaN(Number(value))
      ? 'Debe ser numérico'
      : undefined;
}
const minValue = min => value => value && value < min
  ? `El valor mínimo es ${min}`
  : undefined
const minValue18 = minValue(18)
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Email inválido'
  : undefined
const tooOld = value => value && value > 65
  ? 'Eres demasiado viejo para esto'
  : undefined
const aol = value => value && /.+@aol\.com/.test(value)
  ? 'Es verdad? Aun usas AOL para tu email?'
  : undefined

  export { required, maxLength, maxLength15, isNumeric, minValue, minValue18, email, tooOld, aol };
