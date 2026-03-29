export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  condition: string;
}

export const validateIndustryForm = (data: FormData) => {
  const errors: Record<string, string> = {};

  // 1. Name Validation: Only characters, MUST exceed 15 chars
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!data.fullName.trim()) {
    errors.fullName = "Name is required";
  } else if (!nameRegex.test(data.fullName)) {
    errors.fullName = "Use only letters. (Example: Rohan Sharma)";
  } else if (data.fullName.length >= 15) {
    // Corrected logic: error if length is 15 or more
    errors.fullName = "Name must be less than 15 characters.";
  }

  // 2. Email Validation: Industry standard with example
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = "Enter a valid email. (Example: name@gmail.com)";
  }

  // 3. Phone Validation: Exactly 10 digits with example
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(data.phone)) {
    errors.phone = "Enter exactly 10 digits number. (Example: 9876543210)";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    firstErrorField: Object.keys(errors)[0] as keyof FormData | null,
  };
};
