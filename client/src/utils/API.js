import axios from "axios";

export default {
  // Gets all results
  getResults: function() {
    return axios.get("/api/results");
  },
  // updates the amount of a specific result type
  updateResult: function(updateData) {
    return axios.post("/api/results/update", updateData);
  },
  // Saves result to the database
  saveResult: function(resultData) {
    return axios.post("/api/results", resultData);
  }
};

