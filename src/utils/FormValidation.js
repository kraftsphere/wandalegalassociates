export const handleContactValidtion = (fields) => {
  let errors = {};

  // Name
  if (!fields.name?.trim()) {
    errors.name = "Please enter your name";
  } else if (!/^[a-zA-Z\s]+$/.test(fields.name)) {
    errors.name = "Name can only contain letters";
  }

  // Phone
  if (!fields.phone?.trim()) {
    errors.phone = "Please enter your phone number";
  } else if (!/^\d{10}$/.test(fields.phone)) {
    if (/[a-zA-Z]/.test(fields.phone)) {
      errors.phone = "Phone number should not contain letters";
    } else {
      errors.phone = "Phone number must be exactly 10 digits";
    }
  }

  // Email
  if (!fields.email?.trim()) {
    errors.email = "Please enter your email";
  } else {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(fields.email)) {
      errors.email = "Invalid email format";
    }
  }

  // Subject
  if (!fields.subject?.trim()) {
    errors.subject = "Please enter the subject";
  }

  return errors;
};
