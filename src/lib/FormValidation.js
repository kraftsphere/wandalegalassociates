export const handleContactValidtion = (fields) => {
  let errors = {};

  // Name
  if (!fields.name?.trim()) {
    errors.name = "Please enter your name";
  } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(fields.name)) {
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

  //  Email
  if (!fields.email?.trim()) {
    errors.email = "Please enter your email";
  } else {
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(fields.email)) {
      errors.email = "Invalid email format";
    }
  }

 if (fields.message && fields.message.length > 500) {
    errors.message = "Message cannot exceed 500 characters";
  }

  return errors;
};



export const processFormData = (fields) => {
  if (fields.cv) {
    const formData = new FormData();
    const jsonPayload = {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      purpose: fields.purpose,
      message: fields.messages || fields.message || "", // handles both
    };
    formData.append("data", JSON.stringify(jsonPayload));
    formData.append("files.cv", fields.cv);
    return formData;
  }

  return JSON.stringify({
    data: {
      name: fields.name,
      phone: fields.phone,
      email: fields.email,
      purpose: fields.purpose,
      message: fields.message || "",
    },
  });
};

export const validateFile = (file) => {
  if (!file?.type) return false;

  const allowedFormats = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  return file.size <= 1048576 && allowedFormats.includes(file.type);
};
