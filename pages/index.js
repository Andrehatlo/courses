import CourseList from "components/CourseList";
import { getCourses } from "../utils/db";

const Index = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getCourses();

  return {
    props: {
      courses: data,
    },
  };
};

export default Index;