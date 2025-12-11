let members = [];
let editIndex = null;

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
        document.getElementById("submitBtn").innerText = "Submit";
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
                <button class=" btn btn-sm btn-outline-secondary ms-3"
                data-bs-toggle="modal" data-bs-target="#editMemberModal"
                ">Edit</button>
                <button class="btn btn-sm btn-outline-danger ms-2" onclick="deleteMember(${index})">Delete</button>
            </div>



            
        `;

        container.appendChild(card);
    });
}

function editMember(index) {
    editIndex = index;

    document.getElementById("name").value = members[index].name;
    document.getElementById("email").value = members[index].email;
    document.getElementById("contact").value = members[index].contact;

    
    document.getElementById("editMemberModal").innerText = "Update";
}

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