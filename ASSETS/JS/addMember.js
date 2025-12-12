let members = [

    { name: "John Doe", email: "john@example.com", contact: "1234567890" },
    { name: "Jane Smith", email: "jane@example.com", contact: "0987654321" }
];
let editIndex = null;
let editingIndex = null;


// Load existing members from localStorage
window.onload = function () {
    const stored = localStorage.getItem("members");
    if (stored) {
        members = JSON.parse(stored);

        renderMembers();


    }
};

document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;

    if (!name || !email || !contact) {
        alert("All fields are required");
        return;
    }

    if (editIndex === null) {
        // ADD NEW MEMBER
        members.push({ name, email, contact });
    } else {
        // UPDATE MEMBER
        members[editIndex] = { name, email, contact };
        editIndex = null;
        document.getElementById("updateBtn").innerText = "Update Member";
        document.getElementById("submitBtn").innerText = "Add Member";
        document.getElementById("editMemberModal").classList.remove("show");
        document.getElementById("editMemberModal").style.display = "none";

    }

    saveAndRender();
    clearInputs();
});

function renderMembers() {
    const container = document.getElementById("membersList");
    container.innerHTML = "";

    members.forEach((member, index) => {
        const card = document.createElement("div");
        card.className = "card p-3 mb-2";

        card.innerHTML = `
            <div>
                <h5 class="mb-1">${member.name}</h5>
                <p class="mb-1">${member.email}</p>
                <p class="mb-1">${member.contact}</p>
            </div>

            <div class="ms-4 text-muted small">
                <button class=" btn btn-sm btn-outline-secondary ms-3" onclick="openEditModal(${index})"
                data-bs-toggle="modal" data-bs-target="#editMemberModal"
                ">Edit</button>
                <button class="btn btn-sm btn-outline-danger ms-2" onclick="deleteMember(${index})">Delete</button>
            </div>



            
        `;

        container.appendChild(card);
    });
}


function openEditModal(index) {
    editingIndex = index;
    const member = members[index];
    document.getElementById("editName").value = member.name;
    document.getElementById("editEmail").value = member.email;
    document.getElementById("editContact").value = member.contact;
}

// Call this function on modal "Save Changes" button click
function saveEdit() {
    if (editingIndex !== null) {
        members[editingIndex] = {
            name: document.getElementById("editName").value,
            email: document.getElementById("editEmail").value,
            contact: document.getElementById("editContact").value
        };
        editingIndex = null;
        saveAndRender();

        // Close the modal
        // const modalEl = document.getElementById('editMemberModal');
        // const modal = bootstrap.Modal.getInstance(modalEl);
        // modal.hide();
    }
}



// function editMember(index) {
//     editIndex = index;

//     document.getElementById("Name").value = members[index].name;
//     document.getElementById("Email").value = members[index].email;
//     document.getElementById("Contact").value = members[index].contact;

//     document.getElementById("submitBtn").innerText = "Update Member";

// }
    

function deleteMember(index) {
    if (confirm("Are you sure you want to delete this member?")) {
        members.splice(index, 1);
        saveAndRender();
    }
}

function saveAndRender() {
    localStorage.setItem("members", JSON.stringify(members));
    renderMembers();
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
}