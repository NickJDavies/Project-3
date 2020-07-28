import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Saves a user to the database
  updateUser: async function(userData) {
    return axios.put("/api/user/5f1fe9f54acd921ec085575b", userData);
  }
};
