export const formatVND = (value, suffix = '₫') => {
  const number = Number(value)
  if (isNaN(number)) return ''
  return number.toLocaleString('vi-VN') + (suffix ? ` ${suffix}` : '')
}
