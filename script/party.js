import * as rpg from './rpg.js'

const VIEW=document.querySelector('#party')
const MEMBER=VIEW.querySelector('#member').content.children[0]
const JOBS=new Map([['Vaan',['Shikari','Foebreaker']],
                    ['Penelo',['White mage','Monk']],
                    ['Balthier',['Machinist','Uhlan']],
                    ['Fran',['Archer','Red battlemage']],
                    ['Basch',['Knight','Bushi']],
                    ['Ashe',['Time battlemage','Black mage']]])

export function setup(){
  for(let name of rpg.shuffle(JOBS.keys(),true)){
    let m=MEMBER.cloneNode(true)
    m.querySelector('.name').textContent=name
    let jobs=JOBS.get(name)
    if(rpg.chance(3)) jobs.reverse()
    jobs=jobs.join(', ').toLowerCase()
    m.querySelector('.job').textContent=jobs
    VIEW.appendChild(m)
  }
}
