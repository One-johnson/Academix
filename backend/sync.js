const sequelize = require("./config/db");
require("./models/studentModel");
require("./models/classModel");
require("./models/teacherModel")
  
  (async () => {
  try {
    await sequelize.sync({ force: false }); // Set force: true only in development to drop existing tables
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing the database:", error);
  } finally {
    await sequelize.close();
  }
})();
