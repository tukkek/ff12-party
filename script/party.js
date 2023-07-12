import * as rpg from './rpg.js'

const VIEW=document.querySelector('#party')
const AVAILABLE=VIEW.querySelector('#available')
const JOINED=AVAILABLE.querySelector('template#found').content.children[0]
const ṔRIORITY=VIEW.querySelector('#priority')
const MEMBER=ṔRIORITY.querySelector('template#member').content.children[0]
const JOBS=new Map([['Vaan',['Shikari','Foebreaker']],
                    ['Penelo',['White mage','Monk']],
                    ['Balthier',['Machinist','Uhlan']],
                    ['Fran',['Archer','Red battlemage']],
                    ['Basch',['Knight','Bushi']],
                    ['Ashe',['Time battlemage','Black mage']]])
const PARTY=rpg.shuffle(JOBS.keys(),true)

function update(){
  for(let p of ṔRIORITY.querySelectorAll('li.member'))
    p.remove()
  for(let name of PARTY){
    if(!AVAILABLE.querySelector(`.found[name=${name}] input`).checked)
      continue
    let m=MEMBER.cloneNode(true)
    m.querySelector('.name').textContent=name
    let jobs=JOBS.get(name)
    if(rpg.chance(3)) jobs.reverse()
    jobs=jobs.join(', ').toLowerCase()
    m.querySelector('.job').textContent=jobs
    ṔRIORITY.appendChild(m)
  }
}

export function setup(){
  let names=Array.from(JOBS.keys())
  for(let i=0;i<names.length;i++){
    let n=names[i]
    let j=JOINED.cloneNode(true)
    j.querySelector('.name').textContent=n
    j.setAttribute('name',n)
    let input=j.querySelector('input')
    input.onchange=()=>update()
    if(i==0) input.checked=true
    AVAILABLE.appendChild(j)
  }
  update()
}
