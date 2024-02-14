import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const toggleImportance = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const anecdote = response.data;
  const updated = { ...anecdote, important: !anecdote.important };
  const posted = await axios.put(`${baseUrl}/${id}`, updated);
  return posted.data;
};

export default { getAll, createNew, toggleImportance };
