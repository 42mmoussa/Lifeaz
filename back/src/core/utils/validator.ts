export const validateEmail = (email: string): boolean => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(email)
}