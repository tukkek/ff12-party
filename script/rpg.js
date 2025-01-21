export var seed=new URL(document.location).searchParams.get('seed')
                ||new Date().toISOString().slice(0,10)

let rng=new alea()

export function roll(min,max){return Math.floor(rng()*(max-min+1)+min)}

export function shuffle(array,clone=false){
  if(clone) array=Array.from(array)
  for(let i=0;i<array.length-1;i++){
    let j=roll(i,array.length-1)
    let a=array[i]
    let b=array[j]
    array[i]=b
    array[j]=a
  }
  return array
}

export function chance(n){return roll(1,n)==n}
