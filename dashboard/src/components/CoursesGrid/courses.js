import classroom from "../../assets/courses/classroom.svg";

const courses = [];

const courseTemplate = (id) => ({
  id,
  img: classroom,
  title: "Master English: Improve Your Speaking",
  lessons_quantity: 10,
  rating: 3,
});

for (let i = 0; i < 6; i++) {
  courses.push(courseTemplate(i + 1));
}

export default courses;
