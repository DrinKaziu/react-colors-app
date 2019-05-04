export default {
  up(size){},
  down(size) {
    const sizes = {
      xs: '475.98px',
      sm: '567.98px',
      md: '791.98px',
      lg: '1099.98px',
      xl: '1200px'
    }
  
    return `@media (max-width: ${sizes[size]})`
  }
}

// const sizes = {
//   xs: '575.98px',
//   sm: '767.98px',
//   md: '991.98px',
//   lg: '1199.98px'
// }