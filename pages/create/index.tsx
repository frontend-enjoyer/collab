import { useState, ChangeEvent, FormEvent } from "react";

interface Event {
  description: string;
  direction: string;
  email: string;
  experience_lvl: string;
  name: string;
  skills: string;
  type: string;
  id: string;
}

export default function AddEventPage() {
  const [eventData, setEventData] = useState<Event>({
    description: "",
    direction: "",
    email: "",
    experience_lvl: "",
    name: "",
    skills: "",
    type: "",
    id: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const skillsArray = eventData.skills
      .split(",")
      .map((skill) => skill.trim());
    const newEvent = { ...eventData, skills: skillsArray };

    try {
      const response = await fetch("/api/add-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert("Error adding event");
      }
    } catch (error) {
      alert("Error adding event");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-5 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Add New Event</h1>

        <label className="block mb-2">
          <span className="text-gray-700">Event Name</span>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Description</span>
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Direction</span>
          <input
            type="text"
            name="direction"
            value={eventData.direction}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={eventData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Experience Level</span>
          <input
            type="text"
            name="experience_lvl"
            value={eventData.experience_lvl}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Skills (comma separated)</span>
          <input
            type="text"
            name="skills"
            value={eventData.skills}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Type</span>
          <input
            type="text"
            name="type"
            value={eventData.type}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">ID</span>
          <input
            type="text"
            name="id"
            value={eventData.id}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Add Event
        </button>
      </form>
    </main>
  );
}
