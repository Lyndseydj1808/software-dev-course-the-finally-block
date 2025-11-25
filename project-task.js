/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if (!fileName) {
      throw new ReferenceError("File name is missing. Please enter a file name to access the file.");
    }
    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string. Please enter correct file data to access file.");
    }
    if (!fileData) {
      throw new Error("File data cannot be empty. Please enter file data to access file.");
    }
    // TODO: Implement simulated file processing here
    console.log(`---Accessing file---`);
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // TODO: Add simulated file operations (reading/writing)
    console.log(`File accessed sucessfully.`);
  } catch (err) {
    // TODO: Implement error handling
    console.error(`An error occured during file processing: ${err.message}`);
    // TODO: Implement a finally block to close resources
  } finally {
    console.log("File closed.");
  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully
