'use client';
import React from "react";

interface VolunteerData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

const Volunteer = () => {
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleVolunteerSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data: VolunteerData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
    };

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Failed to submit volunteer form");
        return;
      }

      console.log("Volunteer Data Submitted:", data);

      // ✅ Show success message
      setSuccessMessage("Thank you! Your volunteer application has been submitted.");

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="w-screen min-h-screen bg-[#F6F6F6] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="flex flex-col justify-center bg-[#D6E4F0] shadow-lg p-10 rounded-xl border border-[#1E56A0]">
          <h1 className="text-4xl font-extrabold text-[#163172] mb-4">
            Become a Volunteer
          </h1>
          <p className="text-[#163172] leading-relaxed">
            Join us in making a difference. As a volunteer, you help us spread
            hope and create meaningful impact in communities that need it the most.
            Fill out the form to get started—we’d love to have you on board.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="flex flex-col bg-white shadow-lg p-10 rounded-xl border border-[#D6E4F0]">

          {/* ✅ Success message */}
          {successMessage && (
            <p className="text-green-600 font-semibold mb-4">
              {successMessage}
            </p>
          )}

          <form onSubmit={handleVolunteerSubmit} className="flex flex-col">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border border-[#D6E4F0] rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-[#D6E4F0] rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border border-[#D6E4F0] rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
              required
            />

            <textarea
              name="description"
              rows={4}
              placeholder="Why do you want to volunteer?"
              className="border border-[#D6E4F0] rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#1E56A0] text-white rounded-lg py-3 mt-2 shadow-md hover:bg-[#163172] transition font-medium"
            >
              Submit Application
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
