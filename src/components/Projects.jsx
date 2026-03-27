import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Sales Performance Dashboard',
      description: 'Interactive Tableau dashboard analyzing quarterly sales data across multiple regions and product categories.',
      tags: ['Tableau', 'SQL', 'Excel'],
      link: '#'
    },
    {
      id: 2,
      title: 'Customer Segmentation Analysis',
      description: 'Python-based analysis identifying customer segments using clustering algorithms for targeted marketing strategies.',
      tags: ['Python', 'Pandas', 'Statistical Analysis'],
      link: '#'
    },
    {
      id: 3,
      title: 'Website Analytics Report',
      description: 'Comprehensive Google Analytics report with insights on user behavior, traffic sources, and conversion optimization.',
      tags: ['Google Analytics', 'Data Visualization', 'Reporting'],
      link: '#'
    },
    {
      id: 4,
      title: 'Inventory Management System',
      description: 'Power BI dashboard for real-time inventory tracking and demand forecasting across distribution networks.',
      tags: ['Power BI', 'SQL', 'Business Intelligence'],
      link: '#'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
