/**
 * 手机号验证
 * @param {*} value 手机号
 * @returns
 */
export function checkPhone(value) {
  let regPhong = /^1[23456789][0-9]{9}$/
  return regPhong.test(value)
  //return regPhone.test(value)? true :false
}

/**
 * 密码验证
 * @param {*} value
 * @returns
 */
export function checkPassword(value) {
  //匹配 以字母开头，长度在6~18之间，只能包含字符、数字和下划线和.
  let regPassword = /^[a-zA-Z][\w.]{5,17}$/
  return regPassword.test(value)
}

/**
 * 验证码
 * @param {*} value
 * @returns
 */
export function checkCode(value) {
  //数字字符6位
  let regCode = /^[\w]{6}$/
  return regCode.test(value)
}
/**
 * 性别
 * @param {*} value
 * @returns
 */
export function checkAge(value) {
  if (value.length !== 1) return false
  let regCode = new RegExp('[/^男$|^女&/]')
  return regCode.test(value)
}
