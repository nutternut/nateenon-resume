import {
  appProjects,
  education,
  experience,
  languages,
  lifestyle,
  profile,
  skillItems,
  webProjects,
} from "@/lib/resume";

function LanguageBar({
  name,
  level,
  percent,
}: {
  name: string;
  level: string;
  percent: number;
}) {
  return (
    <div className="lang-block">
      <p className="lang-name">{name}</p>
      <div className="lang-track" aria-hidden>
        <div className="lang-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="lang-level">{level}</p>
    </div>
  );
}

function ProjectList({
  items,
}: {
  items: { name: string; detail: string }[];
}) {
  return (
    <div>
      {items.map((project) => (
        <div className="project-item" key={project.name}>
          <strong className="project-name">{project.name}</strong>
          <p className="project-detail">{project.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function ResumeDocument() {
  return (
    <article className="resume-page" aria-label="Curriculum Vitae">
      <aside className="sidebar">
        <h1 className="sidebar-name">
          <span className="sidebar-name-line">{profile.firstNameEn}</span>
          <span className="sidebar-name-line">{profile.lastNameEn}</span>
          <span className="sidebar-name-th">
            <span className="sidebar-name-line">{profile.firstNameTh}</span>
            <span className="sidebar-name-line">{profile.lastNameTh}</span>
          </span>
        </h1>
        <p className="sidebar-title">{profile.title}</p>
        <p className="sidebar-subtitle">{profile.subtitle}</p>

        <h2 className="side-heading first">Contact</h2>
        <p className="contact-label">Address</p>
        <p className="contact-value">{profile.address}</p>
        <p className="contact-label">Telephone</p>
        <p className="contact-value">
          <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
        <p className="contact-label">Email</p>
        <p className="contact-value">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="contact-label">LinkedIn</p>
        <p className="contact-value">
          {profile.linkedin ? (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          ) : (
            <span className="contact-pending">Profile link pending</span>
          )}
        </p>
        <p className="contact-label">GitHub</p>
        <p className="contact-value">
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        </p>

        <h2 className="side-heading">Core Competencies</h2>
        <ul className="skill-list">
          {skillItems.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2 className="side-heading">Languages</h2>
        {languages.map((lang) => (
          <LanguageBar key={lang.name} {...lang} />
        ))}

        <h2 className="side-heading">Lifestyle</h2>
        <ul className="lifestyle-list">
          {lifestyle.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="main-col">
        <div className="summary-block">
          <p className="summary">{profile.summary}</p>
        </div>

        <h2 className="main-heading">Professional Experience</h2>
        {experience.map((job) => (
          <div className="job" key={`${job.company}-${job.role}`}>
            <p className="job-period">{job.period}</p>
            <div>
              <h3 className="job-title">{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul className="main-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="section-gap">
          <h2 className="main-heading">Selected Projects — Web Platforms</h2>
          <ProjectList items={webProjects} />
        </div>

        <div className="section-gap">
          <h2 className="main-heading">Selected Projects — Applications</h2>
          <ProjectList items={appProjects} />
        </div>

        <div className="section-gap">
          <h2 className="main-heading">Education</h2>
          {education.map((item) => (
            <div className="edu" key={item.title}>
              <p className="edu-period">{item.period}</p>
              <div>
                <h3 className="edu-title">{item.title}</h3>
                <p className="edu-school">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
