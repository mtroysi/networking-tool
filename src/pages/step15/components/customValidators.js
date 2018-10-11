export default {
  pattern(pattern) {
    return (value) => {
      return pattern.test(value)
    }
  },
  sfeirMail() {
    return (value) => {
    //return true or false
    }
  }
}
