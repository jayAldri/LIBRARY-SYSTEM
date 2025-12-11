<link href="../../ASSETS/BOOTSTRAP-v5.3/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="../../ASSETS/CSS/main.css">

<link rel="stylesheet" href="../../ASSETS/CSS/member.css">

<?php include "../../header.php"?>

<section class="members-section">
  <div class="member-container">
    <div class="member-add-box row">
      <div class="Library-member col-md-6">
        <h2>Library Members</h2>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMemberModal">+ Add Member</button>
      </div>
    </div>

    <div class="row member-list">
      <div class="row">
        <div class="container mt-3">
          <div id="membersList" class="mt-3"></div>
        </div>

      </div>
    </div>
  </div>
</section>



<!-- ADD MEMBER MODAL -->
<div class="modal fade" id="addMemberModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add New Member</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <form id="addMemberForm">

          <div class="flex-column">
            <div class="row">
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input id="name" type="text" class="form-control" placeholder="Enter full name" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input id="email" type="email" class="form-control" placeholder="Enter email address" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input id="contact" type="tel" class="form-control" placeholder="Enter phone number" required>
                </div>
            </div>
            
          </div>
          <button id="submitBtn" type="submit" class="btn btn-primary">Add Member</button>
        </form>
      </div>
    </div>
  </div>
</div>




<!--EDIT MEMBER MODAL -->
<div class="modal fade" id="editMemberModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Edit Member Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <form id="editMemberForm">

          <div class="flex-column">
            <div class="row">
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input id="editName" type="text" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address</label>
                  <input id="editEmail" type="email" class="form-control" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input id="editContact" type="tel" class="form-control" required>
                </div>
            </div>
            
          </div>
          <button id="updateBtn" type="submit" class="btn btn-primary">Update Member</button>
        </form>
      </div>
    </div>
  </div>
</div>




<script src="../../ASSETS/BOOTSTRAP-v5.3/js/bootstrap.bundle.min.js"></script>
<script src="../../ASSETS/JS/addMember.js"></script>
























