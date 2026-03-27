import React from 'react'

function Skills() {
  const skillCategories = [
    {
      category: 'Data Analysis',
      skills: ['SQL', 'Python', 'R', 'Excel']
    },
    {
      category: 'Visualization',
      skills: ['Tableau', 'Power BI', 'Google Data Studio', 'Matplotlib']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Excel', 'Google Sheets', 'Jupyter Notebooks', 'Looker']
    },
    {
      category: 'Core Skills',
      skills: ['Statistical Analysis', 'Data Cleaning', 'Reporting', 'Business Intelligence']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <ul>
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
