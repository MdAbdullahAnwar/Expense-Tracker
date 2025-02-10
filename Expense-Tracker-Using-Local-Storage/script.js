 <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("expenseForm").addEventListener("submit", handleFormSubmit);
        });

        function handleFormSubmit(event) {
            event.preventDefault();

            const expenseAmount = document.getElementById("expenseAmount").value;
            const desc = document.getElementById("desc").value;
            const category = document.getElementById("category").value;

            if (!expenseAmount || !desc || !category) {
                alert("Please fill all fields!");
                return;
            }

            const obj = { expenseAmount, desc, category };

            localStorage.setItem(desc, JSON.stringify(obj));

            showUserOnScreen(obj);

            // Clear input fields after submission
            document.getElementById("expenseForm").reset();
        }

        function showUserOnScreen(obj) {
            const parentElement = document.getElementById("expenseList");

            const childElement = document.createElement("li");
            childElement.className = "list-group-item d-flex justify-content-between align-items-center";
            childElement.textContent = `Rs ${obj.expenseAmount} - ${obj.desc} - ${obj.category}`;

            // Delete Button
            const deleteButton = document.createElement("button");
            deleteButton.className = "btn btn-danger btn-sm ms-2";
            deleteButton.textContent = "Delete";
            deleteButton.onclick = () => {
                localStorage.removeItem(obj.desc);
                parentElement.removeChild(childElement);
            };

            // Edit Button
            const editButton = document.createElement("button");
            editButton.className = "btn btn-warning btn-sm ms-2";
            editButton.textContent = "Edit";
            editButton.onclick = () => {
                localStorage.removeItem(obj.desc);
                parentElement.removeChild(childElement);

                document.getElementById("expenseAmount").value = obj.expenseAmount;
                document.getElementById("desc").value = obj.desc;
                document.getElementById("category").value = obj.category;
            };

            // Append buttons to list item
            const buttonContainer = document.createElement('div');
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

            //Append Elements to Document
            childElement.appendChild(buttonContainer);
            parentElement.appendChild(childElement);
        }
    </script>
