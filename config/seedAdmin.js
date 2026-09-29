import User from "../model/User.js";
import bcrypt from "bcrypt"

export const seedAdmin = async () => {
  try {
    const adminEmail = "admin@example.com";
    const adminPassword = "Admin@123";

    
    const existingAdmin = await User.findOne({
      email: adminEmail
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create admin
    const admin = await User.create({
      fullName: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "ADMIN"
    });

    console.log("Admin created successfully:");
    console.log(admin.email);
  } catch (error) {
    console.error("Error seeding admin:", error);
  } 
};