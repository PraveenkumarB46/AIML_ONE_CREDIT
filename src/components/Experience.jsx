import React from 'react'

function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Senior Data Analyst',
      company: 'Tech Solutions Inc',
      period: '2022 - Present',
      responsibilities: [
        'Led data analysis initiatives for 5+ cross-functional teams',
        'Created 15+ interactive dashboards reducing decision-making time by 40%',
        'Mentored 3 junior analysts in best practices and tools'
      ]
    },
    {
      id: 2,
      role: 'Data Analyst',
      company: 'Digital Insights Ltd',
      period: '2020 - 2022',
      responsibilities: [
        'Performed ETL operations on large datasets using SQL and Python',
        'Developed automated reporting systems improving efficiency by 35%',
        'Collaborated with stakeholders to identify KPIs and metrics'
      ]
    },
    {
      id: 3,
      role: 'Junior Data Analyst',
      company: 'Analytics Solutions Co',
      period: '2018 - 2020',
      responsibilities: [
        'Cleaned and validated data for accuracy and consistency',
        'Created visual reports and presentations for stakeholders',
        'Supported senior analysts in various analysis projects'
      ]
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
