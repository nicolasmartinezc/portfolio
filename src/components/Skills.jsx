import { useState } from 'react'
import lang from '../json/languages.json'
import '../styles/Skills.css'

export function Skills(){
  const [category, setCategory] = useState('frontend')
  const [svg, setSvg ]= useState(lang.filter(lang =>  lang.category === 'frontend'))

  const toggleCategory = (x) => {
    if (category === x) return

    setCategory(x)
    setSvg(lang.filter(lang =>  lang.category === x))
  }

  const createTable = (svg) => {
    let table = ''
    let count = 0
    let maxLang = 0
    svg.forEach(lang => {
      if (maxLang === 9) return
      if (count === 0) {
        table += `<tr class='row-container'>`
      }
      table += `<th class='language-container'>
                  ${lang.svg}
                  <p class='language-name'>${lang.name}</p>
                </th>`
      count++
      if (count === 3) {
        table += '</tr>'
        count = 0
      }
      maxLang++
    })

    if (maxLang != 9) {
      for (let i = maxLang; i <= 9; i++, maxLang++) {
        if(maxLang === 9) break
        if (count === 0) table += `<tr class='row-container'>`
        table += `<th class='language-container'>
                    <p class='language-name'></p>
                  </th>`
        count++
        if (count === 3) {
          table += '</tr>'
          count = 0
        }
      }
    }

    return table
  }

  return (
    <article className='article-skills'>
      <span className='category-container'>
        <button className={category === 'frontend' ? 'category active' : 'category'} onClick={() => toggleCategory('frontend')}>Front-end</button>
        <button className={category === 'backend' ? 'category active' : 'category'} onClick={() => toggleCategory('backend')}>Back-end</button>
        {/* <span className={category === 'other' ? 'category active' : 'category'} onClick={() => toggleCategory('other')}>Otros</span> */}
      </span>
      <table className='table-container'>
        <tbody className='tbody-container' dangerouslySetInnerHTML={{ __html: createTable(svg) }} />
      </table>
    </article>
  )
}