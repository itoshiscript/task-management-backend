import "dotenv/config";
import app from "./server";

const port = parseInt(process.env.PORT || "3000");

app.listen(port, () => console.log(`Server running on port ${port}`));