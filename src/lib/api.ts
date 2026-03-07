const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  desiredCountry: string;
  visaType: string;
  message: string;
}) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};
