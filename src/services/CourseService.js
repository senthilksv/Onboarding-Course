import axios from "axios";

export default class CourseService {

  async getUserCourses(userId) {
    // TODO: replace the smaple data.json with actual api url
    return await axios.get("data.json")
    .then(response => {
        return response.data;
    })
    .catch(error => {
      throw error;
    });
  }
}
