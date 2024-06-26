export const myDebounce = (func: Function, delay: number) =>{
  let timer:any
  return function(){
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(context,args)
    },delay)
  }
}