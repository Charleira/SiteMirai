import React from 'react';

function CoursePage({ match }) {
  const { courseId } = match.params;

  return (
    <section className="course-page">
      <h1>{courseId}</h1>
      <p>Detalhes do curso {courseId}</p>
    </section>
  );
}

export default CoursePage;
